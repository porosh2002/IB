const bars = document.querySelector('.bars');
const nav = document.querySelector('.nav');
const cross = document.querySelector('.fa-times');
bars.addEventListener('click',()=>{
    nav.classList.add('nav_on_Click')
})
cross.addEventListener('click',()=>{
    nav.classList.remove('nav_on_Click')
})