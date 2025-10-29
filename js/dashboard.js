// ✅ Toggle Navbar for Mobile
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// ✅ Learn More Button Functionality
const learnMoreBtn = document.getElementById("learn-more-btn");
const extraContent = document.getElementById("extra-content");

if (learnMoreBtn && extraContent) {
  learnMoreBtn.addEventListener("click", () => {
    extraContent.classList.toggle("show");
    learnMoreBtn.textContent = extraContent.classList.contains("show")
      ? "Hide Info"
      : "Learn More";
  });
}

// ✅ (Optional) Display logged-in user's name if saved in localStorage
const user = JSON.parse(localStorage.getItem("user"));
if (user && user.name) {
  const welcomeMsg = document.getElementById("welcome-msg");
  welcomeMsg.textContent = `Welcome back, ${user.name}! 👩🏽‍🌾`;
}
