const menu = () => {
    document.getElementById("check").checked = false;
}

gsap.from(".title", {
    top: -100,
    stagger: 0.05,
    delay: 1,
    duration: 5,
    ease: "power1"
});

gsap.from(".icon", {
    scale: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: 0.8,
    ease: "bounce"
});

gsap.from(".step", {
    scale: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: 0.6,
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
