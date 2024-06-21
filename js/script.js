$(document).ready(function () {
  $(".slider").slick({
    // показать стрелки
    arrows: true,
    // Показать точки
    dots: true,
    // автоматическая адаптивная высота слайда
    adaptiveHeight: true,
    // количество слайдов
    slidesToShow: 1,
    // количество слайдов, которое будет пролистываться за одно нажатие
    slidesToScroll: 1,
    // скорость
    speed: 1000,
    // тип анимации
    easing: "linear",
    // бесконечность слайдера
    Infinite: true,
    // стартовый слайд
    // initialSlider: 0,
    //автоматическое проигрывание
    autoplay: false,
    // время авто слайдера
    autoplaySpeed: 3000,
    // пауза при наведении
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    // перетаскивание слайдера мышкой ПК
    draggable: true,
   
   
    // быстрое нажатие на стрелки приведет к быстрой смене кадров
    waitForAnimate: false,
    // главный слайд становится по центру
    // centerMode:true,
  
   

  });

  $(".slider_cards_popular_cinema").slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1760,
        settings: {
        slidesToShow:3,
        },
        
      },
      {
        breakpoint: 1440,
        settings: {
        slidesToShow:2,
        },
        
      },
      {
        breakpoint: 1080,
        settings: {
        slidesToShow:1,
        },
        
      },
    ],

  })
  $(".slider_cards_tv").slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
});

