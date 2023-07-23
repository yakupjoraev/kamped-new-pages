// Custom Scripts
// Custom scripts
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".main-about__thanks-slider", {
    slidesPerView: 3,
    spaceBetween: 32,
    navigation: {
      nextEl: ".main-about__thanks-next",
      prevEl: ".main-about__thanks-prev",
    },
  });
});
