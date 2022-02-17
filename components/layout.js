import { useEffect } from "react";
import Meta from '../components/meta'
import Header from '../components/header'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Layout({ preview, children }) {

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //
  //     gsap.to(".logo", 1, {
  //       "--logoColor":"#ffffff",
  //       scrollTrigger: {
  //         start: "bottom top",
  //         id: "heroContainer",
  //         trigger: "#heroContainer",
  //         scroller: '#main-container',
  //         scrub: 1,
  //         markers: true
  //       }
  //     });
  //     ScrollTrigger.refresh();
  //   }, 500);
  //
  //   // This does not seem to work without a settimeout
  //   return () => clearTimeout(timer);
  // });

  /*
  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to("html", {
        "--color1": "#ffffff",
        "--color2": "#bebebe",
        scrollTrigger: {
          pin: false,
          trigger: ".main-container",
          scroller: "#main-container",
          start: "0",
          end: "bottom",
          scrub: true
        }
      });
    }, 500);
    // This does not seem to work without a settimeout
    return () => clearTimeout(timer);
  }, []);*/

  return (
    <>
      <Meta />
      <Header></Header>
      <div className="gradient mb-10">{children}</div>
    </>
  )
}
