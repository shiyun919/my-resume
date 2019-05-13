
!function (){
	window.addEventListener('scroll', function(xxx) { 
		if (window.scrollY > 0) { //scrollY表示页面滚动的垂直高度
			topNav.classList.add('sticky')
		} else {
			topNav.classList.remove('sticky')
		}
	})
}.call()


/*
//将上面代码改造成MVC的V和C
!function (){
	var view = document.querySelector('#topNav')
	var controller = function(view){
		window.addEventListener('scroll', function(xxx) { 
			if (window.scrollY > 0) { //scrollY表示页面滚动的垂直高度
				view.classList.add('sticky')
			} else {
				view.classList.remove('sticky')
			}
		})
	}
	controller(view)
	//controller.call(null,view)  这2中调用执行函数的方法都可用
}.call()


//继续改造
!function (){
	var view = document.querySelector('#topNav')
	
	var controller = {
		view: null,
		init: function(view){
			this.view = view
			this.bindEvents()   //绑定事件
			// this.bindEvents.call(this)
		}
	},
	bindEvents: function(){
		var view = this.view
		window.addEventListener('scroll', function(xxx) { 
			if (window.scrollY > 0) { //scrollY表示页面滚动的垂直高度
				view.classList.add('sticky')
			} else {
				view.classList.remove('sticky')
			}
		})
	}
	controller.init(view)
	//controller.init.call(controller,view)  这2中调用执行函数的方法都可用
}.call()


//继续改造
!function (){
	var view = document.querySelector('#topNav')
	
	var controller = {
		view: null,
		init: function(view){
			this.view = view
			this.bindEvents()   //绑定事件
			// this.bindEvents.call(this)
		}
	},
	bindEvents: function(){
		var view = this.view
		window.addEventListener('scroll', (xxx) => { 
			if (window.scrollY > 0) { //scrollY表示页面滚动的垂直高度
				this.active()
			} else {
				this.deactive()
			}
		})
		//箭头函数没有this
	},
	active: function(){
		this.view.classList.add('sticky')
	},
	deactive: function(){
		this.view.classList.remove('sticky')
	}
	controller.init(view)
	//controller.init.call(controller,view)  这2中调用执行函数的方法都可用
}.call()

*/