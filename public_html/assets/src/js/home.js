// bxSlider
$(function(){
  $('#catch-slider').bxSlider({
      slideMargin : 0,
      controls    : false,
      auto        : true,
      pager       : false,
      minSlides   : 1,
      maxSlides   : 1,
      moveSlides  : 1,
      speed       : 2500,
      pause       : 8000,
      mode        : 'fade'
    });
  var slideSpeed = 5000;
  var slideLength = $('#comapny-photo-slider li').length;
   $('#comapny-photo-slider').bxSlider({
      ticker: true,
      minSlides: 3,
      maxSlides: 12,
      slideWidth: 400,
      slideMargin: 5,
      tickerHover: false,
      speed: slideSpeed * slideLength
    });
});

$(function(){
    $('#voice h3').matchHeight();
    $('#benefits .box').matchHeight();
});

$(function(){
  var timer = null,cntHeight,
      $alpha = $('#catch-alpha'),
      $slider = $('#catch-visual');
  $(window).on('resize',function(){
    clearTimeout( timer );
    timer = setTimeout(function() {
      catchHeight();
    }, 300 );
  });
  function catchHeight(){
    cntHeight = $slider.height();
    $alpha.css('height',cntHeight);
  }
  $(window).on('load',function(){
    catchHeight();
  });
});

$(function(){
    var timeoutId,ds,bt;
    bt = $("#introduction").offset().top;
    ds = 0;
    function menuFixed(ds){
        if (bt <= ds) {
            $("#md-global").addClass('fixed').removeClass('absolute');
        } else if (bt >= ds) {
            $("#md-global.fixed").animate({'top':'-50px'},{'duration':200,complete:function(){
                $(this).removeClass('fixed').css('top','0').addClass('absolute');
            }});
        }
    }
    var timer = null;
      $(window).on('scroll',function() {
        clearTimeout( timer );
        timer = setTimeout(function() {
          ds = $(this).scrollTop();
          menuFixed(ds);
        }, 300 );
      });
    /*
    window.addEventListener( "scroll", function () {
    clearTimeout( timeoutId ) ;

    timeoutId = setTimeout( function () {
        ds = $(this).scrollTop();
        console.log(ds);
        menuFixed(ds);
    }, 200 ) ;
    }) ;
    */
});

jQuery(document).ready(function($){
var lng01 =139.703097,
    lat01 =35.688785,
    latlng01 = new google.maps.LatLng(lat01, lng01);
var styles = [
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
];
var myOptions = {
  zoom: 16,
  center: latlng01,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  styles: styles,
};
var map_lg = new google.maps.Map(
  document.getElementById("google-map"),
  myOptions
);
var myMarker = new google.maps.Marker({
  position: new google.maps.LatLng(lat01, lng01),
  map: map_lg
});
var myFukidashi = new google.maps.InfoWindow({content: "株式会社エスアイシステム 本社"});
myFukidashi.open(map_lg, myMarker);
google.maps.event.addListener(myFukidashi, "closeclick", function() {
  google.maps.event.addListenerOnce(myMarker, "click", function(event) {
  myFukidashi.open(map_lg, myMarker);
  });
});
google.maps.event.addDomListener(window, "resize", function() {
  var center = map_lg.getCenter();
  google.maps.event.trigger(map_lg, "resize");
  map_lg.setCenter(center);
});
});

