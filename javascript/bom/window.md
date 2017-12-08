# window

window有2个角色：

1. 它是全局global对象，很对对象都是它的属性，比如location这些对象
2. 它表浏览器窗口，可以通过它获取窗口的一些信息

## window对象的常用属性

### window.window 和 window.name

window有2中类型，一种是window，另一种是iframe的window

- window：window对象的window属性就是它自己。
- iframe
    - iframe.contentWindow 获取 iframe 的 window对象。
    - iframe.contentDocument 获取 iframe 的 document 对象。
    - iframe.ownerDocument 获取 iframe 所在的 document对象

```
window.window == window  // true

var iframe = document.getElementById('iframe');
iframe.window    // 

window.innerWidth 获取浏览器视口宽度
window.open()
```

window.name属性用于设置当前浏览器窗口的名字。

### window.location

```
window.location === document.location  // true
```

### window.closed, window.opener

`window.closed` 属性表示窗口是否关闭。一般用来检查使用脚本打开的新窗口是否关闭。

```
var popup = window.open() 
if((popup !== null) && !popup.closed){
    // 窗口仍然打开着
}
```

`window.opener` 属性返回打开当前窗口的父窗口，如果当前窗口没有父窗口，则返回 `null`。

```
window.open().opener === window  // true
```

通过上面的方法，可以获取父窗口的变量和方法。

### window.frames，window.length

`window.frames` 返回一个由 `frame` 元素和 `iframe` 元素组成的类数组。

如果iframe元素设置了id或name属性，则可以通过frames[id]或frame.id的方式来

`frames` 实际是 `window` 对象的别名。

```
frames === window  // true
```

因此，frames[0] 也可以用 window[0] 表示。但是 frames 语义上更清晰。

window.length 属性与 window.frames.length 相等。

### window.screenX, window.screenY

`window.screenX`和`window.screenY`属性，返回浏览器窗口左上角相对于当前屏幕左上角(`(0,0)`)的水平和垂直距离。

### window.innerWidth, window.innerHeight

`window.innerWidth`和`window.innerHeight`属性，返回网页在当前窗口中可见部分的高度和宽度，即`视口(viewport)`，单位是像素。

当用户放大网页的时候，这两个属性会变小。因为这时网页像素大小不变，只是每个像素占据的屏幕空间变大了，因为可见部分（视口）就变小了。

注意，这两个属性值包括滚动条的高度和宽度。

### window.outerWidth, window.outerHeight

`window.outerWidth` 和 `window.outerHeight` 属性返回浏览器窗口的宽度和高度，包括浏览器菜单和边框，单位是像素。

### window.pageXOffset, window.pageYOffset

`window.pageXOffset`属性返回页面的水平滚动距离，`window.pageYOffset`属性返回页面的垂直滚动距离，但是都是像素。

举例来说，如果用户向下拉动了垂直滚动条75像素，那么window.pageYOffset就是75。用户水平向右拉动水平滚动条200像素，window.pageXOffset就是200。


### window.screen 

window.screen对象包含了显示设备的信息。

screen.height和screen.width两个属性，一般用来了解设备的分辨率。

```
// 显示设备的高度，单位为像素
screen.height // 1920

// 显示设备的宽度，单位为像素
screen.width // 1080
```

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


## window 对象的方法

### window.moveTo(), window.moveBy()

window.moveTo() 方法用于移动浏览器窗口到指定位置，它接受2个参数，分别是窗口左上角距离屏幕左上角的水平距离和垂直距离。

window.moveBy() 方法将窗口移动到一个相对位置。

### window.scrollTo(), window.scrollBy()

window.scrollTo(x, y) 用于将网页滚动到距离浏览器左上角 x, y的距离。它有个别名叫window.scroll。

```
window.scrollTo === window.scroll  // false

window.scrollTo(0, 1000) // 页面滚动到1000px位置
```

window.scrollBy() 方法用于将网页移动指定距离，它接受2个参数：向右滚动的距离，向下滚动的距离。

### window.open(), window.close()

`window.open()`方法用于新建另一个浏览器窗口，并且返回该窗口对象。

```
var popup = window.open('1.html')
```

`open`方法一共可以接受四个参数：

1. 新窗口网址，如果省略，默认是 `about:blank`
2. 新窗口的名字，如果该名字的窗口已经存在，则调到该窗口，不再新建。如果省略，默认是 `_blank`，表示新建一个没有名字的窗口。
3. 新窗口的参数，内容是逗号分隔的键值对，比如有没有提示框，工具条等。如果省略，默认打开一个完整UI的新窗口。
4. 表示是否用参数1替换新窗口当前的网址，默认是false。只有第二个参数指向已经存在的窗口时，才有意义。

```
var popup = window.open(
  'somepage.html',
  'DefinitionsWindows',
  'height=200,width=200,location=no,status=yes,resizable=yes,scrollbars=yes'
);
```

`window.close`方法用于关闭当前窗口，一般用来关闭`window.open`新建的窗口。该方法只对顶层窗口有效，`iframe`框架之中的窗口使用该方法无效。

### window.print()

`print()`方法会跳出打印对话框，和用户点击打印效果相同。手机没有打印功能，这时可以这样判断。

```
if(typeof window.print === 'function'){
    // 支持打印功能
}
```

### window.getComputedStyle()

该方法接收一个html元素作为参数，返回该html元素最终样式信息的对象。

### window.matchMedia()

`window.matchMedia()`用来检查css的mediaQuery语句。

### window.focus()

用于激活指定当前窗口，使其获得焦点。

```
var popup = window.open('popup.html', 'Popup Window');

if ((popup !== null) && !popup.closed) {
  popup.focus();
}


```

当前窗口获得焦点时，会触发focus事件，失去焦点会触发blur事件。不过窗口的focus的激活，需要先点一下该窗口的文档页面后切换窗口才行。

```
var a = window.open('1.html');
document.getElementById('btn').onclick = function () {
    if (a !== null && !a.closed) {
        a.focus()
    }
}
```

上面的代码，当点击按钮时，窗口会切换到1.html。

### window.getSelection()

window.getSelection() 方法返回一个Selection 对象，表示用户现在选中的文本。

使用该对象的 toString() 方法可以得到选中的文本。



























