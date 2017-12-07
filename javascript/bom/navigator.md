# navigator

window 对象的 navigator 属性，指向一个包含浏览器信息的对象。

## navigator.userAgent

navigator.userAgent属性返回浏览器的User-Agent字符串，标志浏览器的厂商和版本信息。

通过userAgent属性识别浏览器，不是一个好办法。因为必须考虑所有的情况（不同的浏览器，不同的版本），非常麻烦，而且无法保证未来的适用性，更何况各种上网设备层出不穷，难以穷尽。所以，现在一般不再识别浏览器了，而是使用“功能识别”方法，即逐一测试当前浏览器是否支持要用到的JavaScript功能。

不过，通过userAgent可以大致准确地识别手机浏览器，方法就是测试是否包含mobi字符串。

```
var ua = navigator.userAgent.toLowerCase();

if (/mobi/i.test(ua)) {
  // 手机浏览器
} else {
  // 非手机浏览器
}
```

如果想要识别所有移动设备的浏览器，可以测试更多的特征字符串。

```
/mobi|android|touch|mini/i.test(ua)
```

## navigator.plugins

navigator.plugins属性返回一个类似数组的对象，成员是浏览器安装的插件，比如Flash、ActiveX等。

## navigator.platform

`navigator.platform` 属性返回用户的操作系统信息。

## navigator.onLine

`navigator.onLine` 属性返回一个布尔值，表示用户当前在线还是离线

## navigator.geolocation

`navigator.geolocation` 返回一个 Geolocation 对象，包含用户地理位置信息。

## navigator.javaEnabled(), navigation.cookieEnabled

`javaEnabled` 方法返回一个布尔值，表示浏览器是否能运行`Java Applet`小程序。

`cookieEnabled` 属性返回一个布尔值，表示浏览器是否能储存 `Cookie`。

注意，这个返回值与是否储存某个网站的Cookie无关。用户可以设置某个网站不得储存Cookie，这时cookieEnabled返回的还是true。

## window.screen 

window.screen 对象包含了显示设备的信息。

screen.height 和 screen.width 用来返回设备的分辨率。

JavaScript 标准参考教程（alpha）
浏览器环境
window对象
GitHub 
TOP 
window对象

来自《JavaScript 标准参考教程（alpha）》，by 阮一峰

目录
概述
window对象的属性
window.window，window.name
window.location
window.closed，window.opener
window.frames，window.length
window.screenX，window.screenY
window.innerHeight，window.innerWidth
window.outerHeight，window.outerWidth
window.pageXOffset，window.pageYOffset
navigator对象
navigator.userAgent
navigator.plugins
navigator.platform
navigator.onLine
navigator.geolocation
navigator.javaEnabled()，navigator.cookieEnabled
window.screen对象
window对象的方法
window.moveTo()，window.moveBy()
window.scrollTo()，window.scrollBy()
window.open(), window.close()
window.print()
window.getComputedStyle()
window.matchMedia()
window.focus()
window.getSelection()
多窗口操作
窗口的引用
iframe标签
frames属性
事件
load事件和onload属性
error事件和onerror属性
URL的编码/解码方法
encodeURI
encodeURIComponent
decodeURI
decodeURIComponent
alert()，prompt()，confirm()
参考链接
概述
在浏览器中，window对象（注意，w为小写）指当前的浏览器窗口。它也是所有对象的顶层对象。

“顶层对象”指的是最高一层的对象，所有其他对象都是它的下属。JavaScript规定，浏览器环境的所有全局变量，都是window对象的属性。

var a = 1;
window.a // 1
上面代码中，变量a是一个全局变量，但是实质上它是window对象的属性。声明一个全局变量，就是为window对象的同名属性赋值。

从语言设计的角度看，所有变量都是window对象的属性，其实不是很合理。因为window对象有自己的实体含义，不适合当作最高一层的顶层对象。这个设计失误与JavaScript语言匆忙的设计过程有关，最早的设想是语言内置的对象越少越好，这样可以提高浏览器的性能。因此，语言设计者Brendan Eich就把window对象当作顶层对象，所有未声明就赋值的变量都自动变成window对象的属性。这种设计使得编译阶段无法检测出未声明变量，但到了今天已经没有办法纠正了。

window对象的属性
window.window，window.name
window对象的window属性指向自身。

window.window === this // true
window.name属性用于设置当前浏览器窗口的名字。

window.name = 'Hello World!';
console.log(window.name)
// "Hello World!"
各个浏览器对这个值的储存容量有所不同，但是一般来说，可以高达几MB。

该属性只能保存字符串，且当浏览器窗口关闭后，所保存的值就会消失。因此局限性比较大，但是与<iframe>窗口通信时，非常有用。

window.location
window.location返回一个location对象，用于获取窗口当前的URL信息。它等同于document.location对象，详细介绍见《document对象》一节。

window.location === document.location // true
window.closed，window.opener
window.closed属性返回一个布尔值，表示窗口是否关闭。

window.closed // false
上面代码检查当前窗口是否关闭。这种检查意义不大，因为只要能运行代码，当前窗口肯定没有关闭。这个属性一般用来检查，使用脚本打开的新窗口是否关闭。

var popup = window.open();

if ((popup !== null) && !popup.closed) {
  // 窗口仍然打开着
}
window.opener属性返回打开当前窗口的父窗口。如果当前窗口没有父窗口，则返回null。

window.open().opener === window // true
上面表达式会打开一个新窗口，然后返回true。

通过opener属性，可以获得父窗口的的全局变量和方法，比如window.opener.propertyName和window.opener.functionName()。但这只限于两个窗口属于同源的情况（参见《同源政策》一节），且其中一个窗口由另一个打开。

window.frames，window.length
window.frames属性返回一个类似数组的对象，成员为页面内所有框架窗口，包括frame元素和iframe元素。window.frames[0]表示页面中第一个框架窗口。

如果iframe元素设置了id或name属性，那么就可以用属性值，引用这个iframe窗口。比如<iframe name="myIFrame">就可以用frames['myIFrame']或者frames.myIFrame来引用。

frames属性实际上是window对象的别名。

frames === window // true
因此，frames[0]也可以用window[0]表示。但是，从语义上看，frames更清晰，而且考虑到window还是全局对象，因此推荐表示多窗口时，总是使用frames[0]的写法。更多介绍请看下文的《多窗口操作》部分。

window.length属性返回当前网页包含的框架总数。如果当前网页不包含frame和iframe元素，那么window.length就返回0。

window.frames.length === window.length // true
window.frames.length与window.length应该是相等的。

window.screenX，window.screenY
window.screenX和window.screenY属性，返回浏览器窗口左上角相对于当前屏幕左上角（(0, 0)）的水平距离和垂直距离，单位为像素。

window.innerHeight，window.innerWidth
window.innerHeight和window.innerWidth属性，返回网页在当前窗口中可见部分的高度和宽度，即“视口”（viewport），单位为像素。

当用户放大网页的时候（比如将网页从100%的大小放大为200%），这两个属性会变小。因为这时网页的像素大小不变（比如宽度还是960像素），只是每个像素占据的屏幕空间变大了，因为可见部分（视口）就变小了。

注意，这两个属性值包括滚动条的高度和宽度。

window.outerHeight，window.outerWidth
window.outerHeight和window.outerWidth属性返回浏览器窗口的高度和宽度，包括浏览器菜单和边框，单位为像素。

window.pageXOffset，window.pageYOffset
window.pageXOffset属性返回页面的水平滚动距离，window.pageYOffset属性返回页面的垂直滚动距离，单位都为像素。

举例来说，如果用户向下拉动了垂直滚动条75像素，那么window.pageYOffset就是75。用户水平向右拉动水平滚动条200像素，window.pageXOffset就是200。

navigator对象
window对象的navigator属性，指向一个包含浏览器信息的对象。

navigator.userAgent
navigator.userAgent属性返回浏览器的User-Agent字符串，标示浏览器的厂商和版本信息。

下面是Chrome浏览器的userAgent。

navigator.userAgent
// "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36"
通过userAgent属性识别浏览器，不是一个好办法。因为必须考虑所有的情况（不同的浏览器，不同的版本），非常麻烦，而且无法保证未来的适用性，更何况各种上网设备层出不穷，难以穷尽。所以，现在一般不再识别浏览器了，而是使用“功能识别”方法，即逐一测试当前浏览器是否支持要用到的JavaScript功能。

不过，通过userAgent可以大致准确地识别手机浏览器，方法就是测试是否包含mobi字符串。

var ua = navigator.userAgent.toLowerCase();

if (/mobi/i.test(ua)) {
  // 手机浏览器
} else {
  // 非手机浏览器
}
如果想要识别所有移动设备的浏览器，可以测试更多的特征字符串。

/mobi|android|touch|mini/i.test(ua)
navigator.plugins
navigator.plugins属性返回一个类似数组的对象，成员是浏览器安装的插件，比如Flash、ActiveX等。

navigator.platform
navigator.platform属性返回用户的操作系统信息。

navigator.platform
// "Linux x86_64"
navigator.onLine
navigator.onLine属性返回一个布尔值，表示用户当前在线还是离线。

navigator.onLine // true
navigator.geolocation
navigator.geolocation返回一个Geolocation对象，包含用户地理位置的信息。

navigator.javaEnabled()，navigator.cookieEnabled
javaEnabled方法返回一个布尔值，表示浏览器是否能运行Java Applet小程序。

navigator.javaEnabled() // false
cookieEnabled属性返回一个布尔值，表示浏览器是否能储存Cookie。

navigator.cookieEnabled // true
注意，这个返回值与是否储存某个网站的Cookie无关。用户可以设置某个网站不得储存Cookie，这时cookieEnabled返回的还是true。

window.screen对象
window.screen对象包含了显示设备的信息。

screen.height和screen.width两个属性，一般用来了解设备的分辨率。

// 显示设备的高度，单位为像素
screen.height // 1920

// 显示设备的宽度，单位为像素
screen.width // 1080
上面代码显示，某设备的分辨率是1920x1080。

除非调整显示器的分辨率，否则这两个值可以看作常量，不会发生变化。显示器的分辨率与浏览器设置无关，缩放网页并不会改变分辨率。

下面是根据屏幕分辨率，将用户导向不同网页的代码。

```
if ((screen.width <= 800) && (screen.height <= 600)) {
  window.location.replace('small.html');
} else {
  window.location.replace('wide.html');
}
```

`screen.availWidth` 和 `screen.availHeight` 属性返回屏幕可用的宽度和高度，单位是像素。它们的值是屏幕的实际大小减去操作系统某些功能占据的空间，比如系统的任务栏。

`screen.colorDepth` 属性返回屏幕的颜色深度，一般是 16（16-bit）或24 (24-bit)。也就是颜色种类。






















