

- 单线程、事件队列
- 回调函数
- 回调地狱 和 多个回调异步的问题。
    - 都完成了才执行
    - 某个完成了就执行
    
```              
let promise = new Promise(function(resolve, reject){
    console.log('Promise')
    resolve()
})

promise.then(function(){
    console.log('resolve')
})

console.log('hi')

// 结果
Promise
hi
resolve
```

注：因为作业队列会添加在主程序之后执行。


如果一个对象有then方法，且有2个参数resolve和reject。那么这个对象叫做 "非Promise的thenable对象"。当 resolve() 或 reject() 方法调用它时，会创建一个Promise对象，并执行这个对象的 `then` 方法。
```
var thenable = {
    then: function(resolve, reject){
        resolve(11) 
    }
}

// 功效类似 new Promise(thenable.then)， Promise.reject() 效果一样
var p1 = Promise.resolve(thenable)

p1.then(function(val){
    console.log(val);   // 11
})
```

用途：如果不确定对象是否是 `Promise` 对象，则可以使用上面的方法传递给 `Promise.resolve()` ，它会将 `Promise` 直接返回，将非 `Promise` 对象 `thenable` 修改为 `Promise` 对象并返回。


如果在执行器内部抛出错误，则 `Promise` 的拒绝处理函数会被执行。
```
var p1 = new Promise(function(resolve, reject){
    throw new Error(30)
})

// 等价于
var p1 = new Promise(function(resolve, reject){
    try{
        throw new Error(30)
    }catch(ex){
        reject(ex)
    }
})

p1.catch(function(error){
    console.log(error)  // 30
})
```

上面的代码，执行器抛出错误时，只有有拒绝处理函数时才会被报告，否则会被隐瞒。这也是`Promise` 最有争议的地方。


Promise 链中的返回值

如果是基本值，会连续传递。

then、catch 等返回的 Promise对象又是 pending 状态。
