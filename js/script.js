document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Retrieving the saved user
  const savedUser = JSON.parse(localStorage.getItem('user'));

  if (!savedUser) {
    alert('No account found. Please sign up first.');
    return;
  }

  if (email === savedUser.email && password === savedUser.password) {
    alert(`Welcome back, ${savedUser.name}! 🌾`);

    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid email or password. Please try again.');
  }
});
