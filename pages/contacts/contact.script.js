sessionStorage.setItem("animationPlayed", "true");
setTimeout(() => {
  sessionStorage.removeItem("animationPlayed");
}, 420000);

////// **************************************************************** //////

const locomotiveScroll = new LocomotiveScroll({
  autoStart: false,
});

locomotiveScroll.start();

window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 639) {
    cursor.style.display = "block";
    circleElement.style.display = "block";
    curText.style.display = "block";
    makeCursor();
    makeMagnet()
    gsap.ticker.add(elasticMouse);
  } else {
    cursor.style.display = "none";
    circleElement.style.display = "none";
    curText.style.display = "none";
  }
});

window.addEventListener('load',()=>{
    Animation();
})