import Image from 'next/image';
import { ProjectBackLink } from '@/app/projects/project-back-link';
import styles from '../project-detail.module.css';

const HEALTHSQUARE_SOCIALS = [
  {
    label: 'Website',
    href: 'https://healthsquare.africa/',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/healthsquare.africa/',
  },
  {
    label: 'X',
    href: 'https://x.com/healthsquareng',
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
  Instagram: InstagramIcon,
  X: XIcon,
} as const;

const HEALTHSQUARE_GALLERY_IMAGES = [1, 2, 3, 4].map((n) => ({
  src: `/projects/Healthsquare/${n}.png`,
  alt: `HealthSquare Africa visual ${n}`,
}));

export default function HealthsquareProjectPage() {
  return (
    <main className={`${styles.page} ${styles.healthsquarePage}`}>
      <div className={styles.grid}>
        <section className={styles.leftCol}>
          <ProjectBackLink className={styles.backLink} href="/" />

          <Image
            src="/projects/project-icons/logo3.png"
            alt="HealthSquare Africa logo"
            width={320}
            height={120}
            className={`${styles.kickerLogo} ${styles.healthsquareKickerLogo}`}
          />
          <h1 className={styles.title}>
            Connecting People.
            <br className={styles.mobileOnlyBreak} /> Advancing Health.
          </h1>
          <p className={styles.subtitle}>
            Building a community around better health awareness and healthcare experiences in
            Nigeria.
          </p>

          <div className={styles.techWrap}>
            <p className={styles.techLabel}>Follow on Socials</p>
            <ul className={styles.techList}>
              {HEALTHSQUARE_SOCIALS.map((s) => {
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
            HealthSquare Africa is a dynamic, people-driven community bringing together individuals who
            are passionate about better health and improved healthcare in Nigeria. It creates a space
            where conversations matter—where people can share experiences, gain trusted insights, and
            stay informed about health in ways that are practical and relatable.
          </p>
          <p>
            Beyond discussions, HealthSquare Africa bridges the gap between everyday people and the
            healthcare ecosystem by simplifying complex health information and encouraging open,
            informed dialogue. From wellness and prevention to navigating healthcare systems, the
            platform empowers individuals to make better health decisions.
          </p>
          <p>
            By combining community, education, and engagement, HealthSquare Africa is helping to
            shape a more informed, connected, and health-conscious society.
          </p>
        </section>
      </div>

      <div className={styles.stackWrap}>
        {HEALTHSQUARE_GALLERY_IMAGES.map((item, index) => (
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
