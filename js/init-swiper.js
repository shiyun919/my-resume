/*
!function (){
	
	var mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		//direction: 'vertical',垂直切换
		loop: true, //是否无缝轮播
	
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},
	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	
		// And if we need scrollbar
		//scrollbar: {
		//	el: '.swiper-scrollbar',
		//},
	})
}.call()
*/


/*
//改造成MVC中的V和C

!function (){
	var view = document.querySelector('.swiper-container')
	
	var mySwiper = new Swiper(view, {
		// Optional parameters
		//direction: 'vertical',垂直切换
		loop: true, //是否无缝轮播
	
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},
	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	
		// And if we need scrollbar
		//scrollbar: {
		//	el: '.swiper-scrollbar',
		//},
	})
}.call()




//继续改造
!function (){
	var view = document.querySelector('.swiper-container')
	var controller = function(view){
		var mySwiper = new Swiper(view, {
			// Optional parameters
			//direction: 'vertical',垂直切换
			loop: true, //是否无缝轮播
		
			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
			},
		
			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		
			// And if we need scrollbar
			//scrollbar: {
			//	el: '.swiper-scrollbar',
			//},
		})
	}
	controller(view)
}.call()

*/


//继续改造
!function (){
	var view = document.querySelector('.swiper-container')
	var controller = {
		view: null,
		swiper: null,
		init: function(view){
			this.view = view
			this.initSwiper()
		},
		initSwiper: function(){
			this.swiper = new Swiper(this.view, {
				loop: true, //是否无缝轮播
				pagination: {
					el: '.swiper-pagination',
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			})
		}
	}
	controller.init(view)
}.call()



/*
//给MVC各新建一个类(模板),只要用到MVC结构的就都可引用这个模板
!function (){
	var view = View('.swiper-container')
	var controller = {
		view: null,
		swiper: null,
		init: function(view){
			this.view = view
			this.initSwiper()
		},
		initSwiper: function(){
			this.swiper = new Swiper(this.view, {
				loop: true, //是否无缝轮播
				pagination: {
					el: '.swiper-pagination',
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			})
		}
	}
	controller.init(view)
}.call()

*/