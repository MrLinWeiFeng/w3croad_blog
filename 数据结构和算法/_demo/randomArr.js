let arr = []

// 生成随机数 n 项， 从x到y
// 5-10   0 - 1
const range = (n, x, y) => {
	for (let i = 0; i < n; i++) {
		let random = parseInt(Math.random() * (y - x) + x)
		arr.push(random)
	}
}

range(20000, 1, 1000000000)
module.exports = arr