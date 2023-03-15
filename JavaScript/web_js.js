
// hamberger
const menu = () => {
    document.getElementById("check").checked = false;
}

// video modal
var modal = document.getElementById("video-modal");
var video = document.getElementById("modal-video");

var btn = document.getElementById("onplay");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
  video.classList.add("scale-video"); 
  video.play();
}

span.onclick = function() {
  modal.style.display = "none";
  video.pause();
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    video.pause();
  }
}


// swiper js

var swiper = new Swiper(".slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    initialSlide: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-left-btn',
        prevEl: '.swiper-right-btn',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
        reverseDirection: false,
    }
});


// count ++
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
    var opc = $('#banner').offset().top - window.innerHeight;
    if ($(window).scrollTop() > opc) {
        console.log("hello");
    }
    

});


// testimony
// var swiper = new Swiper(".test_mony_Swiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//         rotate: 0,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//     },
// });

// carousel 3d
new Vue({
    el: '#carousel3d',
    data: {
        slides: 7
    },
    components: {
        'carousel-3d': window['carousel-3d'].Carousel3d,
        'slide': window['carousel-3d'].Slide
    }
})




// animations
function vidBounce() {var tll =new TimelineMax({repeat:0,repeatDelay:0,delay:0});
tll.fromTo("#vidcontent",0.3,{x:30,scale:0.7,ease:Power0.easeBounce},{x:0,scale:1,ease:Power0.easeBounce});
tll.to("#vidcontent",0.3,{x:30,scale:0.7,ease:Power0.easeBounce},);
tll.to("#vidcontent",0.4,{x:0,scale:1,ease:Power0.easeBounce});
}vidBounce();


// image change on media query
var chng = document.getElementById("change");
function chngImage(imgchange){
    if(imgchange.matches){
        chng.src = "/Icons/laptopmob.gif";
    }else{
        chng.src = "/Icons/dco1.gif";
    }
}
var imgchange = window.matchMedia("(max-width: 750px)");
chngImage(imgchange);
imgchange.addEventListener(chngImage);



