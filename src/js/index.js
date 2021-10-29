const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".header-nav__menu");
const navLink = document.querySelectorAll(".nav__link");
const arrowPrev = document.querySelector('.client__prev');
const arrowNext = document.querySelector('.client__next');
const PrevArrow = document.querySelector('.join__prev');
const NextArrow = document.querySelector('.join__next');

menu.addEventListener("click", mobileMenu);

function mobileMenu() {
  menu.classList.contains('active') ? closeMenu() : showMenu();
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

function showMenu() {
  menu.classList.add("active");
  navMenu.classList.add("active");
  document.body.style['overflow-y'] = 'hidden';
}

function closeMenu() {
  menu.classList.remove("active");
  navMenu.classList.remove("active");
  document.body.style['overflow-y'] = 'auto';
}

$('.testimonials__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: arrowPrev,
  nextArrow: arrowNext,
});

$('.blog__posts').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,

  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
      }
    },

    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
      }
    }
  ]
});


$('.join__slider').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  prevArrow: PrevArrow,
  nextArrow: NextArrow,

  responsive: [

    {
      breakpoint: 1281,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },

    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },

    {
      breakpoint: 481,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
      }
    },
  ]
});
