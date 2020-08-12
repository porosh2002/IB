const bars = document.querySelector('.bars');
const nav = document.querySelector('.nav');
const cross = document.querySelector('.fa-times');
bars.addEventListener('click',()=>{
    nav.classList.add('nav_on_Click')
})
cross.addEventListener('click',()=>{
    nav.classList.remove('nav_on_Click')
})

var typed = new Typed(".type", {
    strings: [
      "reality"
    ],
    typeSpeed: 120,
    loop: 0,
    backSpeed: 120,
    shuffle: 0
  });
  var swiper = new Swiper('.swiper-container', {
    slidesPerView:4,
    spaceBetween: 30,
    loop:true,
  });