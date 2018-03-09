# 正则表达式

## 创建正则表达式

js中创建正则对象的方法有两种，第一种是字面量方式，第二种是通过RegExp构造函数的方法。

```
// 通过字面量创建
const reg = /\.\w/gi

// 构造函数方式创建
const reg = new RegExp("\\.\\w", "gi")   // 返回值reg是 /\.\w/gi
```

两种创建方式的区别是：通过字面量方式创建正则时，所有元字符都需要转义(即前面加`\`，比如 `.` 要写出 `\.`)。 而new RegExp模式下，所有元字符都需要双重转义(比如`.`要写成`\\.`)。

元字符包含：

```
( [ { \ ^ $ | ) ? * + .] }
```

## 标识符

上面代码`/\.\w/gi`中的gi就是标识符，标识符有三个：

- g  正则匹配默认匹配完第一个就返回了，加上g会匹配全局
- i  默认是区分大小写的，加上i表示不区分大小写
- m  默认是将字符串当做一整行来匹配，即默认只有一个开始^和结束$,但是加上m会多行匹配(以\n换行，一行行匹配)。每行会有一个^和$。

```
// 没有加m
var reg = /^b/
var str = 'aa\nbcd'
reg.test(str) // false

// 加了m
var reg = /^b/m
var str = 'aa\nbcd'
reg.test(str) // true
```

如果要获取标识符，则使用flags属性。

```
/foo/ig.flags;   // "gi"
```

## 字符含义解释

- () 的作用是提取匹配的字符串，也叫子表达式
- [] 定义匹配的范围，比如[a-zA-Z0-9]
- ^ 和 $ 表示开始和结尾，注意如果^出现在[]中，表示取反
- \d 非负数字，等价于[0-9]
- \s 空白字符
- \w 英文字符或数字，等价于[a-zA-Z0-9_]
- . 除了换行以外的任意字符，等价于[^\n]
- \b 单词边界，不代表任何字符。所以/\w\b\w/不能匹配任何字符。
- \B 非单词边界
- |  选择符，表示或者
- \r  回车符
- \W [^A-Za-z0-9_]

**量词**

用来表示数量的字符。

- * 表示匹配0次或多次，比如\d*，表示0个或多个数字
- + 表示匹配1次或多次
- ? 表示0次或1次，相当于{0, 1}
- {} 表示匹配的长度，比如\n{3}表示匹配3个数字，\d{1, 3}表匹配1-3个数字，\d{3,}表示匹配3个以上数字

**存储**

- RegExp.$1 - RegExp.$9 存放着最近一次匹配9个子表达式结果，如果没有则是空字符串`""`。
- \n   如果n是正整数表示反向引用，比如\1,表示和对应子表达式一样。
```
/(\d)(\d)/.test('15helo')

RegExp.$1  //1
RegExp.$2  //5

//在replace中使用
"2016-03-26".replace(/(\d+)-(\d+)-(\d+)/,"$1年$2月$3日") 

var rgx = /\d{4}(\-|\/|.)\d{1,2}\1\d{1,2}"/
```

## js中使用正则

js中使用正则，主要是字符串的match()、search()、replace()、split()方法，和正则的test()、exec()方法。

**字符串方法**

- str.match(reg)  
- str.replace([RegExp|String],[String|Function])
如果第二个参数是函数，函数的参数有四个：
```
1. result: 本次匹配的结果
2. $1,...$9: 正则表达式有多少个子表达式，就会传递几个参数
3. offset: 本次匹配的开始位置
4. source: 接受匹配的原始字符串

var str1 = '2018-11-12'
var reg2 = /(\d)(\d)/g
var new_str2 = str1.replace(reg2, (...args)=> {
	console.log(args) 
})

// 结果
[ '20', '2', '0', 0, '2018-11-12' ]
[ '18', '1', '8', 2, '2018-11-12' ]
[ '11', '1', '1', 5, '2018-11-12' ]
[ '12', '1', '2', 8, '2018-11-12' ]
```
replace第二个参数还有一些符号有特殊含义，比如: $1 - $99，$& 表示整个匹配字符串，$`是匹配字符串左侧文本，$'是右侧文本。$$是直接量符号。

**正则方法**

- reg.test(str)  匹配则返回true，否则返回false
- reg.exec(str)

## 贪婪匹配和非贪婪匹配

默认情况下正则会匹配更多的字符，这叫做贪婪匹配。

```
var a = 'hellox'
var reg = /(l+)/
var c = a.match(reg)
console.log(RegExp.$1)   // ll
```

上面的例子匹配了更多的l:`ll`，而没有只匹配一个l，这就是贪婪匹配。

如果要匹配l，则是非贪婪匹配，需要在`+`这种量词后面加上`?`即可。

```
var a = 'hellox'
var reg = /(l+?)/
var c = a.match(reg)
console.log(RegExp.$1)   // l
```

## 匹配不捕获

`?:`表示匹配但不捕获。

```
// 例1
var m = 'abc'.match(/(?:.)b(.)/);
m // ["abc", "c"]

// 例2，匹配foo，或foofoo
var a = /(?:foo){1, 2}/
```

## 正向预查和反向预查

- x(?=y)  先行断言，x只有在y前面才匹配，y不会被计入返回结果。
- x(?!y)  先行否定断言，x只有不在y前面才匹配，y不会被计入返回结果。
- x(?<=y) 后行断言
- x(?<!y) 后行否定断言

```
// 先行断言，转化货币格式
'9999999'.replace(/\d{1,3}(?=\d{3}+)/, '$&,')

// 先行否定断言
var a = 'hello nihao xhell'
var reg = /\b\w+(?!\b)/g
console.log(a.match(reg))  //[ 'hell', 'niha', 'xhel' ]

// 后行断言
/(?<=\$)\d+/.exec('Benjamin Franklin is on the $100 bill')  
// 结果["100", index: 29, input: "Benjamin Franklin is on the $100 bill"]
```


## 常用正则表达式

1. 提取浏览器参数

```
var str = "name=zhangsan&age=12"
var reg = /([^&=]+)=([^&=]*)/gi; // [^&=]+表示匹配非=&的连续字符串

var paramObj = {}
str.replace(reg, (...args)=> {
	obj[args[1]] = args[2]
})

console.log(paramObj);  // { name: 'zhangsan', age: '12' }
```

2. 扩展typeof

```
function getTypeOf(obj){
    return Object.prototype.toString.call(obj)
           .replace(/\[object\s(\w+)\]/,'$1'); //[object Xxx]
}

getDataType(1); //number
getDataType('a'); //string
getDataType(null); //null
getDataType([]); //array

```

3. 在字符串指定位置插入新字符串

```
String.prototype.insetAt = function(str,offset){
 
    offset = offset + 1;
    //使用RegExp()构造函数创建正则表达式
    var regx = new RegExp("(^.{"+offset+"})");
 
    return this.replace(regx,"$1"+str);
};
 
"abcd".insetAt('xyz',2); //在c字符后插入xyz
>> "abcxyzd"
```

4. 将手机号12988886666转化成129****6666

```
function telFormat(tel){
 
    tel = String(tel);
 
    //方式一
    return tel.replace(/(\d{3})(\d{4})(\d{4})/,function (rs,$1,$2,$3){
       return $1+"****"+$3
    });
 
    //方式二
    return tel.replace(/(\d{3})(\d{4})(\d{4})/,"$1****$3");
}
```

5. 实现HTML编码，将< / > " & ` 等字符进行转义，避免XSS攻击

```
function htmlEncode(str) {
    //匹配< / > " & `
    return str.replace(/[<>"&\/`]/g, function(rs) {
        switch (rs) {
            case "<":
                return "&lt";
                break;
            case ">":
                return "&gt";
                break;
            ...
        }
    });
}
```

## 实战

- [正则表达式之简易markdown文件解析器](http://ife.baidu.com/course/detail/id/30)
- [正则表达式之入门](http://ife.baidu.com/course/detail/id/29)

       
## 参考文章

- [mdn RegExp标准库](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [JavaScript 中的正则表达式](http://www.cnblogs.com/onepixel/p/5218904.html)
- [RegExp对象](http://javascript.ruanyifeng.com/stdlib/regexp.html)
- [正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#%E4%BD%BF%E7%94%A8%E6%8B%AC%E5%8F%B7%E7%9A%84%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%8C%B9%E9%85%8D)
- [精通 JS正则表达式](http://www.cnblogs.com/aaronjs/archive/2012/06/30/2570970.html)
- [regexper工具](https://regexper.com/)

