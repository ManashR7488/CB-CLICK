let tl1 = gsap.timeline();
let tl2 = gsap.timeline();
let loader = document.querySelector(".loader");
// loader.style.display = "flex";
let loaderImg = document.querySelector(".loader img");
let loaderText = document.querySelector(".loader h1");
let root = document.querySelector(":root");
tl2.pause();

let cl = "";
loaderText.textContent.split("").forEach((element) => {
  cl += `<span style="display:inline-block"; id="pop">${element}</span>`;
  loaderText.innerHTML = cl;
});

window.addEventListener("DOMContentLoaded", function () {
  
    if (window.innerWidth > 639) {
      Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.3,
      });
      Shery.makeMagnet(".magnet", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
    } else {
    }
  });

let landingPageAnimation = function () {
  loaderImg.style.display = "none";
  loaderText.style.display = "block";

  tl1.from("#pop", {
    display: "none",
    y: 100,
    // duration:2,
    color: "#000000",
    stagger: 0.2,
  });
  tl1.to(".loader", {
    delay: 1,
    y: "-100%",
    // scale:0,
    duration: 1.5,
  });
  tl1.from(".page1", {
    backgroundColor: "#000000",
    transform: "scaleY(0)",
    duration: 4.5,
    ease: "expo.out",
    onStart: () => {
      gsap.from(".headingContainer .headChild1 span ,#heroText span", {
        delay: 0,
        y: 80,
        opacity: 0,
        // duration:2,
        stagger: 0.1,
        onStart: () => {
          tl2.play();
        },
      });
    },
  });
  tl1.from(".down .left", {
    stagger: 0.2,
    opacity: 0,
    x: 100,
  });
  tl1.from("#profileImg", {
    // delay:5,
    opacity: 0,
    x: -100,
    // scale:2,
    duration: 1,
  });
  tl1.from(".down .right", {
    stagger: 0.2,
    opacity: 0,
    x: -100,
  });
  tl1.from(".page2", {
    duration: 1,
    display: "none",
  });
  tl1.from(".page3", {
    duration: 0.5,
    display: "none",
  });
};


tl2.from("nav", {
  delay: 3,
  y: "-100%",
  opacity: 0,
  duration: 1.5,
  ease: "elastic.out(1,0.5)",
});
tl2.from(".description .left div div", {
  opacity: 0,
  y: 100,
  stagger: 0.2,
});

window.addEventListener("load", function () {
  landingPageAnimation();
});

gsap.to(".page1,.page2,.page3", {
  backgroundColor: "#fcf8e4",
  // backgroundColor:"#00ff00",
  scrollTrigger: {
    trigger: ".page2",
    scrub: 0.5,
    // markers: true, 
    start: "top bottom",
    end: "top 40%",
  },
});


function showWedding(){
  gsap.to(".wedding",{
    display: "flex",
  })
  gsap.from(".wedding .box",{
    x:100,
    opacity:0,
    stagger:0.1,
  })
  gsap.to(".event,.preWedding",{
    display:"none"
  })
  setTimeout(() => {
    locomotiveScroll.scrollTo(document.querySelector(".wedding"));
  }, 500);
}

function showEvent(){
  gsap.to(".event",{
    display: "flex",
    onStart:()=>{
      gsap.to(".wedding,.preWedding",{
        display:"none"
      })
    }
  })
  gsap.from(".event .box",{
    x:100,
    opacity:0,
    stagger:0.1,
  })
  setTimeout(() => {
    locomotiveScroll.scrollTo(document.querySelector(".event"));
  }, 500)
}

function showPreWedding(){
}