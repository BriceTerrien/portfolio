import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from(".skills-icons .skills-icons_content ",{
    scrollTrigger:{
        trigger : ".skills-icons ",
        toggleActions: "play play reverse none",
        start: "top 90%",
        end: "bottom 90%",
    },
    y: 200,
    scale: 0,
    ease: "back.out(1.5)",
    duration: 0.5,
    stagger : 0.1,
});
