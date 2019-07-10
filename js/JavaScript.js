var reservButton = document.querySelector(".search-button");
var popup = document.querySelector(".hotel-reservation");
var arrival = popup.querySelector("[name=arrival]");
var depart = popup.querySelector("[name=departure]");

reservButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("hotel-reservation-none");
  if (!popup.classList.contains("hotel-reservation-none")) {
    evt.preventDefault();
    popup.classList.add("reserv-form");
  }
  if (popup.classList.contains("hotel-reservation-none")) {
    evt.preventDefault();
    popup.classList.remove("reserv-form");
      }
});

popup.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if(!arrival.value||!depart.value) {
    evt.preventDefault();
        popup.offsetWidth = popup.offsetWidth;
      }
  else {
    console.log("Отправить");
  }
});