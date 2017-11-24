## part4 js基础

1. [资料] Number 类型与 String 类型之间的转换

错误：parseInt("070") 应该是 70，而不是 56。
总结：parseInt和parseFloat转换字符串的时候都默认不考虑进制，碰到非数字直接截取。比如 '0x1' -> 0。
加了第二个参数后才会考虑进制 parseInt('070', 8) -> 56


function get0(){
	var flag = false;
	for(var i=0;i<10000;i++){
		var a = Math.random()
		if( a == 0){
			flag = true
			console.log('真有0')
			return flag
		}
	}
}
