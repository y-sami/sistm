$(function(){var l,e;e=80,l=0;var a=null;$(window).on("scroll",function(){clearTimeout(a),a=setTimeout(function(){var a;l=$(this).scrollTop(),e<=(a=l)?$("#md-global").addClass("fixed").removeClass("relative"):e>=a&&$("#md-global.fixed").removeClass("fixed").addClass("relative")},300)})});