# http

## 一个简单的服务

```
var http = require('http')
var server = http.createServer((request, response)=>{
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write('hello')
    response.end()
}))
server.listen('9898')
```

response.write() 的第一个参数是字符串或二进制buffer