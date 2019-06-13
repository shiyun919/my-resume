/*
		//3-1.触发下拉菜单(监听a标签)

		//获取class名字为menuTrigger的a标签
		let aTags = document.getElementsByClassName('menuTrigger')
		//遍历数组
		for(let i=0; i<aTags.length; i++){
		    //监听鼠标移入的a标签
		    aTags[i].onmouseenter = function(x){  
		        let a = x.currentTarget  
		        let brother = a.nextSibling
		        while(brother.tagName !== 'UL'){
		            brother = brother.nextSibling
		        }
		        //console.log(brother)
		        brother.classList.add('active')
		    }
		    //监听鼠标移除的a标签
		    aTags[i].onmouseleave = function(x){
		        let a = x.currentTarget  
		        let brother = a.nextSibling
		        while(brother.tagName !== 'UL'){
		            brother = brother.nextSibling
		        }
		        //console.log(brother)
		        brother.classList.remove('active')
		    }
		}
		*/



/*
//3-2.触发下拉菜单(监听li标签)

//获取class名字为menuTrigger的li标签
let liTags = document.getElementsByClassName('menuTrigger')
//遍历数组
for(let i=0; i<liTags.length; i++){
    //监听鼠标移入的li标签
    liTags[i].onmouseenter = function(x){  
        x.currentTarget.classList.add('active')  
        //let li = x.currentTarget
        //let brother = li.getElementsByTagName('ul')[0]  //获取li标签中第0个（第一个）ul标签
        //brother.classList.add('active')
    }
    //监听鼠标移除的li标签
    liTags[i].onmouseleave = function(x){
        x.currentTarget.classList.remove('active')
        //let li = x.currentTarget  
        //let brother = li.getElementsByTagName('ul')[0]
        //brother.classList.remove('active')
    }
}
*/

//3-3.触发下拉菜单(监听li标签)
! function() {
	//获取nav > ul > li标签
	let liTags = document.querySelectorAll('nav > ul > li')
	//遍历数组
	for (let i = 0; i < liTags.length; i++) {
		//监听鼠标移入的li标签
		liTags[i].onmouseenter = function(x) {
			x.currentTarget.classList.add('active')
		}
		//监听鼠标移除的li标签
		liTags[i].onmouseleave = function(x) {
			x.currentTarget.classList.remove('active')
		}
	}
}.call()



	/*
	//4.滚动到指定元素位置   方法1：
			
	//获取nav > ul > li > a标签
	let aTags = document.querySelectorAll('nav > ul > li > a')
	//遍历数组
	for(let i=0; i<aTags.length; i++){
	    //监听鼠标点击a标签
	    aTags[i].onclick = function(x){
	        x.preventDefault()    //阻止点击a标签产生的默认动作
	        let a = x.currentTarget  //获取到用户点击的a标签
	        let href = a.getAttribute('href')  //获取到a标签上用户写的href地址
	        let element = document.querySelector(href) //根据获取的href得到我们的元素
	        let top = element.offsetTop  //通过offsetTop的API获取元素离网页窗口顶部的距离
	        //window.scrollTo(0, top - 80)   //通过scrollTo的API获取窗口滑动到离顶部的距离
			
			
			
	        let n = 25   //一共动多少次
	        let duration = 500 / n   //多少时间移动一次
	        let currentTop = window.scrollY
	        let targetTop = top - 80
	        let distance = (targetTop - currentTop) / n    //一次要移动的距离
	        let i = 0
	        let id = setInterval(()=> {
	            if(i===n){
	                window.clearInterval(id)
	                return
	            }
	            i = i + 1
	            window.scrollTo(0 , currentTop + distance * i)
	        },duration)
	    }
	}
	*/



/*
	//4.滚动到指定元素位置   方法2：
! function() {
	//获取nav > ul > li > a标签
	let aTags = document.querySelectorAll('nav > ul > li > a')

	// Setup the animation loop.
	function animate(time) {
		requestAnimationFrame(animate);
		TWEEN.update(time);
	}
	requestAnimationFrame(animate);



	//遍历数组
	for (let i = 0; i < aTags.length; i++) {
		//监听鼠标点击a标签
		aTags[i].onclick = function(x) {
			x.preventDefault() //阻止点击a标签产生的默认动作
			let a = x.currentTarget //获取到用户点击的a标签
			let href = a.getAttribute('href') //获取到a标签上用户写的href地址
			let element = document.querySelector(href) //根据获取的href得到我们的元素
			let top = element.offsetTop //通过offsetTop的API获取元素离网页窗口顶部的距离
			//window.scrollTo(0, top - 80)   //通过scrollTo的API获取窗口滑动到离顶部的距离

			let currentTop = window.scrollY
			let targetTop = top - 80
			let s = targetTop - currentTop
			var coords = {
				x: 0,
				y: currentTop
			}; // 开始位置 (0, 0)
			var t = Math.abs((s / 100) * 300)
			if (t > 500) {
				t = 500
			}
			var tween = new TWEEN.Tween(coords) // 创建修改“coords”的新tween
				.to({
					x: 0,
					y: targetTop
				}, t) //多少时间内移动多少
				.easing(TWEEN.Easing.Quadratic.InOut)
				.onUpdate(function() {
					window.scrollTo(0, coords.y)
				})
				.start();

		}
	}
}.call()
*/


/*
//改造成MVC中的V和C
//4.滚动到指定元素位置   方法2：
! function() {
	var view = document.querySelector('nav.menu')
	//获取nav > ul > li > a标签
	let aTags = view.querySelectorAll('nav.menu > ul > li > a')

	// Setup the animation loop.
	function animate(time) {
		requestAnimationFrame(animate);
		TWEEN.update(time);
	}
	requestAnimationFrame(animate);



	//遍历数组
	for (let i = 0; i < aTags.length; i++) {
		//监听鼠标点击a标签
		aTags[i].onclick = function(x) {
			x.preventDefault() //阻止点击a标签产生的默认动作
			let a = x.currentTarget //获取到用户点击的a标签
			let href = a.getAttribute('href') //获取到a标签上用户写的href地址
			let element = document.querySelector(href) //根据获取的href得到我们的元素
			let top = element.offsetTop //通过offsetTop的API获取元素离网页窗口顶部的距离
			//window.scrollTo(0, top - 80)   //通过scrollTo的API获取窗口滑动到离顶部的距离

			let currentTop = window.scrollY
			let targetTop = top - 80
			let s = targetTop - currentTop
			var coords = {
				x: 0,
				y: currentTop
			}; // 开始位置 (0, 0)
			var t = Math.abs((s / 100) * 300)
			if (t > 500) {
				t = 500
			}
			var tween = new TWEEN.Tween(coords) // 创建修改“coords”的新tween
				.to({
					x: 0,
					y: targetTop
				}, t) //多少时间内移动多少
				.easing(TWEEN.Easing.Quadratic.InOut)
				.onUpdate(function() {
					window.scrollTo(0, coords.y)
				})
				.start();

		}
	}
}.call()
*/


//继续改造
//4.滚动到指定元素位置   方法2：
! function() {
	var view = document.querySelector('nav.menu')
	var controller = {
		view: null,
		aTags: null,
		init:function(view){
			this.view = view
			this.initAnimation()
			this.bindEvents()
		},
		initAnimation: function(){
			function animate(time) {
				requestAnimationFrame(animate);
				TWEEN.update(time);
			}
			requestAnimationFrame(animate);
		},
		scrollToElement: function(element){
			let top = element.offsetTop //通过offsetTop的API获取元素离网页窗口顶部的距离
			//window.scrollTo(0, top - 80)   //通过scrollTo的API获取窗口滑动到离顶部的距离
						
			let currentTop = window.scrollY
			let targetTop = top - 80
			let s = targetTop - currentTop
			var coords = {
				x: 0,
				y: currentTop
			}; // 开始位置 (0, 0)
			var t = Math.abs((s / 100) * 300)
			if (t > 500) {
				t = 500
			}
			var tween = new TWEEN.Tween(coords) // 创建修改“coords”的新tween
				.to({
					x: 0,
					y: targetTop
				}, t) //多少时间内移动多少
				.easing(TWEEN.Easing.Quadratic.InOut)
				.onUpdate(function() {
					window.scrollTo(0, coords.y)
				})
				.start();
		},
		bindEvents: function(){
			let aTags = this.view.querySelectorAll('nav.menu > ul > li > a')
			//遍历数组
			for (let i = 0; i < aTags.length; i++) {
				//监听鼠标点击a标签
				aTags[i].onclick = (x) => {
					x.preventDefault() //阻止点击a标签产生的默认动作
					let a = x.currentTarget //获取到用户点击的a标签
					let href = a.getAttribute('href') //获取到a标签上用户写的href地址
					let element = document.querySelector(href) //根据获取的href得到我们的元素
					this.scrollToElement(element)
				}
			}
		}
	}
	controller.init(view)
}.call()




/*
//给MVC各新建一个类(模板),只要用到MVC结构的就都可引用这个模板
//4.滚动到指定元素位置   方法2：
! function() {
	var view = View('nav.menu')
	var controller = {
		view: null,
		aTags: null,
		init:function(view){
			this.view = view
			this.initAnimation()
			this.bindEvents()
		},
		initAnimation: function(){
			function animate(time) {
				requestAnimationFrame(animate);
				TWEEN.update(time);
			}
			requestAnimationFrame(animate);
		},
		scrollToElement: function(element){
			let top = element.offsetTop //通过offsetTop的API获取元素离网页窗口顶部的距离
			//window.scrollTo(0, top - 80)   //通过scrollTo的API获取窗口滑动到离顶部的距离
						
			let currentTop = window.scrollY
			let targetTop = top - 80
			let s = targetTop - currentTop
			var coords = {
				x: 0,
				y: currentTop
			}; // 开始位置 (0, 0)
			var t = Math.abs((s / 100) * 300)
			if (t > 500) {
				t = 500
			}
			var tween = new TWEEN.Tween(coords) // 创建修改“coords”的新tween
				.to({
					x: 0,
					y: targetTop
				}, t) //多少时间内移动多少
				.easing(TWEEN.Easing.Quadratic.InOut)
				.onUpdate(function() {
					window.scrollTo(0, coords.y)
				})
				.start();
		},
		bindEvents: function(){
			let aTags = this.view.querySelectorAll('nav.menu > ul > li > a')
			//遍历数组
			for (let i = 0; i < aTags.length; i++) {
				//监听鼠标点击a标签
				aTags[i].onclick = (x) => {
					x.preventDefault() //阻止点击a标签产生的默认动作
					let a = x.currentTarget //获取到用户点击的a标签
					let href = a.getAttribute('href') //获取到a标签上用户写的href地址
					let element = document.querySelector(href) //根据获取的href得到我们的元素
					this.scrollToElement(element)
				}
			}
		}
	}
	controller.init(view)
}.call()

*/