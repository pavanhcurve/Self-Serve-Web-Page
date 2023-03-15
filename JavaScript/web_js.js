// hamberger
const menu = () => {
    document.getElementById("check").checked = false;
}

// modal video
// Get the modal and video elements
var modal = document.getElementById("video-modal");
var video = document.getElementById("modal-video");

// Get the button that opens the modal
var btn = document.getElementById("onplay");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
    video.classList.add("scale-video");
    video.play();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    //   video.classList.remove("scale-video");
    video.pause();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        // video.classList.remove("scale-video");
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

});


// testimony
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


// Animations
gsap.from(".icon", {
    scale: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: 0.8,
    ease: "bounce"
});

gsap.from(".cta-btn", {
    scale: 0,
    opacity: 0,
    stagger: 0.05,
    delay: 2,
    duration: 0.3,
    ease: "power1"
});

gsap.from(".cta-text", {
    opacity: 0,
    stagger: 0.05,
    delay: 3,
    duration: 0.6,
    ease: "power0"
});