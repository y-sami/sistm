$(function(){
    var timeoutId,ds,bt;
    bt = 80;
    ds = 0;
    function menuFixed(ds){
        if (bt <= ds) {
            $("#md-global").addClass('fixed').removeClass('relative');
        } else if (bt >= ds) {
            $("#md-global").removeClass('fixed').addClass('relative');
        }
    }
    var timer = null;
      $(window).on('scroll',function() {
        clearTimeout( timer );
        timer = setTimeout(function() {
          ds = $(this).scrollTop();
          menuFixed(ds);
        }, 80 );
    });
});