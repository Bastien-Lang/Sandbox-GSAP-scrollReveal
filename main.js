import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(ScrollTrigger) 

var tl = gsap.timeline({delay: 1});
let anim = tl.to(".box1", {duration: 1, rotation: -360})
  .to(".box2", {duration: 1, x: -100, ease: 'elastic.out'})
  .to(".box3", {duration: 1, rotation: 360, x: 100, ease: 'expo.out'})
  .to(".box1", {duratoin:1, x: -100, ease: 'elastic.out'})
  .to(".box3", {duration: 1, x: -100, ease: 'elastic.out'});
document.querySelector('#pause').addEventListener('click', function() {
    anim.pause();
  })
document.querySelector('#play').addEventListener('click', function() {
    anim.play();
  })
  gsap.to('.box', {
    scrollTrigger: '.box', // start the animation when ".box" enters the viewport (once)
    x: 500
});


ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.tagline', { delay: 500 });
ScrollReveal().reveal('.punchline', { delay: 5500, opacity:1, duration: 1000 });

ScrollReveal().reveal(".noir", { delay: 0, opacity: 0, duration: 3000, origin: 'left' , distance: '5000px', reset: true , viewOffset: { 
  top: -300,  
  right: 0, 
  bottom: 0, 
  left: 0 
}});
ScrollReveal().reveal(".rouge", { delay: 0, opacity: 0, duration: 2000,origin: "right" , distance: '5000px', reset: true});
ScrollReveal().reveal(".jaune", { delay: 0, opacity: 0, duration: 3000, origin: 'left' , distance: '5000px', reset: true});

TweenLite.to("#test", 5, {delay:1.5, scrambleText:{text:"I sure hope this works for you.", rightToLeft:true, chars:"lowercase"}})