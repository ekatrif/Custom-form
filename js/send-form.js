const form = document.getElementById("cvv");

function serializeForm(formNode) {
  console.log(formNode.elements);
  const formElements = [...formNode];
  //console.log(formElements);
  // for (key in formElements) {
  //   const { name, value } = formElements[key];
  //   //Обработка кастомного select
  //   if (formElements[key].name === "customSelect" && formElements[key].hasAttribute("checked")) {
  //     console.log({ name: "framework", value: selectSingleTitle.textContent });
  //   } else if (formElements[key].name !== "customSelect") {
  //     console.log({ name, value });
  //   }

  // }
  console.log(formElements);
  const data = formElements
    .filter((element) => element.name !== "customSelect")
    .filter((element) => !!element.name)
    .map((element) => {
      const { name, value } = element;
      if (element.name === "customSelect" && element.hasAttribute("checked")) {
        return { name: "framework", value: selectSingleTitle.textContent };
      }
      return { name, value };
    });
  console.log(data);
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Отправка");
  serializeForm(form);
});
