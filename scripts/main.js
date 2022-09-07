// swiper initializer
var swiper = new Swiper(".testimonial", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
