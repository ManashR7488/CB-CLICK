const eventImgLinks = ["https://holydelights.com/assets/images/sr2.jpg",
"https://img.freepik.com/free-photo/couples-celebrating-birthday_23-2149891227.jpg", 
"https://www.chase.com/content/dam/unified-assets/photography/articles/credit-card/basics/seo_how-to-plan-a-birthday-party_12282022.jpg"
];
const weddingImgLinks = [
    "https://plus.unsplash.com/premium_photo-1682092592909-8d26686e7f5e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
    ,"https://images.unsplash.com/photo-1611106211090-8f3c79eb8552?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
    ,"https://images.unsplash.com/photo-1610173827043-9db50e0d8ef9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
    ,"https://images.unsplash.com/photo-1621801306185-8c0ccf9c8eb8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    ,"https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    ,"https://images.unsplash.com/photo-1656238352528-cc94fade3754?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
    ,"https://plus.unsplash.com/premium_photo-1682092037007-34c67c1bd432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhbiUyMHNjaG9vbCUyMGZ1bmN0aW9ufGVufDB8fDB8fHww"
    ,"https://plus.unsplash.com/premium_photo-1682092597591-81f59c80d9ec?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    ,"https://assets-global.website-files.com/602a4bbeeccd0a59a2d46a59/660ce71648a2a0301c75401d_South_Indian_Bridal_Looks.webp"
    ,"https://images.unsplash.com/photo-1600685890506-593fdf55949b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    ,"https://images.unsplash.com/photo-1635919254233-38ea27301900?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    ,"https://plus.unsplash.com/premium_photo-1670745084868-7b4f727cc934?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    ,"https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    ,"https://images.unsplash.com/photo-1587271315307-eaebc181c749?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    ,"https://images.unsplash.com/photo-1600685912448-8bc35c141e18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    ,"https://images.unsplash.com/photo-1610173826608-bd1f53a52db1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    ,"https://images.unsplash.com/photo-1588842867976-fd084ca2c87b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    ,"https://live.staticflickr.com/5462/30594634682_6f6b7c120b_k.jpg"
    ,"https://plus.unsplash.com/premium_photo-1682090778813-3938ba76ee57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    ,"https://images.unsplash.com/photo-1593489062665-9f26fa627d73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    ,"https://plus.unsplash.com/premium_photo-1675597047092-e445f47d4b48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    ,"https://images.unsplash.com/photo-1583878545451-a83daf591083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    ,"https://images.unsplash.com/photo-1587271449604-04bb40332709?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    ,"https://plus.unsplash.com/premium_photo-1682096159299-5e8a6d5d442b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    ,"https://plus.unsplash.com/premium_photo-1682096067532-3e89ab323ebf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    ,"https://images.unsplash.com/photo-1612945578381-6481cdd73b0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    ,"https://images.unsplash.com/photo-1601120979673-b3f6f4c7d2ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    ,"https://images.unsplash.com/photo-1534418981420-34395cc92e2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    ,"https://images.unsplash.com/photo-1603124553002-eb75cd1c87b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
    ,"https://images.unsplash.com/photo-1515626553181-0f218cb03f14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww"
    ,"https://plus.unsplash.com/premium_photo-1682096051106-452f9d9e7d4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww"
    ,"https://images.unsplash.com/photo-1583878543723-dcd6ad8bcb3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk4fHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww"
    ,"https://plus.unsplash.com/premium_photo-1682090781379-4d177df45267?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww"
    ,"https://plus.unsplash.com/premium_photo-1682096058045-a1c4f9ba858b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww"
    ,"https://plus.unsplash.com/premium_photo-1682096055581-7cb5a5fd3d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww"
    ,"https://images.unsplash.com/photo-1510079204922-a11f920f2c53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww"
    ,"https://images.unsplash.com/photo-1626375362529-ab540f0dc801?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ,"https://images.unsplash.com/photo-1599799045747-9dbfcfef6b97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGluZGlhbiUyMGJyaWRlfGVufDB8fDB8fHww"
    ,"https://images.unsplash.com/photo-1585372297133-90a276d74ac0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww"
    ,"https://images.unsplash.com/photo-1612791756032-c3ee5f4cf310?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8fA%3D%3D"
    ,"https://images.unsplash.com/photo-1617288991572-9e8755a88209?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE1fHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww"
    ,"https://images.unsplash.com/photo-1521633575100-0b4b6f968ffb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEwfHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww"
    ,"https://images.unsplash.com/photo-1606150326253-10510204bc62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM2fHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww"
    ,"https://plus.unsplash.com/premium_photo-1682096113699-cce9093dcc73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhbiUyMGJyaWRlfGVufDB8fDB8fHww"
    ,"https://images.unsplash.com/photo-1610276347233-2ab70fc71da8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMGJyaWRlfGVufDB8fDB8fHww"
    ,"https://www.jansatta.com/wp-content/uploads/2024/02/Village-Famous-For-Love-Marriage-9.jpg"
    ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3J5J-mzRovS86qBRZBeFz5m6rfZZ0wzW0Awf6GcJEsQ&s"

];

let eventContainer = document.querySelector('#eventContainer');
let weddingContainer = document.querySelector('#weddingContainer');


let elem = '';

eventImgLinks.forEach((link)=>{
    elem += `<div class="box">
    <img src="${link}"></img>
    </div>`;
    eventContainer.innerHTML = elem;
})

elem = '';

weddingImgLinks.forEach((link)=>{
    elem += `<div class="box magnet">
    <img src="${link}"></img>
    </div>`;
    weddingContainer.innerHTML = elem;
});

elem = '';








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
      clt += `<div class="heroTextGl magnet flex gap-[-10px ] cursor-pointer" id="heroText">${e}</div>`;
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