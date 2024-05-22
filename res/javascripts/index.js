let profilePhoto = document.querySelector("#page1Img");
let prevY = 0;

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
  });
let clf = "";
document.querySelectorAll("#heroText").forEach((element) => {
  element.textContent.split("").forEach((e) => {
    clf += `<span class="flex text-[7vw] uppercase font-josefin font-[300]">${e}</span>`;
    element.innerHTML = clf;
  });
  clf = "";
});

window.addEventListener("scroll", function (elem) {
  if (window.scrollY > 50) {
    if (prevY < window.scrollY) {
      prevY = window.scrollY;
      navDown = false;
      gsap.to(".nav", {
        y: "-100%",
      });
      // console.log("down");
    } else if (prevY > window.scrollY + 50) {
      prevY = window.scrollY;

      gsap.to(".nav", {
        y: "0%",
      });
      // console.log("up");
    }
  } else {
    gsap.to(".nav", {
      y: "0%",
    });
  }
});
