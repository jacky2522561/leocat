const intro = document.querySelector('.intro');
const video = document.querySelector('video');
const text = document.querySelector('h1');

const section = document.querySelector('section');
const end = document.querySelector('h1');

const controller = new ScrollMagic.Controller();

//scenes
let scene = new ScrollMagic.Scene({
    duration: 12000,
    triggerElemnt: intro,
    triggerHook: 0
})
// .addIndicators()
.setPin(intro)
.addTo(controller);

//text
const textAnim = TweenMax.fromTo(text,3,{opacity: 1},{opacity: 0});

let scene2 = new ScrollMagic.Scene({
    duration:3000,
    triggerElemnt: intro,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);

//video
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update',e=>{
    scrollpos = e.scrollPos / 1000;
});

setInterval(()=>{
    delay += (scrollpos - delay) * accelamount;
    video.currentTime = delay;
},38);