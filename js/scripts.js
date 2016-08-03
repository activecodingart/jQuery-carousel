$(function() {
	
	var carouselList = $('ul'),
		prevBtn = $('.prev'),
		nextBtn = $('.next'),
		carousel = $('#carousel');
	
	function changeSlide() {
		carouselList.animate({'marginLeft': -1600}, 1000, moveFirstSlide);
	}
	
	function previousSlide() {
		carouselList.animate({'marginLeft': 0}, 1000, moveLastSlide);
	}
	
	function moveLastSlide() {
		var firsItem = carouselList.find('li:first'),
			lastItem = carouselList.find('li:last');
		firsItem.before(lastItem);
		carouselList.css({marginLeft: -800});
	}
	
	function moveFirstSlide() {
		var firsItem = carouselList.find('li:first'),
			lastItem = carouselList.find('li:last');
		lastItem.after(firsItem);
		carouselList.css({marginLeft: -800});
	}
		
	var	autostart = setInterval(changeSlide, 5000);
	
	prevBtn.click(previousSlide);
	nextBtn.click(changeSlide);
	
	carousel.mouseenter(function(){
		clearInterval(autostart);
	});
	
	carousel.mouseleave(function(){
		autostart = setInterval(changeSlide, 4000);
	});
	
});