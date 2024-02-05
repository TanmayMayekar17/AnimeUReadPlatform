// script.js
function showLoginForm() {
  document.getElementById('loginForm').style.display = 'block';
}

function closeLoginForm() {
  document.getElementById('loginForm').style.display = 'none';
}

function submitForm() {
  // Add your form submission logic here
  alert('Form submitted!');

  // Reset the form values after submission
  document.getElementById('signInForm').reset();

  // Optionally, you can close the form after submission
  closeLoginForm();
}
