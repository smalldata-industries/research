

$(document).ready(function() {
	var height = $(window).height();
			
	$(window).bind('resize', function() {
		height = $(window).height();
		resizeDiv(height);
	});

	$('a[href="#contact"]').click(function(e) {
		e.preventDefault();
		$('article.contact-us').fadeIn('fast');
		$('body').css({'overflow-y':'hidden'});
	});

	$('#contact_form').submit(function(e) {
    e.preventDefault();
    contactPost();
  });
	
	resizeDiv(height);
});

function resizeDiv(height) {
	$('article.contact-us').css({'height': height + 'px'});
}




// var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// function contactPost() {
//   if(re.test($('#email').val())) {
// 		$('.error').removeClass('error');
// 		$.ajax({
// 	    type: "POST",
// 	    url: "../scripts/contact.php",
// 	    dataType: "json",
// 	    data: $('#contact_form').serialize(),
// 	    success: contactResponse
// 	  });
// 	  $('#submit').val("Sending");
// 	} else {
// 		$('#email').val('').attr('placeholder','Invalid Email Address').addClass('error');
// 	}
// }
//
//
// function contactResponse(json) {
//   if(json.status == 'success') {
//   	// $('#email').val('');
//   	// $('#message').val("Success");
// 		$('#contact_form').hide();
// 		$('#confirmation').fadeIn('fast');
// 		setTimeout(function() {
// 			$('#confirmation').hide();
// 			$('#contact_form').fadeIn('slow');
// 		}, 5000);
//   }
//
//   if(json.status == 'failure') {
// 		if(json.error.firstName) {
// 			$('#firstName').attr('placeholder','Invalid First Name').addClass('error');
// 		}
// 		if(json.error.lastName) {
// 			$('#lastName').attr('placeholder','Invalid Last Name').addClass('error');
// 		}
// 		if(json.error.email) {
// 			$('#email').val('').attr('placeholder','Invalid Email Address').addClass('error');
// 		}
// 		if(json.error.message) {
// 			$('#message').attr('placeholder','Invalid Message').addClass('error');
// 		}
//   }
// 	$('#submit').val("Send");
// }
