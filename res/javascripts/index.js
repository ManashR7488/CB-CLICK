let profilePhoto = document.querySelector("#page1Img");
let prevY = 0;
let galleryImages = document.querySelectorAll(".box img");
let secImgs = document.querySelectorAll(".page3container .secLink img");
let overlay = document.querySelector(".overlay");
let overlayImage = document.querySelector(".overlay img");
let overlayLeftBtn = document.querySelector(".overlay .left");
let overlayRightBtn = document.querySelector(".overlay .right");
let overlayCloseBtn = document.querySelector(".overlay .close");
let currentImage = 0;
let zoom = false;

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
window.addEventListener("load", function () {
  landingPageAnimation();
});

window.addEventListener("scroll", function (elem) {
  if (window.scrollY > 50) {
    if (prevY < window.scrollY) {
      prevY = window.scrollY;
      navDown = false;
      gsap.to(".nav", {
        y: "-100%",
      });
    } else if (prevY > window.scrollY + 50) {
      prevY = window.scrollY;

      gsap.to(".nav", {
        y: "0%",
      });
    }
  } else {
    gsap.to(".nav", {
      y: "0%",
    });
  }
});

galleryImages.forEach((image) => {
  image.style.cursor = "pointer";
  image.addEventListener("mouseover", () => {
    image.style.transform = "scale(1.2)";
  });
  image.addEventListener("mouseout", () => {
    image.style.transform = "scale(1)";
  });
  image.addEventListener("click", () => {
    overlayImage.src = image.src;
    if (currentSection === 1) {
      currentImage = eventImgLinks.indexOf(image.src);
    } else if (currentSection === 2) {
      currentImage = weddingImgLinks.indexOf(image.src);
    } else if (currentSection === 3) {
      // currentImage = preWeddingImgLinks.indexOf(image.src);
    }
    overlayImage.addEventListener("load", () => {
      overlay.style.display = "flex";
      locomotiveScroll.stop();
      // scroll.stop()
    });
  });
});

overlayLeftBtn.addEventListener("click", () => {
  zoom = false;
  overlayImage.style.transform = "scale(1)";
  if (currentSection === 1) {
    if (currentImage > 0) {
      currentImage--;
      overlayImage.src = eventImgLinks[currentImage];
    }
  } else if (currentSection === 2) {
    if (currentImage > 0) {
      currentImage--;
      overlayImage.src = weddingImgLinks[currentImage];
    }
  } else if (currentSection === 3) {
    // if (currentImage > 0) {
    //   currentImage--;
    //   overlayImage.src = preWeddingImgLinks[currentImage];
    // }
  }
});

overlayRightBtn.addEventListener("click", () => {
  zoom = false;
  overlayImage.style.transform = "scale(1)";
  if (currentSection === 1) {
    if (currentImage < eventImgLinks.length - 1) {
      currentImage++;
      overlayImage.src = eventImgLinks[currentImage];
    }
  } else if (currentSection === 2) {
    if (currentImage < weddingImgLinks.length - 1) {
      currentImage++;
      overlayImage.src = weddingImgLinks[currentImage];
    }
  } else if (currentSection === 3) {
    // if (currentImage < preWeddingImgLinks.length - 1) {
    //   currentImage++;
    //   overlayImage.src = preWeddingImgLinks[currentImage];
    // }
  }
});

overlayCloseBtn.addEventListener("click", () => {
  locomotiveScroll.start();
  overlay.style.display = "none";
  zoom = false;
  overlayImage.style.transform = "scale(1)";
});

overlayImage.addEventListener("click", (e) => {
  zoom = !zoom;
  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;
  if (zoom) {
    overlayImage.style.transformOrigin = `${x}px ${y}px`;
    overlayImage.style.transform = "scale(2)";
    overlayImage.style.cursor = "grabbing";
    overlayImage.addEventListener("mousemove", (f) => {
      if (zoom) {
        let X = f.clientX - f.target.offsetLeft;
        let Y = f.clientY - f.target.offsetTop;
        overlayImage.style.transformOrigin = `${X}px ${Y}px`;
        overlayImage.style.transform = "scale(2.2)";
      }
    });
  } else {
    overlayImage.style.transformOrigin = "center";
    overlayImage.style.cursor = "pointer";
    overlayImage.style.transform = "scale(1)";
  }
});

secImgs.forEach((image) => {
  image.addEventListener("mouseover", () => {
    image.style.transform = "scale(1)";
  });
  image.addEventListener("mouseout", () => {
    image.style.transform = "scale(1.2)";
  });
});

let gLink = document.querySelector(".heroTextGl");
gLink.addEventListener("click", function (e) {
  locomotiveScroll.scrollTo(document.querySelector("#gallery"));
});

function hideSection(sec){
  let time = 0;

  locomotiveScroll.scrollTo(document.querySelector("#gugufiy"));
  
  if(sec === 1){
    document.querySelector(".event").style.display = "none";
    time = 300;
  }else if(sec === 2){
    document.querySelector(".wedding").style.display = "none";
    time = 550;
  }else if(sec === 3){
    document.querySelector(".preWedding").style.display = "none";
  }
  setTimeout(() => {
    locomotiveScroll.scrollTo(document.querySelector("#gallery"));
  }, time);
}


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
  });
  setTimeout(() => {
    locomotiveScroll.scrollTo(document.querySelector(".event"));
  }, 500);
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
  });
  gsap.to(".event,.preWedding", {
    display: "none",
  });
  setTimeout(() => {
    locomotiveScroll.scrollTo(document.querySelector(".wedding"));
  }, 500);
}

function showPreWedding() {
  // currentSection = 3;
  // gsap.to(".preWedding",{
  //   display: "flex",
  // })
  // gsap.from(".preWedding .box",{
  //   x:100,
  //   opacity:0,
  //   stagger:0.1,
  // })
  // gsap.to(".event,.wedding",{
  //   display:"none"
  // })
  // setTimeout(() => {
  //   locomotiveScroll.scrollTo(document.querySelector(".preWedding"));
  // }, 500);
}



// setTimeout(() => {
//   locomotiveScroll.start();
// }, 20000)