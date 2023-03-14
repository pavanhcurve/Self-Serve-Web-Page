// function numberCounting(obj, start, end, duration) {
//     console.log("in here");
//     var range = end - start;

//     var current = start;
//     var increment = end > start ? 1 : -1;
//     var stepTime = Math.abs(Math.floor(duration / range));
//     var timer = setInterval(function () {
//         current += increment;
//         obj.innerHTML = current;
//         if (current == end) {
//             clearInterval(timer);
//         }
//     }, stepTime);
// }

// var transaction = 100;
// var spending = 80;

// var porcent = document.querySelector(".transactions-stat__number");
// var dolars = document.querySelector(".spending-stat__number");

// function run() {
//     duration = 5000;
//     numberCounting(porcent, 0, spending, duration);
//     numberCounting(dolars, 0, transaction, duration);
// }

// run();


var a = 0;
$(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },

                {

                    duration: 5000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }

});


// Testimony Swiper

// var swiper = new Swiper(".test_mony_Swiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//         rotate: 0,
//         stretch: 0,
//         depth: 100,
//         modifier: 3,
//         slideShadows: true,
//     },
//     loop: true,
//     pagination: {
//         el: ".swiper-pagination",
//     },
// });

var swiper = new Swiper(".test_mony_Swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 2,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
        reverseDirection: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

// typo container

var typing = false;
$(window).scroll(function () {
    if ($(window).scrollTop() > 10 && typing == false) {
        typing = true;
        typeIt("This is some funky typed text.");
    }
});

function typeIt(text) {
    $("#typed_output").typed({
        strings: [text],
        typeSpeed: 25,
        startDelay: 1000,
        showCursor: false,
        // backDelay: 750, // pause before backspacing
        loop: false, // loop on or off (true or false)
        loopCount: false, // number of loops, false = infinite
        callback: function () { }
        // call function after typing is done. You can use this to set the typing variable to false if you wanted so that your text types again.
        // callback: function(){typing = false; } 
    });
}



// owl carousal

// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 50,
//     autoplay: true,
//     autoplayTimeout: 5000,
//     slideTransition: 'linear',
//     autoplaySpeed: 5000,
//     autoplayHoverPause: false,
//     responsiveClass: true,
//     responsive: {
//         0: {
//             items: 1,
//             nav: false
//         },
//         600: {
//             items: 8,
//             nav: false
//         },
//         1000: {
//             items: 5,
//             nav: true,
//         }
//     }
// });


// owl 2

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    // navText: [
    //     "<i class='fa fa-caret-left'></i>",
    //     "<i class='fa fa-caret-right'></i>"
    // ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})