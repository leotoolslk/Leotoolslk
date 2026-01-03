// Example: Age Calculator function
function calculateAge() {
  let dobInput = document.getElementById("dob").value;
  if (!dobInput) {
    document.getElementById("result").innerText = "Please select your date of birth!";
    return;
  }
  let dob = new Date(dobInput);
  let today = new Date();

  let ageYears = today.getFullYear() - dob.getFullYear();
  let ageMonths = today.getMonth() - dob.getMonth();
  let ageDays = today.getDate() - dob.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  document.getElementById("result").innerText =
    `Your Age: ${ageYears} Years, ${ageMonths} Months, ${ageDays} Days`;
}

// अन्य tools के लिए JS functions भी इसी main.js में add कर सकते हो