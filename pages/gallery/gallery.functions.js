const cursor = document.querySelector(".cursor");
const circleElement = document.querySelector(".curOutline");
const curText = document.querySelector(".curText");
const overlays = document.querySelector(".overlay");
const overlayImg = document.querySelector(".overlay img");

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

const eventImgLinks = [
  "https://holydelights.com/assets/images/sr2.jpg",
  "https://img.freepik.com/free-photo/couples-celebrating-birthday_23-2149891227.jpg",
  "https://www.chase.com/content/dam/unified-assets/photography/articles/credit-card/basics/seo_how-to-plan-a-birthday-party_12282022.jpg",
];

const weddingImgLinks = [
  "https://plus.unsplash.com/premium_photo-1682092592909-8d26686e7f5e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1611106211090-8f3c79eb8552?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1610173827043-9db50e0d8ef9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1621801306185-8c0ccf9c8eb8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1656238352528-cc94fade3754?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
  "https://plus.unsplash.com/premium_photo-1682092037007-34c67c1bd432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhbiUyMHNjaG9vbCUyMGZ1bmN0aW9ufGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1682092597591-81f59c80d9ec?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://assets-global.website-files.com/602a4bbeeccd0a59a2d46a59/660ce71648a2a0301c75401d_South_Indian_Bridal_Looks.webp",
  "https://images.unsplash.com/photo-1600685890506-593fdf55949b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1635919254233-38ea27301900?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1670745084868-7b4f727cc934?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1587271315307-eaebc181c749?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1600685912448-8bc35c141e18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1610173826608-bd1f53a52db1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1588842867976-fd084ca2c87b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://live.staticflickr.com/5462/30594634682_6f6b7c120b_k.jpg",
  "https://plus.unsplash.com/premium_photo-1682090778813-3938ba76ee57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1593489062665-9f26fa627d73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1675597047092-e445f47d4b48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1583878545451-a83daf591083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1587271449604-04bb40332709?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1682096159299-5e8a6d5d442b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1682096067532-3e89ab323ebf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1612945578381-6481cdd73b0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1601120979673-b3f6f4c7d2ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1534418981420-34395cc92e2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1603124553002-eb75cd1c87b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1515626553181-0f218cb03f14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1682096051106-452f9d9e7d4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1583878543723-dcd6ad8bcb3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk4fHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1682090781379-4d177df45267?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1682096058045-a1c4f9ba858b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1682096055581-7cb5a5fd3d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1510079204922-a11f920f2c53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1626375362529-ab540f0dc801?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1599799045747-9dbfcfef6b97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGluZGlhbiUyMGJyaWRlfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1585372297133-90a276d74ac0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1612791756032-c3ee5f4cf310?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1617288991572-9e8755a88209?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE1fHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1521633575100-0b4b6f968ffb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEwfHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1606150326253-10510204bc62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM2fHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1682096113699-cce9093dcc73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhbiUyMGJyaWRlfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1610276347233-2ab70fc71da8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMGJyaWRlfGVufDB8fDB8fHww",
  "https://www.jansatta.com/wp-content/uploads/2024/02/Village-Famous-For-Love-Marriage-9.jpg",
];

const preWeddingImgLinks = [
  "https://i.pinimg.com/564x/49/4f/36/494f36590f656f629cab219961b4d84e.jpg",
  "https://i.pinimg.com/564x/0a/b2/5c/0ab25c43cd85d1af4ca7e6a552758f25.jpg",
  "https://i.pinimg.com/564x/2b/22/41/2b2241165faf08923460f43c8a278062.jpg",
  "https://i.pinimg.com/564x/9e/d7/d2/9ed7d29b7f2c7bb6648a50af2ffe527a.jpg",
  "https://i.pinimg.com/564x/12/60/dc/1260dc89daaecd358644d0dccf0dca5f.jpg",
  "https://i.pinimg.com/564x/a4/57/67/a45767d8a25b5072e6a98cd9c92ca3f6.jpg",
  "https://i.pinimg.com/564x/42/8d/d6/428dd68f6eff259adb5e5c1526bd6ce6.jpg",
  "https://i.pinimg.com/564x/49/d3/ea/49d3eafffae0b82f3c05014d3e65df9d.jpg",
  "https://i.pinimg.com/564x/36/63/7a/36637a9e5ac1cb0d332b9e7099bcdfaa.jpg",
  "https://i.pinimg.com/564x/b0/0f/94/b00f94581bdaeca0d4400e9ccf453f3e.jpg",
  "https://i.pinimg.com/564x/1f/e7/00/1fe700fd17ee4c12efe0993d76e9bf81.jpg",
  "https://i.pinimg.com/564x/89/86/0d/89860d94833e2f369ab450d0e6b62e4f.jpg",
  "https://i.pinimg.com/564x/92/6b/2a/926b2a6a10be9b3319ca13a15e4627d9.jpg",
  "https://i.pinimg.com/564x/7f/f7/5a/7ff75a63d0972b4cd393b9c7a0caada7.jpg",
  "https://i.pinimg.com/564x/3d/d6/53/3dd6537be3694c510b590277d0469ba4.jpg",
  "https://i.pinimg.com/564x/52/ec/b6/52ecb63c462ab487b9f28ca17e7bcf10.jpg",
  "https://i.pinimg.com/564x/4e/11/1a/4e111a70d6e5b1577214b1864e77ee99.jpg",
  "https://i.pinimg.com/564x/ff/f6/38/fff63866ba9ff4b172d26ddcf333f888.jpg",
  "https://i.pinimg.com/564x/74/c7/c2/74c7c2d7a3ba7367e7ae12f1f60fe3de.jpg",
  "https://i.pinimg.com/564x/2a/38/e8/2a38e8d22398c9c66925d812a73cceea.jpg",
  "https://i.pinimg.com/564x/f0/b0/d7/f0b0d71ee6d7933cf5f3ca865fcb44b7.jpg",
  "https://i.pinimg.com/564x/21/21/ec/2121eceff620bf54587dd381db32bf3a.jpg",
  "https://i.pinimg.com/564x/d2/a7/4f/d2a74f9c256d35d0b1d4363ae38e82ad.jpg",
  "https://i.pinimg.com/564x/d6/0e/63/d60e63156eb8d9219d75cc91050c3f71.jpg",
  "https://i.pinimg.com/564x/19/13/75/191375d3e81c957e577f8a035fe0f682.jpg",
  "https://i.pinimg.com/564x/0c/1e/47/0c1e47e79989933ffde0b1a4de1049af.jpg",
  "https://i.pinimg.com/564x/fb/92/68/fb9268599e574b7ee6fec198d15d0671.jpg",
  "https://i.pinimg.com/564x/f5/cb/4b/f5cb4bd9be37fa13fe7989698c245b56.jpg",
  "https://i.pinimg.com/564x/eb/52/36/eb52367a294c63bd04b0b8ccafde06c0.jpg",
  "https://i.pinimg.com/564x/f2/ec/c3/f2ecc38c2998c6be39942bd52d96a307.jpg",
  "https://i.pinimg.com/736x/44/16/b5/4416b53b9e7595b4c3a3daf3c63e81bc.jpg",
  "https://i.pinimg.com/564x/74/5d/b2/745db2b8e1d0a42f8a8f8559882f4c88.jpg",
  "https://i.pinimg.com/564x/27/7c/41/277c4108990ffa7bac911b91a824d052.jpg",
  "https://i.pinimg.com/564x/b8/f2/dd/b8f2dd4bc1cfb52cff7cf3350e3e0f5e.jpg",
  "https://i.pinimg.com/564x/96/10/ec/9610ec37bfc9479c7a4eb4e62aa6491d.jpg",
  "https://i.pinimg.com/564x/35/d6/a2/35d6a22940e91e0ca5ceee53ac9c642e.jpg",
  "https://i.pinimg.com/564x/2d/78/22/2d782233c124d64808754c16a0f3db4e.jpg",
  "https://i.pinimg.com/564x/e7/94/44/e794448b7ac9887295c2c9496861abc3.jpg",
  "https://i.pinimg.com/564x/16/9f/f4/169ff4f7971d7eeec29517d42f87987b.jpg",
  "https://i.pinimg.com/564x/f6/4d/5f/f64d5f10f68f07ef6697b212e5017145.jpg",
  "https://i.pinimg.com/564x/ca/19/17/ca1917163bf27ee04fdc591394a906dd.jpg",
  "https://i.pinimg.com/564x/90/52/47/905247f6a8d74d6ecdf134298635ae0f.jpg",
  "https://i.pinimg.com/564x/ff/c4/d4/ffc4d4a6270c8c6342387cc94bf89d35.jpg",
  "https://i.pinimg.com/564x/ad/28/9a/ad289a41be4efd11933e19cca0cb3eb2.jpg",
];

const comArr = [...eventImgLinks, ...weddingImgLinks, ...preWeddingImgLinks];

let images = shuffleArray(comArr);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

function generateRandomPositions(num) {
  const positions = [];

  for (let i = 0; i < num; i++) {
    let St = (window.innerWidth > 639) ? 800 : 1300;
    let Sl = (window.innerWidth > 639) ? 93 : 77;
    const top = Math.floor(Math.random() * St) + "%";
    const left = Math.floor(Math.random() * Sl) + "%";
    positions.push({ top, left });
  }
  return positions;
}

function scatterAndShrink(positions) {
  gsap.to(".img", {
    top: (i) => positions[i].top,
    left: (i) => positions[i].left,
    transform: "none",
    height: "100px",
    width: "75px",
    stagger: 0.075,
    duration: 0.75,
    onComplete: () => {
      gsap.to(".refresh", {
        display: "block",
      });
      document.addEventListener("mousemove", (e) => {
        document.querySelectorAll(".img").forEach((image, i) => {
          const S = image.getAttribute("speed");
          const xP = (window.innerWidth - e.clientX * S) / 150;
          const yP = (window.innerHeight - e.clientY * S) / 300;
          let parallax = (window.innerWidth > 639) ? false : true;
          gsap.set(image, { zIndex: 800 });
          if (!parallax) {
            image.style.transform = `translate(${xP}px, ${yP}px)`;
          }
        });
      });
      funcOverlay();
    },
  });
}

function newScatter(positions) {
  gsap.to(".img", {
    top: (i) => positions[i].top,
    left: (i) => positions[i].left,
    transform: "none",
    height: "100px",
    width: "75px",
    duration: 1,
    onComplete: () => {
      gsap.to(".refresh", {
        display: "block",
      });
    },
  });
}

function reArrange() {
  images = shuffleArray(comArr);
  positions = shuffleArray(shuffleArray(generateRandomPositions(100)));
  gsap.set(".refresh", {
    display: "none",
  });
  setTimeout(() => {
    newScatter(positions);
    document.querySelectorAll(".img img").forEach((img, i) => {
      img.src = images[i];
    });
  }, 100);
}

function funcOverlay() {
  let actualImg = document.querySelectorAll(".img img");
  actualImg.forEach((img, i) => {
    img.addEventListener("click", () => {
      // console.log(img.src);
      overlayImg.src = img.src;
      overlays.style.display = "flex";
    });
  });
}
