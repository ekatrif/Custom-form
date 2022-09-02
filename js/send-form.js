const form = document.getElementById("cvv");
let data = null;

function serializeForm(formNode) {
  //console.log(formNode.elements);
  const formElements = [...formNode];
  //console.log(formElements);
  data = formElements
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
  //console.log(data);
  return data;
}

async function sendData(data) {
  console.log("Отправляем данные:", data);
  return await fetch("/api/apply/", {
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    body: data,
  });
}

async function handleFormSubmit(event) {
  event.preventDefault();
  //console.log("Отправка");
  serializeForm(event.target);
  const response = await sendData(data);
  console.log(response);
}

form.addEventListener("submit", handleFormSubmit);
