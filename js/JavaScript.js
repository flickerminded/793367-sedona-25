var reservButton = document.querySelector(".search-button");
var popup = document.querySelector(".hotel-reservation");

popup.classList.add("hotel-reservation-none");

reservButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("reserv-form");
});