import Image from 'next/image';
import { ProjectBackLink } from '@/app/projects/project-back-link';
import styles from '../project-detail.module.css';

const RIVCHIPP_SOCIALS = [
  {
    label: 'Website',
    href: 'https://rivchpp.rv.gov.ng/',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/rivers-state-contributory-health-protection-programme-rivchpp/',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/rivchpp/',
  },
  {
    label: 'X',
    href: 'https://x.com/RVCHPP',
  },
] as const;

function WebsiteIcon() {
  return (
    <svg
      className={styles.techSocialSvg}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className={styles.techSocialSvg} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className={styles.techSocialSvg} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className={styles.techSocialSvg} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SOCIAL_ICONS = {
  Website: WebsiteIcon,
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
  X: XIcon,
} as const;

/** File indices under `/projects/Rivchipp/*.jpeg`; order is display order (swap: 5 ↔ position 2). */
const RIVCHIPP_GALLERY_ORDER = [0, 5, 2, 3, 4, 1, 6, 7, 8, 9] as const;

const RIVCHIPP_GALLERY_IMAGES = RIVCHIPP_GALLERY_ORDER.map((n) => ({
  src: `/projects/Rivchipp/${n}.jpeg`,
  alt: `RIVCHPP creative ${n}`,
}));

export default function RivchippProjectPage() {
  return (
    <main className={`${styles.page} ${styles.rivchippPage}`}>
      <div className={styles.grid}>
        <section className={styles.leftCol}>
          <ProjectBackLink className={styles.backLink} href="/" />

          <Image
            src="/projects/project-icons/logo2.png"
            alt="RIVCHPP logo"
            width={320}
            height={120}
            className={`${styles.kickerLogo} ${styles.rivchippKickerLogo}`}
          />
          <h1 className={styles.title}>Expanding Access to Quality Healthcare</h1>
          <p className={styles.subtitle}>
            Delivering affordable and comprehensive health insurance for the people of Rivers State.
          </p>

          <div className={styles.techWrap}>
            <p className={styles.techLabel}>Follow on Socials</p>
            <ul className={styles.techList}>
              {RIVCHIPP_SOCIALS.map((s) => {
                const Icon = SOCIAL_ICONS[s.label as keyof typeof SOCIAL_ICONS];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className={styles.techSocialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                    >
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className={styles.rightCol}>
          <p>
            At RIVCHPP, I supported efforts to enhance communication and engagement around health
            insurance services, contributing to increased awareness and accessibility for enrollees.
          </p>
          <p>
            RIVCHPP is the official health insurance program of the Rivers State Government,
            committed to providing accessible and high-quality healthcare services to its enrollees.
            Designed to improve health outcomes across the state, the program ensures individuals and
            families can receive medical care without financial strain.
          </p>
          <p>
            Through comprehensive coverage and a growing network of healthcare providers, RIVCHPP
            addresses the diverse medical needs of the population while promoting preventive care,
            early intervention, and overall well-being.
          </p>
        </section>
      </div>

      <div className={styles.stackWrap}>
        {RIVCHIPP_GALLERY_IMAGES.map((item, index) => (
          <div key={item.src} className={styles.stackCard}>
            <Image
              src={item.src}
              alt={item.alt}
              width={1200}
              height={1600}
              priority={index === 0}
              sizes="(max-width: 767px) 100vw, (max-width: 1199px) 46vw, 22vw"
              className={styles.stackImage}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
