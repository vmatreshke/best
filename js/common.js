$(document).ready(function() {
	$('.room label').click(function(event) {
		$(this).toggleClass('is-active');
	});
	$('.filters li').click(function(event) {
		$('.filters a').removeClass('is-active');
		$(this).children('a').addClass('is-active');
		return false;
	});

    if($("#slider-range").length > 0){
      $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 30000,
        values: [ 1000, 30000 ],
        slide: function( event, ui ) {
         $('.search__pricevalue1').text(ui.values[ 0 ]);
         $('.search__pricevalue2').text(ui.values[ 1 ]);
        }
      });
      $('.search__pricevalue1').text($( "#slider-range" ).slider( "values", 0 ));
      $('.search__pricevalue2').text($( "#slider-range" ).slider( "values", 1 ));
    }
	

    // about-gallery
    $(".about-gallery__img").click(function(){
      var path = $(this).attr('href');
      $(".about-gallery__main").html('<img src=' + path + ' alt=""/>');
      return false;
    });
});