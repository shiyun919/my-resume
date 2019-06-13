window.View = function(selector){
	return document.querySelector(selector)
}



/*
//等价于下面这种写法
window.View = function(selector){
	return {
		element:document.querySelector(selector)
	}
}
*/