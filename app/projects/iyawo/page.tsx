import Image from 'next/image';
import { ProjectBackLink } from '@/app/projects/project-back-link';
import styles from '../project-detail.module.css';

const TECH_STACK_ICONS = [
  { label: 'Adobe Illustrator', src: '/projects/Iyawo/illustrator.png' },
  { label: 'Adobe Photoshop', src: '/projects/Iyawo/photoshop.png' },
  { label: 'Figma', src: '/projects/Iyawo/figma.png' },
] as const;

export default function IyawoProjectPage() {
  return (
    <main className={`${styles.page} ${styles.iyawoPage}`}>
      <div className={styles.grid}>
        <section className={styles.leftCol}>
          <ProjectBackLink className={styles.backLink} href="/" />

          <Image
            src="/projects/Iyawo/iyawo-logo1.png"
            alt="Iyawo logo"
            width={280}
            height={80}
            className={`${styles.kickerLogo} ${styles.iyawoKickerLogo}`}
          />
          <h1 className={styles.title}>IyawoFoods brings African cuisine to life through discovery.</h1>
          <p className={styles.subtitle}>
            Discover clean, verified local food vendors near you through a platform built on
            trust, storytelling, and community empowerment.
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
            IyawoFoods is building a trusted ecosystem for African local cuisine by addressing two
            major challenges: limited digital visibility for local vendors and concerns around
            hygiene and food trust. The platform connects users to verified food vendors through
            location-based discovery, ensuring that meals are not only accessible but also meet
            defined standards of cleanliness and reliability. Each vendor is supported with hygiene
            guidance, digital onboarding, and visibility tools, helping them transition from
            informal operations into structured, income-generating businesses.
          </p>
          <p>
            Beyond transactions, IyawoFoods celebrates culture through storytelling highlighting
            the origin, meaning, and heritage behind every dish. This creates a deeper connection
            between users and the food they enjoy, turning everyday meals into cultural
            experiences.
          </p>
        </section>
      </div>

      <div className={`${styles.stackWrap} ${styles.iyawoStackWrap}`}>
        <div className={`${styles.stackCard} ${styles.stackCardTransition}`}>
          <Image
            src="/projects/Iyawo/splash1.png"
            alt="Iyawo splash screen"
            width={1200}
            height={1600}
            priority
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 46vw, 22vw"
            className={styles.stackImage}
          />
        </div>
        <div className={styles.stackCard}>
          <Image
            src="/projects/Iyawo/getstarted.png"
            alt="Iyawo get started screen"
            width={1200}
            height={1600}
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 46vw, 22vw"
            className={styles.stackImage}
          />
        </div>
        <div className={styles.stackCard}>
          <Image
            src="/projects/Iyawo/marketplace.png"
            alt="Iyawo marketplace screen"
            width={1200}
            height={1600}
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 46vw, 22vw"
            className={styles.stackImage}
          />
        </div>
      </div>

      <footer className={styles.logoFooter}>
        <div className={styles.logoItem}>
          <Image
            src="/projects/Iyawo/iyawo-logo.png"
            alt="Iyawo logo"
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
