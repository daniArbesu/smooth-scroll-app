'use client';
import Image from 'next/image';
import styles from './style.module.css';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const IntroSection = () => {
  const backgroundImageRef = useRef(null);
  const introImageRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement, // Document is the trigger
        start: 'top', // Start at the top of the document
        end: '+=500px', // Lenght of the scroll
        scrub: true // Animation linked with the scrollbar
      }
    });

    timeline
      .from(backgroundImageRef.current, { clipPath: 'inset(15%)' })
      .to(introImageRef.current, { height: '200px' }, 0); // 0 for animations happen at the same time
  }, []);

  return (
    <section className={styles.intro}>
      <div ref={backgroundImageRef} className={styles.backgroundImage}>
        <Image src={'/images/background.jpeg'} fill={true} alt="Background image" />
      </div>
      <div className={styles.introContainer}>
        <div ref={introImageRef} data-scroll data-scroll-speed="0.3" className={styles.introImage}>
          <Image src={'/images/intro.png'} fill={true} alt="Background image" />
        </div>
        <h1 data-scroll data-scroll-speed="0.7">
          Smooth Scroll App
        </h1>
      </div>
    </section>
  );
};

export default IntroSection;
