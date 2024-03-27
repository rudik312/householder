/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);






// Подключаем слайдер Swiper с node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей с node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
  // Список слайдеров
  // Проверяем, есть ли слайдер на странице
  if (document.querySelector(".main__slider")) {
    // Указываем склас нужного слайдера
    // Создаем слайдер
    new Swiper(".main__slider", {
      // Указываем склас нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Autoplay, Navigation],
      direction: "vertical",
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      //autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      //preloadImages: false,
      //lazy: true,

      // Эффекты
      effect: "slide",
      autoplay: {
        delay: 2000,
        // disableOnInteraction: false,
      },

      // Пагинация
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки"влево/вправо"
      // navigation: {
      // 	prevEl: '.swiper-button-prev',
      // 	nextEl: '.swiper-button-next',
      // },
      /*
			// Брейкпоинты
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      // События
      on: {},
    });
  }

	if (document.querySelector('.tablet__slider')) {
		const slideSpace = 500

		const slidesCount = document.querySelectorAll('.tablet__slide').length
		const pinSpace = slidesCount * slideSpace
	
		const mainSwiper = new Swiper('.tablet__slider', {
			modules: [Navigation],
			observer: true,
      observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 1500,

			

      // Кнопки"влево/вправо"
      navigation: {
			prevEl: '.tablet__button-prev',
			nextEl: '.tablet__button-next',
      },
      

		})
	
		mainSwiper.slideTo(0, 0, false)
	
		let curSlide = 0
	
		ScrollTrigger.create({
			trigger: '.tablet',
			start: 'top top',
			end: '+=' + pinSpace + 'px',
			pin: true,
			pinSpacing: true,
			onUpdate: (self) => {
				const slide = parseInt(self.progress * slidesCount)
				if (curSlide !== slide) {
					curSlide = slide
					if (slide < slidesCount) {
						mainSwiper.slideTo(slide)
					}
				}
			},
		})
	}

  if (document.querySelector(".reviews__slider")) {
    // Указываем склас нужного слайдера
    // Создаем слайдер
    new Swiper(".reviews__slider", {
      // Указываем склас нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation],
      // direction: "vertical",
      observer: true,
      observeParents: true,
      slidesPerView: 2.6,
      spaceBetween: 20,
      //autoHeight: true,
      speed: 1800,

      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      //preloadImages: false,
      //lazy: true,

      // Эффекты
      // effect: "slide",
      // autoplay: {
      //   delay: 2000,
      //   // disableOnInteraction: false,
      // },

      // Пагинация
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки"влево/вправо"
      navigation: {
          prevEl: '.reviews__btn-prev',
          nextEl: '.reviews__btn-next',
      },
      /*
			// Брейкпоинты
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      // События
      on: {},
    });
  }

}
// Скролл на базе слайдера (по классу swiper scroll для оболочки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "horizontal",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  // initSlidersScroll();
});
