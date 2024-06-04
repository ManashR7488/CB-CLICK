
const locomotiveScroll = new LocomotiveScroll({
  autoStart: false,
});

locomotiveScroll.start();
  let read = document.querySelector("#rLink")
  read.addEventListener("click", function (e) {
    e.preventDefault()
    locomotiveScroll.scrollTo(document.getElementById(e.target.getAttribute('href').slice(1)));
  })