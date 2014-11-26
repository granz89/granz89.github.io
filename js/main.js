var $win = $(window);
var $hold = $('.hold');
var $logoSection = $('.logo-section');
var $dipperSection = $('.dipper-section');
var $dipper = $('.dipper');
var $shuttleSection = $('.shuttle-section');
var $shuttle = $('.shuttle');
var $designerSection = $('.designer-section');
var $designer = $('.designer');



$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$hold.css('transform', 'rotate(' + scrollPos / 5 + 'deg)');

	$logoSection.css('background-position', 'center ' + scrollPos / 2 + 'px');

});


$shuttleSection.waypoint(function () {
	$shuttle.addClass('js-shuttle-fade');
}, { offset: '50%' });

$designerSection.waypoint(function () {
	$designer.addClass('js-shuttle-fade');
}, { offset: '50%' });

