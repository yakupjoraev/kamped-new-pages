// Custom Scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.new-header__adaptive-burger')
  const menu = document.querySelector('.new-header__menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('[data-nav-item-link]')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)

function showSublist() {
  let arrows = document.querySelectorAll('[data-new-header-arrow]');

  if (window.matchMedia("(max-width: 1200px)").matches) {
    arrows.forEach(arrow => {
      arrow.addEventListener('click', () => {
        let parentElement = arrow.parentNode;
        parentElement.classList.toggle('show');
      });
    });
  }

  let navItems = document.querySelectorAll('[data-nav-item]');

  if (window.matchMedia("(min-width: 1201px)").matches) {
    navItems.forEach(navItem => {
      let subMenu = navItem.querySelector('.new-header__menu-sub');
      let timeout;

      let closeButton = navItem.querySelector('[data-nav-item-close]');
      if (closeButton) {
        closeButton.addEventListener('click', () => {
          navItem.classList.remove('show');
        });
      }

      navItem.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        navItem.classList.add('show');
      });

      navItem.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
          navItem.classList.remove('show');
        }, 200);
      });
    });
  }
}

showSublist();


const filterInputs = document.querySelectorAll('[data-pick-up-points-filter-input]');
const filterContainers = document.querySelectorAll('[data-pick-up-points-filter]');

filterInputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
      filterContainers[index].classList.add('open-list');
    } else {
      filterContainers[index].classList.remove('open-list');
    }
  });
});

document.addEventListener('click', (event) => {
  filterContainers.forEach(container => {
    if (!container.contains(event.target)) {
      container.classList.remove('open-list');
      const input = container.querySelector('[data-pick-up-points-filter-input]');
      if (input) {
        input.value = ''; // Clear the input field
      }
    }
  });
});


function newsTab() {
  const container = document.querySelector('.main-page__news')

  if (!container) {
    return null;
  }

  let tabs = document.querySelectorAll('[data-main-page-news-tab]');
  let tabContents = document.querySelectorAll('[data-main-page-news-tab-content]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.getAttribute('data-main-page-news-tab');
      const content = document.querySelector(`[data-main-page-news-tab-content="${tabId}"]`);

      tabs.forEach(otherTab => {
        if (otherTab !== tab) {
          otherTab.classList.remove('active');
        }
      });

      tabContents.forEach(otherContent => {
        otherContent.style.display = 'none';
      });

      tab.classList.add('active');
      content.style.display = 'grid';
    });
  });

}

newsTab();


function newAccardion() {
  const container = document.querySelector('[data-accordion-wrapper]');

  if (!container) {
    return null
  }

  // Аккордеон
  const accordionItems = document.querySelectorAll('[data-accordion-item]');
  let openAccordion = null; // переменная для хранения ссылки на открытый аккордеон

  function toggleAccordion(event) {
    let target = event.target;
    if(!Array.from(accordionItems).includes(target) && !target.closest('[data-accordion-item]')) {
      return;
    }
    if (openAccordion && openAccordion !== target) {
      // Если есть открытый аккордеон, который не совпадает с текущим
      openAccordion.classList.remove('active'); // закрыть его
      const openAccordionContent = openAccordion.nextElementSibling;
      if (openAccordionContent) {
        // если у аккордеона есть содержимое
        openAccordionContent.style.maxHeight = null; // сбросить высоту контента
      }
    }

    target.classList.toggle('active'); // открыть или закрыть текущий аккордеон

    const content = target.nextElementSibling;
    if (content) {
      // если у аккордеона есть содержимое
      if (content.style.maxHeight) {
        // Если контент открыт, закрыть его
        content.style.maxHeight = null;
      } else {
        // Если контент закрыт, открыть его
        content.style.maxHeight = content.scrollHeight + "px";
      }
    }

    openAccordion = target; // запомнить ссылку на открытый аккордеон
  }
  document.body.addEventListener('click', toggleAccordion)
}

newAccardion();



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


function modals() {

  const openModalBtns = document.querySelectorAll('.open-modal-btn');
  const closeModalBtns = document.querySelectorAll('.close-modal-btn');
  const modals = document.querySelectorAll('.modal');


  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.dataset.modalId;
      const modal = document.getElementById(modalId);
      if(modal) {
        modal.classList.add('show');
      }
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      modal.classList.remove('show');
    });
  });

  window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
      event.target.classList.remove('show');
    }
  });
}

modals();

document.addEventListener('DOMContentLoaded', function () {
  const fixedBtnCall = document.querySelector('[ data-fixed-btns-call]');
  const fixedBtns = document.querySelector('[data-fixed-btns]');
  const fixedBtnsClose = document.querySelector('[ data-fixed-btns-close]');
  const body = document.body;

  fixedBtnCall.addEventListener('click', function (event) {
    event.preventDefault();
    fixedBtns.classList.add('opened-fixed-btns');
    body.classList.add('opened-fixed-btns');
  });

  fixedBtnsClose.addEventListener('click', function (event) {
    fixedBtns.classList.remove('opened-fixed-btns');
    body.classList.remove('opened-fixed-btns');
  });

  document.addEventListener('click', function (event) {
    const isFixedBtns = event.target.closest('.fixed-btns');
    if (!isFixedBtns) {
      fixedBtns.classList.remove('opened-fixed-btns');
      body.classList.remove('opened-fixed-btns');
    }
  })
})
