// Possible password characters (symbols, numbers, upper, lower)
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=:.?<>";
const PASSWORD_LENGTH = 15;

function generatePassword() {
  let password = "";
  for (let i = 0; i < PASSWORD_LENGTH; i++) {
    const index = Math.floor(Math.random() * chars.length);
    password += chars[index];
  }
  return password;
}

document.getElementById("generate-btn").addEventListener("click", () => {
  document.getElementById("password1").textContent = generatePassword();
  document.getElementById("password2").textContent = generatePassword();
});
