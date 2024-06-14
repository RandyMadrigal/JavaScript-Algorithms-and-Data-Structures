const infoDiv = document.getElementById("infoChange");

let price = 1.87;

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

const updateUI = (arr) => {
  cid.forEach((arr) => {
    const pTag = document.createElement("p");
    pTag.appendChild(document.createTextNode(`${arr[0]} : ${arr[1]}`));
    infoDiv.appendChild(pTag);
  });
};

updateUI(cid);
