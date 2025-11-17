const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbziyK9JVnLXn4ikZuj4GcEbRYGaItWdCM_KpotcN5xTYk3yk1Ff9TLLasE1eE07VR9a/exec";

// show message
function showMsg(text, type) {
  document.getElementById("msg").innerHTML =
    `<div class="msg ${type}">${text}</div>`;
}

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const body = new URLSearchParams({ email, password, action: "login" }).toString();

  try {
    const res = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body
    });

    const result = await res.json();

    if (result.status === "success") {

      // Save login session
      localStorage.setItem("studentLogin", email);

      showMsg("Login successful! Redirecting...", "success");

      setTimeout(() => {
        window.location.href = "Student dashboard.html";
      }, 1200);

    } else {
      showMsg("Invalid email or password!", "error");
    }

  } catch (error) {
    showMsg("Network error!", "error");
  }
});
