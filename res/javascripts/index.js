let profilePhoto = document.querySelector("#page1Img");
let prevY = 0;
let galleryImages = document.querySelectorAll(".box img");
let secImgs = document.querySelectorAll(".page3container .secLink img");
let overlay = document.querySelector(".overlay");
let overlayImage = document.querySelector(".overlay img");


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
    overlayImage.addEventListener('load', () => {

      overlay.style.display = "flex";
    });
  });
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});

secImgs.forEach((image) => {
  image.addEventListener("mouseover", () => {
    image.style.transform = "scale(1)";
  });
  image.addEventListener("mouseout", () => {
    image.style.transform = "scale(1.2)";
  });
});


let gLink = document.querySelector(".heroTextGl")
  gLink.addEventListener("click", function (e) {
    locomotiveScroll.scrollTo(document.querySelector("#gallery"));
  })




 