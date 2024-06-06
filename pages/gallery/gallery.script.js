localStorage.setItem("animationPlayed", "true");
setTimeout(() => {
  localStorage.removeItem("animationPlayed");
}, 420000);

let showGBtn = document.querySelector(".Gshow");

const locomotiveScroll = new LocomotiveScroll({
    autoStart: false,
  });
  
  locomotiveScroll.start();
  
  window.addEventListener("DOMContentLoaded", () => {
    // gsap.from(".page1", {
    //   delay:1.5,
    //   opacity:0,
    //   y:"-50%",
    //   duration:1,
    //   ease: "power4.out",
    // });
    if (window.innerWidth > 639) {
      cursor.style.display = "block";
      circleElement.style.display = "block";
      curText.style.display = "block";
      makeCursor();
    //   makeMagnet()
      gsap.ticker.add(elasticMouse);
      mobile = false;
    } else {
      cursor.style.display = "none";
      circleElement.style.display = "none";
      curText.style.display = "none";
      mobile = true;
    }
  });

  window.addEventListener('load', function(){
    // console.log("loaded",mobile)
    
  })
let tl = gsap.timeline({scrollTrigger:{
    trigger:".page1",
    start:window.innerWidth > 639? "center 49.9%":"center 49.5%",
    end: window.innerWidth > 639? "150% 50%":"150% 49.5%",
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
    delay:window.innerWidth > 639? -0.3 : -0.5,
})


showGBtn.addEventListener("mouseover",()=>{
  gsap.to(".cursor", {
    scale: 5.5,
    ease: "power4.out",
    duration: 1,
  });
  gsap.to(".curOutline", {
    opacity: 0,
  });
})
showGBtn.addEventListener("mouseout",()=>{
  gsap.to(".cursor", {
    scale: 1,
    ease: "power4.out",
    duration: 1,
  });
  gsap.to(".curOutline", {
    opacity: 1,
  });
})
showGBtn.addEventListener('click',()=>{

})