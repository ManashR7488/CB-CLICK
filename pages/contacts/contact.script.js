sessionStorage.setItem("animationPlayed", "true");
setTimeout(() => {
  sessionStorage.removeItem("animationPlayed");
}, 420000);

////// **************************************************************** //////
const TextQ = document.querySelector(".TextQ")
const noCursor = document.querySelectorAll(".noCursor");
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



noCursor.forEach((element)=>{
  element.addEventListener('mouseenter',(e)=>{
    gsap.to(cursor,{
      opacity:0,
    })
    gsap.to(circleElement,{
      opacity:0
    })
  })
  element.addEventListener('mouseleave',(e)=>{
    gsap.to(cursor,{
      opacity:1,
    })
    gsap.to(circleElement,{
      opacity:1
    })
  })
})

