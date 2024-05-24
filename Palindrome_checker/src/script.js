const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const form = document.getElementById("myForm");
const result = document.getElementById("result");
let palindrome;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  InformationDiv();

  switch (textInput.value.trim().length) {
    case 0:
      alert("Please input a value");
      break;

    case 1:
      result.innerText = `${textInput.value} is a palindrome`;
      reset();
      break;

    default:
      isPalindrome(textInput.value);
      reset();
  }
});

function reset() {
  textInput.value = "";
}

function InformationDiv() {
  result.classList.remove("hide");
}

function cleanInput(arg) {
  const regEx = /[^A-Za-z0-9]/gi;
  return arg.replace(regEx, "").toLowerCase();
}

function isPalindrome(arg) {
  palindrome = cleanInput(arg).split("").reverse().join("");

  if (palindrome === cleanInput(arg)) {
    result.innerText = `${textInput.value} is a palindrome`;
  } else {
    result.innerText = `${textInput.value} is not a palindrome`;
  }
}
