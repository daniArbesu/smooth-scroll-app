import styles from './style.module.css';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Props {
  text: string;
}

const AnimatedText: React.FC<Props> = ({ text }) => {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current,
        start: '0px bottom',
        end: 'bottom+=400px bottom',
        scrub: true
      },
      left: '-200px',
      opacity: 0
    });
  }, []);
  return <p ref={textRef}>{text}</p>;
};

export default AnimatedText;
