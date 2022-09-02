const checkboxInput = document.querySelector(".checkbox input");

checkboxInput.addEventListener("change", function (event) {
  checkboxInput.getAttribute("value") === "false" ? checkboxInput.setAttribute("value", "true") : checkboxInput.setAttribute("value", "false");
});
