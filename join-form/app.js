const form = document.querySelector(".signup-form");
const checkAll = document.querySelector(".form-check-all input");
const checkboxs = document.querySelectorAll(".form-group input");
const submitButton = document.querySelector("button");

const agreements = {
  termsOfService: false,
  privacyPolicy: false,
  allowPromotions: false,
};

function toggleCheckbox(e) {
  const { checked } = e.currentTarget;
  if (!checked) {
    checkAll.checked = false;
  }
}

checkAll.addEventListener("click", function (e) {
  const { checked } = e.currentTarget;
  checkboxs.forEach(function (item) {
    if (checked) {
      item.checked = true;
    } else {
      item.checked = false;
    }
  });
});
