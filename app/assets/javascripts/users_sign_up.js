$(document).ready(function(){
	// $(".new_user_form").submit(function(){
	// 	var form = $(this),
	// 	formData = form.serialize(),
	// 	formUrl = form.attr('action'),
	// 	formMethod = form.attr('method'),
	// 	response = $('.signup_response')

	// 	$.ajax({
	// 		url: formUrl,
	// 		type: formMethod,
	// 		data: formData,

	// 	})

	// 	return false;
	// });


	$('.login_signup_buttons').on("click", '#signup_button', function(e){
		e.preventDefault();
		
		$.get("/signup", function( data ){
			$('.js-sign-up').append(data);
			$('.js-sign-in').hide();
		});

		var name = $("#user_name").val();
		var password = $("#user_password").val();
		var email = $("#user_email").val();
		data = {
			name: name,
			password: password,
			email: email
		}

	});
	
});