# ajax

## 基础

**阅读资料回答问题**
- http://javascript.ruanyifeng.com/bom/ajax.html
- http://javascript.ruanyifeng.com/bom/same-origin.html
- http://javascript.ruanyifeng.com/bom/cors.html
- http://javascript.ruanyifeng.com/htmlapi/websocket.html

1. 简述ajax？
2. ajax对象的属性
    - 说说readyState的几种状态，分别是什么意思?
    - response是什么，类型可以是哪些，怎么设置类型？
    - responseType的作用？
    - responseText属性是什么？
    - responseXML属性是什么？
    - 常用的status有哪些，分别是什么意思?
    - statusText和status的区别？
    - timeout的作用?
3. ajax对象的方法
    - open()：说说它的参数?
    - overrideMimeType()
4. ajax的事件有哪些？(8个)
5. withCredentials是什么，怎么用?
6. 怎么获取服务器所有响应头信息和某字段头信息？所有头信息的格式？如果头信息字段重名会怎么样？
7. 请求方式有哪些，get和post的区别?
8. send()的参数类型有哪些?
9. setRequestHeader() 什么时候用?如果多次设置同一字段这个字段的值是什么?怎么解决post乱码问题?
10. 怎么通过overrideMimeType()接受二进制数据？接受二进制数据更好的方式是什么？
11. form表单提交的四种格式，以及数据在浏览器面板里的样子?
12. 什么是同源策略
13. 跨域的不同窗口通信解决方案有哪些，分别的原理，实战？优缺点？
14. 什么是同源？非同源什么会限制？每种限制分别的解决方法？（考虑完全不同源的情况）
15. window.postMessage怎么用？通过它读写其它窗口的localStorage。
16. ajax跨域的解决方案和原理？各种方案的优点和缺点？

## 进阶

- 写一个简单的`ajax`库。
- 学习`zepto`的`ajax`源代码。
- `$.Deferred`的实现，再看看Promise。
- 通过两种方式`FormData`和`file api`分别实战文件上传？

## 参考资料

- [zepto源码](https://github.com/madrobby/zepto)
    

参考资料：
- [CORS通信](http://javascript.ruanyifeng.com/bom/cors.html)
- [HTTP访问控制（CORS）](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS#)
服务器和浏览器模型
使用nodeJS搭建服务器
使用nodeJS建传统的网站
request的7种方式
HTTP协议详解
XMLHttpRequest对象详细介绍
promise版的Ajax库(jQuery源码级)
数据处理及JSONP数据绑定
JSONP和其它跨域技术
用jQuery实现Ajax