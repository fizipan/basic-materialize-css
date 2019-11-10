// navbar
const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);

// sildeshow
const slide = document.querySelectorAll('.slider');
M.Slider.init(slide, {
	indicators: false,
	height: 500,
	interval: 3000,
	duration: 600
});

// parallax
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// porfolio
const materialbox = document.querySelectorAll('.materialboxed')
M.Materialbox.init(materialbox);

// scrollspy
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
	scrollOffset: 50
});