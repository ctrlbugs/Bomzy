import Image from 'next/image';
import { ProjectBackLink } from '@/app/projects/project-back-link';
import styles from '../project-detail.module.css';

const TECH_STACK_ICONS = [
  { label: 'Adobe Photoshop', src: '/projects/Biopay/photoshop.png' },
  { label: 'Adobe Illustrator', src: '/projects/Biopay/illustrator.png' },
  { label: 'Figma', src: '/projects/Biopay/figma.png' },
] as const;

const BIOPAY_SHOWCASE_IMAGES = [
  '/projects/Biopay/1.png',
  '/projects/Biopay/2.png',
  '/projects/Biopay/3.png',
  '/projects/Biopay/4.png',
  '/projects/Biopay/5.png',
  '/projects/Biopay/6.png',
  '/projects/Biopay/7.png',
  '/projects/Biopay/8.png',
  '/projects/Biopay/9.png',
] as const;

export default function BiopayProjectPage() {
  return (
    <main className={`${styles.page} ${styles.biopayPage}`}>
      <div className={styles.grid}>
        <section className={styles.leftCol}>
          <ProjectBackLink className={styles.backLink} href="/" />

          <Image
            src="/projects/Bio-Tap/logo-white.png"
            alt="Biotap logo"
            width={140}
            height={40}
            className={styles.kickerLogo}
          />
          <h1 className={styles.title}>Biopay was the first identity in the evolution of what is now Biotap</h1>
          <p className={styles.subtitle}>
            An early-stage brand concept focused on simplifying payments through secure biometric
            authentication and frictionless user experiences.
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
          Biopay represents the initial ideation phase in the development of the Biotap ecosystem, where the core vision was first defined: enabling secure, fast, and identity-based digital transactions.

At its core, Biopay explored the idea of removing traditional payment barriers such as passwords, cards, and manual verification, replacing them with biometric and identity-linked authentication methods. This concept was built around trust, speed, and accessibility in digital financial interactions.
          </p>
          <p>
          As the idea evolved, the brand transitioned from Biopay to Biotap to better reflect a broader vision—moving beyond payments into a more unified identity and interaction system. This shift marked a critical stage in the brand identity journey, where naming, positioning, and user experience direction were refined to support long-term scalability.
          </p>
        </section>
      </div>

      <div className={`${styles.stackWrap} ${styles.biopayStackWrap}`}>
        {BIOPAY_SHOWCASE_IMAGES.map((src, index) => (
          <div
            key={src}
            className={`${styles.stackCard} ${styles.biopayStackCard} ${index === 0 ? styles.stackCardTransition : ''}`}
          >
            <Image
              src={src}
              alt={`Biopay showcase image ${index + 1}`}
              width={1200}
              height={1600}
              priority={index < 3}
              sizes="(max-width: 1199px) 31vw, 23vw"
              className={`${styles.stackImage} ${styles.biopayStackImage}`}
            />
          </div>
        ))}
      </div>

      <footer className={styles.logoFooter}>
        <div className={styles.logoItem}>
          <Image
            src="/projects/Bio-Tap/WhiteLogo.png"
            alt="Biopay white logo"
            width={320}
            height={120}
            sizes="(max-width: 767px) 42vw, 16rem"
            className={styles.logoImage}
          />
        </div>
      </footer>
    </main>
  );
}
