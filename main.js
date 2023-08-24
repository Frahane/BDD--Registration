$(function() {
  $('#registration-form').submit(function(event) {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var password = $('#password').val();
    var email = $('#email').val();
    var error = false;
    

    $('.error-message').empty();

    if (firstName.length < 3) {
      $('#first-name-error').text('First name should be at least 3 characters.');
      error = true;
    }

    if (lastName.length < 3) {
      $('#last-name-error').text('Last name should be at least 3 characters.');
      error = true;
    }

    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordPattern.test(password)) {
      $('#password-error').text('Password should contain at least 8 characters with one uppercase letter and one number.');
      error = true;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      $('#email-error').text('Please enter a valid email address.');
      error = true;
    }
    
    if (error) {
      event.preventDefault();
      // Prevent form submission if there are errors
      return false;
    }
   
    else {
      // Simulate successful registration by showing a success message
      $('#registration-success').css({
        'box-sizing': 'border-box',
        'padding': '20px',
        'margin': '4px auto',
        'max-width': '98%',
        'background-color': '#FFFFFF',
        'border-radius': '50%',
        'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.1)'
      }).text('Registration successful! Welcome, ' + firstName + ' ' + lastName + '!');
      // Clear form inputs
      $('#firstName').val('');
      $('#lastName').val('');
      $('#password').val('');
      $('#email').val('');
      event.preventDefault();
    }
  });
  
  
 
});