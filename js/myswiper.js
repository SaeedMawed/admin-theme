var swiper_slide = new Swiper(".who-us-swiper-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    //effect: "fade",
    loop: true,
    /*fadeEffect: {
            crossFade: true,
        },
        */
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    /*
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },*/
});



var swiper_3d = new Swiper(".swiper-3d", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: false,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});



var swiper1 = new Swiper(".swiper-cube", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});