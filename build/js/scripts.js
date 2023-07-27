// Custom Scripts
// Custom scripts
var swiper1 = new Swiper(".main-about__thanks-slider", {
  slidesPerView: "auto",
  spaceBetween: 32,
  navigation: {
    nextEl: ".main-about__thanks-next",
    prevEl: ".main-about__thanks-prev",
  },
});


var swiper2 = new Swiper(".main-about__revievs-slider", {
  slidesPerView: "auto",
  spaceBetween: 32,
  navigation: {
    nextEl: ".main-about__revievs-next",
    prevEl: ".main-about__revievs-prev",
  },
});

var swiper3 = new Swiper(".main-page__info-inner", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".main-page__info-arrow-next",
    prevEl: ".main-page__info-arrow-prev",
  },

  breakpoints: {

    // when window width is >= 767
    525: {
      slidesPerView: 2.2,
      spaceBetween: 20
    },

    // when window width is >= 767
    767: {
      slidesPerView: 2.2,
      spaceBetween: 32
    },

    // when window width is >= 992
    992: {
      slidesPerView: 3,
      spaceBetween: 32
    }
  }
});


var swiper4 = new Swiper(".main-page__accessibility-slider", {
  slidesPerView: 1,
  spaceBetween: 32,
  navigation: {
    nextEl: ".main-page__accessibility-arrow-next",
    prevEl: ".main-page__accessibility-arrow-prev",
  },
});

var swiper5 = new Swiper(".main-page__videos-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".main-page__videos-arrow-next",
    prevEl: ".main-page__videos-arrow-prev",
  },

  breakpoints: {

    // when window width is >= 992
    992: {
      slidesPerView: 2,
      spaceBetween: 32
    }
  }
});

var swiper6 = new Swiper(".main-page__history-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".main-page__history-arrow-next",
    prevEl: ".main-page__history-arrow-prev",
  },

  breakpoints: {
    // when window width is >= 992
    767: {
      slidesPerView: 2,
      spaceBetween: 32
    },

    // when window width is >= 992
    992: {
      slidesPerView: 3,
      spaceBetween: 32
    }
  }
});
