const swiper1 = new Swiper(".mySwiperD", {
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto",
//   slidesPerView: 1,
  coverflowEffect: {
    rotate: 15,
    stretch: 0,
    depth: 500,
    modifier: 1,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
});
