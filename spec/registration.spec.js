// Import necessary libraries and the jQuery code file

const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM('');
global.window = window;
global.document = window.document;
global.jQuery = require('jquery');
require('../src/js/registration.js');

describe("Registration Form Validation", function() {
  // Test case: Validate first name
  it("should validate first name", function() {
    // Simulate form submission
    $('#firstName').val('Ab');
    $('#registration-form').submit();

    // Assert that the error message is displayed
    expect($('#first-name-error').text()).toContain('First name should be at least 3 characters.');
  });

  // Test case: Validate last name
  it("should validate last name", function() {
    // Simulate form submission
    $('#lastName').val('D');
    $('#registration-form').submit();

    // Assert that the error message is displayed
    expect($('#last-name-error').text()).toContain('Last name should be at least 3 characters.');
  });

  // Test case: Validate password
  it("should validate password", function() {
    // Simulate form submission
    $('#password').val('password');
    $('#registration-form').submit();

    // Assert that the error message is displayed
    expect($('#password-error').text()).toContain('Password should contain at least 8 characters with one uppercase letter and one number.');
  });

  // Test case: Validate email
  it("should validate email", function() {
    // Simulate form submission
    $('#email').val('invalid-email');
    $('#registration-form').submit();

    // Assert that the error message is displayed
    expect($('#email-error').text()).toContain('Please enter a valid email address.');
  });

  // Test case: Successful registration
  it("should register successfully", function() {
    // Simulate valid form submission
    $('#firstName').val('John');
    $('#lastName').val('Doe');
    $('#password').val('Password1');
    $('#email').val('john@example.com');
    $('#registration-form').submit();

    // Assert that the success message is displayed
    expect($('.success-message').text()).toContain('Registration successful! Welcome, John Doe!');
  });
});
