let tl1 = gsap.timeline();
let tl2 = gsap.timeline();
let tl3 = gsap.timeline();
// tl3.pause();
const loader = document.querySelector(".loader");
const loaderImg = document.querySelector(".loader img");
const root = document.querySelector(":root");
let currentSection = 0; 
tl2.pause();

let cl = "";

gsap.from(".loader h4 span",{
  opacity:0,
  stagger:0.2,
  ease:"power4.out",
  repeat:-1
})
let landingPageAnimation = function () {
  loaderImg.style.display = "none";
  document.querySelector(".loader h4").style.display = "none";
  tl1.to(".loader", {
    y: "-100%",
    duration: 0.9,
  });
  tl1.from(".page1", {
    backgroundColor: "#000000",
    transform: "scaleY(0)",
    duration: 3,
    ease: "expo.out",
    onStart: () => {
      gsap.from(".headingContainer .headChild1 span,.heroText span", {
        y: 80,
        opacity: 0,
        stagger: 0.1,
        onStart: () => {
          tl2.play();
        },
      });
    },
  });
  
  tl1.from(".down .left", {
    opacity: 0,
    x: 100,
  },'a');
  tl1.from(".down .right", {
    opacity: 0,
    x: -100,
  },'a');
  tl2.from("#jgt9",{
    delay: 2,
    opacity: 0,
    x: -50,
    duration: 0.6,
  })
  tl2.from("nav", {
    y: "-100%",
    opacity: 0,
    duration: 1.1,
    ease: "elastic.out(1,0.5)",
    onStart:()=>{
      // sessionStorage.setItem("animationPlayed", "true");
    }
  },'a');
  tl2.from(".description .left div div", {
    opacity: 0,
    y: 100,
    stagger: 0.2,
  },'a');
};

gsap.to(".page1,.page2,.page3,.main,.page4", {
  backgroundColor: "#fcf8e4",
  scrollTrigger: {
    trigger: ".page2",
    scrub: 0.5,
    start: "top bottom",
    end: "top 40%",
  },
});

gsap.to(".page4", {
  backgroundColor: "##fefceb",
  scrollTrigger: {
    trigger: ".page4",
    scrub: 0.5,
    start: "top 20",
    end: "top -50%",

  },
});

function showEvent() {
  currentSection = 1;
  gsap.to(".event", {
    display: "flex",
    onStart: () => {
      gsap.to(".wedding,.preWedding", {
        display: "none",
      });
    },
  });
  gsap.from(".event .box", {
    x: 100,
    opacity: 0,
    stagger: 0.1,
    onStart: function() {ScrollTrigger.refresh();}
  });
  setTimeout(() => {
    locomotiveScroll.scrollTo(document.querySelector(".event"));
  }, 500);
  let elem = "";
        eventImgLinks.forEach((link) => {
          elem += `<div class="swiper-slide"><div class="swiper-zoom-container"><img src="${link}"></img></div></div>`;
          document.querySelector(".overlay .swiper-wrapper").innerHTML = elem;
        });
}

function showWedding() {
  currentSection = 2;
  gsap.to(".wedding", {
    display: "flex",
  });
  gsap.from(".wedding .box", {
    x: 100,
    opacity: 0,
    stagger: 0.1,
    onStart: function() {ScrollTrigger.refresh();}
  });
  gsap.to(".event,.preWedding", {
    display: "none",
  });
  
  setTimeout(() => {
    locomotiveScroll.scrollTo(document.querySelector(".wedding"));
  }, 500);
  let elem = "";
        weddingImgLinks.forEach((link) => {
          elem += `<div class="swiper-slide"><div class="swiper-zoom-container "><img src="${link}"></img></div></div>`;
          document.querySelector(".overlay .swiper-wrapper").innerHTML = elem;
        });
}

function showPreWedding() {
  currentSection = 3;
  gsap.to(".preWedding",{
    display: "flex",
  })
  gsap.from(".preWedding .box",{
    x:100,
    opacity:0,
    stagger:0.1,
    onStart: function() {ScrollTrigger.refresh();}
  })
  gsap.to(".event,.wedding",{
    display:"none"
  })
  setTimeout(() => {
    locomotiveScroll.scrollTo(document.querySelector(".preWedding"));
  }, 500);
  let elem = "";
        preWeddingImgLinks.forEach((link) => {
          elem += `<div class="swiper-slide"><div class="swiper-zoom-container "><img src="${link}"></img></div></div>`;
          document.querySelector(".overlay .swiper-wrapper").innerHTML = elem;
        });
}

function openMenu() {
  tl3.to(".menu",{
    y:0,
    duration: 0.8,
    ease: "expo.out"
  })
  tl3.from(".menuLeft ul li",{
    y: 100,
    opacity: 0,
    stagger: 0.1,
    ease: "expo.out"
  })
  tl3.from(".menuContact h1",{
    x: 50,
    opacity: 0,
    ease: "expo.out"
  })
  tl3.from(".menuContact h4",{
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "expo.out"
  })
  tl3.from(".menuConnect .b",{
    x: 50,
    opacity: 0,
    ease: "expo.out"
  })
  tl3.from(".menuConnect .a",{
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "expo.out"
  })
}

function openMenu2(){
  gsap.to(".menu",{
    y: 0,
    duration: 0.8,
    ease: "expo.out"
  })
}

function closeMenu(){
  gsap.to(".menu",{
    y: "-100%",
    duration: 0.8,
    ease: "expo.out"
  })
}

gsap.from(".service1",{
  opacity:0,
  y:150,
  // duration: 0.5,
  scrollTrigger:{
    trigger: ".service1",
    start: "top 105%",
    end: "top 102%",
    // markers:true,
    scrub:1
  }
})

gsap.from(".service2",{
  opacity:0,
  y:150,
  scrollTrigger:{
    trigger: ".service2",
    start: "top 105%",
    end: "top 102%",
    scrub:1,
  }
})

gsap.from(".service3",{
  opacity:0,
  y:150,
  scrollTrigger:{
    trigger: ".service3",
    start: "top 105%",
    end: "top 102%",
    scrub:1,
  }
})

gsap.from(".service4",{
  opacity:0,
  y:150,
  scrollTrigger:{
    trigger: ".service4",
    start: "top 105%",
    end: "top 102%",
    scrub:1,
    // markers:true
  }
})

gsap.from(".service5",{
  opacity:0,
  y:150,
  scrollTrigger:{
    trigger: ".service5",
    start: "top 105%",
    end: "top 102%",
    scrub:1,
    // markers:true
  }
})

gsap.from(".service6",{
  opacity:0,
  y:150,
  scrollTrigger:{
    trigger: ".service6",
    start: "top 105%",
    end: "top 102%",
    scrub:1,
    // markers:true
  }
})

gsap.to("#SeeMore i",{
  y:5,
  duration:0.9,
  repeat:-1,
  yoyo:true
})


gsap.to(".main",{
  backgroundColor: "#00000000",
  scrollTrigger:{
    trigger:".page5",
    start: "top 10%",
    end:"top 5%",
    scrub:1,
    // markers:true
  }
})
