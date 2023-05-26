gsap.from("#page1 h3",{
    y:-60,
    opacity:0,
    duration:2,

    scrollTrigger:{
        scroll:"body",
        trigger:"#page1 img",
        // markers: true,
        start:"top 120%",
        end:"top 50%",
        scrub:true
    }
})
gsap.from("#page1 h1",{
    y:-60,
    opacity:0,
    duration:2,
    scrollTrigger:{
        scroll:"body",
        trigger:"#page1 img",
        // markers: true,
        start:"top 120%",
        end:"top 50%",
        scrub:true
    }
})
gsap.from("#page1 #image",{
    y:-100,
    opacity:0,
    duration:2,
    scale:0,
    scrollTrigger:{
        scroll:"body",
        trigger:"#page1 #image",
        // markers: true,
        start:"top 90%",
        end:"top 60%",
        scrub:true
    }
})
gsap.from("#page4 h3",{
    y:60,
    opacity:0,
    duration:2,
    scrollTrigger:{
        scroll:"body",
        trigger:"#page4 h3",
        // markers: true,
        start:"top 90%",
        end:"top 50%",
        scrub:true
    }
})
gsap.from("#page4 #image",{
    y:-100,
    opacity:0,
    duration:2,
    scale:0,
    scrollTrigger:{
        scroll:"body",
        trigger:"#page4 #image",
        // markers: true,
        start:"top 90%",
        end:"top 60%",
        scrub:true
    }
})
gsap.from("#page5 .first",{
    y:-100,
    opacity:0,
    duration:2,
    scale:0,
    scrollTrigger:{
        scroll:"body",
        trigger:"#page5 .first",
        // markers: true,
        start:"top 90%",
        end:"top 60%",
        scrub:true
    }
})
gsap.from("#page5 .second",{
    x:-100,
    // opacity:0,
    duration:2,
    scale:0,
    stagger:1,
    scrollTrigger:{
        scroll:"body",
        trigger:"#page5 .second",
        // markers: true,
        start:"top 90%",
        end:"top 60%",
        scrub:true
    }
})
gsap.from("#page5 .third",{
    y:100,
    // opacity:0,
    duration:2,
    scale:0,
    stagger:0.5,
    scrollTrigger:{
        scroll:"body",
        trigger:"#page5 .third",
        // markers: true,
        start:"top 90%",
        end:"top 60%",
        scrub:true
    }
})

var e1= document.querySelector("#e1")
var e2= document.querySelector("#e4")
var e3= document.querySelector("#e3")
var e4= document.querySelector("#e2")
var e5= document.querySelector("#e5")
var img= document.querySelector("#images")

e1.addEventListener("click",function(){
    img.style.backgroundImage="url(https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/variants-and-pricing/thar/desktop/side-face_rage-red.webp?rev=2a20456676c4451eb2d249daa2573013&extension=webp)"
})
e2.addEventListener("click",function(){
    img.style.backgroundImage="url(https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/variants-and-pricing/thar/desktop/everestwhite.png?rev=154d5658c57c41e985d679b60f0f3688&extension=webp)"
})
e3.addEventListener("click",function(){
    img.style.backgroundImage="url(https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/variants-and-pricing/thar/desktop/side-face_deep-grey.png?rev=784b7a23bee645d896b4ab6f3f73e894&extension=webp)"
})
e4.addEventListener("click",function(){
    img.style.backgroundImage="url(https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/variants-and-pricing/thar/desktop/side-face_napoli-black.png?rev=6f74916d0be444339a68be02d5b51e4c&extension=webp)"
})
e5.addEventListener("click",function(){
    img.style.backgroundImage="url(https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/variants-and-pricing/thar/desktop/blazzingbronze.png?rev=19e6a83b60bb46348fbfaeec3b4a2072&extension=webp)"
})
