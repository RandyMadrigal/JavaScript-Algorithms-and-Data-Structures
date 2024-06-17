const infoDiv = document.getElementById("infoChange");
const form = document.querySelector("form");
const btnPurchase = document.getElementById("purchase-btn");
const cash = document.getElementById("input-customer");
const screen = document.getElementById("price");
const changeDue = document.getElementById("change-due");
const price = 1.87;

let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

form.addEventListener("click", (e) => {
  e.preventDefault();
});

btnPurchase.addEventListener("click", () => {
  if (cash.value < price) {
    alert("Customer does not have enough money to purchase the item");
    cash.value = "";
    return;
  }

  if (Number(cash.value) === price) {
    changeDue.textContent = "No change due - customer paid with exact cash";
    cash.value = "";
    return;
  }

  let change = Number(cash.value) - price; //devolver al cliente
  let reversedCid = [...cid].reverse(); // devolver con las mayores primero.
  let totalCID = parseFloat(
    cid
      .map((total) => total[1])
      .reduce((prev, curr) => prev + curr)
      .toFixed(2)
  ); //Total de dinero en caja.

  for (let i = 0; i < cid.length; i++) {
    if (cash.value < cid[i][1]) {
      change = (cash.value - price).toFixed(2);
      cid[i][1] = (cid[i][1] - change).toFixed(2);
      break;
    }
  }

  updateUI(cid);
});

const updateUI = (arr) => {
  screen.textContent = `RD$ ${price}`;

  if (infoDiv.childElementCount === arr.length) {
    infoDiv.innerHTML = "";
  }

  cid.forEach((arr) => {
    const pTag = document.createElement("p");
    pTag.appendChild(document.createTextNode(`${arr[0]} : ${arr[1]}`));
    infoDiv.appendChild(pTag);
  });
};

updateUI(cid);
