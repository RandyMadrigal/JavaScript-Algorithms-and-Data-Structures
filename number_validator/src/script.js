const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const regex = /^1?[\s-]?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

const validateInput = (input) => {
  if (input === "") {
    alert("Please provide a phone number");
    return;
  }

  console.log(regex.test());

  const pTagResult = document.createElement("p");
  pTagResult.appendChild(document.createTextNode(input));
  result.appendChild(pTagResult);
};

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    validateInput(userInput.value);
  }
});

checkBtn.addEventListener("click", () => {
  validateInput(userInput.value);
});

clearBtn.addEventListener("click", () => {
  userInput.value = "";
  result.textContent = "";
});
