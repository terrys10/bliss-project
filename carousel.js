
$(document).ready( function() {
   
	var clickEvent = false;
	$('#myCarousel').on('click', '.test1 a', function() {
			clickEvent = true;
			$('.test1 li').removeClass('active');
			$(this).parent().addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.test1').children().length -1;
			var current = $('.test1 li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.test1 li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
});

$(window).bind('resize', function(){
    var w = $(this).width(),
        threshold = 768;

        if(w < threshold){
            $('.nav-justified').hide().fadeIn();
        }
});