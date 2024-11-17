// Select the form and message output element
const form = document.getElementById('accountForm');
const message = document.getElementById('message');

// Listen for form submission
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from refreshing the page

  // Get input values
  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Validate input fields
  if (!validateEmail(email)) {
    message.textContent = 'Invalid email address.';
    return;
  }

  if (phone.length < 10 || isNaN(phone)) {
    message.textContent = 'Phone number must be at least 10 digits.';
    return;
  }

  if (password !== confirmPassword) {
    message.textContent = 'Passwords do not match.';
    return;
  }

  if (password.length < 6) {
    message.textContent = 'Password must be at least 6 characters long.';
    return;
  }

  // If validation passes
  message.style.color = 'green';
  message.textContent = 'Account created successfully!';

  // Clear the form
  form.reset();
});

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
