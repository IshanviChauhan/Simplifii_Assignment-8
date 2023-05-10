 // Wait for the DOM to be ready
 $(function() {
    $("form[name='registration']").validate({
      rules: {
        firstname: "required",
        lastname: "required",
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 5
        },
        checkbox:"required",
        phone:{
          required:true,
          matches: "[0-9]+",
          minlength:10,
          maxlength:10
        }
      },
      // Specify validation error messages
      messages: {
        firstname: "Please enter your firstname",
        lastname: "Please enter your lastname",
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        email: "Please enter a valid email address",
        phone: {
          required: "Please enter a phone number",
          minlength: "Your phone number must have 10 digits"
        },
        checkbox :"Please select terms and condition"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });