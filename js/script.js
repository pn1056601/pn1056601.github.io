(function ($) {

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').fadeOut('fast');
	});

	$(document).ready(function() {


		/* ---------------------------------------------- /*
		 * Smooth scroll / Scroll To Top / Snapscroll
		/* ---------------------------------------------- */

		$('a[href*=#]').bind("click", function(e){
           
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 800);
			e.preventDefault();
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});
		
		jQuery(function($) {
			$('body').panelSnap();
		});

		/* ---------------------------------------------- /*
		 * Navbar
		/* ---------------------------------------------- */

		$('.header').sticky({
			topSpacing: 0
		});

		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 70
		})

        

		/* ---------------------------------------------- /*
		 * Home BG
		/* ---------------------------------------------- */

		$(".screen-height").height($(window).height());

		$(window).resize(function(){
			$(".screen-height").height($(window).height());
		});

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			$('#home').css({'background-attachment': 'scroll'});
		} else {
			$('#home').parallax('50%', 0.1);
		}

		
		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		wow = new WOW({
			mobile: false
		});
		wow.init();
		

		/* ---------------------------------------------- /*
		 * API
		/* ---------------------------------------------- 
		{ 
			search : "deejay",
			location : $("#loc").val(),
			rating : "0"
		}
		*/
		
	});

})(jQuery);

function _api(postvars, callback) {
	$.post('http://www.clubio.net/index.php', postvars, function(json) {
		if(json.hasOwnProperty('msg')) {
			$.smkAlert({text:json.msg.text, type:json.msg.type, time:2, permanent:false}); 
		}
		typeof callback === 'function' && callback(json);
	}, 'json');   
}
function api_form(form) {
	_api(form.serialize() + '&api=' + form.attr('id'));
}

function funcdisabled() {
    $.smkAlert({text:'This function is not available yet.', type:'danger', time:2});
}

