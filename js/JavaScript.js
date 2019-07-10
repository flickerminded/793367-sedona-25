var reservButton = document.querySelector(".search-button");
var popup = document.querySelector(".booking-form");
var dataArrive = popup.querySelector("[name=arrival]");
var dataDeparture = popup.querySelector("[name=departure]");

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!popup.classList.contains("hidden")) {
      evt.preventDefault();
      popup.classList.remove("animation-reserv");
      popup.classList.add("hidden");
      popup.classList.remove("incorrectly-put");
    }
  }
});

reservButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("hidden");
  if (!popup.classList.contains("hidden")) {
    evt.preventDefault();
    popup.classList.add("animation-reserv");
  }
  if (popup.classList.contains("hidden")) {
    evt.preventDefault();
    popup.classList.remove("animation-reserv");
    popup.classList.remove("incorrectly-put");
  }
});

popup.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if(!dataArrive.value||!dataDeparture.value) {
    evt.preventDefault();
    popup.classList.remove("incorrectly-put");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("incorrectly-put");
  }
  else {
    console.log("Отправить");
  }
});