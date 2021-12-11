"use strict";

const calcBtn = document.getElementById("calc-btn");
const calcAmountText = document.querySelector(".calc-amt");
const billAmount = document.getElementById("bill-amount");
const peopleCount = document.getElementById("people-count");
const service = document.getElementById("service-rate");

console.log(service.value);

calcBtn.addEventListener("click", () => {
  alertWarning();
  calcAmount();
  showDetails();
  hideDetails();
});

function alertWarning() {
  if (!billAmount.value) {
    alert("Please Enter the Bill Amount!");
  } else if (!peopleCount.value) {
    alert("Please Enter the No. of People!");
  } else if (!service.value) {
    alert("Please Select your tip!");
  } else if (billAmount.value < 1) {
    alert("Please Enter the valid Bill Amount!");
  } else if (peopleCount.value < 1) {
    alert("No. of People should be atleast 1");
  }
}

function hideDetails() {
  if (
    !billAmount.value ||
    !peopleCount.value ||
    !service.value ||
    billAmount.value < 1 ||
    peopleCount.value < 1
  ) {
    calcAmountText.classList.add("hidden");
  }
}

function calcAmount() {
  let billValue = billAmount.value;
  let noOfPeople = peopleCount.value;
  let tipValue = service.value;
  let tipPercent;

  if (tipValue.includes("30")) {
    tipPercent = 0.3;
  }
  if (tipValue.includes("20")) {
    tipPercent = 0.2;
  }
  if (tipValue.includes("15")) {
    tipPercent = 0.15;
  }
  if (tipValue.includes("10")) {
    tipPercent = 0.1;
  }

  let tipAmount = billValue * tipPercent;
  let totalAmount = +billValue + tipAmount;

  calcAmountText.innerHTML = `<h4>Tip: $${+billValue}</h4>
  <h4>Total bill with tip: $${+billValue + tipAmount}</h4>
  <h4>Tip/Person: $${tipAmount / noOfPeople}</h4>
  <h4>Total bill with tip/Person: $${totalAmount / noOfPeople}</h4>`;
}
function showDetails() {
  if (billAmount.value && peopleCount.value && service.value) {
    calcAmountText.classList.remove("hidden");
  }
}
