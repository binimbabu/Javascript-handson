const imgDoc = document.createElement("img");
imgDoc.src =
  "https://bouqs.com/blog/wp-content/uploads/2024/02/shutterstock_368490641-min.jpg";
imgDoc.alt = "Rose Image";
imgDoc.width = 200;
imgDoc.height = 300;

var imgCont = document.getElementById("img-container");
imgCont.appendChild(imgDoc);
