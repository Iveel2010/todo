const Email = document.getElementsByClassName("Email")[0];
const Password = document.getElementsByClassName("Password")[0];
const button = document.getElementsByClassName("button")[0];
let todoteleport = 0;
let localStoragePassword = localStorage.getItem("Password");
let localStorageemial = localStorage.getItem("email");
console.log(localStoragePassword);
console.log(localStorageemial);
function email() {
  const aemail = Email.value;

  if (aemail == localStorageemial) {
    todoteleport += 1;
  } else {
    alert("Имэйл эсвэл нууц үг буруу байна");
  }
}
let num = "0123456789";
let alhabet = "abcdefghijklmnopqrstuvwxyz";

let isItTrue = false;

function isValidPass() {
  const isPassValid = Password.value;

  if (isPassValid == localStoragePassword) {
    todoteleport += 1;
  } else {
    alert("Имэйл эсвэл нууц үг буруу байна");
  }
}

function myFunction() {
  if (Password.type === "password") {
    Password.type = "text";
  } else {
    Password.type = "password";
  }
}

button.addEventListener("click", function () {
  email();
  isValidPass();
  if (todoteleport == 2) {
    window.location.href = "/chooselag/mntodo-list.html";
  }
  todoteleport = 0;
});
