let profilePhoto = document.querySelector("#page1Img");
let tl1 = gsap.timeline();
let tl2 = gsap.timeline();
let clutter = "";
document
  .querySelector(".headChild1")
  .textContent.split("")
  .forEach((e) => {
    clutter += `<span class="flex text-[7vw] uppercase font-josefin font-[300]">${e}</span>`;
    document.querySelector(".headingContainer .headChild1").innerHTML = clutter;
  });
let clt = "";
document
  .querySelector(".headChild2")
  .textContent.split(" ")
  .forEach((e, idx) => {
    if (idx === 0) {
      clt += `<div class="flex gap-[-10px ]" id="heroText">${e}</div>`;
    } else {
      clt += `<a href="#home" class="magnet flex gap-[-10px ]" id="heroText">${e}</a>`;
    }
    document.querySelector(".headingContainer .headChild2").innerHTML = clt;
    console.log(idx);
  });
let clf = "";
document.querySelectorAll("#heroText").forEach((element) => {
  element.textContent.split("").forEach((e) => {
    clf += `<span class="flex text-[7vw] uppercase font-josefin font-[300]">${e}</span>`;
    element.innerHTML = clf;
  });
  clf = "";
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

window.addEventListener("load", function () {
  // tl1.to(".loader", {
  //   // y:"100%",
  //   scale:0,
  //   duration: 0.5
  // })
    tl1.from(".page1", {
        backgroundColor: "#000000",
        transform: "scale(0,0)",
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
      //   y: 100,
      scale:2,
      duration:1
      });
      tl1.from(".down .right", {
          stagger: 0.2,
          opacity: 0,
          x: -100,
        });
});

profilePhoto.addEventListener("mouseenter", function () {
  profilePhoto.style.transform = "scale(1.2)";
});

profilePhoto.addEventListener("mouseleave", function () {
  profilePhoto.style.transform = "scale(1)";
});


