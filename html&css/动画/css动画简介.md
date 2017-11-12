# css动画简介

css中动画分为2种，补间动画和帧动画。补间动画是设定一个初始和结束状态，浏览器自动完成中间的过渡。帧动画相比补间动画而言，可以设置多个中间状态。

下面是补间动画和帧动画的区别：

1. 补间动画只设置初始和结束状态，帧动画可以设置多个中间状态。
1. 补间动画只执行一次，帧动画可以重复执行
1. 补间动画由 `transition` 实现，帧动画由 `animation` 实现。
1. `transition` 需要交互才能执行，而 `animation` 可以独立执行。
1. `transition` 无法控制暂停和播放，`animation` 可以控制。

在css中，并不是所有的属性都可以动画。不支持动画的属性如下：

- background-image
- float: none -> left
- display: none -> block
- visibility: hidden -> visible
- width,height auto -> 100px
- position  static -> absolute

其实这些不支持动画的属性很好理解，稍微想一下就知道它们为啥不支持了。
