var reservButton = document.querySelector(".search-button");
var popup = document.querySelector(".hotel-reservation");

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