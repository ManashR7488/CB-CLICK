const profilePhoto = document.querySelector("#page1Img");
let prevY = 0;
const galleryImages = document.querySelectorAll(".box img");
const secImgs = document.querySelectorAll(".page3container .secLink img");
const overlay = document.querySelector(".overlay");
const profilePic = document.querySelector(".dpImg");
const menuBtn = document.querySelector(".navmenu");
const seeMoreBtn = document.querySelector("#SeeMore");
let currentImage = 0;
let zoom = false;
let menu = false;
let menuOpen = true;
let animationPlayed = new Boolean();
let cerviceContainer = document.querySelector(".serviceContainer")
let service = document.querySelector(".service");
let serviceDimention = service.getBoundingClientRect();
let sConHeight = serviceDimention.height * 2 + 40
cerviceContainer.style.height = sConHeight + "px";

// let allImages = document.querySelectorAll("body img");
// allImages.forEach((image) => {});

window.addEventListener("DOMContentLoaded", function () {
  animationPlayed = sessionStorage.getItem("animationPlayed");

  if (window.innerWidth > 639) {
    cursor.style.display = "block";
    circleElement.style.display = "block";
    curText.style.display = "block";
    makeCursor();
    makeMagnet();
    gsap.ticker.add(elasticMouse);
  } else {
    cursor.style.display = "none";
    circleElement.style.display = "none";
    curText.style.display = "none";
    document.querySelectorAll(".cursor-none").forEach((element) => {
      element.classList.remove("cursor-none");
    });
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 639) {
    cursor.style.display = "block";
    circleElement.style.display = "block";
    curText.style.display = "block";
    makeCursor();
    makeMagnet();
    gsap.ticker.add(elasticMouse);
  } else {
    cursor.style.display = "none";
    circleElement.style.display = "none";
    document.querySelectorAll(".cursor-none").forEach((element) => {
      element.classList.remove("cursor-none");
    });
  }
});

window.addEventListener("load", function () {
  if (!animationPlayed) {
    locomotiveScroll.scrollTo(top);
    setTimeout(() => {
      landingPageAnimation();
    }, 100);
  } else {
    gsap.to(".loader", {
      display: "none",
      y: "-100%",
    });
  }
});

setTimeout(() => {
  sessionStorage.removeItem("animationPlayed");
}, 25000);

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
  image.addEventListener("mouseover", () => {
    image.style.transform = "scale(1.2)";
  });

  image.addEventListener("mouseout", () => {
    image.style.transform = "scale(1)";
  });

  image.addEventListener("click", () => {
    if (currentSection === 1) {
      currentImage = eventImgLinks.indexOf(image.src);
    } else if (currentSection === 2) {
      currentImage = weddingImgLinks.indexOf(image.src);
    } else if (currentSection === 3) {
      currentImage = preWeddingImgLinks.indexOf(image.src); //
    }
    const swiper3 = new Swiper(".mySwiper", {
      keyboard: {
        enabled: true,
      },
      zoom: true,
      initialSlide: currentImage,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
        type: "fraction",
      },
    });
    overlay.style.display = "flex";
    locomotiveScroll.stop();
  });
});

const closeOverlay = () => {
  locomotiveScroll.start();
  document.querySelector(".overlay").style.display = "none";
};

secImgs.forEach((image) => {
  image.addEventListener("mouseover", () => {
    image.style.transform = "scale(1)";
    gsap.to(curText, {
      fontSize: "0.75vw",
    });
    curText.innerHTML = "see<br>images";
    gsap.to(".cursor", {
      scale: 5.5,
      ease: "power4.out",
      duration: 1,
      mixBlendMode: "normal",
      backgroundColor: "#000",
    });
    gsap.to(".curOutline", {
      opacity: 0,
    });
  });
  image.addEventListener("mouseout", () => {
    image.style.transform = "scale(1.2)";
    curText.textContent = "";
    gsap.to(curText, {
      fontSize: "0.9vw",
    });
    gsap.to(".cursor", {
      scale: 1,
      ease: "power4.out",
      duration: 1,
      mixBlendMode: "difference",
      backgroundColor: "#fff",
    });
    gsap.to(".curOutline", {
      opacity: 1,
    });
  });
});

let gLink = document.querySelector(".heroTextGl");
gLink.addEventListener("click", function (e) {
  // locomotiveScroll.scrollTo(document.querySelector(".page3"));//#gallery
});
gLink.addEventListener("mouseenter", function (e) {
  curText.textContent = "click";
});
gLink.addEventListener("mouseleave", function (e) {
  curText.textContent = "";
});

function hideSection(sec) {
  let time = 0;

  locomotiveScroll.scrollTo(document.querySelector("#gugufiy"));

  if (sec === 1) {
    document.querySelector(".event").style.display = "none";
    time = 300;
  } else if (sec === 2) {
    document.querySelector(".wedding").style.display = "none";
    time = 550;
  } else if (sec === 3) {
    document.querySelector(".preWedding").style.display = "none";
    time = 550;
  }
  ScrollTrigger.refresh();
  setTimeout(() => {
    locomotiveScroll.scrollTo(document.querySelector(".page3"));
  }, time);
}

const links = document.querySelectorAll(".navLinkContainer ul li a");

links.forEach((link, idx) => {
  link.addEventListener("click", (e) => {
    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    if (idx === 0) {
      e.preventDefault();
      locomotiveScroll.scrollTo(element);
    } else if (idx === 1) {
      e.preventDefault();
      locomotiveScroll.scrollTo(element);
    } else if (idx === 2) {
      e.preventDefault();
      showWedding();
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    } else if (idx === 3) {
      e.preventDefault();
      showPreWedding();
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    } else {
      locomotiveScroll.scrollTo(element);
    }
  });
});

const menuLinks = document.querySelectorAll(".menu ul li a");

menuLinks.forEach((link, idx) => {
  link.addEventListener("click", (e) => {
    locomotiveScroll.start();
    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    if (idx === 0) {
      e.preventDefault();
      locomotiveScroll.scrollTo(element);
    } else if (idx === 1) {
      e.preventDefault();
      locomotiveScroll.scrollTo(element);
    } else if (idx === 2) {
      e.preventDefault();
      showWedding();
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    } else if (idx === 3) {
      e.preventDefault();
      showPreWedding();
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    } else {
      locomotiveScroll.scrollTo(element);
    }
    setTimeout(() => {
      gsap.to(menuBtn, {
        backgroundColor: "#000000",
        color: "#ffffff",
        fontSize: "3.45vw",
        paddingLeft: "2vw",
        paddingRight: "2vw",
        paddingTop: "0.25rem",
        paddingBottom: "0.25rem",
        onStart: () => {
          menuBtn.textContent = "Menu";
        },
      });
      closeMenu();
    }, 500);
  });
});

profilePic.addEventListener("mouseenter", () => {
  gsap.to(profilePic, {
    transform: "scale(1.2)",
  });
});
profilePic.addEventListener("mouseleave", () => {
  gsap.to(profilePic, {
    transform: "scale(1)",
  });
});

menuBtn.addEventListener("click", () => {
  menu = !menu;
  if (menu) {
    locomotiveScroll.stop();
    gsap.to(menuBtn, {
      backgroundColor: "#ffffff",
      color: "#000000",
      fontSize: "4vw",
      padding: "0.2vw 1.2vw",
      onStart: () => {
        menuBtn.innerHTML = `<i class="ri-close-line"></i>`;
      },
    });
    if (menuOpen) {
      openMenu();
      menuOpen = false;
    } else {
      openMenu2();
    }
  } else {
    locomotiveScroll.start();
    gsap.to(menuBtn, {
      backgroundColor: "#000000",
      color: "#ffffff",
      fontSize: "3.45vw",
      paddingLeft: "2vw",
      paddingRight: "2vw",
      paddingTop: "0.25rem",
      paddingBottom: "0.25rem",
      onStart: () => {
        menuBtn.textContent = "Menu";
      },
    });
    closeMenu();
  }
});

setInterval(() => {
  menuOpen = true;
}, 30000);

let open = false;
let see = true;
let upDown = document.querySelector("#SeeMore i");
seeMoreBtn.addEventListener("click", () => {
  open = !open;
  see = !see;
  if (open) {
    seeMoreBtn.title = "show less";
    upDown.classList.replace(
      "ri-arrow-down-wide-fill",
      "ri-arrow-up-wide-fill"
    );
    gsap.to(".serviceContainer", {
      height: "fit-content",
    });
    locomotiveScroll.scrollTo(document.getElementById("89nffv89"));
    setTimeout(() => {
      // ScrollTrigger.update();
      ScrollTrigger.refresh();
    }, 500);
  } else {
    upDown.classList.replace(
      "ri-arrow-up-wide-fill",
      "ri-arrow-down-wide-fill"
    );
    gsap.to(".serviceContainer", {
      height: sConHeight,
    });
    locomotiveScroll.scrollTo(document.getElementById("89nffv89"));
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  }
});

document.querySelectorAll(".noCursor").forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursor.style.display = "none";
    circleElement.style.display = "none";
  });
  element.addEventListener("mouseleave", () => {
    cursor.style.display = "block";
    circleElement.style.display = "block";
  });
});

document.querySelectorAll(".service .za").forEach((element) => {
  element.addEventListener("mouseenter", () => {
    gsap.to(curText, {
      fontSize: "0.75vw",
    });
    curText.textContent = "swipe";
    gsap.to(".cursor", {
      scale: 5.5,
      ease: "power4.out",
      duration: 1,
      mixBlendMode: "normal",
      backgroundColor: "#000",
    });
    gsap.to(".curOutline", {
      opacity: 0,
    });
  });
  element.addEventListener("mouseleave", () => {
    curText.textContent = "";
    gsap.to(curText, {
      fontSize: "0.9vw",
    });
    gsap.to(".cursor", {
      scale: 1,
      ease: "power4.out",
      duration: 1,
      mixBlendMode: "difference",
      backgroundColor: "#fff",
    });
    gsap.to(".curOutline", {
      opacity: 1,
    });
  });
});

const svgContainer = document.querySelector(".svgcontainer");
const svgPath = document.querySelector(".svgcontainer svg path");
let rect = svgContainer.getBoundingClientRect();
let fllow = false;
let svgH = rect.height;
let svgW = rect.width;

function updateRect() {
  rect = svgContainer.getBoundingClientRect();
  svgH = rect.height;
  svgW = rect.width;
}

window.addEventListener('scroll', updateRect);
window.addEventListener('resize', updateRect);

const initialPath = `M 0 ${svgH/2} Q ${svgW/2} ${svgH/2} ${svgW} ${svgH/2}`;
let finalPath = `M 0 ${svgH/2} Q ${svgW/2} ${svgH/2} ${svgW} ${svgH/2}`;

gsap.to("svg path",{
  attr:{d:initialPath}
})

svgContainer.addEventListener('mousemove', (e) =>{
  if(Math.abs((e.clientY)-(rect.top + rect.height / 2)) < 7){
    fllow = true;
  }
  if(fllow){
    finalPath = `M 0 ${svgH/2} Q ${e.offsetX} ${e.offsetY} ${svgW} ${svgH/2}`;
   }else{
    finalPath = `M 0 ${svgH/2} Q ${svgW/2} ${svgH/2} ${svgW} ${svgH/2}`
   }
  gsap.to("svg path",{
    attr:{d:finalPath},
    duration:0.2
  })
})

svgContainer.addEventListener('mouseleave', (e) =>{
  gsap.to("svg path",{
    attr:{d:initialPath},
    duration:1.8,
    ease: "elastic.out(2,0.2)"
  })
    fllow = false;
})