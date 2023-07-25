'use client';
import { useEffect } from 'react';
import styles from './page.module.css';
import { createLocomotive } from '@/services/locomotive';
import IntroSection from '@/components/IntroSection';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Use locomotiveScroll on the app
      const locomotiveScroll = createLocomotive();
    }
  }, []);

  return (
    <main className={styles.main}>
      <IntroSection />
      <AboutSection />
    </main>
  );
}
