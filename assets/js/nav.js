jQuery(document).ready(function() {
	checkMenu();
	onScroll();
});
// Mobile support
function checkMenu() {
		var window = $(document).width();
		if (window < 1200){
			var a = $('.nav-links');
			var b = $('.fa-bars');
			a.hide();
			b.show();
		} else {
			var a = $('.nav-links');
			var b = $('.fa-bars');
			b.hide();
			a.show();
		}
	}
	$(window).resize(function() {
		checkMenu();
	});
// Mobile nav swing
$('.fa-bars').on('click',function(event) {
	var time = 300;
	if ($('body').hasClass('body-open')) {
		removeMenu();
	} else {
		var b = $('body');
		var n = $('.nav');
		var m = $('.nav-links-m');
		b.addClass('body-open');
		n.animate ({
			right: "300",
		},time);
		m.animate ({
			right: "0",
		},time);
		b.animate ({
			right: "300",
		},time);
		event.preventDefault();
		return false;
	}
});
$(document).on('click',function(event) {
	if( !$(event.target).is('.nav-links-m')) {
		removeMenu();
	}
});
function removeMenu() {
	if ($('body').hasClass('body-open')) {
		var b = $('body');
		var n = $('.nav');
		var m = $('.nav-links-m');
		var time = 300;
		b.animate ({
			right: "0",
		},time);
		m.animate ({
			right: "-300",
		},time);
		n.animate ({
			right: "0",
		},time,function() {
			b.removeClass('body-open');
		});
	}
}
// Nav bar color	
function onScroll() {
	var $height = $('.heading').height();
     	var scrolling = 80;
	        var pTop = $('body').scrollTop();
	        if( pTop >= scrolling ){
	            startSetting();
	        }
	        else {
	        	endSetting();
	        }
	function startSetting() {
		var $navMenu = $('.navbar');
		$navMenu.addClass('nav-scrolled');
	}
	function endSetting() {
		var $navMenu = $('.navbar');
		$navMenu.removeClass('nav-scrolled');
	}
};
$(document).on("scroll", function () {
     onScroll();
});
onScroll();

$(window).scroll(function() {
	var sections = $('.navd');
	var nav = $('.nav-links');
	var nav_height = nav.outerHeight();

	var scrollPos = $(document).scrollTop();
    sections.each(function () {
    	var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
	    
	    if (scrollPos >= top && scrollPos <= bottom) {
		    nav.find('a').parent().removeClass('active');
		    sections.removeClass('active');
		      
		    $(this).addClass('active');
		    nav.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
    	}
	});
});