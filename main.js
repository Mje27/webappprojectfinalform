
window.addEventListener('DOMContentLoaded', () => {
  const themes = ['light', 'dark', 'orange'];

  const themeSelector = document.createElement('select');
  themeSelector.id = 'theme-selector';

  themes.forEach(theme => {
    const option = document.createElement('option');
    option.value = theme;
    option.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
    themeSelector.appendChild(option);
  });

  document.body.appendChild(themeSelector); // place at the end

  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.add(savedTheme);
  themeSelector.value = savedTheme;

  themeSelector.addEventListener('change', () => {
    document.body.classList.remove(...themes);
    const selected = themeSelector.value;
    document.body.classList.add(selected);
    localStorage.setItem('theme', selected);
  });
});



window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const height = document.getElementById("height").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();

    let valid = true;

    // Clear old errors
    ["fnameError", "lnameError", "heightError", "emailError", "ageError"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = "";
    });

    // First Name Validation (letters only)
    if (!/^[A-Za-z]+$/.test(fname)) {
      document.getElementById("fnameError").textContent = "First name must contain only letters.";
      valid = false;
    }

    // Last Name Validation (letters only)
    if (!/^[A-Za-z]+$/.test(lname)) {
      document.getElementById("lnameError").textContent = "Last name must contain only letters.";
      valid = false;
    }

    // Height Validation
    if (!/^\d+$/.test(height) || parseInt(height) > 300) {
      document.getElementById("heightError").textContent = "Height must be a number not exceeding 300cm.";
      valid = false;
    }

    // Email validation
    if (!email.endsWith("@gmail.com")) {
      document.getElementById("emailError").textContent = "Email must end with @gmail.com.";
      valid = false;
    }

    // Age validation
    if (!/^\d+$/.test(age) || parseInt(age) < 18 || parseInt(age) > 25) {
      document.getElementById("ageError").textContent = "Age must be between 18 and 25.";
      valid = false;
    }

    if (valid) {
      alert("🎉 You have successfully registered as a basketball player!");
      form.reset();
    } else {
      alert("⚠️ Please fix the errors in the form before submitting.");
    }
  });
});
