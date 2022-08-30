// Кастомный input type="file"
const inputFile = document.querySelector("input[type='file']");
const uploadMessage = document.querySelector(".file-upload__message");

inputFile.addEventListener("change", function (event) {
  if (event.target.files && event.target.files.length) {
    uploadMessage.innerText = "Файл добавлен";
  }
});
// Кастомный input type="file"
