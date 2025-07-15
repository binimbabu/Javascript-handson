var img = document.getElementById("imageContainer");
img.width = 200;
img.height = 300;
img.addEventListener("mouseover", function () {
  img.style.border = "15px solid purple";
});
img.addEventListener("mouseout", function () {
  img.style.border = "15px solid black";
});
