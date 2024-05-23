// (function () {
//     const locomotiveScroll = new LocomotiveScroll();
//   })();

const locomotiveScroll = new LocomotiveScroll({
  smooth:true,
});


  let links = document.querySelectorAll('.navLinkContainer ul li a')

  links.forEach((link,idx) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const id = e.target.getAttribute('href').slice(1)
      const element = document.getElementById(id)
      if(idx === 2){
        gsap.to(".wedding",{
          display: "flex",
        })
        gsap.from(".wedding .box",{
          x:100,
          opacity:0,
          stagger:0.1,
        })
        gsap.to(".event,.preWedding",{
          display:"none"
        })
        setTimeout(() => {
          locomotiveScroll.scrollTo(element);
        }, 900);
      }else{
        locomotiveScroll.scrollTo(element)
      }
      
    })
  })


  let read = document.querySelector("#rLink")
  read.addEventListener("click", function (e) {
    e.preventDefault()
    locomotiveScroll.scrollTo(document.getElementById(e.target.getAttribute('href').slice(1)));
  })

  
  