
const studentEmail = localStorage.getItem("studentEmail");

if (!studentEmail) {
    // alert("Login required!");
   window.location.href = "Student Login.html";
}

// API Call
fetch(`https://script.google.com/macros/s/AKfycbwRW5sWjtWOvg63VsHAOhObVSQrZqfqrPdFXnIKHqlpweN9Afq6bcilfwX8NYpzfSow/exec?type=getStudent&email=${studentEmail}`)
  .then(res => res.json())
  .then(data => {

      if (data.status !== "success") {
          alert("Student record not found!");
          return;
      }

      // Show Data
    document.getElementById("studentTitle").innerText = data.name + " - Dashboard";
    // document.getElementById("studentName").innerText = "Welcome, " + data.name;

    document.getElementById("totalFees").innerText = "₹" + data.totalFees;
    document.getElementById("paidFees").innerText = "₹" + data.paidFees;

    let remain = data.totalFees - data.paidFees;
    document.getElementById("remainingFees").innerText = "₹" + remain;

    document.getElementById("batchName").innerText = data.batch;
  })
  .catch(err => {
      console.log(err);
      alert("Error loading data");
  });


// ------------------------------
// Logout
// ------------------------------
function logout() {
    localStorage.removeItem("studentEmail");
    window.location.href = "index.html";
}


// ------------------------------
// Button Functions
// ------------------------------
function viewInstallments() {
    alert("Installment details will display here...");
}

function downloadReceipt() {
    alert("Receipt download feature coming soon...");
}

function viewAttendance() {
    alert("Attendance details will show here...");
}
