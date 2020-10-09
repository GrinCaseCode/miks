$(document).ready(function() {

	$(".btn_nav").click(function() {
		$(".sandwich").toggleClass("active");
		if ($(".menu-mobile").is(":hidden")) {
			$(".menu-mobile").slideDown(200);
		} else {
			$(".menu-mobile").slideUp(200);
		}
		$(".menu-mobile a").click(function() {
			$(".menu-mobile").slideUp(200);
			$(".sandwich").removeClass("active");
		});
	});


$(".location-block__value").click(function() {
		if ($(".list-location").is(":hidden")) {
			$(".list-location").slideDown(200);
		} else {
			$(".list-location").slideUp(200);
		}
		$(".list-location a").click(function() {
			$(".list-location").slideUp(200);
		});
	});


	/*высота блока по экрану*/
	function heightDetect() {
		$('.menu-mobile').css("height", $(window).height() -$(".header-main").height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

});