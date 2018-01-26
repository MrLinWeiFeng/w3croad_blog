# 正则表达式

## 创建正则表达式

js中创建正则对象的方法有两种，字面量和new RegExp的方法。

```
// 全局匹配包含 .字母  不区分大小写 的字符串
const reg = /\.\w/gi
const reg1 = new RegExp("\\.\\w", "gi")   // 这个的返回值是 /\.\w/gi
```

字面量模式下，所有元字符都需要转义(即前面加`\`，比如 `.` 要写出 `\.`)。 而new RegExp模式下，所有元字符都需要双重转义(比如`.`要写成`\\.`)。

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

## 字符含义解释

- () 的作用是提取匹配的字符串，也叫子表达式
- [] 定义匹配的范围，比如[a-zA-Z0-9]
- {} 表示匹配的长度，比如\n{3}表示匹配3个数字，\d{1, 3}表匹配1-3个数字，\d{3,}表示匹配3个以上数字
- ^ 和 $ 表示开始和结尾，注意如果^出现在[]中，表示取反
- \d 非负数字，等价于[0-9]
- \s 空白字符
- \w 英文字符或数字，等价于[a-zA-Z0-9]
- . 除了换行以外的任意字符，等价于[^\n]
- * 表示匹配0次或多次，比如\d*，表示0个或多个数字
- + 表示匹配1次或多次
- ? 表示0次或1次，相当于{0, 1}
- $1-$9 存放着最近一次匹配9个子表达式结果，如果没有则是空字符串`""`。replace第二个参数可以省略RegExp，其它地方使用需加上。
- \1-   表示反向引用，表示和对应子表达式一样，和$1-$9区别是，它只能在正则表达式里面使用。
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

**正则方法**

- reg.test(str)  匹配则返回true，否则返回false
- reg.exec(str)

## 贪婪匹配和非贪婪匹配

## 正向预查和反向预查

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


https://regexper.com/

 正则表达式
    正则表达式，又称规则表达式，查找匹配某些符合规则的字符串，正则表达式就是写这种规则的工具。课程包括创建正则表达式、表达式规则（普通字符，元字符）、修饰符（影响整个正则规则的特殊符号）、正则的方法（执行一个检索，用来查看正则表达式与指定的字符串是否匹配）、字符串的方法：search()，match()，replace()、元字符：\d，\s，\w、边界符：\b，^，$、数词量：{n}，{n,m}、分组、字符集合：中文[\u4e00-\u9fa5]，ASCII码等。
   
   
   第一章 正则表达式的常用方法
       正则表达式的介绍
       规则、模式、强大的字符串匹配工具
       定义正则：new RegExp(“a”)、字面量
       正则.test()
       str.search()
       字符串.match()
       字符串.replace()
       【实例】找出字符串中的所有数字
       【实例】：敏感词过滤
       第二章 深入正则表达式的细节
       子项()
       任意字符
       范围类 []
       限定类 {}
       【实例】日期格式化
       
       
       
       
       
       
       
       
## 参考文章

- [JavaScript 中的正则表达式](http://www.cnblogs.com/onepixel/p/5218904.html)
- [RegExp对象](http://javascript.ruanyifeng.com/stdlib/regexp.html)
- [正则表达式之简易markdown文件解析器](http://ife.baidu.com/course/detail/id/30)
- [正则表达式之入门](http://ife.baidu.com/course/detail/id/29)
- [正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#%E4%BD%BF%E7%94%A8%E6%8B%AC%E5%8F%B7%E7%9A%84%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%8C%B9%E9%85%8D)
- [精通 JS正则表达式](http://www.cnblogs.com/aaronjs/archive/2012/06/30/2570970.html)