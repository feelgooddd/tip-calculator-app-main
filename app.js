const tipButton = document.querySelectorAll(".tip-button");
const inputCustom = document.getElementById("custom-tip");
const inputBillAmount = document.getElementById("bill-amount");
const inputNumberOFPeople = document.getElementById("number-of-people");
const invalidBill = document.getElementById("invalid-amount");
const invalidPeople = document.getElementById("invalid-number-of-people");

let totalAmount = document.getElementById("total-amount");
let tipAmount = document.getElementById("tip-amount");

inputCustom.addEventListener("input", tipCustom);
inputBillAmount.addEventListener("input", tipCustom);
inputNumberOFPeople.addEventListener("input", tipCustom);

function calculateTip(tip, numberOfPeople) {
  let billInput = Number(document.getElementById("bill-amount").value);
  let tipAmount = document.getElementById("tip-amount");

  invalidBill.classList.add("hidden");
  invalidPeople.classList.add("hidden");
  tipAmount.textContent = "$" + ((billInput * tip) / numberOfPeople).toFixed(2);

  numberOfPeople = parseFloat(numberOfPeople);

  handleUserInputError(tipAmount);
  handleBillInputError();
  if (isNaN(billInput)) {
    invalidBill.classList.remove("hidden");
  }
  if (isNaN(numberOfPeople)) {
    invalidPeople.classList.remove("hidden");
  }
}
function calculateTotal(tipAmount, numberOfPeople) {
  let billInput = document.getElementById("bill-amount").value;
  let totalAmount = document.getElementById("total-amount");
  totalAmount.textContent =
    "$" + Number((billInput * tipAmount) / numberOfPeople).toFixed(2);
  handleUserInputError(totalAmount);
  //debugging consolelogs
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
  let customTipAmount = document.getElementById("custom-tip").value / 100;
  let numberOfPeople = document.getElementById("number-of-people").value;

  calculateTip(customTipAmount, numberOfPeople);
  calculateTotal(1 + customTipAmount, numberOfPeople);
}

function resetNumbers() {
  inputCustom.value = "0";
  inputBillAmount.value = "0";
  inputNumberOFPeople.value = "0";
  totalAmount.textContent = "$0.00";
  tipAmount.textContent = "$0.00";
  console.log("meow");
}
function handleUserInputError(tipAmount) {
  if (
    tipAmount.textContent === "$NaN" ||
    totalAmount.textContent === "$NaN" ||
    tipAmount.textContent === "$Infinity" ||
    totalAmount.textContent === "$Infinity"
  ) {
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
    console.log("meow");
  }
}

function handleBillInputError(billAmount) {}
