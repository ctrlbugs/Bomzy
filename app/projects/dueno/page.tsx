import Image from 'next/image';
import { ProjectBackLink } from '@/app/projects/project-back-link';
import styles from '../project-detail.module.css';

const TECH_STACK_ICONS = [
  { label: 'React', src: '/projects/Dueno/logo-react.png' },
  { label: 'TypeScript', src: '/projects/Dueno/language-typescript.png' },
  { label: 'Figma', src: '/projects/Dueno/figma.png' },
  { label: 'Adobe Photoshop', src: '/projects/Dueno/photoshop.png' },
  { label: 'Adobe Illustrator', src: '/projects/Dueno/illustrator.png' },
] as const;

export default function DuenoProjectPage() {
  return (
    <main className={`${styles.page} ${styles.duenoPage}`}>
      <div className={styles.grid}>
        <section className={styles.leftCol}>
          <ProjectBackLink className={styles.backLink} href="/" />

          <Image
            src="/projects/Dueno/Dueno-logo.png"
            alt="Dueno logo"
            width={140}
            height={40}
            className={`${styles.kickerLogo} ${styles.duenoKickerLogo}`}
          />
          <h1 className={styles.title}>Dueno is transforming how property is owned and managed.</h1>
          <p className={styles.subtitle}>
            Bringing clarity to property transactions through verified agents, transparent pricing,
            and real-time oversight-built for landlords and tenants.{' '}
            <span className={styles.subtitleCta}>
              Visit{' '}
              <a href="https://duenoproperty.com/" target="_blank" rel="noopener noreferrer">
                Dueno
              </a>{' '}
              to learn more ↗
            </span>
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
            Dueno addresses critical market challenges such as unverified agents, hidden charges,
            duplicated listings, and poor post-rental management by enforcing a system built on
            identity, authority, and responsibility.
          </p>
          <p>
            Through features like agent verification and licensing, property-to-agent pinning,
            transparent pricing structures, verified listings with geolocation, and
            tenant-landlord rating systems, Dueno eliminates ambiguity and restores trust in the
            housing process.
          </p>
          <p>
            Beyond transactions, Dueno provides powerful management dashboards for landlords,
            tenants, and agents-enabling rent tracking, maintenance workflows, performance
            analytics, and dispute resolution. The platform also integrates partner services such
            as moving, cleaning, and utility setup, creating a complete housing ecosystem while
            unlocking new revenue streams.
          </p>
        </section>
      </div>

      <div className={styles.stackWrap}>
        <div className={`${styles.stackCard} ${styles.stackCardTransition}`}>
          <Image
            src="/projects/Dueno/splash.png"
            alt="Dueno splash screen"
            width={1200}
            height={1600}
            priority
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 46vw, 22vw"
            className={styles.stackImage}
          />
        </div>
        <div className={styles.stackCard}>
          <Image
            src="/projects/Dueno/getstarted.png"
            alt="Dueno get started screen"
            width={1200}
            height={1600}
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 46vw, 22vw"
            className={styles.stackImage}
          />
        </div>
        <div className={styles.stackCard}>
          <Image
            src="/projects/Dueno/onboarding.png"
            alt="Dueno onboarding screen"
            width={1200}
            height={1600}
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 46vw, 22vw"
            className={styles.stackImage}
          />
        </div>
        <div className={styles.stackCard}>
          <Image
            src="/projects/Dueno/dashboard.png"
            alt="Dueno dashboard screen"
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
            src="/projects/Dueno/Dueno-logo.png"
            alt="Dueno logo"
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
