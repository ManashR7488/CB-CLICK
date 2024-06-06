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
