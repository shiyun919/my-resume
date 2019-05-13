!function (){
	//添加offset类
	let specialTags = document.querySelectorAll('[data-x]')
		for (let i = 1; i < specialTags.length; i++) {
			specialTags[i].classList.add('offset')
		}
	
	//监听鼠标滚动效果
	findClosest()
	window.addEventListener('scroll', function(xxx) {
		findClosest()
	}) 
	
	function findClosest(){
		let specialTags = document.querySelectorAll('[data-x]')
		let minIndex = 0
		for (let i = 1; i < specialTags.length; i++) {
			if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
				minIndex = i
			}
		}
		
		specialTags[minIndex].classList.remove('offset')
		let id = specialTags[minIndex].id
		let a = document.querySelector('a[href="#' + id + '"]')
		let li = a.parentNode //找a标签的父亲
		let brotherAndme = li.parentNode.children
		for (let i = 0; i < brotherAndme.length; i++) {
			brotherAndme[i].classList.remove('highlight')
		}
		li.classList.add('highlight')
	}
}.call()
