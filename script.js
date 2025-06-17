document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#login-form form').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop form from submitting normally
    window.location.href = 'dashboard.html'; // Redirect to dashboard page
  });
});
