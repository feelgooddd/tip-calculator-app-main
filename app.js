//variables to reference several elements on the page
const tipButton = document.querySelectorAll(".tip-button");
const inputCustom = document.getElementById("custom-tip");
const inputBillAmount = document.getElementById("bill-amount");
const inputNumberOFPeople = document.getElementById("number-of-people");
const invalidBill = document.getElementById("invalid-amount");
const invalidPeople = document.getElementById("invalid-number-of-people");

let totalAmount = document.getElementById("total-amount");
let tipAmount = document.getElementById("tip-amount");

//event listeners for input text boxes
inputCustom.addEventListener("input", tipCustom);
inputBillAmount.addEventListener("input", tipCustom);
inputNumberOFPeople.addEventListener("input", tipCustom);

//Get CSS root variables for colours
const root = document.documentElement;

const primary400 = getComputedStyle(root).getPropertyValue("--clr-primary-400");
const accent400 = getComputedStyle(root).getPropertyValue("--clr-accent-400");
const neutral600 = getComputedStyle(root).getPropertyValue("--clr-neutral-600");
const neutral500 = getComputedStyle(root).getPropertyValue("--clr-neutral-500");
const neutral400 = getComputedStyle(root).getPropertyValue("--clr-neutral-400");
const neutral300 = getComputedStyle(root).getPropertyValue("--clr-neutral-300");
const neutral200 = getComputedStyle(root).getPropertyValue("--clr-neutral-200");
const neutral100 = getComputedStyle(root).getPropertyValue("--clr-neutral-100");
5;

//slider element at bottom of page
const colourCheckbox = document.getElementById("colourCheckBox");

// functions for calculating tip & Total
function calculateTip(tip, numberOfPeople) {
  let billInput = Number(document.getElementById("bill-amount").value);
  let tipAmount = document.getElementById("tip-amount");

  invalidBill.classList.add("hidden");
  invalidPeople.classList.add("hidden");
  tipAmount.textContent = "$" + ((billInput * tip) / numberOfPeople).toFixed(2);

  numberOfPeople = parseFloat(numberOfPeople);

  handleUserInputError(tipAmount);

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

// Functions for tip buttons and custom tip input box
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

//function to reset the page when the reset button is clicked, called in the HTML by the buttons onclick property.
function resetNumbers() {
  inputCustom.value = "";
  inputBillAmount.value = "";
  inputNumberOFPeople.value = "";
  totalAmount.textContent = "$0.00";
  tipAmount.textContent = "$0.00";
}

//helper class to check if the user input resolves to $NaN or $Infinity then setting it to 0 instead.
// (Infinity in the case of dividing by 0 such as the number of people being 0)
function handleUserInputError(tipAmount) {
  if (
    tipAmount.textContent === "$NaN" ||
    totalAmount.textContent === "$NaN" ||
    tipAmount.textContent === "$Infinity" ||
    totalAmount.textContent === "$Infinity"
  ) {
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
  }
}

//Functions to change the CSS :root elment variables for the colours on the page.
function changeColourScheme() {
  root.style.setProperty("--clr-primary-400", "hsl(199, 100.00%, 18.00%)");
  root.style.setProperty("--clr-accent-400", "hsl(248, 27.60%, 43.30%");
  root.style.setProperty("--clr-neutral-600", "hsl(295, 28.30%, 43.70%");
  root.style.setProperty("--clr-neutral-500", "hsl(324, 44.60%, 52.50%");
  root.style.setProperty("--clr-neutral-400", "hsl(346, 66.70%, 61.20%");
  root.style.setProperty("--clr-neutral-300", "hsl(1, 100.00%, 69.00%)");
  root.style.setProperty("--clr-neutral-200", "hsl(24, 100.00%, 59.60%");
  root.style.setProperty("--clr-neutral-100", "hsl(39, 100.00%, 50.00%");
}

function revertColourScheme() {
  root.style.setProperty("--clr-primary-400", primary400);
  root.style.setProperty("--clr-accent-400", accent400);
  root.style.setProperty("--clr-neutral-600", neutral600);
  root.style.setProperty("--clr-neutral-500", neutral500);
  root.style.setProperty("--clr-neutral-400", neutral400);
  root.style.setProperty("--clr-neutral-300", neutral300);
  root.style.setProperty("--clr-neutral-200", neutral200);
  root.style.setProperty("--clr-neutral-100", neutral100);
}

//event listener on the checkbox to call the colour changing functions when the checkbox is checked or unchecked.
colourCheckbox.addEventListener("change", function () {
  if (this.checked) {
    changeColourScheme();
  } else {
    revertColourScheme();
  }
});
