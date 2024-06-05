const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const form = document.getElementById("cardForm");

output.innerText = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const romanos = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const convertirARomano = (romanos, num) => {
  let resultado = "";

  for (let i in romanos) {
    while (num >= romanos[i]) {
      resultado += i;
      num -= romanos[i];
    }
  }
  return resultado;
};

function validateInput(input) {
  let text = "";
  let isValid = true;
  const num = parseInt(input);

  if (input.trim() === "" || isNaN(num)) {
    text = "Please enter a valid number";
    isValid = false;
  }

  if (num < 1) {
    text = "Please enter a number greater than or equal to 1";
    isValid = false;
  }

  if (num >= 4000) {
    text = "Please enter a number less than or equal to 3999";
    isValid = false;
  }

  return { text, isValid };
}

convertBtn.addEventListener("click", () => {
  const { text, isValid } = validateInput(number.value);

  if (isValid) {
    output.innerText = convertirARomano(romanos, number.value);
  } else {
    output.innerText = text;
  }
});
