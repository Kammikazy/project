
			$(document).ready(function() {
				 framework: 'bootstrap',

    $('.perfilupdate').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
				oldpassword: {

					 validators: {
								stringLength: {
									 min: 8,
							 },

							 notEmpty: {
									 message: 'Insira Password'
							 }
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



			}
				/*		submitHandler: function(form) {
								$.ajax({
									url : 'AlteraUserpassword',
									message : 'Username has been taken',
									result: {
									 type : 'oldpassword',
									 datatype: "json",
									},
									type : 'POST',
									success: function (result) { console.log(result); if(result.status == 200){ self.isEditMode(!self.isEditMode()); } }, error: function(result){ console.log(result); } });

	}
*/

        })

});
