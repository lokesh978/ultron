document.addEventListener('DOMContentLoaded', ()=>{
    // ------------------ Display hero video on mobile ------------------
    //document.querySelector('.hero-video .hero-video__inner.v-2').classList.remove('start-hidden');
    // document.querySelectorAll('video').forEach((video) => {
    //   setTimeout(() => {
    //     if (video.readyState === 4 && video.paused) video.play();
    //   }, 1000);
    // });

    // ------------------ Hero Text Animation ------------------
    let animation = gsap.timeline({
        repeat: -1
    });
    let targets = document.querySelectorAll('.slide-text');
    let numberOfTargets = targets.length;

    let duration = 0.5;
    let pause = 2;

    let stagger = duration + pause;
    let repeatDelay = stagger * (numberOfTargets - 1) + pause;

    gsap.set('.slider-text-box', {
        autoAlpha: 1
    });
    animation.from(targets, {
        y: -100,
        duration: duration,
        opacity: 0,
        stagger: {
            each: stagger,
            repeat: -1,
            repeatDelay: repeatDelay,
        },
    }).to(targets, {
        y: 100,
        duration: duration,
        opacity: 0,
        stagger: {
            each: stagger,
            repeat: -1,
            repeatDelay: repeatDelay,
        },
    }, stagger);
    // They are hidden by default
    targets.forEach((target)=>target.classList.remove('hidden'));
}
);