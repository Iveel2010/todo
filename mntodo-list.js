let hourInput = document.getElementById("hourInput");
let minuteInput = document.getElementById("minuteInput");
let addtagbtn = document.getElementsByClassName("button")[0];
let listContainer = document.getElementById("listContainer");
let listnameinput = document.getElementById("listnameinput");
let deletebtn = document.getElementById("deletebtn");
let editbtn = document.getElementById("editbtn");
let taginput = document.getElementById("taginput");
let Checkbox = document.getElementsByClassName("container3")[0];
let completebtn = document.getElementById("editbtn");
const currentTime = document.querySelector("h1"),
  content = document.querySelector(".content"),
  selectMenu = document.querySelectorAll("select"),
  setAlarmBtn = document.querySelector("button");
let userlogo = document.getElementsByClassName("userlogo")[0];
let userimg = document.getElementsByClassName("userimg")[0];
let userimgaddress = document.getElementsByClassName("userimgaddress")[0];
let userimginput = document.getElementById("userimginput");
const cloneuserimginput = userimginput.cloneNode(true);
let userimgeditbtn = document.getElementById("userimgeditbtn");
const cloneuserimgeditbtn = userimgeditbtn.cloneNode(true);
let username = document.getElementsByClassName("username")[0];
let useremail = document.getElementsByClassName("useremail")[0];
let userphonenumber = document.getElementsByClassName("userphonenumber")[0];
let result = 0;
function addtag() {
  if (listContainer.children.length > 7) {
    alert("Жагсаалтын дээд хэмжээ нь 7 ");
  } else {
    if (listnameinput.value == "") {
      alert("жагсаалтын нэр хоосон байна");
    } else {
      lol = result++;
      let list = document.createElement("div");
      list.className = "list";
      list.id = lol;
      let btns = document.createElement("div");
      btns.className = "btns";
      let inputs = document.createElement("div");
      inputs.className = "inputs";
      const cloneeditbtn = editbtn.cloneNode(true);
      const clonedeletebtn = deletebtn.cloneNode(true);
      const clonecheckbox = Checkbox.cloneNode(true);
      const cloneinput = taginput.cloneNode(true);
      btns.appendChild(clonedeletebtn);
      btns.appendChild(cloneeditbtn);

      inputs.appendChild(clonecheckbox);
      inputs.appendChild(cloneinput);
      list.appendChild(inputs);
      list.appendChild(btns);
      listContainer.appendChild(list);
      let input1 = document.getElementById(lol).children[0].children[1];
      let input2 = input1.children[0];
      input2.readOnly = true;

      let editbtntag = document.getElementById(lol).children[1].children[0];
      let deletebtntag = document.getElementById(lol).children[1].children[1];
      let checkboxtag =
        document.getElementById(lol).children[0].children[0].children[0];
      let inputok = (input2.value = listnameinput.value);
      editbtntag.addEventListener("click", function () {
        if (input2.readOnly == true) {
          input2.readOnly = false;
          editbtntag.className = "done-button";
          input1.className = "form2-control";
        } else {
          if (input2.value == "") {
            alert("list is empty");
          } else {
            editbtntag.className = "edit-button";
            input1.className = "form-control";
            input2.readOnly = true;
          }
        }
      });
      deletebtntag.addEventListener("click", function () {
        list.remove();
      });
      listnameinput.value = "";
      checkboxtag.addEventListener("click", function () {
        if (input2.readOnly == false) {
          alert("засварлах товчлуур ажиллаж байна");
          checkboxtag.checked = false;
        } else {
          if (checkboxtag.checked == true) {
            input2.style.textDecoration = "line-through solid";
            editbtntag.remove();
            deletebtntag.style.marginLeft = "50px";
          } else {
            input2.style.textDecoration = "";
            deletebtntag.remove();
            btns.appendChild(clonedeletebtn);
            btns.appendChild(cloneeditbtn);
            deletebtntag.style.marginLeft = "";
          }
        }
      });
    }
  }
}
addtagbtn.addEventListener("click", function () {
  addtag();
});

userlogo.addEventListener("click", function () {
  if (userimgaddress.children.length == 2) {
  } else {
    userimgaddress.appendChild(cloneuserimginput);
    userimgaddress.appendChild(cloneuserimgeditbtn);
    cloneuserimgeditbtn.addEventListener("click", function () {});
  }
});
cloneuserimgeditbtn.addEventListener("click", function () {
  if (cloneuserimginput.children[0].value == "") {
    alert("img address is empty");
  } else {
    userimg.src = cloneuserimginput.children[0].value;
    cloneuserimgeditbtn.remove();
    cloneuserimginput.remove();
  }
});

const Username = localStorage.getItem("Username");
username.innerHTML = `Сайн уу ${Username}`;
const Email = localStorage.getItem("email");
useremail.innerHTML = `Email : ${Email}`;
const Phonenumber = localStorage.getItem("Phonenumber");
userphonenumber.innerHTML = `Утасны дугаар : ${Phonenumber}`;
