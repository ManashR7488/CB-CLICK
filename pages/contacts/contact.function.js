const cursor = document.querySelector(".cursor");
const circleElement = document.querySelector(".curOutline");
const curText = document.querySelector(".curText");



gsap.set(cursor, { xPercent: -50, yPercent: -50 });
gsap.set(curText, { xPercent: -50, yPercent: -50 });

const mouse = { x: 0, y: 0 };
const previousMouse = { x: 0, y: 0 };
const circle = { x: 0, y: 0 };

let currentScale = 0;
let currentAngle = 0;

function makeCursor() {
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      ease: "power4.out",
      duration: 0.2,
    });
    gsap.to(curText, {
      x: e.clientX,
      y: e.clientY,
      ease: "power4.out",
      duration: 0.2,
    });
  });
}


const speed = 0.15;

function elasticMouse() {
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;

  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

  const deltaMouseX = mouse.x - previousMouse.x;
  const deltaMouseY = mouse.y - previousMouse.y;

  previousMouse.x = mouse.x;
  previousMouse.y = mouse.y;

  const mouseVelocity = Math.min(
    Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
    150
  );

  const scaleValue = (mouseVelocity / 150) * 0.5;

  currentScale += (scaleValue - currentScale) * speed;

  const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

  const angle =
    (Math.atan2(circle.y - mouse.y, circle.x - mouse.x) * 180) / Math.PI;

  if (mouseVelocity > 20) {
    currentAngle = angle;
  }

  const rotateTransform = `rotate(${currentAngle}deg)`;

  gsap.set(circleElement, {
    transform: `${translateTransform} ${rotateTransform} ${scaleTransform}`,
  });
}

const cursorCuberto = new MouseFollower({
  el: null,
  container: ".page1 .left .con",
  className: 'mf-cursor',
  innerClassName: 'mf-cursor-inner',
  textClassName: 'mf-cursor-text',
  mediaClassName: 'mf-cursor-media',
  mediaBoxClassName: 'mf-cursor-media-box',
  iconSvgClassName: 'mf-svgsprite',
  iconSvgNamePrefix: '-',
  iconSvgSrc: '',
  dataAttr: 'cursor',
  hiddenState: '-hidden',
  textState: '-text',
  iconState: '-icon',
  activeState: '-active',
  mediaState: '-media',
  stateDetection: {
      '-pointer': 'a,button',
      '-hidden': 'iframe'
  },
  visible: true,
  visibleOnState: false,
  speed: 0.9,
  ease: 'expo.out',
  overwrite: true,
  skewing: 0,
  skewingText: 2,
  skewingIcon: 2,
  skewingMedia: 2,
  skewingDelta: 0.001,
  skewingDeltaMax: 0.15,
  stickDelta: 0.15,
  showTimeout: 20,
  hideOnLeave: true,
  hideTimeout: 300,
  hideMediaTimeout: 300
});


let tl = gsap.timeline()

const Animation = ()=>{
    tl.to(".loader",{
      display:"none",
      duration:0.1,
      delay:0.2
    }).from(".page1",{
        scaleY:0,
        scaleX:0.8,
        duration:0.6,
        // delay:1.2
    }).from(".TextQ h1>span",{
      y:200,
      stagger:0.08
    }).from(".address h1 span",{
      y:50,
      stagger:0.08
    },'a').from(".contact-Number h1 span",{
      y:50,
      stagger:0.08
    },'a').from(".timing h1 span",{
      y:50,
      stagger:0.08
    },'a').from(".social-links .ab",{
      y:50,
      stagger:0.08
    },'a').from(".gmail",{
      y:50,
      opacity:0
    },'a')
    .from(".nav",{
      y:"-100%",
      opacity:0,
      duration:1
    },'a')  
};

const magnets = document.querySelectorAll(".magnet");
const lerp = (x, y, a) => x * (1 - a) + y * a;


function makeMagnet() {
    magnets.forEach((element) => {
      // element.style.backgroundColor = "#00ff00"
      element.addEventListener("mousemove", (e) => {
        let dims = element.getBoundingClientRect();
        let xStart = dims.x;
        let xEnd = dims.x + dims.width;
        let yStart = dims.y;
        let yEnd = dims.y + dims.height;
  
        let xZeroOne = gsap.utils.mapRange(xStart, xEnd, 0, 1, e.clientX);
        let yZeroOne = gsap.utils.mapRange(yStart, yEnd, 0, 1, e.clientY);
  
        let lerpX = lerp(-20, 20, xZeroOne);
        let lerpY = lerp(-20, 20, yZeroOne);
  
        gsap.to(element, {
          x: lerpX,
          y: lerpY,
          ease: "power4.out",
          duration: 1,
        });
        gsap.to(".cursor", {
          scale: 5.5,
          ease: "power3.out",
          duration: 1,
        });
        gsap.to(".curOutline", {
          opacity: 0,
        });
      });
      element.addEventListener("mouseleave", (e) => {
        gsap.to(element, {
          x: 0,
          y: 0,
          ease: "power4.out",
          duration: 1,
        });
        gsap.to(".cursor", {
          scale: 1,
          ease: "power4.out",
          duration: 1,
        });
        gsap.to(".curOutline", {
          opacity: 1,
        });
      });
    });
  }