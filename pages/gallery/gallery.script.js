localStorage.setItem("animationPlayed", "true");
setTimeout(() => {
  localStorage.removeItem("animationPlayed");
}, 420000);

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
    //   makeMagnet()
      gsap.ticker.add(elasticMouse);
    } else {
      cursor.style.display = "none";
      circleElement.style.display = "none";
      curText.style.display = "none";
    }
  });


let tl = gsap.timeline({scrollTrigger:{
    trigger:".page1",
    start:"center 50%",
    end:"150% 50%",
    scrub:2,
    pin:true,
    // markers:true
}})

tl.to(".page1 .up",{
    y:"-100%",
},'a')
.to(".page1 .down",{
    y:"100%",
},'a')
.to(".page1 #upText",{
    top:"110%",
}, 'a')
.to(".page1 #downText",{
    top:"-20%",
}, 'a')
.to(".center .content",{
    marginTop:"0%",
    delay:-0.3,
})