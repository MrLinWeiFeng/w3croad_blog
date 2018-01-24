# Node API

1. url 模块的方法有哪些

- parse()
- format()
- resolve()

2. querystring 模块的方法有哪些

- parse()
- stringify()
- escape()
- unescape()

3. 使用http.get()写一个简单的爬虫程序。

```
var http = require('http')
var cheerio = require('cheerio')


function filterTitle(html) {
	var $ = cheerio.load(html)
	var title = $('title').text()
	return title
}

http.get('http://www.w3croad.com/#docs/reactnative/codepush', function (res) {
	var html = ''
	res.on('data', function (chunk) {
		html += chunk
	})
	res.on('end', function () {
		console.log(html)
		var title = filterTitle(html)
		
		console.log(title)
	})
}).on('error', function () {
	
})


console.log(filterTitle)
```

4. 使用http.request()写一个灌水评论程序。

```
var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
	content: '灌水',
})

var options = {
	hostname: 'www.xxx.com',
	port: 80,
	path: '/docomment/',
	method: 'POST',
	headers: {
		Accept: 'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding': 'gzip, deflate',
		'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.6,en;q=0.4',
		'Cache-Control': 'no-cache',
		Connection: 'keep-alive',
		'Content-Length': postData.length,
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		Cookie: '',
		Host: 'www.xxx.com',
		Origin: 'http://www.xxx.com',
		Pragma: 'no-cache',
		Referer: '',
		'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
		'X-Requested-With': 'XMLHttpRequest'
	}
	
}
var req = http.request(options, function (res) {
	res.on('data', function (chunk) {
		console.log(Buffer.isBuffer(chunk))
		console.log(typeof chunk)
	})
}).on('error', function () {
	console.log('error')
})

req.write(postData)
req.end()
```


5. 事件EventEmitter