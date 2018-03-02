# webpack

## 命令行工具

- Terminal
- iTerm2
- Zsh

安装node和webpack，如果安装npm install webpack -g时报权限错误，[修复方法](https://docs.npmjs.com/getting-started/fixing-npm-permissions)

## webpack简介

webpack的四个核心概念：
- entry：代码的入口、打包的入口，单个或多个，可以是一个文件或数组或对象。
- output
- loader：webpack只能处理js文件，loader可以将其它文件转成js认识的文件，将它们转成js的模块。
    - 编译相关：babel-loader、ts-loader
    - 样式相关：style-loader/css-loader/postcss-loader、less-loader
    - 文件相关:file-loader、url-loader
- plugin：参与打包整个过程。可以压缩、混淆、分割、tree sharking等
    - 优化相关：CommonsChunkPlugin（提取chunk间相同代码）、UglifyjsWebpackPlugin（混淆压缩，生成sourcemap）
    - 功能相关：ExtractTextWebpackPlugin（提取css成单独文件，之前是style标签）、HtmlWebpackPlugin(生成html)、
    HotModuleReplacementPlugin(模块热更新)、
    CopyWebpackPlugin：帮助拷贝文件，打包时有可能引入第三方资源，它是已经打包好的，只需要移动到相应目录。
    
    


几个概念
- chunk：代码块，动态、懒加载、提取公共代码，都会形成新的chunk。
- bundle：打包过的一捆
- module：模块，比如通过loaders处理后也是一个模块


webpack使用的三种方式：
- 命令 webpack -h,webpack -v, webpack <entry> [<entry>] <output>
- 配置文件
- 第三方脚手架vue-cli，angular-cli，react-starter等

webpack支持的模块方式：
- amd：这个是异步加载，所以会单独chunk
- es module
- commonjs

大版本变化
- webpack v1.0.0  2014.2.20
    - 编译、打包
    - HMR(模块热更新)
    - 代码分割
    - 文件处理(loader、plugin)
- webpack v2.2.0  2017.1.18
    - Tree Shaking：去掉引入但是没有用到的代码，让体积更小
    - ES module，1.0用这种方式必须使用babel
    - 动态引入新增了一个方法Import()，1.0需要使用使用require.ensure
    - 新的文档
- webpack v3.0.0  2017.6.19
    - Scope Hoisting(作用域提升)：打包代码性能提升，老版本是将所有的模块都包裹在一个闭包中，新版本是提到了单一的闭包中
    - Magic Comments(配合动态import使用)：可以指定打包后的chunk文件名。
1.0.0和2.0.0是并行开发的。

版本迁移
v1 -> v2：迁移指南webpack.js.org/guides/migrating 
v2 -> v3：只需要npm update，不会改之前的api，因为影响大，也不好维护。

参与社区投票
webpack.js.org/vote/

webpack-cli的作用
- 交互式生成配置文件
- 方便升级


## 编译es6/7

使用babel来编译，需要安装`babel-preset-env`、`babel-loader`。babel-loader将会自动安装并调用babel-core的方法处理js文件。

```
// webpack.config.js

module:{
    rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader'
        }
    ]
}

// 新建.babelrc文件
{
    "presets": ["env"]
}
```

`babel-polyfill`直接在入口开头引用。在babelrc里启用`babel-plugin-transform-runtime`

```
{
    "presets": ["env"],
    "plugins": ["transform-runtime"]
}
```

指定兼容浏览器版本。它是根据[browserslist](https://github.com/ai/browserslist)来的。
```
{
    "presets": [
        ["env",
        {
            "targets":
            {
            	"browser": ["> 1%"]
            },
            "include": ["transform-es2015-arrow-functions", "es6.map"],
            "exclude": ["transform-regenerator", "es6.set"]
        }]
    ]
}
```

## 提取公用代码

提取各个页面之间公用的代码，一个页面加载后，另一个页面就可以利用缓存了。

1. 减少代码冗余
2. 提高下载速度

使用`webpack.optimize.CommonsChunkPlugin`插件。

提取公共代码对于单个entry是没有作用的，需要多个entry，或者是懒加载等。实际是提取多个页面的公用代码。

```
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        pageA: './src/pageA.js',
        pageB: './src/pageB.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: 2
        })
    ]
}
```

- options.name or options.names：公共代码的名字
- options.filename
- options.minChunks 
    - 数字：提取的公用代码出现的次数
    - infinite：不会提取
    - 函数：
- options.chunks：哪几个模块中提取公用代码
- options.deepChildren
- options.async：创建异步的公共代码块

下面的代码可以将公共库，webpack公共文件和业务代码分开打包：

```
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        pageA: './src/pageA.js',
        pageB: './src/pageB.js',
        vendor: ['jquery']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        // 如果要将webpack公共文件和公共库打包在一起，将这句删掉
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',  // 要将公共库和webpack分开，取一个非entry名字
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            chunks: ['pageA','pageB'],
            minChunks: 2
        })
    ]
}
```

## 代码分割和懒加载

减少加载代码的体积，让用户更快的看到内容。

**方法1：webpack内置方法**

`require.ensure`
    - []:依赖，并不会执行
    - callback：在这里执行
    - errorCallback
    - chunkName
注意如果依赖Promise，如果浏览器不支持，需要垫片。

```
output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './dist/',  // 指定发布的目录
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'  // 指定chunk的文件名
}
    
    
document.querySelector('.btn').onclick = function() {
    require.ensure(['jquery'], function() {
        var $ = require('jquery')
        console.log($.type('hello'))
    }, 'vendor')
}
```

`require.include`

require.include(dependency: String)
引入一个不需要执行的依赖，这可以用于优化输出 chunk 中的依赖模块的位置。
```
require.include('a');
require.ensure(['a', 'b'], function(require) { /* ... */ });
require.ensure(['a', 'c'], function(require) { /* ... */ });
```

如果不使用 require.include('a')，输出的两个匿名 chunk 都有模块 a。



**方法2：es 2015 loader spec**

es2015动态import。
import()返回Promise。

**方法3：webpack3的import()**

```
document.querySelector('.btn').onclick = function() {
    import(/* webpackChunkName:'jquery' */'jquery').then(function($){
    	console.log('jquery', $)
    })
}
```

如果有文件chunkname一样，webpack会把它们打包到一起。

代码分割
- 分离业务代码和第三方依赖
- 分离业务代码和业务公共代码和第三方依赖
- 分离首次加载和访问后加载的代码

分割出异步模块

```
plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        async: 'async-common',
        minChunks: 2,
        children: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor'],
        minChunks: Infinity
    })
]
```

## 处理css

- style-loader：可以创建style标签
    - style-loader/url
    - style-loader/useable
- css-loader：可以在js中直接import css

```
module: {
	rules: [
		{
			test: /\.css$/,
			use: [
				{
					loader: 'style-loader'
				},
				{
					loader: 'css-loader'
				}
			]
		}
	]
}
```

上面的loader处理是倒序的，先用css-loader，再style-loader。效果是在页面中插入style标签。

如果要插入link标签。

```
module: {
	rules: [
		{
			test: /\.css$/,
			use: [
				{
					loader: 'style-loader/url'
				},
				{
					loader: 'file-loader'
				}
			]
		}
	]
}
```

这种方法并不常用，因为它会将每个import的css都link一遍，增加了http请求。

通过useable控制css是否启用

```
module: {
	rules: [
		{
			test: /\.css$/,
			use: [
				{
					loader: 'style-loader/useable'
				},
				{
					loader: 'css-loader'
				}
			]
		}
	]
}

// 然后在js中
import base from './css/base.css'
base.use()
base.unuse()
```

options: 
- insertAt：插入位置
- insertInto：插入到dom
- singleton：是否只用一个style标签
- transform：返回一个函数，在style-loader插入style时执行，在浏览器中执行，所以可以判断浏览器，然后进行一些操作

```
module: {
	rules: [
		{
			test: /\.css$/,
			use: [
				{
					loader: 'style-loader',
					options: {
						insertInto: 'body',
						singleton: true,
						transform: './css.tranform.js'  
					}
				},
				{
					loader: 'css-loader'
				}
			]
		}
	]
}

// css.transform.js
module.exports = function(css){
    if(window.innerWidth >= 768){ return null}
	return css  // 需要返回css
}
```


**css-loader**

options
- alias: 解析的别名
- importLoader：看css后面是否有其他要处理的loader
- minimize：是否压缩
- modules: 是否启用css-modules，css模块化是指：
    - :local：给定局部的样式
    - :global
    - compose 继承一段样式
    - compose ... from path 从某个文件引入样式
    
```
```

## 配置less和sass

```
npm install less less-loader

module: {
	rules: [
		{
			test: /\.less$/,
			use: [
				{
					loader: 'style-loader'
				},
				{
					loader: 'css-loader',
					options: {
						minimize: true,
					}
				},
				{
					loader: 'less-loader'
				}
			]
		}
	]
}
```

如果项目中less、css文件都有，则要多个配置。

## 提取css

- extract-loader
- ExtractTextWebpackPlugin 主流

```
module: {
    rules: [{
        test: /\.less$/,
        use: ExtractTextWebpackPlugin.extract({
            // 不提取的怎么插入
            fallback: {
                loader: 'style-loader'
            },
            // 提取的怎么处理
            use: [{
                    loader: 'css-loader',
                    options: {
                        minimize: true,
                    }
                },
                {
                    loader: 'less-loader'
                }
            ]
        })
    }]
},
plugins: [
    new ExtractTextWebpackPlugin({
        filename: '[name].min.css'
    })
]
```

## postcss in webpack

- PostCSS：是一个用js转换css的工具
- Autoprefixer：给css加前缀
- css-nano：css-loader是用它来进行css压缩的
- css-next：可以使用未来新的css，比如calc，css变量，自定义选择器
- postcss-loader


```
{
	loader: 'postcss-loader',
	options: {
		ident: 'postcss',
		plugins: [
			// require('autoprefixer')(),
			require('postcss-cssnext')()
		]
	}
}
```

公用一份`browserslist`，建议写在`package.json`，还可以写在`.browserslistrc`

还有一些
- postcss-import
- postcss-url
- postcss-assets

## Tree shaking

- js tree shaking
- css tree shaking

使用场景
- 常规优化
- 只是用了第三方库某个功能

https://segmentfault.com/a/1190000010934375

处理步骤是：
- tree shaking先标识无用代码,自动会注释unused harmony exports
- webpack.optimize.UglifyJsPlugin ：用来移除无用代码

```
plugins: [
    new webpack.optimize.UglifyJsPlugin() // 只能移除module.exports这样的无用代码
]
```

有些库书写的方式不能tree shaking，必须按照es6 module书写才行。 lodash，用lodash-es也不行，需要借助bable的`babel-plugin-lodash`。

css tree shaking需要使用[purify css](https://github.com/webpack-contrib/purifycss-webpack)。

options
- paths:glob.sync([]) 将给的url或html进行tree shaking。glob.sync可以处理多路径

```
npm install glob-all
```




1.gulp的基本用法以及实现原理
2.常用插件(压缩、合并、编译、预览服务、自动注入)
   3.node.js中自定义流的高级用法
   4.实现自定义插件(auto-prefixer)
   5.webpack基本用法以及运行原理
   6.常见的loader以及plugin(DllPlugin等)
   7.Webpack工作原理分析
   8.编写自定义Loader、编写自定义Plugin
   9.webpack优化(resolve、模块热替换、压缩、代码分割、可视化工具)
   
   
   
   
   ## 项目需求
   
   - vue + webpack + weui 多页面
   - 将重复文件合并，零散文件分开
   - 放服务器任何文件夹，通过对应地址访问
   - 热更新
   - 差异化发布到服务器
   
   前端变的复杂的原因就是node导致了大量工具的出现，但是这些工具都是为了解放生产力，让性能变的更好而出现的。现在不会工程化，就不是一个合格的前端。
   
   webpack是现在最流行的前端构建工具，我把官方文档大概看了一下，知道了一些概念，但是东西太多还是很懵逼的。特别整理一下，并且详细拿 vue-cli的配置来说一下。
   
   之前使用vue-cli做过一个项目，基于那个项目来思考开发环境应该有哪些要求。
   
   ## 要求
   
   先思考想要的开发环境：
   
   1. 可以使用sass，es6
   2. 开发时保存自动刷新浏览器
   3. 可以在js中直接引入sass文件 
   4. 可以使用 vue
   5. 可以使用字体图标
   
   打包编译之后的要求：
   
   1. 公共文件打包在一起，比如公用的js
   2. 每个页面可能有单独的js另外加载
   3. 文件都是压缩了的
   4. 由于线上可能有缓存，所以每次编译文件要带上特定的hash
   5. 通过命令一键发布，只发布和线上不同的文件，并且先发布资源文件，最后发布html文件
   
   
   ## vue-cli的webpack配置文件
   
   
   
   ## 参考
   
   - [使用Vue-cli搭建多页面应用时对项目结构和配置的调整](http://www.jianshu.com/p/0a30aca71b16)
   - https://github.com/YaoZeyuan/vue-multi-page



# 指南

## 问题

1. 没有显示体现出`index.js`文件依赖于`lodash.js`
2. 很有可能没有引入或在后面引入`loadash.js`，导致应用无法正常运行
3. 如果依赖被引入，但是没有使用，浏览器也会下载这些无用代码

- output的path必须是绝对地址

css-loader使你能够使用类似@import和url（...）的方法实现require的功能，style-loader将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌入webpack打包后的js文件中。
因此，我们这样配置后，遇到后缀为.css的文件，webpack先用css-loader加载器去解析这个文件，遇到“@import”等语句就将相应样式文件引入（所以如果没有css-loader，就没法解析这类语句），最后计算完的css，将会使用style-loader生成一个内容为最终解析完的css代码的style标签，放到head标签里。
需要注意的是，loader是有顺序的，webpack肯定是先将所有css模块依赖解析完得到计算结果再创建style标签。因此应该把style-loader放在css-loader的前面（webpack loader的执行顺序是从右到左）。