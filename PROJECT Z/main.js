const form = document.querySelector("form");
const emailInput = document.querySelector('input[type="texte"]');
const passwordInput = document.querySelector('input[type="password"]');

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === "" || password === "") {
    alert("Email or password cannot be empty");
  } else {
    console.log(`Email: ${email}, Password: ${password}`);
    // Add code here to log in to Facebook using the email and password
  }
});
