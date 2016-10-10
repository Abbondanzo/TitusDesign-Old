// Full function list
function checkOpen() {
	var width = $('.person').width();
	$('.p-opener').width(width);
	var height = $('.p-image').height();
	if (height===0) {
		$('.p-opener').height(width);
		$('.p-opener').css('line-height',width+'px');
	} else {
	$('.p-opener').height(height);
	$('.p-opener').css('line-height',height+'px');
	}
};
function heightFix() {
	var hheight = $('.home-text').height();
	$('.home-text').css('max-height','100vh');
	$('#home').css('min-height',hheight+40+'px');
}
counter = 1;
var images = ['assets/img/1.jpg','assets/img/2.jpg','assets/img/3.jpg','assets/img/4.jpg']
function backGrounder() {
	if(counter>=images.length) {
		counter=0;
	}
	$('#home').fadeTo('slow',0,function() {
		$(this).css('background','url('+images[counter]+')');
	}).fadeTo('slow',1);	
	setTimeout(function() {
		counter++;
		backGrounder();
	},15e3);
}
var height1;
	

// Running functions
jQuery(document).ready(function() {
	checkOpen();
	heightFix();
	window.height1 = $('.team-content').height();
	setTimeout(function() {
		backGrounder();
	},15e3);
});
$(window).on('resize',function() {
	checkOpen();
	heightFix();
});

// Slider information
$('.ss1').on('mouseover', function() {
	$(this).children('.slider-info').css('display','block');
	$(this).children('.slider-info').stop().animate({
		opacity: 1
	}, 200 );
	$(this).css('background','#0eaedd');
	$(this).children('img').stop().animate({
		opacity: 0.3
	}, 200 );
});
$('.ss1').on('mouseout', function() {
	$(this).children('.slider-info').stop().animate({
		opacity: 0
	}, 200, function() {
		$(this).children('.slider-info').css('display','none');
	} );
	$(this).children('img').stop().animate({
		opacity: 1
	}, 200 );

});


// Rest
if($(window).width() > 960) {
	$('.p-image').on('mouseover', function() {
		$(this).children('.p-opener').css('display','block');
	});
	$('.p-image').on('mouseout',function() {
		if ($(this).parent().hasClass('active')) {
			return false;
		} else {
			$(this).children('.p-opener').css('display','none');
		}
	})
	var height1 = window.height1;
	
	var clickItem = 0;
	$('.p-image').click(function(e) {
		var clickItem = $(this).parent().index(); // Of team item return #
		// Opener hehe
		var cI2 = $(this).closest('.person').prevAll().length;
		if (height1 <= 200) {
			height1 = $('.team-content').height(); // 0 px jump fix
		}
		var bio = $('.bio').eq(cI2-1);
		if (bio.hasClass('open')) {
			bio.removeClass('open');
			$('.team-content').css('min-height',height1+'px')
		} else {
			$('.bio').removeClass('open');
			var height2 = bio.height();
			$('.team-content').css('min-height',height1+height2+54+'px')
			bio.addClass('open');

		}
		$('.p-opener').css('display','none');
		$('img').removeClass('hover');
		$('.p-image').parent().removeClass('active');
		$(this).parent().addClass('active');
		$(this).children('.p-opener').css('display','block');
		var opener = $(this).children('.p-opener');
		if(opener.hasClass('rotated')) {
			opener.rotate({ endDeg:0, persist:true }); // Check if open and reset if is
			opener.removeClass('rotated');
			$(this).parent().removeClass('active');	
		} else {
			$('.p-opener').removeClass('rotated'); // Remove from other team items before adding to new
			$('.p-opener').rotate({ endDeg:0, persist:true });
			opener.rotate({ endDeg:45, persist:true });
			opener.addClass('rotated');
		}
		if($(this).hasClass('active')) {
			if(opener.hasClass('rotated')) {
				$('img').removeClass('hover');
				return false;
			} else {
				$('.p-image').removeClass('active');
			}
		} else {
		$(this).addClass('active');
		$(this).children('img').addClass('hover');
		}
	})

	// Removal 
	function clearMe() {
	    var container = $('.person');
	    var opener = $('.person').children().children('.p-opener');
	    if(opener.hasClass('rotated')) {
			opener.rotate({ endDeg:0, persist:true });
			opener.removeClass('rotated');
		}
		if (container.children().hasClass('active')) {
			container.children().removeClass('active');
		}
		container.children().children('.p-opener').css('display','none');
		container.children().children('img').removeClass('hover');
	}   
	$(document).on('click',function (e) {
	    var container = $('.person');
	    var bioo = $('.open')
	    var active = $('.active')
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	if (!bioo.is(e.target) && bioo.has(e.target).length === 0 && !active.is(e.target) && active.has(e.target).length===0) {
	    		clearMe();
	    		container.removeClass('active');
	    		$('.bio').removeClass('open');
	    		$('.team-content').css('min-height',height1+'px')
	    	}
		}
	});
};
$('.message').keyup(function() {
	var filler = $(this).val().length;
	console.log(filler);
	$('#charCount').text('Characters: '+filler+'/1000');
});
$("#form-fill").submit(function(e) {
});