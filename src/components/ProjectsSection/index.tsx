import { useRef, useState, useLayoutEffect } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import { projectsList } from '@/constants/projects';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const imageContainerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: imageContainerRef.current,
      pin: true,
      start: 'top-=100px',
      end: document.body.offsetHeight - window.innerHeight - 50
    });
  }, []);

  return (
    <section className={styles.projects}>
      <div className={styles.projectDescription}>
        <div ref={imageContainerRef} className={styles.imageContainer}>
          <Image
            src={`/images/${projectsList[selectedProject].src}`}
            fill={true}
            alt="project image"
            priority={true}
          />
        </div>
        <div className={styles.column}>
          <p>
            The flora is characterized by the presence of high elevation wetland, as well as yellow
            straw, broom sedge, tola de agua and tola amaia.
          </p>
        </div>
        <div className={styles.column}>
          <p>
            Some, like the southern viscacha, vicuña and Darwins rhea, are classified as endangered
            species. Others, such as Andean goose, horned coot, Andean gull, puna tinamou and the
            three flamingo species inhabiting in Chile (Andean flamingo, Chilean flamingo, and
            Jamess flamingo) are considered vulnerable.
          </p>
        </div>
      </div>

      <div className={styles.projectList}>
        {projectsList.map((project, index) => {
          return (
            <div
              key={index}
              onMouseOver={() => {
                setSelectedProject(index);
              }}
              className={styles.projectEl}
            >
              <h2>{project.title}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
