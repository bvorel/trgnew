import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitText from "../utils/SplitText.min";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function HeroBlack({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {

      const heroHeadlines = gsap.timeline();
      const headlineSplit = new SplitText("#trgHeadline", {type:"words"});
      const words = headlineSplit.words;

      // const anim = gsap.to("#headlineWrapper", { opacity: 0, paused: true });

      gsap.set("#trgHeadline", {
        alpha: 1
      });

      // const ST = ScrollTrigger.create({
      //   trigger: ".hero-container",
      //   scroller: '#main-container',
      //   pin: ".hero-container",
      //   animation: anim,
      //   markers:false,
      //   start: "0",
      //   end: '+=385',
      //   scrub:1
      // });

      heroHeadlines.from(words, {
        duration: 1,
        opacity:0,
        y:50,
        ease:"power1.out",
        stagger: 0.03
      });
      ScrollTrigger.refresh();
    }, 500);
    ScrollTrigger.refresh();
    ScrollTrigger.config({ autoRefreshEvents: "DOMContentLoaded,load,resize" });


    // This does not seem to work without a settimeout
    return () => clearTimeout(timer);
  });

  return (
    <section className="hero-wrapper bg-black" data-scroll-section>
      <div id="heroContainer" className="hero-container">
        <div ref={ref} id="hero" className="min-h-screen flex flex-col justify-center items-center">
          <div id="headlineWrapper" className="container">
            <h1 id="trgHeadline" className="outline-text align-middle uppercase text-5xl md:text-5xl lg:text-7xl font-bold tracking-wide text-white">We’re <span className="outline-text-none">Independent</span>.<br/>And free to be fearless.<br/>In our <span className="outline-text-none">thinking</span>, in our hiring, in our smart and endearing <span className="outline-text-none">work</span>. We excel in the telling stories. Let’s work <span className="outline-text-none">together.</span></h1>
          </div>
        </div>
      </div>
    </section>
  )
}
