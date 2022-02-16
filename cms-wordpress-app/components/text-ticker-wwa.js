import { useEffect, useRef, useState, useCallback } from "react";
import { gsap, TimelineMax } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import TextLoop from "react-text-loop";

gsap.registerPlugin(ScrollTrigger);

export default function TextTickerWWA( props, { children }) {
  const ref = useRef(null);
  const tickerText = [];
  //
  // useEffect(() => {
  //   let vsOpts = {
  //     $slides: document.querySelector(".v-slide"),
  //     $list: document.querySelector(".v-slides"),
  //     duration: 6,
  //     lineHeight: 50
  //   }
  //   let i = 0;
  //   let vSlide = new TimelineMax({
  //     paused: true,
  //     repeat: -1
  //   })
  //   gsap.utils.toArray(".v-slide").forEach(slide => {
  //     vSlide.to(".v-slides", 10 / 6, {
  //       y: i * -1 * 50,
  //       ease: "none"
  //     })
  //     console.log(i);
  //     i++;
  //   })
  //   vSlide.play()
  // }, []);

  useEffect(() => {
    const words = document.querySelectorAll('.rotator > span')
    const span = document.querySelector('.rotator')

    let targets = gsap.utils.toArray(words);
    // gsap.set(targets, { xPercent: -50 });
    let dur = 0.5;
    let hold = 1.5;

    targets.forEach((obj, i) => {
      let tl = gsap.timeline({
        delay: dur * i + hold * i,
        repeat: -1,
        repeatDelay: (targets.length - 1) * (dur + hold) - dur,
        defaults: {
          ease: "none",
          duration: dur
        }
      });
      // 473, 515, 485, 390
      // 517, 524, 488, 390
      tl.from(obj, { yPercent: 100, opacity: 0 , onStart:setTheWidth, onStartParams:[gsap.getProperty(obj, "width")]});
      tl.to(obj, { yPercent: -100, opacity: 0 }, "+=" + hold);

    });

    function setTheWidth(num) {
      console.log(num);
      gsap.to(span, dur, {
        width: num
      })
    }

  }, [])

  function showTicker() {
    const num = 15;

    for(var i=0;i<num;i++){
      tickerText.push(props.words);
    }

    return tickerText.map((ticker, index) => <span key={index}>{ticker}</span>);
  }

  return (
    <section className="ticker-wrapper" data-scroll-section>
      <div className="ticker-container">
        <div ref={ref} id="tickerWWA" className="overflow-hidden bg-black overflow-hidden">
          <h2 className="whitespace-nowrap py-5 uppercase text-2xl font-bold text-white" data-scroll data-scroll-direction="horizontal" data-scroll-speed="10" data-scroll-position="top" data-scroll-target="#tickerWWA">{showTicker()}</h2>
        </div>
      </div>
      {/* <div className="text-ticker w-full py-40">
        <h2 className="outline-text black uppercase text-8xl font-bold tracking-wide">
          We Are {" "}
          <TextLoop mask={true} adjustingSpeed={300} delay={4}>
            <span className="outline-text-none black pl-5">Fearless</span>
            <span className="outline-text-none black pl-5">Branding</span>
            <span className="outline-text-none black pl-5">Strategy</span>
            <span className="outline-text-none black pl-5">Digital</span>
          </TextLoop>
        </h2>
      </div> */}
      <div className="text-ticker w-full py-40">
        <h2 className="outline-text black uppercase text-8xl font-bold tracking-wide">
          We Are
          <span className="rotator">
            <span className="outline-text-none black ml-5">Fearless</span>
            <span className="outline-text-none black ml-5">Strategy</span>
            <span className="outline-text-none black ml-5">Creative</span>
            <span className="outline-text-none black ml-5">Digital</span>
          </span>
        </h2>
      </div>
      
    </section>
  )
}
