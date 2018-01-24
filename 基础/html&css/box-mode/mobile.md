# 移动端开发总结

## meta知识

## 学习

移动端常用的三个事件是：`touchstart`、`touchmove`和`touchend`。

- 事件的绑定，使用`addEventListener`，因为使用`on`会存在前后覆盖的问题，并且在`Chrome`里有时会失效。
- 事件对象`event`，是事件绑定函数的第一个参数。
- 阻止`document`的`touchstart`默认行为使用`event.preventDefault()`可以阻止文本的选中以及系统菜单的出现。问题是也会阻止页面的滚动。如果有些文字需要被选中，可以阻止当前元素的冒泡行为`event.stopPropagation()`。
- 点透事件，是由于`300ms`延迟，后导致`a`链接的`click`事件触发，`href`进行跳转。
```
// 方法1： 阻止a链接的click事件默认行为
document.querySelectorAll('click', function(ev){
    ev.preventDefault()
}, {passive: false})

// 方法2： 阻止document的touchstart默认行为，缺点很多
document.querySelector('touchstart', function(ev){
    ev.preventDefault()
})

// 方法3： 不通过href做跳转，通过data-href
document.querySelectorAll('touchstart', function(ev){
    location.href = this.getAttribute('data-href') 
}, false)
```
- 我们可以通过传递 passive 为 true 来明确告诉浏览器，事件处理程序不会调用 preventDefault 来阻止默认滑动行为()。
  

```
```

**参考资料**
-[ 移动Web滚动性能优化: Passive event listeners](https://segmentfault.com/a/1190000007913386)

## 常见问题

## 常用移动端框架













































