// ------------------------------
// Fetch Student Data From Google Sheet
// ------------------------------

const studentEmail = localStorage.getItem("studentEmail");

if (!studentEmail) {
    // alert("Login required!");
    window.location.href = "Student dashboard.html";
}

// API Call
fetch(`https://script.google.com/macros/s/AKfycbziyK9JVnLXn4ikZuj4GcEbRYGaItWdCM_KpotcN5xTYk3yk1Ff9TLLasE1eE07VR9a/exec?type=getStudent&email=${studentEmail}`)
  .then(res => res.json())
  .then(data => {

      if (data.status !== "success") {
          alert("Student record not found!");
          return;
      }

      // Display student data
      document.getElementById("studentTitle").innerText =
          data.name + " - Dashboard";

      document.getElementById("totalFees").innerText =
          "₹" + data.totalFees;

      document.getElementById("paidFees").innerText =
          "₹" + data.paidFees;

      let remaining = data.totalFees - data.paidFees;

      document.getElementById("remainingFees").innerText =
          "₹" + remaining;

      document.getElementById("batchName").innerText =
          data.batch;
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
