// promise(fn)   如何将 fn 转为 promise


function say() {
	console.log('say...', arguments[0])
}


function hi() {
	console.log('hi')
}

var Promise = function (fn) {
	this.value = null   // 下传的值
	this.callbacks = []	 // then里面需要执行的函数
	
	var resolve = (value)=> {
		this.callbacks.forEach(function (callback) {
			callback(value)
		})
	}
	
	fn(resolve)
}

Promise.prototype.then = function (resolve, reject) {
	this.callbacks.push(resolve)
}

new Promise((resolve, reject)=> {
	setTimeout(()=> {
		console.log('say')
		resolve()
	}, 2000)
}).then(()=> {
	hi()
})
