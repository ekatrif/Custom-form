const form = document.getElementById("cvv");

function serializeForm(formNode) {
  console.log(formNode.elements);
  const formElements = [...formNode];
  console.log(formElements);
  const data = formElements

    .map((element) => {
      const { name, value } = element;
      if (element.name === "customSelect" && element.hasAttribute("checked")) {
        return { name: "framework", value: selectSingleTitle.textContent };
      } else if (element.name === "experience") {
        return { name, value: !!element.value };
      }
      return { name, value };
    })
    .filter((element) => element.name !== "customSelect")
    .filter((element) => !!element.name);
  console.log(data);
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Отправка");
  serializeForm(form);
});
