const rateButton = document.querySelectorAll(".ratting__to-choose button");
const submitButton = document.querySelector(".ratting__submit");
const ratting = document.querySelector(".ratting");
const submittedRate = document.querySelector(".submitted-rate");
const submittedRateSpan = document.querySelector(".submitted-rate__selected-rate span");
const alert = document.querySelector(".alert");

rateValue = 0;

let rated = false;

const clearActiveClassFromNodeList = (nodeList) => {
  nodeList.forEach((item) => item.classList.remove("active"));
};
const toggleClass = (item, className) => item.classList.toggle(className);
const removeClass = (item, className) => item.classList.remove(className);
const addClass = (item, className) => item.classList.add(className);

rateButton.forEach((item) =>
  item.addEventListener("click", () => {
    clearActiveClassFromNodeList(rateButton);
    toggleClass(item, "active");
    const rateValue = item.getAttribute("data-ratting");
    submittedRateSpan.textContent = rateValue;
    rated = true;
  })
);

submitButton.addEventListener("click", () => {
  if (rated) {
    toggleClass(ratting, "d-none");
    toggleClass(submittedRate, "d-none");
    addClass(alert, "d-none");
  } else {
    removeClass(alert, "d-none");
  }
});
