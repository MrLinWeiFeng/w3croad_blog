// 数据更新后，更新对应的dom

function Directive(name, el, vm, expression) {
	this.name = name
	this.el = el
	this.vm = vm
	this.expression = expression
	this.attr = 'nodeValue'
	this.update()
}

Directive.prototype.update = function () {
	this.el[this.attr] = this.vm.$data[this.expression]
	console.log(`更新了DOM-${this.expression}`);
}

new Directive('','#app',)