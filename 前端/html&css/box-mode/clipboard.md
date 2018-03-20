# js复制到剪切板

最近使用 `iconfont.cn` 里面的图标在做项目，里面有一个赋值代码的功能。我右键审查元素，哟，居然不是swf按钮。因为之前也做过复制功能，用的`zeroClipboard`插件，是生成一个`flash`的按钮。

那么它是怎么做出来的呢，我找啊找，发现他是用的一个clipboard.js的库。

- cdn地址：<a href='http://www.bootcdn.cn/clipboard.js/' target='_blank'>http://www.bootcdn.cn/clipboard.js/</a>
- 官网：<a href='https://clipboardjs.com/' target='_blank'>https://clipboardjs.com/</a> 

这个库通过`gzip`后只有`3kb`，非常小。支持`ie9+`，`chrome`等浏览器。

## 用法

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>target-div</title>
</head>
<body>
    <!-- 1. 定义一些标签 -->
    <div>hello</div>
    <button class="btn"
        data-clipboard-action="copy" 
        data-clipboard-target="div">复制</button>

    <!-- 2. 引入库 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.7.1/clipboard.min.js"></script>

    <!-- 3. 初始化 -->
    <script>
    var clipboard = new Clipboard('.btn');

    clipboard.on('success', function(e) {
        console.log(e);
    });

    clipboard.on('error', function(e) {
        console.log(e);
    });
    </script>
</body>
</html>
```

还有一些其他用法可以参考上面的官网。

```
// 获取下一个元素的innerText内容
new ClipboardJS('.btn', {
    target: function(trigger) {
        return trigger.nextElementSibling;
    }
});

// 获取元素的属性
new ClipboardJS('.btn', {
    text: function(trigger) {
        return trigger.getAttribute('aria-label');
    }
});
```
