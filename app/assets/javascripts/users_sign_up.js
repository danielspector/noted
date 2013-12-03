$(document).ready(function(){

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