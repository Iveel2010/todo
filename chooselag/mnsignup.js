const Email = document.getElementsByClassName("Email")[0];
const Password = document.getElementsByClassName("Password")[0];
const Phonenumber = document.getElementsByClassName("Phonenumber")[0];
const Username = document.getElementsByClassName("username")[0];
const button = document.getElementsByClassName("button")[0];
let todoteleport = 0;

function username() {
  if (Username.value == "") {
    alert("Хэрэглэгчийн нэр хоосон байна");
  } else {
    todoteleport += 1;
    console.log(todoteleport);
  }
}

function email() {
  const aemail = Email.value;
  if (aemail.includes("@")) {
    todoteleport += 1;
    console.log(todoteleport);
  } else {
    alert("Таны имэйлд @ байхгүй");
  }
}
let num = "0123456789";
let alhabet = "abcdefghijklmnopqrstuvwxyz";
function isNumber() {
  const number1 = Phonenumber.value;
  if (number1.length == 8) {
    for (let i = 0; i <= number1.length; i++) {
      if (number1.includes(alhabet[i])) {
        alert("Таны утасны дугаарт үсэг байна, үүнийг засна уу!");
        break;
      } else {
        todoteleport += 1;
        console.log(todoteleport);
        break;
      }
    }
  } else {
    alert("Утасны дугаарын урт 8 байх ёстой!");
  }
}
let isItTrue = false;

function isValidPass() {
  const isPassValid = Password.value;

  if (isPassValid.length < 8) {
    alert("Нууц үгийн урт хамгийн багадаа 8 ба түүнээс дээш байх ёстой!");
  } else {
    todoteleport += 1;
    console.log(todoteleport);
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
  username();
  email();
  isNumber();
  isValidPass();
  if (todoteleport == 4) {
    localStorage.setItem("Username", Username.value);
    localStorage.setItem("email", Email.value);
    localStorage.setItem("Phonenumber", Phonenumber.value);
    localStorage.setItem("Password", Password.value);
    window.location.href = "/chooselag/mnlogin.html";
  }
  todoteleport = 0;
});

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function itIncludes(PhoneNum) {
  for (let i = 0; i < PhoneNum; i++) {
    if (numbers.includes(Number(PhoneNum)[i])) {
      return false;
    } else {
      return true;
    }
  }
}

function itBig(Pass) {
  let Upper = "";

  for (let i = 0; i < Pass.length; i++) {
    if (!itIncludes(Pass[i])) {
      Upper = Pass[i].toUpperCase();

      if (Upper == Pass[i]) {
        isItTrue = true;
      }
    }
  }
}
