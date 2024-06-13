const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const countryCode = "^(1\\s?)?";
const areaCode = "(\\([0-9]{3}\\)|[0-9]{3})";
const space = "[\\s\\-]?";
const number = "[0-9]{3}[\\s\\-]?[0-9]{4}$";
const Regex = new RegExp(`${countryCode}${areaCode}${space}${number}`);

const validateInput = (input) => {
  if (input === "") {
    alert("Please provide a phone number");
    return;
  }

  const isValid = Regex.test(input);

  const pTagResult = document.createElement("p");

  isValid
    ? pTagResult.classList.add("Valid")
    : pTagResult.classList.add("Invalid");

  pTagResult.appendChild(
    document.createTextNode(
      isValid ? `Valid US number:  ${input}` : `Invalid  US number:  ${input}`
    )
  );
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
