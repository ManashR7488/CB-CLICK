sessionStorage.setItem("animationPlayed", "true");
setTimeout(() => {
  sessionStorage.removeItem("animationPlayed");
}, 420000);

const locomotiveScroll = new LocomotiveScroll({
  autoStart: false,
});

locomotiveScroll.start();

const showGBtn = document.querySelector(".Gshow");
const container = document.querySelector(".Container");
const gallery = document.querySelector(".gallery");
let positions = shuffleArray(shuffleArray(generateRandomPositions(100)));
let clt = "";
const min = -4;
const max = 7;
images.forEach((link) => {
  let S = Math.floor(Math.random() *(max - min +1)+ min);
  S = S === 0 ? 1 : S
  clt += `<div speed="${S}" class="img"><img src="${link}"></img></div>`;
  });
setTimeout(() => {
  gallery.innerHTML = clt;
  gsap.set(".img", {
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(0)",
  });
  
}, 100);

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

const newLoco = new LocomotiveScroll({
  lenisOptions: {
    wrapper: container,
    content: document.querySelector(".inner"),
    lerp: 0.1,
    duration: 1.2,
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    normalizeWheel: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
},
  autoStart: false
})

let tl2 = gsap.timeline();
tl2.pause();

tl2.to(container,{
  top:0
});
tl2.from(".Container p", {
  y: 40,
  ease: "power4.inOut",
  duration: 1,
  stagger: {
    amount: 0.15,
  },
  delay: 0.5,
});
tl2.to(".Container p", {
  top: "40px",
  ease: "power4.inOut",
  duration: 1,
  stagger: {
    amount: 0.15,
  },
  onComplete: () => {
    document.querySelector(".header").remove();
  },
  delay:1.5,
});
tl2.from(".Container a", {
  y: 20,
  opacity: 0,
  ease: "power2.out",
  duration: 1,
  stagger: {
    amount: 0.15,
  },
});




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
  locomotiveScroll.stop();
  newLoco.start();
  locomotiveScroll.stop();
  tl2.play();
  gsap.to(".img", {
    scale: 1,
    width: "300px",
    height: "400px",
    stagger: 0.15,
    duration: 0.75,
    ease: "power2.out",
    delay:1,
    onComplete: ()=>{
      scatterAndShrink(positions);
    },
  });

})

const closeBtn = document.querySelector('.closeBtn');
closeBtn.addEventListener('click',()=>{
  overlays.style.display = 'none';
  setTimeout(() => {
    closeBtn.style.backgroundColor = '#7a7a7aaf';
  }, 100);
});
closeBtn.addEventListener('mouseenter',()=>{
  gsap.to(closeBtn,{
    backgroundColor:'#dadada',
  })
});
closeBtn.addEventListener('mouseleave',()=>{
  gsap.to(closeBtn,{
    backgroundColor:'#7a7a7aaf',
  })
});


