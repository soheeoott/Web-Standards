$(document).ready(function() {
    var swiper = new Swiper('.slide1', {
        slidesPerView: 3,
        spaceBetween: 30, /* 한쪽 방향 margin */
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.slide1 .swiper-button-next',
          prevEl: '.slide1 .swiper-button-prev',
        },
    });

    var swiper2 = new Swiper('.slide2', {
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: '.slide2 .next',
          prevEl: '.slide2 .prev',
        },
    });
    
    var swiper3 = new Swiper('.slide3', {
        slidesPerView: 6,
        loop: true,
        autoplay: true
    });
});