AOS.init({

});


$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('nav').addClass('shrink');
    }
    else {
    $('nav').removeClass('shrink');
    }
  });
});

$(document).ready(function(){
  $('.carousel').carousel(
  {
    dist: 0,
    padding: 0,
    fullWidth: true,
    indicators: true,
    duration: 100,
  }
  );
});

autoplay()   
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}