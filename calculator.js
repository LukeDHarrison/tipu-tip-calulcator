//From element
const form = document.getElementById("inputForm");

//Percentage Buttons
const percentageButtons = document.querySelectorAll("percentage");
const tenPercentBtn = document.getElementById("tenPercentBtn");
const fifteenPercentBtn = document.getElementById("fifteenPercentBtn");
const twentyPercentBtn = document.getElementById("twentyPercentBtn");
const twentyFivePercentBtn = document.getElementById("twentyFivePercentBtn");

//Highlight
const highlight = document.getElementById("highlight");

// Split Bill Button
const split = document.getElementById("split");

//Outputs
const tipOutput = document.getElementById("tipOutput");
const totalBillOutput = document.getElementById("totalBillOutput");

// Calculate percentage of bill input

let bill;
let updateTip;
let billTotal;

tenPercentBtn.addEventListener("click", function () {
  bill = document.getElementById("billInput").value;
  const tenPercent = (10 / 100) * Number(bill);
  updateTip = Math.round((tenPercent + Number.EPSILON) * 100) / 100;

  if (bill) {
    tipOutput.innerHTML = updateTip;
    highlight.classList.add("green");
  } else {
    tipOutput.innerHTML = 0;
    highlight.classList.remove("green");
    form.classList.toggle("user-prompt");
  }

  billTotal = Number(bill) + tenPercent;
  totalBillOutput.innerHTML =
    Math.round((billTotal + Number.EPSILON) * 100) / 100;
});

fifteenPercentBtn.addEventListener("click", function () {
  bill = document.getElementById("billInput").value;
  const fifteenPercent = (15 / 100) * Number(bill);
  updateTip = Math.round((fifteenPercent + Number.EPSILON) * 100) / 100;

  if (bill) {
    tipOutput.innerHTML = updateTip;
    highlight.classList.add("green");
  } else {
    tipOutput.innerHTML = 0;
    highlight.classList.remove("green");
    form.classList.toggle("user-prompt");
  }

  billTotal = Number(bill) + fifteenPercent;
  totalBillOutput.innerHTML =
    Math.round((billTotal + Number.EPSILON) * 100) / 100;
});

twentyPercentBtn.addEventListener("click", function () {
  bill = document.getElementById("billInput").value;
  const twentyPercent = (20 / 100) * Number(bill);
  updateTip = Math.round((twentyPercent + Number.EPSILON) * 100) / 100;

  if (bill) {
    tipOutput.innerHTML = updateTip;
    highlight.classList.add("green");
  } else {
    tipOutput.innerHTML = 0;
    highlight.classList.remove("green");
    form.classList.toggle("user-prompt");
  }

  billTotal = Number(bill) + twentyPercent;
  totalBillOutput.innerHTML =
    Math.round((billTotal + Number.EPSILON) * 100) / 100;
});

twentyFivePercentBtn.addEventListener("click", function () {
  bill = document.getElementById("billInput").value;
  const twentyFivePercent = (25 / 100) * Number(bill);
  updateTip = Math.round((twentyFivePercent + Number.EPSILON) * 100) / 100;

  if (bill) {
    tipOutput.innerHTML = updateTip;
    highlight.classList.add("green");
  } else {
    tipOutput.innerHTML = 0;
    highlight.classList.remove("green");
    form.classList.toggle("user-prompt");
  }

  billTotal = Number(bill) + twentyFivePercent;
  totalBillOutput.innerHTML =
    Math.round((billTotal + Number.EPSILON) * 100) / 100;
});

// split the final bill
split.addEventListener("click", function () {
  const splitBill = billTotal / 2;
  totalBillOutput.innerHTML =
    Math.round((splitBill + Number.EPSILON) * 100) / 100 + " each";
});
