const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const form = document.getElementById("myForm");
const result = document.getElementById("result");
let palindrome = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  switch (textInput.value.trim().length) {
    case 0:
      alert("Please input a value");
      break;
    case 1:
      result.innerText = `${textInput.value} is a palindrome`;
      break;
    default:
      isPalindrome(textInput.value);
  }
});

function validate() {}

function isPalindrome(word) {
  palindrome = [...word.toLowerCase()];
  console.log(palindrome.reverse().join(""));
}
