$(document).ready( function() {
	
	$('.custom_btn').click(function() {
		if($(this).hasClass('custom_btn_animate_in')){
			$(this).removeClass('custom_btn_animate_in').addClass('custom_btn_animate_out');
			$('.signup-form').removeClass('signup-form-animate-in').addClass('signup-form-animate-out');
			$('#my-form-login').removeClass('my-form-login-zoomout').addClass('my-form-login-zoomin');
		}else if($(this).hasClass('custom_btn_animate_out')){
			$(this).removeClass('custom_btn_animate_out').addClass('custom_btn_animate_in');
			$('.signup-form').removeClass('signup-form-animate-out').addClass('signup-form-animate-in');
			$('#my-form-login').removeClass('my-form-login-zoomin').addClass('my-form-login-zoomout');
		}else{
			$(this).addClass('custom_btn_animate_in');
			$('.signup-form').addClass('signup-form-animate-in');
			$('#my-form-login').addClass('my-form-login-zoomout');
		}
	});

	$('#go').on('click', function () {
		$('#correct').addClass('correct-btn-in');
	});

});
