// navbar
const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);


// slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
	indicators: false,
	interval: 3000,
	height: 500,
	transition: 600

});

// parallax
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// materialbox
const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

// scrollspy
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
	scrollOffset: 50
});

// landing page
$(window).scroll(function(){
	var wscroll = $(this).scrollTop();


if( wscroll > $('.portfolio').offset().top -250) {
	$('.portfolio .materialboxed').each(function(i) {
		setTimeout(function() {
			$('.portfolio .materialboxed').eq(i).addClass('muncul');
		}, 400 * (i+1));
	});
}


});

$(window).on('load', function() {
	$('.pkiri').addClass('pmuncul');
	$('.pkanan').addClass('pmuncul');
});