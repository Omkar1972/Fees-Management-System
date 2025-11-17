// HARD CODED ADMIN LOGIN CREDENTIALS
const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "admin123";

function showMsg(text, type) {
  document.getElementById("msg").innerHTML =
    `<div class="msg ${type}">${text}</div>`;
}

document.getElementById("adminLoginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (email === ADMIN_EMAIL && pass === ADMIN_PASSWORD) {
    localStorage.setItem("adminLogin", "true");

    showMsg("Login Success! Redirecting...", "success");

    setTimeout(() => {
      window.location.href = "admin-dashboard.html";
    }, 1000);
  } else {
    showMsg("Invalid Admin Email or Password!", "error");
  }
});
