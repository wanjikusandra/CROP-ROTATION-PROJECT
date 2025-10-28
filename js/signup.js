document.getElementById('signupForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (name && email && password) {

    const user={name,email,password};

    localStorage.setItem('user',JSON.stringify(user));

    alert(`Account created successfully for ${name}!`);
    window.location.href = '/src/index1.html';
  } else {
    alert("Please fill in all fields.");
  }
});
