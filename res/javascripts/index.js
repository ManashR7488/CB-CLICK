const profilePhoto = document.querySelector("#page1Img");
let prevY = 0;
const galleryImages = document.querySelectorAll(".box img");
const secImgs = document.querySelectorAll(".page3container .secLink img");
const overlay = document.querySelector(".overlay");
const profilePic = document.querySelector(".dpImg");
const menuBtn = document.querySelector(".navmenu")
let currentImage = 0;
let zoom = false;
let menu = false;

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
    if (currentSection === 1) {
      currentImage = eventImgLinks.indexOf(image.src)  
    } else if (currentSection === 2) {
      currentImage = weddingImgLinks.indexOf(image.src)  
    } else if (currentSection === 3) {
      currentImage = preWeddingImgLinks.indexOf(image.src) //
    }
    const swiper3 = new Swiper(".mySwiper", {
      keyboard: {
        enabled: true,
      },
      zoom:true,
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
    time = 550;
  }
  setTimeout(() => {
    locomotiveScroll.scrollTo(document.querySelector("#gallery"));
  }, time);
}


let links = document.querySelectorAll('.navLinkContainer ul li a')

links.forEach((link,idx) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const id = e.target.getAttribute('href').slice(1)
    const element = document.getElementById(id)
    if(idx === 2){
      showWedding();
    }else{
      locomotiveScroll.scrollTo(element)
    }
    
  })
})

profilePic.addEventListener('mouseenter',()=>{
  gsap.to(profilePic,{
    transform: "scale(1.2)"
  })
})
profilePic.addEventListener('mouseleave',()=>{
  gsap.to(profilePic,{
    transform: "scale(1)"
  })
})


menuBtn.addEventListener('click',()=>{
  menu = !menu;
  if(menu){
    locomotiveScroll.stop()
    gsap.to(menuBtn,{
      backgroundColor: "#ffffff",
      color: "#000000",
      onStart:()=>{
        menuBtn.innerHTML = `<i class="ri-close-line"></i>` 
      }
    })
  }else{
    locomotiveScroll.start()
    gsap.to(menuBtn,{
      backgroundColor: "#000000",
      color: "#ffffff",
      onStart:()=>{
        menuBtn.textContent = "Menu" 
      }
    })
  }
});