const generateBtn = document.getElementById("generate-btn");
const outputField1 = document.getElementById("output-field-1");
const outputField2 = document.getElementById("output-field-2");
const outputField3 = document.getElementById("output-field-3");
const outputField4 = document.getElementById("output-field-4");
const copyMsg1 = document.getElementById("copy-msg-1");
const copyMsg2 = document.getElementById("copy-msg-2");
const copyMsg3 = document.getElementById("copy-msg-3");
const copyMsg4 = document.getElementById("copy-msg-4");
const allChars = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&'()*+,-./:;=?@[\\]^_{|}~<>\``;
// const allCharsArr = allChars.split("");

generateBtn.addEventListener("click", function () {
  const password1 = generatePass();
  outputField1.value = password1;
  outputField1.style.backgroundImage = "none";

  const password2 = generatePass();
  outputField2.value = password2;
  outputField2.style.backgroundImage = "none";

  const password3 = generatePass();
  outputField3.value = password3;
  outputField3.style.backgroundImage = "none";

  const password4 = generatePass();
  outputField4.value = password4;
  outputField4.style.backgroundImage = "none";

  // console.log(password1);
  // console.log(password2);
  // console.log(password3);
  // console.log(password4);
});

// Copy password to clipboard by clicking on input field
outputField1.addEventListener("click", function () {
  //Copy to clipboard
  navigator.clipboard.writeText(outputField1.value);

  //Show "copied" text
  copyMsg1.classList.add("copied");

  let temp = setInterval(function () {
    copyMsg1.classList.remove("copied");
    clearInterval(temp);
  }, 600);
});

outputField2.addEventListener("click", function () {
  navigator.clipboard.writeText(outputField2.value);

  //Show "copied" text
  copyMsg2.classList.add("copied");

  let temp = setInterval(function () {
    copyMsg2.classList.remove("copied");
    clearInterval(temp);
  }, 600);
});

outputField3.addEventListener("click", function () {
  navigator.clipboard.writeText(outputField3.value);

  //Show "copied" text
  copyMsg3.classList.add("copied");

  let temp = setInterval(function () {
    copyMsg3.classList.remove("copied");
    clearInterval(temp);
  }, 600);
});

outputField4.addEventListener("click", function () {
  navigator.clipboard.writeText(outputField4.value);

  //Show "copied" text
  copyMsg4.classList.add("copied");

  let temp = setInterval(function () {
    copyMsg4.classList.remove("copied");
    clearInterval(temp);
  }, 600);
});

function generatePass() {
  let pw = "";

  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * 94);
    pw += allChars[randomIndex];
  }

  return pw;
}
