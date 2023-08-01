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

function pickUpPointsView() {
  const container = document.querySelector('.pick-up-points')

  if (!container) {
    return null
  }

  // Получаем все кнопки
  const buttons = document.querySelectorAll(".pick-up-points__view");

  // Функция для удаления класса "active" у всех кнопок
  function removeActiveClass() {
    buttons.forEach((button) => button.classList.remove("active"));
  }

  // Добавляем обработчики событий на каждую кнопку
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Если у кнопки уже есть класс "active", выходим из функции
      if (this.classList.contains("active")) return;

      // Удаляем класс "active" у всех кнопок
      removeActiveClass();

      // Добавляем класс "active" для кликнутой кнопки
      this.classList.add("active");

      // Получаем значение атрибута "data-pick-up-points-btn" кликнутой кнопки
      const targetContent = this.getAttribute("data-pick-up-points-btn");

      // Получаем элемент контентного div'а
      const content = document.querySelector("[data-pick-up-points-content]");

      // Удаляем все классы, начинающиеся с "points-" у контентного div'а
      content.classList.forEach((className) => {
        if (className.startsWith("points-")) {
          content.classList.remove(className);
        }
      });

      // Добавляем класс points-* в соответствии с выбранной кнопкой
      content.classList.add(targetContent);
    });
  });
}

pickUpPointsView();

function pointsListWorked() {
  const container = document.querySelector('.pick-up-points')

  if (!container) {
    return null
  }

  let workeds = document.querySelectorAll('[data-pick-up-points-list-worked]')

  workeds.forEach(worked => {
    worked.addEventListener('click', () => {
      worked.classList.toggle('show')
    })
  });
}

pointsListWorked();