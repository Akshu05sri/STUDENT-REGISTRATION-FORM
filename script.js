document.getElementById("regForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from submitting

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("message");

  // Validation
  if (password !== confirmPassword) {
    message.style.color = "red";
    message.textContent = "Passwords do not match!";
    return;
  }

  if (phone.length !== 10 || isNaN(phone)) {
    message.style.color = "red";
    message.textContent = "Phone number must be 10 digits!";
    return;
  }

  // If all validations pass
  message.style.color = "green";
  message.textContent = "Registration Successful! 🎉";

  // Reset form
  document.getElementById("regForm").reset();
});
