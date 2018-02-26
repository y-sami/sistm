// page link
$(function () {
		var headerH = 50;
		$('a[href^="#"]').on('click',function(){
				var href= $(this).attr("href");
				console.log(href);
				var target = $(href == "#" || href == "" ? 'html' : href);
				var position = target.offset().top-headerH;
				console.log(position);
				$("html, body").animate({scrollTop:position}, 550, "swing");
		});
});