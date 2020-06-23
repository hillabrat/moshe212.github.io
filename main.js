var slider = new KeenSlider("#my-keen-slider", {
  spacing: 10,
  slidesPerView: 2,
  centered: true,
  loop: true,
  mode: "snap",
  dragSpeed: 10,
  breakpoints: {
    "(min-width: 768px)": {
      slidesPerView: 2,
      mode: "free-snap",
    },
    "(min-width: 1200px)": {
      slidesPerView: 3,
      mode: "free-snap",
    },
  },
});
