const checkboxInput = document.querySelector(".checkbox input");

checkboxInput.addEventListener("change", function (event) {
  if (checkboxInput.getAttribute("value") === "false") {
    checkboxInput.setAttribute("value", "true");
  } else {
    checkboxInput.setAttribute("value", "false");
  }
});
