import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Slider from "react-slick";

gsap.registerPlugin(ScrollTrigger);

export default function SlickSlider({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {

      gsap.to(".logo", 1, {
        "--logoColor":"#000000",
        scrollTrigger: {
          start: "-175 top",
          end: "+=175",
          id: ".slider-wrapper",
          trigger: ".slider-wrapper",
          scroller: '#main-container',
          scrub: 1,
          markers: false
        }
      });
      ScrollTrigger.refresh();
    }, 500);

    // This does not seem to work without a settimeout
    return () => clearTimeout(timer);
  });

  const settings = {
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "300px",
    slidesToShow: 1,
    speed: 500,
    arrows: true,
    dots: false
  };

  return (
    <section className="slider-wrapper bg-white py-24" data-scroll-section>
      <Slider {...settings}>
        <div className="slide-container p-10">
          <div className="text-3xl font-extrabold text-left uppercase black">Wow</div>
          <div className="text-3xl font-extrabold text-left outline-text uppercase black">Sandwich</div>
          <div id="slider1" className="container h-[620px] w-full object-cover overflow-hidden mt-3">
            <img data-scroll-target="#slider1" data-scroll data-scroll-speed="1" className="-mt-20" src="https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/bwimages%2Ftumblr_n92tblyC8d1s3sziio1_1280.jpg?alt=media&token=c5d75884-4bc3-46bb-815d-414d2ec68e4b" alt=""/>
          </div>
        </div>
        <div className="slide-container p-10">
          <div className="text-3xl font-extrabold text-left uppercase black">Wow</div>
          <div className="text-3xl font-extrabold text-left outline-text uppercase black">Sandwich</div>
          <div id="slider2" className="container h-[620px] w-full object-cover overflow-hidden mt-3">
            <img data-scroll-target="#slider2" data-scroll data-scroll-speed="1" className="-mt-20" src="https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/bwimages%2Ftumblr_n92tblyC8d1s3sziio1_1280.jpg?alt=media&token=c5d75884-4bc3-46bb-815d-414d2ec68e4b" alt=""/>
          </div>
        </div>
        <div className="slide-container p-10">
          <div className="text-3xl font-extrabold text-left uppercase black">Wow</div>
          <div className="text-3xl font-extrabold text-left outline-text uppercase black">Sandwich</div>
          <div id="slider3" className="container h-[620px] w-full object-cover overflow-hidden mt-3">
            <img data-scroll-target="#slider3" data-scroll data-scroll-speed="1" className="-mt-20" src="https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/bwimages%2Ftumblr_n92tblyC8d1s3sziio1_1280.jpg?alt=media&token=c5d75884-4bc3-46bb-815d-414d2ec68e4b" alt=""/>
          </div>
        </div>
      </Slider>
      <div className="py-10">
        <p className="text-2xl text-center font-bold uppercase tracking-widest"><a className="hover:underline" href="#">Our Work</a></p>
      </div>
    </section>
  )
}
