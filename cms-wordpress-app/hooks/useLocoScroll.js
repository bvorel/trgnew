import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";


gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start) {

  useEffect(() => {

    if (!start) return;

    import("locomotive-scroll").then((locomotiveModule) => {
      let locoScroll = null;
      const scrollEl = document.querySelector("#main-container");

      locoScroll = new locomotiveModule.default({
        el: scrollEl,
        smooth: true,
        smoothMobile: false,
        multiplier: 1,
        class: "is-reveal",
      })
      locoScroll.on('scroll', () => {
        ScrollTrigger.update();
      })
      ScrollTrigger.scrollerProxy(scrollEl, {
        scrollTop(value) {

          if (locoScroll) {

            return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.y;
          }
          return null;
        },
        scrollLeft(value) {
          if (locoScroll) {
            return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.x;
          }
          return null;
        },
        getBoundingClientRect() {
          return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight}
        }
      })
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      ScrollTrigger.refresh();

      return () => {
        if (locoScroll) {
          ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
          locoScroll.destroy();
          locoScroll = null;
          console.log("Kill", locoScroll);
        }
      };
    })


  }, [start]);
}
