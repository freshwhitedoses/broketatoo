let menuBtn=document.querySelector('.header_burger');
let menu=document.querySelector('.header_list')
menuBtn.addEventListener('click',()=>{
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active')
})