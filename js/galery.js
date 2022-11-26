new Swiper(".mySwiper", {
    spaceBetween: 90,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    mousewheel: true,
    keyboard: true,
    breakpoints:{
        768:{
            slidesPerView:'auto',
            spaceBetween: 8
        },
        991:{
            slidesPerView: 2,
            spaceBetween:30
        },
        1192:{
            slidesPerView:3,
            spaceBetween:20
        }
    }
});
let menuBtn=document.querySelector('.header_burger');
let menu=document.querySelector('.header_list')
menuBtn.addEventListener('click',()=>{
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active')
})