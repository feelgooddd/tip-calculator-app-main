const tipButton = document.querySelectorAll(".tip-button");
const inputCustom = document.getElementById("custom-tip");
const inputBillAmount = document.getElementById("bill-amount");
const inputNumberOFPeople = document.getElementById("number-of-people");

let totalAmount = document.getElementById("total-amount");
let tipAmount = document.getElementById("tip-amount");

inputCustom.addEventListener("input", tipCustom);
inputBillAmount.addEventListener("input", tipCustom);
inputNumberOFPeople.addEventListener("input", tipCustom);

function calculateTip(tip, numberOfPeople) {
  let billInput = document.getElementById("bill-amount").value;
  let tipAmount = document.getElementById("tip-amount");
  tipAmount.textContent =
    "$" + Number((billInput * tip) / numberOfPeople).toFixed(2);
  console.log(tipAmount.textContent);
  console.log(billInput);
}
function calculateTotal(tipAmount, numberOfPeople) {
  let billInput = document.getElementById("bill-amount").value;
  let totalAmount = document.getElementById("total-amount");
  totalAmount.textContent =
    "$" + Number((billInput * tipAmount) / numberOfPeople).toFixed(2);
  //debugging consolelogs
  console.log(totalAmount.textContent);
  console.log(billInput);
  console.log(tipAmount);
}
function tipFive() {
  let numberOfPeople = document.getElementById("number-of-people").value;
  calculateTip(0.05, numberOfPeople);
  calculateTotal(1.05, numberOfPeople);
}
function tipTen() {
  let numberOfPeople = document.getElementById("number-of-people").value;
  calculateTip(0.1, numberOfPeople);
  calculateTotal(1.1, numberOfPeople);
}
function tipFifteen() {
  let numberOfPeople = document.getElementById("number-of-people").value;
  calculateTip(0.15, numberOfPeople);
  calculateTotal(1.15, numberOfPeople);
}
function tipTwentyFive() {
  let numberOfPeople = document.getElementById("number-of-people").value;
  calculateTip(0.25, numberOfPeople);
  calculateTotal(1.25, numberOfPeople);
}
function tipFifty() {
  let numberOfPeople = document.getElementById("number-of-people").value;
  calculateTip(0.5, numberOfPeople);
  calculateTotal(1.5, numberOfPeople);
}
function tipCustom() {
  let tipAmount = document.getElementById("custom-tip").value / 100;
  let numberOfPeople = document.getElementById("number-of-people").value;

  calculateTip(tipAmount, numberOfPeople);
  calculateTotal(1 + tipAmount, numberOfPeople);
}

function resetNumbers() {
  inputCustom.value = "0";
  inputBillAmount.value = "0";
  inputNumberOFPeople.value = "0";
  totalAmount.textContent = "$0.00";
  tipAmount.textContent = "$0.00";
  console.log("meow");
}
