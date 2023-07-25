import { aboutText } from '@/constants/text';
import styles from './style.module.css';
import AnimatedText from '../ui/AnimatedText';

const AboutSection = () => {
  return (
    <section className={styles.about}>
      {aboutText.map((text, index) => (
        <AnimatedText text={text} key={index} />
      ))}
    </section>
  );
};

export default AboutSection;
