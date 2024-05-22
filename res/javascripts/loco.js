// (function () {
//     const locomotiveScroll = new LocomotiveScroll();
//   })();

const locomotiveScroll = new LocomotiveScroll();


  let links = document.querySelectorAll('.navLinkContainer ul li a')

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const id = e.target.getAttribute('href').slice(1)
      const element = document.getElementById(id)
      locomotiveScroll.scrollTo(element)
    })
  })


  let read = document.querySelector("#rLink")
  read.addEventListener("click", function (e) {
    e.preventDefault()
    locomotiveScroll.scrollTo(document.getElementById(e.target.getAttribute('href').slice(1)));
  })