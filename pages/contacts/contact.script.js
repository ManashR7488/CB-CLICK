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
    // Animation();
})

gsap.set(".page1 .left .image",{scale:0})

TextQ.addEventListener('mouseenter',(e)=>{
  setTimeout(() => {
    gsap.to(".page1 .left .image",{
      scale:1,
      duration:0.5,
      ease:"power4.out",
      onEnd: ()=>{
        gsap.ticker.add(imageElastic);
      }
    })
  }, 20);
});

TextQ.addEventListener('mouseleave',()=>{
  gsap.ticker.remove(imageElastic);
  gsap.to(".page1 .left .image",{
    scale:0,
    duration:0.5,
  })
});

TextQ.addEventListener('mousemove',(e)=>{
  gsap.to(".page1 .left .image",{
    x:e.clientX,
    y:e.clientY,
    duration:0.2,
  })
  
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

