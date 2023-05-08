gsap.from(".page1 h3",{
    y:-60,
    opacity:0,
    duration:2,

    scrollTrigger:{
        scroll:"body",
        trigger:".page1 img",
        // markers: true,
        start:"top 120%",
        end:"top 50%",
        scrub:true
    }
})
gsap.from(".page1 h1",{
    y:-60,
    opacity:0,
    duration:2,
    scrollTrigger:{
        scroll:"body",
        trigger:".page1 img",
        // markers: true,
        start:"top 120%",
        end:"top 50%",
        scrub:true
    }
})
gsap.from(".page1 #image",{
    y:-100,
    opacity:0,
    duration:2,
    scale:0,
    scrollTrigger:{
        scroll:"body",
        trigger:".page1 #image",
        // markers: true,
        start:"top 90%",
        end:"top 60%",
        scrub:true
    }
})
gsap.from(".page4 h3",{
    y:60,
    opacity:0,
    duration:2,
    scrollTrigger:{
        scroll:"body",
        trigger:".page4 h3",
        // markers: true,
        start:"top 90%",
        end:"top 50%",
        scrub:true
    }
})
gsap.from(".page4 #image",{
    y:-100,
    opacity:0,
    duration:2,
    scale:0,
    scrollTrigger:{
        scroll:"body",
        trigger:".page4 #image",
        // markers: true,
        start:"top 90%",
        end:"top 60%",
        scrub:true
    }
})
gsap.from(".page5 .first",{
    y:-100,
    opacity:0,
    duration:2,
    scale:0,
    scrollTrigger:{
        scroll:"body",
        trigger:".page5 .first",
        // markers: true,
        start:"top 90%",
        end:"top 60%",
        scrub:true
    }
})
gsap.from(".page5 .second",{
    x:-100,
    // opacity:0,
    duration:2,
    scale:0,
    stagger:1,
    scrollTrigger:{
        scroll:"body",
        trigger:".page5 .second",
        // markers: true,
        start:"top 90%",
        end:"top 60%",
        scrub:true
    }
})
gsap.from(".page5 .third",{
    y:100,
    // opacity:0,
    duration:2,
    scale:0,
    stagger:0.5,
    scrollTrigger:{
        scroll:"body",
        trigger:".page5 .third",
        // markers: true,
        start:"top 90%",
        end:"top 60%",
        scrub:true
    }
})