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
