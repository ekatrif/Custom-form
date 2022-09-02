const form = document.getElementById("cvv");

function serializeForm(formNode) {
  console.log(formNode.elements);
  const formElements = { ...formNode };
  //console.log(formElements);
  for (key in formElements) {
    const { name, value } = formElements[key];
    //Обработка кастомного select
    if (formElements[key].name === "customSelect" && formElements[key].hasAttribute("checked")) {
      console.log({ name: "framework", value: selectSingleTitle.textContent });
    } else if (formElements[key].name !== "customSelect") {
      console.log({ name, value });
    }
  }
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Отправка");
  serializeForm(form);
});
