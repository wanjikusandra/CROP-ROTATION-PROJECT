const savedUser = JSON.parse(localStorage.getItem('user'));
 const welcomeMsg = document.getElementById('welcomeMsg');
 const logoutBtn = document.getElementById('logoutBtn');

 if(!savedUser){
    alert('please log in first');
    window.location.href='/src/index.html';
 }
 else{
    welcomeMsg.textContent=`welcome, ${savedUser.name}! 🌾`;
 }
 logoutBtn.addEventListener('click', function(){
    localStorage.removeItem('user');
    alert('you have been logged out.');
    window.location.href='/src/index.html';