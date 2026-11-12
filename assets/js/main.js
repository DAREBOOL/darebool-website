document.addEventListener("DOMContentLoaded", function () {
  const acquistaButtons = document.querySelectorAll(".primary");

  acquistaButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      console.log("Acquisto DareBool avviato.");
    });
  });
});
