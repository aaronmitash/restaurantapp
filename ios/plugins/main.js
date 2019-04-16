$(document).ready(function(){
				 		
	$("body").fadeIn(600);
	$('.reservation_alert').hide();
	$('.mail_alert').hide();
													
	$('#m1').hide().show(300);
	$('#m2').hide().show(300);
	$('#m3').hide().show(300);
	$('#m4').hide().show(300);
	$('#m5').hide().show(300);
	$('#m6').hide().show(300);
	$('#m7').hide().show(300);
	
	menu_small();
	
	$('#menu1, #menu2, #menu3, #menu4, #menu5, #menu6, #menu7, #menu8, #menu9').hide();
	$('.menu_off').hide();
	
	$('.menu_on').click(function(){
		$('#menu1').delay(100).show(200);
		$('#menu2').delay(200).show(200);
		$('#menu3').delay(300).show(200);
		$('#menu4').delay(400).show(200);
		$('#menu5').delay(500).show(200);
		$('#menu6').delay(600).show(200);
		$('#menu7').delay(700).show(200);
		$('#menu8').delay(800).show(200);
		$('#menu9').delay(900).show(200);		
		$('.menu_on').hide();
		$('.menu_off').show();		
	});
	
	$('.menu_off').click(function(){
		$('#menu1').delay(900).hide(200);
		$('#menu2').delay(800).hide(200);
		$('#menu3').delay(700).hide(200);
		$('#menu4').delay(600).hide(200);
		$('#menu5').delay(500).hide(200);
		$('#menu6').delay(400).hide(200);
		$('#menu7').delay(300).hide(200);
		$('#menu8').delay(200).hide(200);
		$('#menu9').delay(100).hide(200);	 	
		$('.menu_on').show();
		$('.menu_off').hide();
		
	});	

function menu_small() {
    
	$('.deployed-navigation').html('<a href="index.html" id="menu1" class="navigation-icon" data-transition="flip"><div class="menu_top_margin"></div>Home</a> <a href="reservation.html" id="menu2" class="navigation-icon" data-transition="flip"><div class="menu_top_margin"></div>Make Registrations</a> <a href="news.html" id="menu3" class="navigation-icon" data-transition="flip"><div class="menu_top_margin"></div>News</a> <a href="menu.html" id="menu4" class="navigation-icon" data-transition="flip"><div class="menu_top_margin"></div>Menu</a> <a href="about_us.html" id="menu5" class="navigation-icon" data-transition="flip"><div class="menu_top_margin"></div>About us</a> <a href="gallery.html" id="menu6" class="navigation-icon" data-transition="flip"><div class="menu_top_margin"></div>Gallery</a> <a href="contact.html" id="menu7" class="navigation-icon" data-transition="flip"><div class="menu_top_margin"></div>Contact</a> <a href="#" onclick="window.open(\'http://maps.google.com\', \'_system\', \'location=no\');" target="_blank" id="menu8" class="navigation-icon" data-transition="flip"><div class="menu_top_margin"></div>Map</a> <a href="tel:+11-111-111-111" id="menu9" class="navigation-icon" data-transition="flip"><div class="menu_top_margin"></div>Call us</a>');
}
			
});