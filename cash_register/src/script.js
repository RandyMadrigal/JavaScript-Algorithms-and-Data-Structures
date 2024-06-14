const infoDiv = document.getElementById("infoChange");
const form = document.querySelector("form");
const btnPurchase = document.getElementById("purchase-btn");
const cash = document.getElementById("input-customer");
const screen = document.getElementById("price");
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
  }
});

const updateUI = (arr) => {
  screen.textContent = `RD$ ${price}`;

  cid.forEach((arr) => {
    const pTag = document.createElement("p");
    pTag.appendChild(document.createTextNode(`${arr[0]} : ${arr[1]}`));
    infoDiv.appendChild(pTag);
  });
};

updateUI(cid);
