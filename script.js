function imgSlider(anything) {
  document.querySelector(".mini").src = anything;
}

function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
}

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

function toggleMenu() {
  var menuToggle = document.querySelector(".toggle");
  var navigation = document.querySelector(".main-nav-list");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}
