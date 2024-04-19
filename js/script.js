
// Обработчик событий для открытия меню
var hamburgerOpen = document.getElementById("navigation__burger");
hamburgerOpen.addEventListener("click", function (e) {
  e.preventDefault();
  this.parentNode.classList.toggle("open");
});
