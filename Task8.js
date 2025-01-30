let inputUsername = document.querySelector("#username");
let inputPassword = document.querySelector("#password");
let loginBtn = document.querySelector(".login");
let resetBtn = document.querySelector(".reset");

function login(event) {
  event.preventDefault();
  if (
    inputUsername.value == "Chetan123" &&
    inputPassword.value == "chetan@123"
  ) {
    // alert("Login Successful");
    inputUsername.value = "";
    inputPassword.value = "";
    window.location.href = "Task8successful.html";
  } else {
    alert("Invalid username or password");
  }
}

function reset(event) {
  event.preventDefault();
  inputUsername.value = "";
  inputPassword.value = "";
}

loginBtn.addEventListener("click", login);
resetBtn.addEventListener("click", reset);
