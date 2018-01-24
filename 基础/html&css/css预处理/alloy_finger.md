# alloy_finger.js源码分析

## 简介

alloy_finger.js 是腾讯 alloyteam 团队做的一个小手势库。

## 整体结构

alloy_finger.js 的整体结构如下：

```javascript
(function() {
    // HandlerAdmin 用于管理单个事件函数数组[] 的增加、删除、触发
    // 比如 
    var HandlerAdmin = function(el) {};
    HandlerAdmin.prototype.add = function(handler) {}
    HandlerAdmin.prototype.del = function(handler) {}
    HandlerAdmin.prototype.dispatch = function() {}
    
    // 返回事件数组 [fn1,fn2,fn3...]
    function wrapFunc(el, handler) {
        var handlerAdmin = new HandlerAdmin(el);
        handlerAdmin.add(handler); 

        return handlerAdmin;
    }
    
    var AlloyFinger = function(el, options) {
        this.element = typeof el == 'string' ? document.querySelector(el) : el;

        this.start = this.start.bind(this);
        this.move = this.move.bind(this);
        this.end = this.end.bind(this);
        this.cancel = this.cancel.bind(this);
        
        this.element.addEventListener("touchstart", this.start, false);
        this.element.addEventListener("touchmove", this.move, false);
        this.element.addEventListener("touchend", this.end, false);
        this.element.addEventListener("touchcancel", this.cancel, false);
        
        
        var noop = function () { };
        this.tap = wrapFunc(this.element, option.tap || noop);
    }
    AlloyFinger.prototype = {
        start: function(){},
        move: function(){},
        end: function(){},
        cancel: function(){},
        _cancelLongTap: function(){},
        _cancelSingleTap: function(){},
        _swipeDirection: function(){},
        on: function(){},
        off: function(){},
        destroy: function(){}
    }
})();
```

它的思路大致如下，拿 tap 举例分为2步：
1. tap 继承自 HandlerAdmin ，HandlerAdmin 可以添加tap时的回调函数，删除函数，以及触发tap事件。
1. 在 start/move/end/cancel 系统事件中处理 tap。

## HandlerAdmin

接下来我们来看 HandlerAdmin 的实现。

```
function HandlerAdmin(el){
    this.handlers = [];
    this.el = el
}
HandlerAdmin.prototype.add = function(handler){
    this.handlers.push(handler)
}
HandlerAdmin.prototype.del = function(handler){
    // 将 handler 从 handlers 中删除
    if(!this.handlers){ this.handlers = [] }
    
    for(var i=0;i<this.handlers.length;i++){
        if(this.handlers[i] == handler){
            this.handlers.splice(i, 1) 
        } 
    }
}


function wrapFunc(el, handler) {
    var handlerAdmin = new HandlerAdmin(el);
    handlerAdmin.add(handler);

    return handlerAdmin;
}

// 将 options.tap 推入到 this.tap.handlers 中
this.tap = wrapFunc(this.element, option.tap || noop);   
```
每一个事件都是 HandlerAdmin 的实例，自己管理自己的回调函数数组。跟着这个思路自己来实现以下。

