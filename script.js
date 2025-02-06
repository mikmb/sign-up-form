const submitButton = document.querySelector("button[type='submit']");
const passwords = Array.from(
  document.querySelectorAll("input[type='password']")
);
const passwordsDoNotMatch = document.querySelector("#pw-do-not-match");

function checkPasswords(passwords) {
  return (
    passwords[0].value.trim().length &&
    passwords[1].value.trim().length &&
    passwords[0].value === passwords[1].value
  );
}

passwords.forEach((passwordInput) => {
  passwordInput.addEventListener("input", () => {
    if (!checkPasswords(passwords)) {
      passwords.forEach((pw) => {
        pw.style.borderColor = "red";
        passwordsDoNotMatch.style.display = "block";
      });
    } else {
      passwords.forEach((pw) => {
        pw.style.borderColor = "#e5e5e5";
        passwordsDoNotMatch.style.display = "none";
      });
    }
  });
});
function submitForm(event, passwordsMatch) {
  if (!passwordsMatch) {
    event.preventDefault();
    alert("Passwords don't match or are empty. Please try again.");
  }
}
submitButton.addEventListener("click", (e) =>
  submitForm(e, checkPasswords(passwords))
);
