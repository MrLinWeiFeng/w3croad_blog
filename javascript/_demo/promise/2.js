var say = function (resolve, reject, x) {
	setTimeout(function () {
		if (x == 1) {
			resolve()
		} else {
			reject()
		}
	})
}

new Promise((resolve, reject)=> {
	say(resolve, reject, 1)
}).then(()=> {
	console.log('hi', arguments)
}, ()=> {
	console.log('no')
}).then(()=> {
	console.log('hi1')
}, ()=> {
	console.log('no1')
})