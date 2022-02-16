import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Slider from "react-slick";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials({ children }) {
  const ref = useRef(null);

  const settings = {
    slidesToScroll: 1,
    className: "container",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    dots: true
  };

  return (
    <section className="testimonials-wrapper py-24" data-scroll-section>
      <Slider {...settings}>
        <div className="slide-container p-10">
          <div className="pt-10 pb-20">
            <p className="text-base text-center font-semibold uppercase tracking-widest">Client Name</p>
          </div>
          <div className="text-4xl leading-relaxed font-extrabold text-center uppercase black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</div>
          <div className="pt-14">
            <p className="text-2xl text-center font-bold uppercase tracking-widest"><a className="hover:underline" href="#">View Project</a></p>
          </div>
        </div>
        <div className="slide-container p-10">
          <div className="pt-10 pb-20">
            <p className="text-base text-center font-semibold uppercase tracking-widest">Client Name</p>
          </div>
          <div className="text-4xl leading-relaxed font-extrabold text-center uppercase black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          <div className="pt-14">
            <p className="text-2xl text-center font-bold uppercase tracking-widest"><a className="hover:underline" href="#">View Project</a></p>
          </div>
        </div>
      </Slider>
    </section>
  )
}
