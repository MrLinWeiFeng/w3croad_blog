# w3croad_blog

自己之前学习前端的方式太差，都是看视频、看文章、做做例子，缺乏总结和复习，几年下来，虽然知识点知道了很多，但是总是感觉不太扎实。为了让自己稍微扎实些，现在详细的把自己所知道的前端知识体系过一遍，主要是通过查阅大量文章，对每个知识点进行测试和总结。目的是用最简的文字就将一个专题总结清楚，方便复习和查看。

## html5

- [什么是html5语义化?](html/语义化.md)
- [canvas](html&css/布局/canvas.md)

## css3

- [css选择器](html&css/css选择器.md)
- [css属性和值](html&css/css属性和值.md)
- [css盒模型](html&css/box-mode/css-box.md)
- [css布局详解](html&css/布局/basic.md)
- [视觉格式化模型]()
- [元素水平垂直居中](html&css/布局/position-center)

## javascript

- [数据类型](javascript/数据类型.md)
- [Array 数组](javascript/Array.md)
- [Date 时间](javascript/Date.md)
- [Math 数学](javascript/Math.md)
- [Object](javascript/Object.md)
- [Promise和异步编程](javascript/Promise和异步编程.md)
- [错误监控](issue/错误监控.md)

1.ES6/ES7语法和原理实现
   2.异步发展过程：callback、promise、generator、co、async/await等异步流程控制(async和await的实现原理)
   3.promise设计模式原理及在es6中的应用，手写一个符合promise A+规范的promise实现
   4.Node基础与实战
   5.Node事件原理和发布定阅设计模式
   6.函数式编程
   
   1. JavaScript模块化发展的演进历史 CommonJS、AMD、CMD、ES6模块的演进历史
   2. 目前最主流的模块化实现方案: CommonJS 到 ES Module
   3. 手写 CommonJS 的简单实现

### bom

- [window](javascript/bom/window.md)
- [navigator](javascript/bom/navigator.md)
- [history](javascript/bom/history.md)
- [location](javascript/bom/location.md)





### dom
- [DOM](javascript/dom/dom.md)
- [事件](javascript/dom/event.md)

## 前端工具流

  
   1.gulp的基本用法以及实现原理
   2.常用插件(压缩、合并、编译、预览服务、自动注入)
   3.node.js中自定义流的高级用法
   4.实现自定义插件(auto-prefixer)
   5.webpack基本用法以及运行原理
   6.常见的loader以及plugin(DllPlugin等)
   7.Webpack工作原理分析
   8.编写自定义Loader、编写自定义Plugin
   9.webpack优化(resolve、模块热替换、压缩、代码分割、可视化工具)
   
 
 
## react-native

- [自己搭建codepush热更新服务](react-native/codepush.md)
- [ios发布流程](react-native/iso_deploy.md)
- [react-native-scroll-tab-view](react-native/react_native_scroll_tab_view.md)
- [react-navigation](react_navigation.md)

## 网络相关

- 七层网络协议分析、使用`wireshark`学习七层网络协议、DNS服务器详解、tcp详解 TCP连接和Nagle算法
- http深入

## 设计模式

1. 工厂模式
1. 建造者模式
1. 原型模式
1. 单例模式
1. 外观模式
1. 适配器模式
1. 代理模式
1. 装饰者模式
1. 组合模式
1. 观察者模式
1. 状态模式
1. 策略模式
1. 命令模式
1. 访问者模式
1. 中介者模式
1. 迭代器模式

## 数据结构和算法

1.时间复杂度
2.空间复杂度
3.常见排序算法
1.冒泡排序、优化
2.选择排序
3.插入排序
4.归并排序
5.快速排序式
6.计数排序
7.桶排序
8.基数排序
4.链表(链表反转、链表是否有环)
5.树(高度、前序、中序、后序、广度优先算法、反转)
6.二叉树搜索算法
7.青蛙跳台阶问题-动态规划算法
8.React虚拟DOM Diff算法实现

## 工程化

less sass stylus postcss

调试工具 
chrome devtools https://developer.chrome.com/devtools

Charles

eslint
csslint
html validators

单元测试
mocha/jest

自动化测试
webdriver
karma runner

JSDoc

commonJs/AMD/CMD

require.js

安全
csrf/xss
CSP
Same-origin policy
ADsafe/Caja/Sandbox

可视化
SVG/Canvas/VML
SVG: D3/Snap.svg/DataV
Canvas: CreateJS/KineticJS
WebGL/Three.JS


## Node

NODE原理与解析
REPL交互环境
模块与NPM
Buffer缓存区
fs文件操作
Stream流
TCP&UDP
异步编程
HTTP&HTTPS
进程与集群
网络安全
Express
路由
中间件
模板引擎
错误处理
项目生成器
珠峰博客实战


Mongodb
mongodb基本概念
数据库操作
集合操作
文档增删改查
mongodb在node.js中的使用
ORM框架mongoose
珠峰聊天系统


mysql(视频)
mysql介绍
数据库操作
表操作
记录操作
mysql在node.js中的使用
珠峰爬虫系统


websocket&socket.io
安装部署
服务监听
注册事件
启动服务
客户端引用
连接服务
发送消息
事件


5.Node静态服务器实现与缓存机制的实现
6.HTTP常用报文的实际应用
7.Node Stream的应用与文件分片上传策略
8.RestfulAPI设计和使用
9.CDN和OSS的使用
10.HTTPS安全通信过程分析
2.Express
1.手写express框架
2.中间件的实现原理、bodyParser、cookie-parser、static、模板原理
3.Koa
1.手写Koa框架
2.中间件的实现原理、bodyParser、cookie-parser、static、模板原理
4.Linux
1.Linux介绍
2.Linux文件和目录
3.Linux用户和组权限
4.Linux命令
5.Shell脚本
5.Mongodb
1.Mongodb安装和使用
2.Mongodb的系统架构
3.Mongodb高级查询
4.Mongodb索引
5.Mongodb安全与权限
6.mongoose模块之Schema
7.mongoose模块之Model
8.使用Model对文档进行增删改查
6.珠峰博客(express+mongodb+mongodb)
基于bootstrap+express+mongodb实现一个包括用户管理、文章管理、多看留言、分页查询、 搜索、文件上传、pv留言统计等功能完整的博客系统。使用了express的路由、ejs模板和serve-favicon、 morgan、cookie-parser、body-parser、express-session、connect-mongo、connect-flash、uuid、 async等内置各种中间件以及其它发路径保护等自定义中间件，并扩展了富文本编辑器、markdown和heroku云布署等功能。
1.项目初始化
2.用户管理
3.文章管理
4.分页查询
5.搜索
6.文件上传
7.PV留言统计
7.珠峰聊天室项目实战(react+socket.io+mongodb)
1.什么是实时通信
2.什么是Websocket
3.websocket和http的对比
4.使用socket.io实现聊天室
5.匿名聊天
6.有用户名的聊天和用户列表
7.用户私聊
8.划分不同的聊天房间
9.消息持久化
10.支持QQ表情
8.MySQL
1.MYSQL安装与使用
2.MYSQL系统架构
3.数据处理之增删改查
4.数据类型和约束分页
5.索引和慢查询性能分析
6.数据库安全之防止SQL注入
9.珠峰爬虫(cheerio+request+mysql)
1.发出HTTP请求获取指定URL中的内容
2.使用cheerio的语法操作网页元素，提取需要的元素
3.将数据保存到mysql数据库中
4.建立web服务器显示这些数据
5.使用计划任务自动执行更新任务
6.布署项目到阿里云中并配置反向代理
10.Redis
1.Redis安装和使用
2.5种数据结构及使用场景
3.API的理解和使用
4.Redis客户端
11.Nginx
1.nginx的安装和使用
2.模块和基本配置
3.正向反向代理等应用场景
12.Docker
1.Docker介绍和安装
2.Dockerfile
3.存储和镜像仓库
4.Dock实战
13.单元测试
1.测试用例和需求分析
2.单元测试框架mocha/ava
3.自动化测试之selenium
14.集群和负载均衡
1.cluster的工作原理和负载均衡算法
2.pm2工具
15.前端性能监控与性能优化、行为监控与安全防范
1.针对重绘重排的优化策略
2.如何发现性能短板与各个短板的优化
3.前端埋点上报
4.前端错误上报
5.前端性能上报
6.前端行为监控上报
7.前端恢复上线与A/B测试
8.网络缓存技术分析
9.浏览器渲染过程分析(DOM树、RenderObject、绘图上下文)
16.项目部署
1.npm script工作流
2.shell脚本布署
17.安全
1.XSS的原理与代码实战
2.CSRF的原理与代码实战
18.功能测试与性能测试
1.测试用例和需求分析
2.常用功能测试框架基础使用(mocha/ava)
3.常用性能测试框架基础使用(Benchmark)
19.全链路优化
1.DNS优化
2.请求速度优化
3.渲染优化之 JS css image html
4.缓存优化
5.服务器优化
6.数据库优化

## Vue全家桶

快速上手vue及数据交互
了解渐进式框架vue
了解vue中的基础指令v­model,v­for,v­on,v­bind….
使用第三方模块vue­resource、axios实现数据交互
使用nodejs+vue实现珠峰留言板
jsonp跨域实现完整百度搜索框案例
vue进阶
了解vue的生命周期(beforeCreate,created,beforeMount,mounted…)
vue中自定义指令，通过自定义指令实现拖拽，扩展功能
vue中自定义过滤器
vue中创建日期过滤器、数据过滤等
vue中创建组件
父子组件的数据传递

vue全家桶
使用vue­router搭建单页应用
应用webpack手动搭建vue项目并使用vue­loader
vue­cli快速生成项目，并集成vue­router,vue­resource
使用vuex实现数据状态的统一管理
应用mintUI elementUI

## React全家桶
  1.react
   1.为什么采用组件化的方式
   2.react环境搭建
   3.JSX语法的使用(createElement,render的原理实现)
   4.JSX表达式的用法
   5.JSX的属性(className,htmlFor,style,dangerouslyInnerHTML)
   6.组件使用(类声明,函数声明)
   7.组件的属性和状态(属性的检验以及setState详解)
   8.复合组件
   9.组件的声明周期
   10.受控组件 非受控组件
   11.children属性的使用
   12.项目实战留言板
   2.redux
   1.手写redux库(getState,createStore,dispatch,subscribe,applyMiddlewar e,combineReducer,compose,bindActionCreators)
   3.react­redux
   1.高阶组件的原理和使用
   2.react高级属性context上下文
   3.react-redux实现todoList
   4.手写react-redux(Provider和connect原理解析)
   4.中间件
   1.手写applyMiddle和compose(中间件原理)
   2.手写redux-logger,redux-thunk,redux-promise
   3.手写自定义本地缓存中间件
   5.react­router­dom
   1.HashRouter,BrowserRouter的区别
   2.Link,NavLink的使用(extact绝对匹配,state带参数跳转)
   3.Route组件三种渲染方式(component,render,children)
   4.路由参数以及子路由的使用(params)
   5.withRouter,PrivateRouter的用法
   6.Prompt组件阻止跳转
   7.重定向(Redirect组件)
   8.手写HashRouter Route等常用组件
   6.React­Transition­group
   1.react动画的实现原理
   2.使用React-Transition-group库开发todo动画应用
   7.项目实战React珠峰课堂1.0
   1.webpack环境搭建
   2.底部页签导航
   3.动画
   4.redux改变课程分类
   5.实现头部轮播图
   6.课程列表列表
   7.下拉刷新
   8.上拉加载
   9.记录滚动条位置
   10.课程详情页面
   11.用户注册
   12.用户登录
   13.受保护的我的课程页面
   14.Redux开发插件
   8.源码级Vue+React深度解析与实现
   1.手写Vue双向绑定实现
   2.Vue虚拟DOM和React虚拟DOM的区别
   3.如何实现一个 Virtual DOM 算法
   4.通过源码彻底搞明白setState的更新机制
   5.手写包含虚拟DOM、事件监听、基本组件生命周期等功能的React库


## 读后感

## 博客

- [网络埋伏纪事](http://www.xiaojichao.com/archives/)
- [riskers](https://github.com/riskers/blog/issues)
- [fouber张云龙](https://github.com/fouber/blog)