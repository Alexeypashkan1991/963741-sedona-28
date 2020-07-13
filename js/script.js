var bookingForm = document.querySelector(".form");
var buttonForm = document.querySelector(".hotel-search");

buttonForm.addEventListener("click", 
    function(evt) {
        bookingForm.classList.toggle("form-active");
});