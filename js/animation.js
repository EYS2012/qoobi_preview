var menuOpen = document.querySelector(".menu_button");
var menuForm = document.querySelector(".modal-menu");
var menuClose = menuForm.querySelector(".modal-menu-close");

menuOpen.addEventListener("click", function (event) {
  event.preventDefault();
  menuForm.classList.add("modal-menu-show");
  menuOpen.classList.add("menu_button-hidden");
});

menuClose.addEventListener("click", function (event) {
  event.preventDefault();
  menuForm.classList.remove("modal-menu-show");
  menuOpen.classList.remove("menu_button-hidden");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (menuForm.classList.contains("modal-menu-show")) {
      menuForm.classList.remove("modal-menu-show");
      menuOpen.classList.remove("menu_button-hidden");
    }
  }
});