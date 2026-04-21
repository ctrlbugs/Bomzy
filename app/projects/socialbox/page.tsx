import Image from 'next/image';
import { ProjectBackLink } from '@/app/projects/project-back-link';
import styles from '../project-detail.module.css';

const TECH_STACK_ICONS = [
  { label: 'Adobe Photoshop', src: '/projects/Biopay/photoshop.png' },
  { label: 'Adobe Illustrator', src: '/projects/Biopay/illustrator.png' },
  { label: 'Figma', src: '/projects/Biopay/figma.png' },
] as const;

const SOCIALBOX_SHOWCASE_IMAGES = [
  '/projects/socialbox/1.png',
  '/projects/socialbox/2.png',
  '/projects/socialbox/3.png',
  '/projects/socialbox/4.png',
  '/projects/socialbox/5.png',
  '/projects/socialbox/6.png',
  '/projects/socialbox/7.png',
  '/projects/socialbox/8.png',
] as const;

export default function SocialboxProjectPage() {
  return (
    <main className={`${styles.page} ${styles.socialboxPage}`}>
      <div className={styles.grid}>
        <section className={styles.leftCol}>
          <ProjectBackLink className={styles.backLink} href="/" />

          <Image
            src="/projects/socialbox/social-logo.png"
            alt="Socialbox logo"
            width={140}
            height={40}
            className={`${styles.kickerLogo} ${styles.socialboxKickerLogo}`}
          />
          <h1 className={styles.title}>SocialBox is reimagining how people create, share, and experience content</h1>
          <p className={styles.subtitle}>
          A social-first ecosystem designed to simplify content creation, boost engagement, and connect users through meaningful digital interactions.
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
          SocialBox is a modern social platform concept built around the idea of simplifying digital expression while making online interaction more intentional and engaging.

It is designed to help users create, share, and discover content in a more structured and immersive way removing the noise of traditional social feeds and replacing it with focused, community-driven experiences.

At its core, SocialBox explores a more organized approach to social networking, where content is grouped, experiences are curated, and interactions are designed to feel more meaningful rather than overwhelming.
          </p>
          <p>
          The platform emphasizes creativity, connection, and clarity giving users and communities a cleaner space to express ideas, tell stories, and engage with content that truly matters to them.
          </p>
        </section>
      </div>

      <div className={`${styles.stackWrap} ${styles.biopayStackWrap}`}>
        {SOCIALBOX_SHOWCASE_IMAGES.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className={`${styles.stackCard} ${styles.biopayStackCard} ${index === 0 ? styles.stackCardTransition : ''}`}
          >
            <Image
              src={src}
              alt={`Socialbox showcase image ${index + 1}`}
              width={1200}
              height={1200}
              priority={index < 3}
              sizes="(max-width: 1199px) 31vw, 23vw"
              className={`${styles.stackImage} ${styles.biopayStackImage}`}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
