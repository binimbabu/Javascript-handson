var formElement = document.getElementById("myForm");
formElement.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent actual form submission
  alert("Form submitted");
});
