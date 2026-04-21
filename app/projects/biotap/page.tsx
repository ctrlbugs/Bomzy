import Image from 'next/image';
import { ProjectBackLink } from '@/app/projects/project-back-link';
import styles from '../project-detail.module.css';

const TECH_STACK_ICONS = [
  { label: 'React', src: '/projects/Tech-stacks/logo-react.png' },
  { label: 'TypeScript', src: '/projects/Tech-stacks/language-typescript.png' },
  { label: 'Expo', src: '/projects/Tech-stacks/light-expo.png' },
  { label: 'Figma', src: '/projects/Tech-stacks/figma-logo 1.png' },
  { label: 'Next.js', src: '/projects/Tech-stacks/nextjs.png' },
] as const;

export default function BiotapProjectPage() {
  return (
    <main className={`${styles.page} ${styles.biotapPage}`}>
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
          <h1 className={styles.title}>
            Biotap is redefining how
            <br className={styles.mobileOnlyBreak} /> payments work
          </h1>
          <p className={styles.subtitle}>
            Your fingerprint becomes your payment key. Online and offline. Seamless, secure, and
            built for real-world access.{' '}
            <span className={styles.subtitleCta}>
              Launching soon. Visit{' '}
              <a href="https://www.biotapapp.com/" target="_blank" rel="noopener noreferrer">
                BioTap
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
                        tech.label === 'Next.js'
                          ? `${styles.techIconImage} ${styles.techIconImageNext}`
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
            Biotap is a next-generation payment platform designed to make transactions simple,
            secure, and accessible anywhere. Built for both connected and low-connectivity
            environments, Biotap enables users to send and receive payments seamlessly, whether
            online or offline.
          </p>
          <p>
            At its core, Biotap leverages biometric authentication and device-level security to
            protect every transaction. Instead of relying on passwords or vulnerable systems, users
            can securely authorize payments using their identity ensuring both convenience and
            trust.
          </p>
        </section>
      </div>

      <div className={styles.stackWrap}>
        <div className={`${styles.stackCard} ${styles.stackCardTransition}`}>
          <Image
            src="/projects/Bio-Tap/Getstarted.png"
            alt="Biotap get started screen"
            width={1200}
            height={1600}
            priority
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 46vw, 22vw"
            className={styles.stackImage}
          />
        </div>
        <div className={styles.stackCard}>
          <Image
            src="/projects/Bio-Tap/splash1.png"
            alt="Biotap splash screen"
            width={1200}
            height={1600}
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 46vw, 22vw"
            className={styles.stackImage}
          />
        </div>
        <div className={styles.stackCard}>
          <Image
            src="/projects/Bio-Tap/Login.png"
            alt="Biotap login screen"
            width={1200}
            height={1600}
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 46vw, 22vw"
            className={styles.stackImage}
          />
        </div>
        <div className={styles.stackCard}>
          <Image
            src="/projects/Bio-Tap/dashboard.png"
            alt="Biotap dashboard screen"
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
            src="/projects/Bio-Tap/WhiteLogo.png"
            alt="Biotap white logo"
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
