
var swiper = new Swiper(".mySwiper" , {

 
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        

    },
    
    slidesPerView: 1,
    spaceBetween: 10,
    roundLengths: true,
    ShadowRoot: true,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 1,
        },
    },
    autoplay: {
        delay: 2000,
        
    }, zoom : {
        maxRatio:5
    }
  //   effect: 'fade',
  // fadeEffect: {
  //   crossFade: true
  // },

    // effect: 'coverflow',


    //  coverflowEffect: {
    //   scale: 1,
    //   rotate: 10,
    // //     stretch: 0,
    // //     modifier: 1,
    //  slideShadows: true,
    //  spaceBetween: 10,
    //   }
  });
 