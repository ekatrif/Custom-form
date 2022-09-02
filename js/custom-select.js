// Кастомный select
const selectSingle = document.querySelector(".custom-select");
const selectSingleTitle = selectSingle.querySelector(".custom-select__title");
const selectSingleLabels = selectSingle.querySelectorAll(".custom-select__label");
const customSelectContent = selectSingle.querySelector(".custom-select__content");

// Переключение состояния, в зависимости от активности select
selectSingleTitle.addEventListener("click", () => {
  if ("active" === selectSingle.getAttribute("data-state")) {
    selectSingle.setAttribute("data-state", "");
  } else {
    selectSingle.setAttribute("data-state", "active");
  }
});

// Закрыть при выборе option
customSelectContent.addEventListener("click", function (event) {
  if (event.target.classList.contains("custom-select__label")) {
    selectSingleTitle.textContent = event.target.getAttribute("data-value");
    selectSingle.setAttribute("data-state", "");
  }
});
// Кастомный select
