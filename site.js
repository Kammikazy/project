
			$(document).ready(function() {
				 framework: 'bootstrap',

    $('.form-register').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
           username: {
                validators: {
                        stringLength: {
                        min: 4,
                    },
                        notEmpty: {
                        message: 'Insira o username'
                    },
						remote : {
						url : './usermameverica',
						message : 'Utilizador ja existe',
						data : {
							type : 'username'
						},
						type : 'POST',
						success: function(data,) {
	    			valid:true
	    		},
	    		error: function(errorThrown) {
	    			valid:false
	    		}
					},
                }
            },
             password: {

                validators: {
                     stringLength: {
                        min: 8,
                    },
					identical: {
                    field: 'password_again',
                    message: 'The password and its confirm are not the same'
                },

                    notEmpty: {
                        message: 'Insira Password'
                    }
                }

            },
				password_again: {

                validators: {
                     stringLength: {
                        min: 8,
                    },
					identical: {
                    field: 'password',
                    message: 'The password and its confirm are not the same'
                },
                    notEmpty: {
                        message: 'password'
                    },
					password_again : 'password must match'
                }
				},
            email: {

                validators: {

                    notEmpty: {
                        message: 'Please supply your email address'
                    },

                }
            }

            }

        })

});
