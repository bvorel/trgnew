import React, { useEffect, useRef, useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import { gql } from '@apollo/client';
import { client } from '../lib/apollo';
import Canvas from '../components/canvas';
import FullContainer from "../components/full-container";
import Container from '../components/container'
import Layout from '../components/layout'
import HeroBlack from "../components/hero-black";
import TextTicker from "../components/text-ticker";
import TextTickerWWA from "../components/text-ticker-wwa";
import SlickSlider from "../components/slick-slider";
import OurPeopleNameFlip from "../components/our-people-name-flip";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";
import { gsap } from "gsap/dist/gsap";
import SplitText from "../utils/SplitText.min.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useLocoScroll from "../hooks/useLocoScroll"

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function Index() {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);

  useLocoScroll(!preloader);

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const [timer, setTimer] = React.useState(3);

  const id = React.useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.document) {
      return null;
    }
  }, []);

  return (
    <>
      {preloader ? (
        <section className="min-h-screen flex flex-col justify-center items-center bg-black">
          <div className="logo-loader"></div>
        </section>
      ) : (
        <Layout>
          <FullContainer>

          </FullContainer>
          <main
            className="main-container"
            id="main-container"
            data-scroll-container
            ref={ref}
          >
            <Canvas></Canvas>
            <HeroBlack></HeroBlack>
            <SlickSlider></SlickSlider>
            <OurPeopleNameFlip></OurPeopleNameFlip>
            {/*<TextTicker></TextTicker>*/}
            {/*<TextTickerWWA words="Who We Are. "></TextTickerWWA>*/}
            <Testimonials></Testimonials>
            <Footer />
          </main>
        </Layout>
      )}
    </>
  );
}
