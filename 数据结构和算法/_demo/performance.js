const randomArr = require('./randomArr')
const selectionSort = require('./selectionSort')
const insertionSort = require('./insertionSort')
const insertionSort1 = require('./insertionSort1')

const performanceSort = (fn, arr) => {
	console.time('sort')
	fn(arr)
	console.timeEnd('sort')
}


performanceSort(insertionSort1, randomArr)
performanceSort(insertionSort, randomArr)
performanceSort(selectionSort, randomArr)
