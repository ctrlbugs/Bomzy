import Image from 'next/image';
import { ProjectBackLink } from '@/app/projects/project-back-link';
import styles from '../project-detail.module.css';

const TECH_STACK_ICONS = [
  { label: 'Adobe Photoshop', src: '/projects/Biopay/photoshop.png' },
  { label: 'Adobe Illustrator', src: '/projects/Biopay/illustrator.png' },
  { label: 'Figma', src: '/projects/Biopay/figma.png' },
] as const;

const JOSSY_SHOWCASE_IMAGES = [
  '/projects/Jossy/1.png',
  '/projects/Jossy/2.png',
  '/projects/Jossy/3.png',
  '/projects/Jossy/4.png',
  '/projects/Jossy/5.png',
  '/projects/Jossy/6.png',
  '/projects/Jossy/7.png',
  '/projects/Jossy/8.png',
  '/projects/Jossy/9.png',
] as const;

export default function JossyProjectPage() {
  return (
    <main className={`${styles.page} ${styles.jossyPage}`}>
      <div className={styles.grid}>
        <section className={styles.leftCol}>
          <ProjectBackLink className={styles.backLink} href="/" />

          <Image
            src="/projects/Jossy/jossy-logo.png"
            alt="Jossy logo"
            width={140}
            height={40}
            className={`${styles.kickerLogo} ${styles.jossyKickerLogo}`}
          />
          <h1 className={styles.title}>Jossy is redefining everyday convenience</h1>
          <p className={styles.subtitle}>
          Jossy is a unified service platform built to simplify how people access everyday essentials from ride hailing and hotel bookings to food delivery all within a single, intuitive ecosystem.
          </p>

          <div className={styles.techWrap}>
            <p className={styles.techLabel}>Technologies used</p>
            <ul className={styles.techList}>
              {TECH_STACK_ICONS.map((tech) => (
                <li key={tech.label}>
                  <span className={styles.techIcon} aria-label={tech.label}>
                    <Image
                      src={tech.src}
                      alt={tech.label}
                      width={36}
                      height={36}
                      className={
                        tech.label === 'Adobe Photoshop' || tech.label === 'Adobe Illustrator'
                          ? `${styles.techIconImage} ${styles.techIconImageAdobe}`
                          : styles.techIconImage
                      }
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.rightCol}>
          <p>
          Jossy is designed around efficiency and ease. The platform eliminates the need to switch between multiple apps by integrating key lifestyle services into one streamlined experience. Users can move, book, and order effortlessly, with speed and convenience at the forefront.
          </p>
          <p>
          The brand identity reflects this vision through a dynamic and modern design system. The stylized “J” mark symbolizes motion, flow, and accessibility, while the bold color combination communicates energy, growth, and trust. Every element is crafted to represent a platform that is fast, reliable, and user-focused.
          </p>
        </section>
      </div>

      <div className={`${styles.stackWrap} ${styles.biopayStackWrap}`}>
        {JOSSY_SHOWCASE_IMAGES.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className={`${styles.stackCard} ${styles.biopayStackCard} ${index === 0 ? styles.stackCardTransition : ''}`}
          >
            <Image
              src={src}
              alt={`Jossy showcase image ${index + 1}`}
              width={1200}
              height={1200}
              priority
              unoptimized
              sizes="(max-width: 1199px) 31vw, 23vw"
              className={`${styles.stackImage} ${styles.biopayStackImage}`}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
