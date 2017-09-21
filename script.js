// Write your JavaScript here 
$(function () {
	$("#mostrapswd").click(function() {
		if ($(this).html() == 'Show password') {
			$("#password").showPassword();
			$(this).html('Hide password');
		} else {
			$("#password").hidePassword();
			$(this).html('Show password');
		}
	});

	$("#mostrapswd-rt").click(function() {
		if ($(this).html() == 'Show password') {
			$("#rt-password").showPassword();
			$(this).html('Hide password');
		} else {
			$("#rt-password").hidePassword();
			$(this).html('Show password');
		}
	});
	$("#regform").validate({
		rules: {
			name: "required",
			mail: {
				required: true,
				email: true
			},
			password: {
				required: true,
				maxlength: 8
			},
			rtpassword: {
				required: true,
				maxlength: 8
			}
		},
		messages: {
			name: "Por Favor, insira o nome.",
			mail: "Por Favor, insira o email",
			password: {
				required: "Por favor, insira a senha.",
				minlength: "Sua senha deve ter no máxmo 8 caracteres."
			},
			rtpassword: {
				required: "Por favor, confirme a senha.",
				minlength: "Sua senha deve ter no máxmo 8 caracteres."
			}
		},
		
		submitHandler: function (form) {
			form.submit();
		}
	});
});
