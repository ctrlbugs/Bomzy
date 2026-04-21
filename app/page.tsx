import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { WorkSection } from './work-section';

const SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/azewene/',
  x: 'https://x.com/Thry0x',
  github: 'https://github.com/ctrlbugs/',
  instagram: 'https://www.instagram.com/ctrlbugshq/',
  cv: '/CV.pdf',
  email: 'mailto:azee.builds@gmail.com',
} as const;

const EXPERIMENTS = [
  {
    key: 'biotap',
    title: 'Biotap',
    href: '/projects/biotap',
    year: '2024',
    icon: '/projects/project-icons/Biotap-logo.png',
    description:
      'Biotap is built to simplify how people move money in a world where connectivity is not always guaranteed. By turning your fingerprint into your payment key, Biotap enables fast, secure transactions that work both online and offline without relying on traditional authentication methods.',
  },
  {
    key: 'dueno',
    title: 'Dueno',
    href: '/projects/dueno',
    year: '2023',
    icon: '/projects/project-icons/Dueno-logo.png',
    description:
      'Dueno is a digital property platform designed to fix the deep-rooted inefficiencies in Nigeria’s housing market. By introducing structure, verification, and accountability into every stage of the property lifecycle, Dueno creates a trusted environment where landlords, tenants, and agents can interact with confidence.',
  },
  {
    key: 'iyawo',
    title: 'Iyawo',
    href: '/projects/iyawo',
    year: '2024',
    icon: '/projects/project-icons/Iyawo-logo.png',
    description:
      'IyawoFoods is a culturally-driven food discovery marketplace designed to reconnect people with authentic African meals while elevating the vendors who create them. By combining geolocation, vendor verification, and rich cultural storytelling, the platform makes it easy to find clean, trusted, and home-style dishes wherever you are.',
  },
  {
    key: 'pmis',
    title: 'Pmis',
    href: '/projects/pmis',
    year: '2022',
    icon: '/projects/project-icons/Pmis-logo.png',
    description:
      'The Procurement Management Information System (PMIS) is a digital infrastructure designed to modernize public procurement in Nigeria by replacing fragmented, manual processes with a unified, transparent, and data-driven platform.',
  },
] as const;

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <h1 className={styles.name}>
          <span>Azewene</span>
          <span>Njigwum</span>
        </h1>

        <div className={styles.bio}>
          <p>
            I am a Product Engineer focused on building secure, scalable, and user-centered digital
            systems. My work sits at the intersection of software engineering, design, and systems
            thinking—where functionality meets usability.
          </p>
          <p>
            I have contributed to government and institutional platforms, translating complex
            workflows into reliable, high-performance software. From biometric payment systems to
            procurement infrastructure, I design and engineer solutions that are both technically
            sound and intuitively usable.
          </p>
          <p>
            As the Founder of{' '}
            <a
              className={styles.bioLink}
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              CtrLBugs
            </a>
            , I lead the development of impactful technology products while mentoring developers and
            advancing practical, real-world engineering practices.
          </p>
        </div>

        <nav className={styles.social} aria-label="Social links">
          <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={SOCIAL.x} target="_blank" rel="noopener noreferrer" aria-label="X">
            <XIcon />
          </a>
          <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a
            href={SOCIAL.cv}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume — open CV (PDF)"
          >
            <DocumentIcon />
          </a>
          <a href={SOCIAL.email} aria-label="Email">
            <MailIcon />
          </a>
        </nav>
      </header>

      <section aria-labelledby="work-heading">
        <h2 id="work-heading" className={styles.sectionTitle}>
          Product Design
        </h2>

        <WorkSection />
      </section>

      <section
        className={styles.experimentsSection}
        aria-labelledby="projects-heading"
      >
        <h2 id="projects-heading" className={styles.sectionTitle}>
          Projects
        </h2>
        <ul className={styles.experimentList}>
          {EXPERIMENTS.map((exp) => (
            <li key={exp.key} className={styles.experimentItem}>
              <div className={styles.experimentIconWrap}>
                <Image
                  src={exp.icon}
                  alt=""
                  fill
                  sizes="72px"
                  className={styles.experimentIcon}
                />
              </div>
              <div className={styles.experimentCopy}>
                <Link href={exp.href} className={styles.experimentHeadline}>
                  {exp.title}, {exp.year}
                </Link>
                <p className={styles.experimentBody}>{exp.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Azewene Njigwum</p>
      </footer>
    </main>
  );
}
