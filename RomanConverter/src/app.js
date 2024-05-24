const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
let numeroRomano;

output.innerText = "";

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

const convertirARomano = (romanos, numero) => {
  let resultado = "";

  for (let i in romanos) {
    while (numero >= romanos[i]) {
      resultado += i;
      numero -= romanos[i];
    }
  }

  return resultado;
};

function validateInput(input) {
  let isEmpty = false;

  if (input) {
    isEmpty = true;
  }

  return isEmpty;
}

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();

  numeroRomano = number.value;

  validateInput(numeroRomano)
    ? (output.innerText = convertirARomano(romanos, numeroRomano))
    : (output.innerText = "Please enter a valid number");
});
