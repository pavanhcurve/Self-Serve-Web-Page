
// hamberger
const menu = () => {
    document.getElementById("check").checked = false;
}

// video modal
var modal = document.getElementById("video-modal");
var video = document.getElementById("modal-video");

var btn = document.getElementById("onplay");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
    video.classList.add("scale-video");
    video.play();
}

span.onclick = function () {
    modal.style.display = "none";
    video.pause();
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        video.pause();
    }
}

//swiper first
var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    initialSlide: 0,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        350: {
            slidesPerView: 1,
            spaceBetween: 50
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        580: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        646: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        900: {
            slidesPerView: 2,
            spaceBetween: 5
            // width: 1000,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 20
            // width: 1000,
        },
        2000: {
            slidesPerView: 5,
            spaceBetween: 20
        }
    },
    // Optional parameters
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-left-btn",
        prevEl: ".swiper-right-btn"
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
        reverseDirection: false
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

// footer modal
const footermodal = document.getElementById("footer_modal");
const anscale = document.getElementById("ct2");
const onget = document.getElementById("contatctbtn");
const closee = document.getElementsByClassName("close2")[0];
const usname = document.getElementById("usname");
const showname = document.getElementById("namedisplay");
const usemail = document.getElementById("usemail");
const agname = document.getElementById("agname");
const usnum = document.getElementById("usnum");
const err = document.getElementById("err");

const valid = () => {
    if (usname.value == "" || usemail.value == "" || usnum.value == "" || agname.value == "") {
        usname.style.border = "3px solid red";
        usemail.style.border = "3px solid red";
        agname.style.border = "3px solid red";
        usnum.style.border = "3px solid red";
        footermodal.style.display = "none";
        err.style.visibility = "visible";
        setTimeout(function () {
            usname.style.border = "3px solid transparent";
            usemail.style.border = "3px solid transparent";
            agname.style.border = "3px solid transparent";
            usnum.style.border = "3px solid transparent";
            err.style.visibility = "hidden";
        }, 2000);
    } else {
        footermodal.style.display = "block";
        anscale.classList.add("scalemore");
        showname.innerHTML = usname.value;
        setTimeout(function () {
            footermodal.style.display = "none";
        }, 5000);
    }
}



closee.onclick = function () {
    footermodal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == footermodal) {
        footermodal.style.display = "none";
    }
}

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

//carousel last

new Vue({
    el: '#carousel3d',
    data: {
        slides: 7
    },
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 2000,

    pauseOnHover: true,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }

    ],
    components: {
        'carousel-3d': window['carousel-3d'].Carousel3d,
        'slide': window['carousel-3d'].Slide
    }
});

// new Vue({
//     el: '#carousel3d',
//     data: {
//       slides: 7
//     },
//     components: {
//       'carousel-3d': window['carousel-3d'].Carousel3d,
//       'slide': window['carousel-3d'].Slide
//     }
//   })

//start added by Chase
//   var a = document.getElementsByTagName("a");
//   var cfImg = document.getElementsByClassName("coverflow__image")
//   var scaleI = 0;
//   for (scaleI; scaleI < a.length; scaleI++) {
//     if (scaleI === 3) {
//       continue;
//     } else {
//       a[scaleI].style.cursor = "default";
//       a[scaleI].addEventListener("click", prevDef);
//     }
//   }

//   function prevDef(e) {
//     e.preventDefault();
//   }

//   function forScale(coverflowPos) {
//     for (scaleI = 0; scaleI < a.length; scaleI++) {
//       a[scaleI].style.cursor = "default";
//       a[scaleI].addEventListener("click", prevDef);
//     }
//     for (scaleI = 0; scaleI < cfImg.length; scaleI++) {
//       if (cfImg[scaleI].getAttribute("data-coverflow-index") == coverflowPos) {
//         cfImg[scaleI].parentElement.style.cursor = "pointer";
//         cfImg[scaleI].parentElement.removeEventListener("click", prevDef);
//       }
//     }
//   }
//   //end added by Chase
//   function setupCoverflow(coverflowContainer) {
//     var coverflowContainers;
//     if (typeof coverflowContainer !== "undefined") {
//       if (Array.isArray(coverflowContainer)) {
//         coverflowContainers = coverflowContainer;
//       } else {
//         coverflowContainers = [coverflowContainer];
//       }
//     } else {
//       coverflowContainers = Array.prototype.slice.apply(document.getElementsByClassName('coverflow'));
//     }
//     coverflowContainers.forEach(function(containerElement) {
//       var coverflow = {};
//       var prevArrows, nextArrows;
//       //capture coverflow elements
//       coverflow.container = containerElement;
//       coverflow.images = Array.prototype.slice.apply(containerElement.getElementsByClassName('coverflow__image'));
//       coverflow.position = Math.floor(coverflow.images.length / 2) + 1;
//       //set indicies on images
//       coverflow.images.forEach(function(coverflowImage, i) {
//         coverflowImage.dataset.coverflowIndex = i + 1;
//       });
//       //set initial position
//       coverflow.container.dataset.coverflowPosition = coverflow.position;
//       //get prev/next arrows
//       prevArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName("prev-arrow"));
//       nextArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName("next-arrow"));
//       //add event handlers
//       function setPrevImage() {
//         coverflow.position = Math.max(1, coverflow.position - 1);
//         coverflow.container.dataset.coverflowPosition = coverflow.position;
//         //call the functin forScale added
//         forScale(coverflow.position);
//       }

//       function setNextImage() {
//         coverflow.position = Math.min(coverflow.images.length, coverflow.position + 1);
//         coverflow.container.dataset.coverflowPosition = coverflow.position;
//         //call the function Chase added
//         forScale(coverflow.position);
//       }

//       function jumpToImage(evt) {
//         coverflow.position = Math.min(coverflow.images.length, Math.max(1, evt.target.dataset.coverflowIndex));
//         coverflow.container.dataset.coverflowPosition = coverflow.position;
//         //start added by Chase
//         setTimeout(function() {
//           forScale(coverflow.position);
//         }, 1);
//         //end added by Chase
//       }

//       function onKeyPress(evt) {
//         switch (evt.which) {
//           case 37: //left arrow
//             setPrevImage();
//             break;
//           case 39: //right arrow
//             setNextImage();
//             break;
//         }
//       }
//       prevArrows.forEach(function(prevArrow) {
//         prevArrow.addEventListener('click', setPrevImage);
//       });
//       nextArrows.forEach(function(nextArrow) {
//         nextArrow.addEventListener('click', setNextImage);
//       });
//       coverflow.images.forEach(function(image) {
//         image.addEventListener('click', jumpToImage);
//       });
//       window.addEventListener('keyup', onKeyPress);
//     });
//   }
//   setupCoverflow();




// animations
function vidBounce() {
    var tll = new TimelineMax({ repeat: 0, repeatDelay: 0, delay: 0 });
    tll.fromTo("#vidcontent", 0.5, { x: 300, scale: 0, ease: Power0.easePower0 }, { x: 0, scale: 1, ease: Power0.easePower0 });
    tll.to("#vidcontent", 0.2, { x: 100, scale: 0.65, ease: Power0.easePower0 });
    tll.to("#vidcontent", 0.3, { x: 0, scale: 1, ease: Power0.easePower0 });
} vidBounce();


// gsap.from(".cta-text", {
//     opacity: 0,
//     y: -20,
//     duration: 0.6,
//     ease: "power0"
// });


// function Annim() {
// var gsap = new TimelineMax();
// gsap.from(".cta-btn", {
//     ScrollTrigger: ".cta-btn",
//     scale: 0,
//     opacity: 0,
//     // stagger: 0.05,
//     duration: 0.3,
//     ease: "power1"
// });

// gsap.from(".cta-text", {
//     opacity: 0,
//     y: -20,
//     // stagger: 0.05,
//     duration: 0.6,
//     ease: "power0"
// });

// gsap.from(".selfgif", {
//     y: 300,
//     scale: 0,
//     duration: 1,
//     ease: "elastic"
// });

// gsap.from(".icon1", {
//     scale: 0,
//     // stagger: 0.05,
//     repeat: -1,
//     repeatDelay: 1,
//     duration: 0.8,
//     duration: 1,
//     ease: "elastic"
// });

// gsap.from(".icon2", {
//     y: 60,
//     x: -60,
//     opacity: 0,
//     // stagger: 0.05,
//     duration: 0.6,
//     ease: "power0"
// });

gsap.from(".icon1,.icon3", {
    scale: 0,
    repeat: -1,
    repeatDelay: 1,
    duration: 0.8,
    ease: "bounce"
});



//show year
var year = new Date();
var current = year.getFullYear();
document.getElementById("year").innerHTML = current;


// image change on media query
var chng = document.getElementById("change");
function chngImage(imgchange) {
    if (imgchange.matches) {
        chng.src = "https://s.hcurvecdn.com/selfserve/icons/fulllaptop.gif";
    } else {
        chng.src = "https://s.hcurvecdn.com/selfserve/icons/halflaptop.gif";
    }
}
var imgchange = window.matchMedia("(max-width: 750px)");
chngImage(imgchange);
imgchange.addEventListener(chngImage);
