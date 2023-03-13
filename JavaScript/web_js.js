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
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});