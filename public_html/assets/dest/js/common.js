$(function(){$("#catch-slider").bxSlider({slideMargin:0,controls:!1,auto:!0,pager:!1,minSlides:1,maxSlides:1,moveSlides:1,speed:2500,pause:8e3,mode:"fade"});var e=$("#comapny-photo-slider li").length;$("#comapny-photo-slider").bxSlider({ticker:!0,minSlides:3,maxSlides:12,slideWidth:400,slideMargin:5,tickerHover:!1,speed:5e3*e})}),$(function(){$("#voice h3").matchHeight(),$("#benefits .box").matchHeight()}),$(function(){var e,t=null,i=$("#catch-alpha"),n=$("#catch-visual");function s(){e=n.height(),i.css("height",e)}$(window).on("resize",function(){clearTimeout(t),t=setTimeout(function(){s()},300)}),$(window).on("load",function(){s()})}),$(function(){var e,t;t=$("#introduction").offset().top,e=0;var i=null;$(window).on("scroll",function(){clearTimeout(i),i=setTimeout(function(){var i;e=$(this).scrollTop(),t<=(i=e)?$("#md-global").addClass("fixed").removeClass("absolute"):t>=i&&$("#md-global.fixed").animate({top:"-50px"},{duration:200,complete:function(){$(this).removeClass("fixed").css("top","0").addClass("absolute")}})},300)})}),jQuery(document).ready(function(e){var t=139.703097,i=35.688785,n={zoom:16,center:new google.maps.LatLng(i,t),mapTypeId:google.maps.MapTypeId.ROADMAP,styles:[{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.business",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text",stylers:[{visibility:"off"}]}]},s=new google.maps.Map(document.getElementById("google-map"),n),o=new google.maps.Marker({position:new google.maps.LatLng(i,t),map:s}),r=new google.maps.InfoWindow({content:"株式会社エスアイシステム 本社"});r.open(s,o),google.maps.event.addListener(r,"closeclick",function(){google.maps.event.addListenerOnce(o,"click",function(e){r.open(s,o)})}),google.maps.event.addDomListener(window,"resize",function(){var e=s.getCenter();google.maps.event.trigger(s,"resize"),s.setCenter(e)})}),function(e,t){var i,n,s=e.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,a="_html5shiv",l=0,d={};function c(){var e=h.elements;return"string"==typeof e?e.split(" "):e}function g(e){var t=d[e[a]];return t||(t={},l++,e[a]=l,d[l]=t),t}function p(e,i,s){return i||(i=t),n?i.createElement(e):(s||(s=g(i)),!(a=s.cache[e]?s.cache[e].cloneNode():r.test(e)?(s.cache[e]=s.createElem(e)).cloneNode():s.createElem(e)).canHaveChildren||o.test(e)||a.tagUrn?a:s.frag.appendChild(a));var a}function u(e){e||(e=t);var s,o,r,a,l,d,u=g(e);return!h.shivCSS||i||u.hasCSS||(u.hasCSS=(o="article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}",r=(s=e).createElement("p"),a=s.getElementsByTagName("head")[0]||s.documentElement,r.innerHTML="x<style>"+o+"</style>",!!a.insertBefore(r.lastChild,a.firstChild))),n||(l=e,(d=u).cache||(d.cache={},d.createElem=l.createElement,d.createFrag=l.createDocumentFragment,d.frag=d.createFrag()),l.createElement=function(e){return h.shivMethods?p(e,l,d):d.createElem(e)},l.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+c().join().replace(/[\w\-:]+/g,function(e){return d.createElem(e),d.frag.createElement(e),'c("'+e+'")'})+");return n}")(h,d.frag)),e}!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",i="hidden"in e,n=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){i=!0,n=!0}}();var h={elements:s.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==s.shivCSS,supportsUnknownElements:n,shivMethods:!1!==s.shivMethods,type:"default",shivDocument:u,createElement:p,createDocumentFragment:function(e,i){if(e||(e=t),n)return e.createDocumentFragment();for(var s=(i=i||g(e)).frag.cloneNode(),o=0,r=c(),a=r.length;o<a;o++)s.createElement(r[o]);return s},addElements:function(e,t){var i=h.elements;"string"!=typeof i&&(i=i.join(" ")),"string"!=typeof e&&(e=e.join(" ")),h.elements=i+" "+e,u(t)}};e.html5=h,u(t),"object"==typeof module&&module.exports&&(module.exports=h)}("undefined"!=typeof window?window:this,document),function(e){var t={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0},onAutoChange:function(){return!0}};e.fn.bxSlider=function(n){if(0===this.length)return this;if(this.length>1)return this.each(function(){e(this).bxSlider(n)}),this;var s={},o=this,r=e(window).width(),a=e(window).height();if(!e(o).data("bxSlider")){var l=function(){e(o).data("bxSlider")||(s.settings=e.extend({},t,n),s.settings.slideWidth=parseInt(s.settings.slideWidth),s.children=o.children(s.settings.slideSelector),s.children.length<s.settings.minSlides&&(s.settings.minSlides=s.children.length),s.children.length<s.settings.maxSlides&&(s.settings.maxSlides=s.children.length),s.settings.randomStart&&(s.settings.startSlide=Math.floor(Math.random()*s.children.length)),s.active={index:s.settings.startSlide},s.carousel=s.settings.minSlides>1||s.settings.maxSlides>1,s.carousel&&(s.settings.preloadImages="all"),s.minThreshold=s.settings.minSlides*s.settings.slideWidth+(s.settings.minSlides-1)*s.settings.slideMargin,s.maxThreshold=s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin,s.working=!1,s.controls={},s.interval=null,s.animProp="vertical"===s.settings.mode?"top":"left",s.usingCSS=s.settings.useCSS&&"fade"!==s.settings.mode&&function(){for(var e=document.createElement("div"),t=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],i=0;i<t.length;i++)if(void 0!==e.style[t[i]])return s.cssPrefix=t[i].replace("Perspective","").toLowerCase(),s.animProp="-"+s.cssPrefix+"-transform",!0;return!1}(),"vertical"===s.settings.mode&&(s.settings.maxSlides=s.settings.minSlides),o.data("origStyle",o.attr("style")),o.children(s.settings.slideSelector).each(function(){e(this).data("origStyle",e(this).attr("style"))}),d())},d=function(){var t=s.children.eq(s.settings.startSlide);o.wrap('<div class="'+s.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),s.viewport=o.parent(),s.settings.ariaLive&&!s.settings.ticker&&s.viewport.attr("aria-live","polite"),s.loader=e('<div class="bx-loading" />'),s.viewport.prepend(s.loader),o.css({width:"horizontal"===s.settings.mode?1e3*s.children.length+215+"%":"auto",position:"relative"}),s.usingCSS&&s.settings.easing?o.css("-"+s.cssPrefix+"-transition-timing-function",s.settings.easing):s.settings.easing||(s.settings.easing="swing"),s.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),s.viewport.parent().css({maxWidth:u()}),s.children.css({float:"horizontal"===s.settings.mode?"left":"none",listStyle:"none",position:"relative"}),s.children.css("width",h()),"horizontal"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginRight",s.settings.slideMargin),"vertical"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginBottom",s.settings.slideMargin),"fade"===s.settings.mode&&(s.children.css({position:"absolute",zIndex:0,display:"none"}),s.children.eq(s.settings.startSlide).css({zIndex:s.settings.slideZIndex,display:"block"})),s.controls.el=e('<div class="bx-controls" />'),s.settings.captions&&T(),s.active.last=s.settings.startSlide===f()-1,s.settings.video&&o.fitVids(),("all"===s.settings.preloadImages||s.settings.ticker)&&(t=s.children),s.settings.ticker?s.settings.pager=!1:(s.settings.controls&&y(),s.settings.auto&&s.settings.autoControls&&C(),s.settings.pager&&w(),(s.settings.controls||s.settings.autoControls||s.settings.pager)&&s.viewport.after(s.controls.el)),c(t,g)},c=function(t,i){var n=t.find('img:not([src=""]), iframe').length,s=0;0!==n?t.find('img:not([src=""]), iframe').each(function(){e(this).one("load error",function(){++s===n&&i()}).each(function(){(this.complete||""==this.src)&&e(this).trigger("load")})}):i()},g=function(){if(s.settings.infiniteLoop&&"fade"!==s.settings.mode&&!s.settings.ticker){var t="vertical"===s.settings.mode?s.settings.minSlides:s.settings.maxSlides,i=s.children.slice(0,t).clone(!0).addClass("bx-clone"),n=s.children.slice(-t).clone(!0).addClass("bx-clone");s.settings.ariaHidden&&(i.attr("aria-hidden",!0),n.attr("aria-hidden",!0)),o.append(i).prepend(n)}s.loader.remove(),x(),"vertical"===s.settings.mode&&(s.settings.adaptiveHeight=!0),s.viewport.height(p()),o.redrawSlider(),s.settings.onSliderLoad.call(o,s.active.index),s.initialized=!0,s.settings.responsive&&e(window).bind("resize",B),s.settings.auto&&s.settings.autoStart&&(f()>1||s.settings.autoSlideForOnePage)&&L(),s.settings.ticker&&$(),s.settings.pager&&I(s.settings.startSlide),s.settings.controls&&A(),s.settings.touchEnabled&&!s.settings.ticker&&N(),s.settings.keyboardEnabled&&!s.settings.ticker&&e(document).keydown(F)},p=function(){var t=0,n=e();if("vertical"===s.settings.mode||s.settings.adaptiveHeight)if(s.carousel){var o=1===s.settings.moveSlides?s.active.index:s.active.index*m();for(n=s.children.eq(o),i=1;i<=s.settings.maxSlides-1;i++)n=o+i>=s.children.length?n.add(s.children.eq(i-1)):n.add(s.children.eq(o+i))}else n=s.children.eq(s.active.index);else n=s.children;return"vertical"===s.settings.mode?(n.each(function(i){t+=e(this).outerHeight()}),s.settings.slideMargin>0&&(t+=s.settings.slideMargin*(s.settings.minSlides-1))):t=Math.max.apply(Math,n.map(function(){return e(this).outerHeight(!1)}).get()),"border-box"===s.viewport.css("box-sizing")?t+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))+parseFloat(s.viewport.css("border-top-width"))+parseFloat(s.viewport.css("border-bottom-width")):"padding-box"===s.viewport.css("box-sizing")&&(t+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))),t},u=function(){var e="100%";return s.settings.slideWidth>0&&(e="horizontal"===s.settings.mode?s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin:s.settings.slideWidth),e},h=function(){var e=s.settings.slideWidth,t=s.viewport.width();if(0===s.settings.slideWidth||s.settings.slideWidth>t&&!s.carousel||"vertical"===s.settings.mode)e=t;else if(s.settings.maxSlides>1&&"horizontal"===s.settings.mode){if(t>s.maxThreshold)return e;t<s.minThreshold?e=(t-s.settings.slideMargin*(s.settings.minSlides-1))/s.settings.minSlides:s.settings.shrinkItems&&(e=Math.floor((t+s.settings.slideMargin)/Math.ceil((t+s.settings.slideMargin)/(e+s.settings.slideMargin))-s.settings.slideMargin))}return e},v=function(){var e=1,t=null;return"horizontal"===s.settings.mode&&s.settings.slideWidth>0?s.viewport.width()<s.minThreshold?e=s.settings.minSlides:s.viewport.width()>s.maxThreshold?e=s.settings.maxSlides:(t=s.children.first().width()+s.settings.slideMargin,e=Math.floor((s.viewport.width()+s.settings.slideMargin)/t)||1):"vertical"===s.settings.mode&&(e=s.settings.minSlides),e},f=function(){var e=0,t=0,i=0;if(s.settings.moveSlides>0){if(!s.settings.infiniteLoop){for(;t<s.children.length;)++e,t=i+v(),i+=s.settings.moveSlides<=v()?s.settings.moveSlides:v();return i}e=Math.ceil(s.children.length/m())}else e=Math.ceil(s.children.length/v());return e},m=function(){return s.settings.moveSlides>0&&s.settings.moveSlides<=v()?s.settings.moveSlides:v()},x=function(){var e,t,i;s.children.length>s.settings.maxSlides&&s.active.last&&!s.settings.infiniteLoop?"horizontal"===s.settings.mode?(e=(t=s.children.last()).position(),b(-(e.left-(s.viewport.width()-t.outerWidth())),"reset",0)):"vertical"===s.settings.mode&&(i=s.children.length-s.settings.minSlides,e=s.children.eq(i).position(),b(-e.top,"reset",0)):(e=s.children.eq(s.active.index*m()).position(),s.active.index===f()-1&&(s.active.last=!0),void 0!==e&&("horizontal"===s.settings.mode?b(-e.left,"reset",0):"vertical"===s.settings.mode&&b(-e.top,"reset",0)))},b=function(t,i,n,r){var a,l;s.usingCSS?(l="vertical"===s.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)",o.css("-"+s.cssPrefix+"-transition-duration",n/1e3+"s"),"slide"===i?(o.css(s.animProp,l),0!==n?o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(t){e(t.target).is(o)&&(o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),H())}):H()):"reset"===i?o.css(s.animProp,l):"ticker"===i&&(o.css("-"+s.cssPrefix+"-transition-timing-function","linear"),o.css(s.animProp,l),0!==n?o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(t){e(t.target).is(o)&&(o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(r.resetValue,"reset",0),W())}):(b(r.resetValue,"reset",0),W()))):((a={})[s.animProp]=t,"slide"===i?o.animate(a,n,s.settings.easing,function(){H()}):"reset"===i?o.css(s.animProp,t):"ticker"===i&&o.animate(a,n,"linear",function(){b(r.resetValue,"reset",0),W()}))},S=function(){for(var t="",i="",n=f(),o=0;o<n;o++)i="",s.settings.buildPager&&e.isFunction(s.settings.buildPager)||s.settings.pagerCustom?(i=s.settings.buildPager(o),s.pagerEl.addClass("bx-custom-pager")):(i=o+1,s.pagerEl.addClass("bx-default-pager")),t+='<div class="bx-pager-item"><a href="" data-slide-index="'+o+'" class="bx-pager-link">'+i+"</a></div>";s.pagerEl.html(t)},w=function(){s.settings.pagerCustom?s.pagerEl=e(s.settings.pagerCustom):(s.pagerEl=e('<div class="bx-pager" />'),s.settings.pagerSelector?e(s.settings.pagerSelector).html(s.pagerEl):s.controls.el.addClass("bx-has-pager").append(s.pagerEl),S()),s.pagerEl.on("click touchend","a",z)},y=function(){s.controls.next=e('<a class="bx-next" href="">'+s.settings.nextText+"</a>"),s.controls.prev=e('<a class="bx-prev" href="">'+s.settings.prevText+"</a>"),s.controls.next.bind("click touchend",E),s.controls.prev.bind("click touchend",k),s.settings.nextSelector&&e(s.settings.nextSelector).append(s.controls.next),s.settings.prevSelector&&e(s.settings.prevSelector).append(s.controls.prev),s.settings.nextSelector||s.settings.prevSelector||(s.controls.directionEl=e('<div class="bx-controls-direction" />'),s.controls.directionEl.append(s.controls.prev).append(s.controls.next),s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))},C=function(){s.controls.start=e('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+s.settings.startText+"</a></div>"),s.controls.stop=e('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+s.settings.stopText+"</a></div>"),s.controls.autoEl=e('<div class="bx-controls-auto" />'),s.controls.autoEl.on("click",".bx-start",M),s.controls.autoEl.on("click",".bx-stop",P),s.settings.autoControlsCombine?s.controls.autoEl.append(s.controls.start):s.controls.autoEl.append(s.controls.start).append(s.controls.stop),s.settings.autoControlsSelector?e(s.settings.autoControlsSelector).html(s.controls.autoEl):s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl),D(s.settings.autoStart?"stop":"start")},T=function(){s.children.each(function(t){var i=e(this).find("img:first").attr("title");void 0!==i&&(""+i).length&&e(this).append('<div class="bx-caption"><span>'+i+"</span></div>")})},E=function(e){e.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),o.goToNextSlide())},k=function(e){e.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),o.goToPrevSlide())},M=function(e){o.startAuto(),e.preventDefault()},P=function(e){o.stopAuto(),e.preventDefault()},z=function(t){var i,n;t.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),void 0!==(i=e(t.currentTarget)).attr("data-slide-index")&&(n=parseInt(i.attr("data-slide-index")))!==s.active.index&&o.goToSlide(n))},I=function(t){var i=s.children.length;if("short"===s.settings.pagerType)return s.settings.maxSlides>1&&(i=Math.ceil(s.children.length/s.settings.maxSlides)),void s.pagerEl.html(t+1+s.settings.pagerShortSeparator+i);s.pagerEl.find("a").removeClass("active"),s.pagerEl.each(function(i,n){e(n).find("a").eq(t).addClass("active")})},H=function(){if(s.settings.infiniteLoop){var e="";0===s.active.index?e=s.children.eq(0).position():s.active.index===f()-1&&s.carousel?e=s.children.eq((f()-1)*m()).position():s.active.index===s.children.length-1&&(e=s.children.eq(s.children.length-1).position()),e&&("horizontal"===s.settings.mode?b(-e.left,"reset",0):"vertical"===s.settings.mode&&b(-e.top,"reset",0))}s.working=!1,s.settings.onSlideAfter.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)},D=function(e){s.settings.autoControlsCombine?s.controls.autoEl.html(s.controls[e]):(s.controls.autoEl.find("a").removeClass("active"),s.controls.autoEl.find("a:not(.bx-"+e+")").addClass("active"))},A=function(){1===f()?(s.controls.prev.addClass("disabled"),s.controls.next.addClass("disabled")):!s.settings.infiniteLoop&&s.settings.hideControlOnEnd&&(0===s.active.index?(s.controls.prev.addClass("disabled"),s.controls.next.removeClass("disabled")):s.active.index===f()-1?(s.controls.next.addClass("disabled"),s.controls.prev.removeClass("disabled")):(s.controls.prev.removeClass("disabled"),s.controls.next.removeClass("disabled")))},_=function(){o.startAuto()},q=function(){o.stopAuto()},L=function(){s.settings.autoDelay>0?setTimeout(o.startAuto,s.settings.autoDelay):(o.startAuto(),e(window).focus(_).blur(q)),s.settings.autoHover&&o.hover(function(){s.interval&&(o.stopAuto(!0),s.autoPaused=!0)},function(){s.autoPaused&&(o.startAuto(!0),s.autoPaused=null)})},$=function(){var t,i,n,r,a,l,d,c,g=0;"next"===s.settings.autoDirection?o.append(s.children.clone().addClass("bx-clone")):(o.prepend(s.children.clone().addClass("bx-clone")),t=s.children.first().position(),g="horizontal"===s.settings.mode?-t.left:-t.top),b(g,"reset",0),s.settings.pager=!1,s.settings.controls=!1,s.settings.autoControls=!1,s.settings.tickerHover&&(s.usingCSS?(r="horizontal"===s.settings.mode?4:5,s.viewport.hover(function(){i=o.css("-"+s.cssPrefix+"-transform"),n=parseFloat(i.split(",")[r]),b(n,"reset",0)},function(){c=0,s.children.each(function(t){c+="horizontal"===s.settings.mode?e(this).outerWidth(!0):e(this).outerHeight(!0)}),a=s.settings.speed/c,l="horizontal"===s.settings.mode?"left":"top",d=a*(c-Math.abs(parseInt(n))),W(d)})):s.viewport.hover(function(){o.stop()},function(){c=0,s.children.each(function(t){c+="horizontal"===s.settings.mode?e(this).outerWidth(!0):e(this).outerHeight(!0)}),a=s.settings.speed/c,l="horizontal"===s.settings.mode?"left":"top",d=a*(c-Math.abs(parseInt(o.css(l)))),W(d)})),W()},W=function(e){var t,i,n=e||s.settings.speed,r={left:0,top:0},a={left:0,top:0};"next"===s.settings.autoDirection?r=o.find(".bx-clone").first().position():a=s.children.first().position(),t="horizontal"===s.settings.mode?-r.left:-r.top,i="horizontal"===s.settings.mode?-a.left:-a.top,b(t,"ticker",n,{resetValue:i})},F=function(t){var i,n,s,r,a=document.activeElement.tagName.toLowerCase();if(null==new RegExp(a,["i"]).exec("input|textarea")&&(i=o,n=e(window),s={top:n.scrollTop(),left:n.scrollLeft()},r=i.offset(),s.right=s.left+n.width(),s.bottom=s.top+n.height(),r.right=r.left+i.outerWidth(),r.bottom=r.top+i.outerHeight(),!(s.right<r.left||s.left>r.right||s.bottom<r.top||s.top>r.bottom))){if(39===t.keyCode)return E(t),!1;if(37===t.keyCode)return k(t),!1}},N=function(){s.touch={start:{x:0,y:0},end:{x:0,y:0}},s.viewport.bind("touchstart MSPointerDown pointerdown",O),s.viewport.on("click",".bxslider a",function(e){s.viewport.hasClass("click-disabled")&&(e.preventDefault(),s.viewport.removeClass("click-disabled"))})},O=function(e){if(s.controls.el.addClass("disabled"),s.working)e.preventDefault(),s.controls.el.removeClass("disabled");else{s.touch.originalPos=o.position();var t=e.originalEvent,i=void 0!==t.changedTouches?t.changedTouches:[t];s.touch.start.x=i[0].pageX,s.touch.start.y=i[0].pageY,s.viewport.get(0).setPointerCapture&&(s.pointerId=t.pointerId,s.viewport.get(0).setPointerCapture(s.pointerId)),s.viewport.bind("touchmove MSPointerMove pointermove",U),s.viewport.bind("touchend MSPointerUp pointerup",R),s.viewport.bind("MSPointerCancel pointercancel",j)}},j=function(e){b(s.touch.originalPos.left,"reset",0),s.controls.el.removeClass("disabled"),s.viewport.unbind("MSPointerCancel pointercancel",j),s.viewport.unbind("touchmove MSPointerMove pointermove",U),s.viewport.unbind("touchend MSPointerUp pointerup",R),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId)},U=function(e){var t=e.originalEvent,i=void 0!==t.changedTouches?t.changedTouches:[t],n=Math.abs(i[0].pageX-s.touch.start.x),o=Math.abs(i[0].pageY-s.touch.start.y),r=0,a=0;3*n>o&&s.settings.preventDefaultSwipeX?e.preventDefault():3*o>n&&s.settings.preventDefaultSwipeY&&e.preventDefault(),"fade"!==s.settings.mode&&s.settings.oneToOneTouch&&("horizontal"===s.settings.mode?(a=i[0].pageX-s.touch.start.x,r=s.touch.originalPos.left+a):(a=i[0].pageY-s.touch.start.y,r=s.touch.originalPos.top+a),b(r,"reset",0))},R=function(e){s.viewport.unbind("touchmove MSPointerMove pointermove",U),s.controls.el.removeClass("disabled");var t=e.originalEvent,i=void 0!==t.changedTouches?t.changedTouches:[t],n=0,r=0;s.touch.end.x=i[0].pageX,s.touch.end.y=i[0].pageY,"fade"===s.settings.mode?(r=Math.abs(s.touch.start.x-s.touch.end.x))>=s.settings.swipeThreshold&&(s.touch.start.x>s.touch.end.x?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):("horizontal"===s.settings.mode?(r=s.touch.end.x-s.touch.start.x,n=s.touch.originalPos.left):(r=s.touch.end.y-s.touch.start.y,n=s.touch.originalPos.top),!s.settings.infiniteLoop&&(0===s.active.index&&r>0||s.active.last&&r<0)?b(n,"reset",200):Math.abs(r)>=s.settings.swipeThreshold?(r<0?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):b(n,"reset",200)),s.viewport.unbind("touchend MSPointerUp pointerup",R),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId)},B=function(t){if(s.initialized)if(s.working)window.setTimeout(B,10);else{var i=e(window).width(),n=e(window).height();r===i&&a===n||(r=i,a=n,o.redrawSlider(),s.settings.onSliderResize.call(o,s.active.index))}},X=function(e){var t=v();s.settings.ariaHidden&&!s.settings.ticker&&(s.children.attr("aria-hidden","true"),s.children.slice(e,e+t).attr("aria-hidden","false"))};return o.goToSlide=function(t,i){var n,r,a,l,d,c=!0,g=0,u={left:0,top:0},h=null;if(s.oldIndex=s.active.index,s.active.index=(d=t)<0?s.settings.infiniteLoop?f()-1:s.active.index:d>=f()?s.settings.infiniteLoop?0:s.active.index:d,!s.working&&s.active.index!==s.oldIndex){if(s.working=!0,void 0!==(c=s.settings.onSlideBefore.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index))&&!c)return s.active.index=s.oldIndex,void(s.working=!1);"next"===i?s.settings.onSlideNext.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)||(c=!1):"prev"===i&&(s.settings.onSlidePrev.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)||(c=!1)),s.active.last=s.active.index>=f()-1,(s.settings.pager||s.settings.pagerCustom)&&I(s.active.index),s.settings.controls&&A(),"fade"===s.settings.mode?(s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed),s.children.filter(":visible").fadeOut(s.settings.speed).css({zIndex:0}),s.children.eq(s.active.index).css("zIndex",s.settings.slideZIndex+1).fadeIn(s.settings.speed,function(){e(this).css("zIndex",s.settings.slideZIndex),H()})):(s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed),!s.settings.infiniteLoop&&s.carousel&&s.active.last?"horizontal"===s.settings.mode?(u=(h=s.children.eq(s.children.length-1)).position(),g=s.viewport.width()-h.outerWidth()):(n=s.children.length-s.settings.minSlides,u=s.children.eq(n).position()):s.carousel&&s.active.last&&"prev"===i?(r=1===s.settings.moveSlides?s.settings.maxSlides-m():(f()-1)*m()-(s.children.length-s.settings.maxSlides),u=(h=o.children(".bx-clone").eq(r)).position()):"next"===i&&0===s.active.index?(u=o.find("> .bx-clone").eq(s.settings.maxSlides).position(),s.active.last=!1):t>=0&&(l=t*parseInt(m()),u=s.children.eq(l).position()),void 0!==u&&(a="horizontal"===s.settings.mode?-(u.left-g):-u.top,b(a,"slide",s.settings.speed)),s.working=!1),s.settings.ariaHidden&&X(s.active.index*m())}},o.goToNextSlide=function(){if((s.settings.infiniteLoop||!s.active.last)&&1!=s.working){var e=parseInt(s.active.index)+1;o.goToSlide(e,"next")}},o.goToPrevSlide=function(){if((s.settings.infiniteLoop||0!==s.active.index)&&1!=s.working){var e=parseInt(s.active.index)-1;o.goToSlide(e,"prev")}},o.startAuto=function(e){s.interval||(s.interval=setInterval(function(){"next"===s.settings.autoDirection?o.goToNextSlide():o.goToPrevSlide()},s.settings.pause),s.settings.onAutoChange.call(o,!0),s.settings.autoControls&&!0!==e&&D("stop"))},o.stopAuto=function(e){s.interval&&(clearInterval(s.interval),s.interval=null,s.settings.onAutoChange.call(o,!1),s.settings.autoControls&&!0!==e&&D("start"))},o.getCurrentSlide=function(){return s.active.index},o.getCurrentSlideElement=function(){return s.children.eq(s.active.index)},o.getSlideElement=function(e){return s.children.eq(e)},o.getSlideCount=function(){return s.children.length},o.isWorking=function(){return s.working},o.redrawSlider=function(){s.children.add(o.find(".bx-clone")).outerWidth(h()),s.viewport.css("height",p()),s.settings.ticker||x(),s.active.last&&(s.active.index=f()-1),s.active.index>=f()&&(s.active.last=!0),s.settings.pager&&!s.settings.pagerCustom&&(S(),I(s.active.index)),s.settings.ariaHidden&&X(s.active.index*m())},o.destroySlider=function(){s.initialized&&(s.initialized=!1,e(".bx-clone",this).remove(),s.children.each(function(){void 0!==e(this).data("origStyle")?e(this).attr("style",e(this).data("origStyle")):e(this).removeAttr("style")}),void 0!==e(this).data("origStyle")?this.attr("style",e(this).data("origStyle")):e(this).removeAttr("style"),e(this).unwrap().unwrap(),s.controls.el&&s.controls.el.remove(),s.controls.next&&s.controls.next.remove(),s.controls.prev&&s.controls.prev.remove(),s.pagerEl&&s.settings.controls&&!s.settings.pagerCustom&&s.pagerEl.remove(),e(".bx-caption",this).remove(),s.controls.autoEl&&s.controls.autoEl.remove(),clearInterval(s.interval),s.settings.responsive&&e(window).unbind("resize",B),s.settings.keyboardEnabled&&e(document).unbind("keydown",F),e(this).removeData("bxSlider"),e(window).off("blur",q).off("focus",_))},o.reloadSlider=function(t){void 0!==t&&(n=t),o.destroySlider(),l(),e(o).data("bxSlider",this)},l(),e(o).data("bxSlider",this),this}}}(jQuery),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){var t=-1,i=-1,n=function(e){return parseFloat(e)||0},s=function(t){var i=null,s=[];return e(t).each(function(){var t=e(this),o=t.offset().top-n(t.css("margin-top")),r=s.length>0?s[s.length-1]:null;null===r?s.push(t):Math.floor(Math.abs(i-o))<=1?s[s.length-1]=r.add(t):s.push(t),i=o}),s},o=function(t){var i={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof t?e.extend(i,t):("boolean"==typeof t?i.byRow=t:"remove"===t&&(i.remove=!0),i)},r=e.fn.matchHeight=function(t){var i=o(t);if(i.remove){var n=this;return this.css(i.property,""),e.each(r._groups,function(e,t){t.elements=t.elements.not(n)}),this}return this.length<=1&&!i.target?this:(r._groups.push({elements:this,options:i}),r._apply(this,i),this)};r.version="master",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,r._afterUpdate=null,r._rows=s,r._parse=n,r._parseOptions=o,r._apply=function(t,i){var a=o(i),l=e(t),d=[l],c=e(window).scrollTop(),g=e("html").outerHeight(!0),p=l.parents().filter(":hidden");return p.each(function(){var t=e(this);t.data("style-cache",t.attr("style"))}),p.css("display","block"),a.byRow&&!a.target&&(l.each(function(){var t=e(this),i=t.css("display");"inline-block"!==i&&"flex"!==i&&"inline-flex"!==i&&(i="block"),t.data("style-cache",t.attr("style")),t.css({display:i,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),d=s(l),l.each(function(){var t=e(this);t.attr("style",t.data("style-cache")||"")})),e.each(d,function(t,i){var s=e(i),o=0;if(a.target)o=a.target.outerHeight(!1);else{if(a.byRow&&s.length<=1)return void s.css(a.property,"");s.each(function(){var t=e(this),i=t.attr("style"),n=t.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block");var s={display:n};s[a.property]="",t.css(s),t.outerHeight(!1)>o&&(o=t.outerHeight(!1)),i?t.attr("style",i):t.css("display","")})}s.each(function(){var t=e(this),i=0;a.target&&t.is(a.target)||("border-box"!==t.css("box-sizing")&&(i+=n(t.css("border-top-width"))+n(t.css("border-bottom-width")),i+=n(t.css("padding-top"))+n(t.css("padding-bottom"))),t.css(a.property,o-i+"px"))})}),p.each(function(){var t=e(this);t.attr("style",t.data("style-cache")||null)}),r._maintainScroll&&e(window).scrollTop(c/g*e("html").outerHeight(!0)),this},r._applyDataApi=function(){var t={};e("[data-match-height], [data-mh]").each(function(){var i=e(this),n=i.attr("data-mh")||i.attr("data-match-height");t[n]=n in t?t[n].add(i):i}),e.each(t,function(){this.matchHeight(!0)})};var a=function(t){r._beforeUpdate&&r._beforeUpdate(t,r._groups),e.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(t,r._groups)};r._update=function(n,s){if(s&&"resize"===s.type){var o=e(window).width();if(o===t)return;t=o}n?-1===i&&(i=setTimeout(function(){a(s),i=-1},r._throttle)):a(s)},e(r._applyDataApi);var l=e.fn.on?"on":"bind";e(window)[l]("load",function(e){r._update(!1,e)}),e(window)[l]("resize orientationchange",function(e){r._update(!0,e)})}),$(function(){$('a[href^="#"]').on("click",function(){var e=$(this).attr("href");console.log(e);var t=$("#"==e||""==e?"html":e).offset().top-50;console.log(t),$("html, body").animate({scrollTop:t},550,"swing")})});