var inputElement = document.querySelector(".userId");
inputElement.addEventListener("keydown", function (event) {
  console.log("key", event.key);
  inputElement.value = "Neha Babu";
});

inputElement.addEventListener("keyup", function () {
  inputElement.value = "Anna Babu";
});
