import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { WorkSection } from './work-section';

const SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/godswillpeterside/',
  x: 'https://x.com/Iam_willzpeterz',
  instagram: 'https://www.instagram.com/ctrlbugshq/',
  cv: '/CV.pdf',
  email: 'mailto:willzpeterz2018@gmail.com',
} as const;

const EXPERIMENTS = [
  {
    key: 'rhip',
    title: 'RHIPFactory',
    href: '/projects/rhip',
    icon: '/projects/project-icons/logo1.png',
    description:
      'RHIPFactory is a Pan-African healthcare-focused startup studio driving innovation by transforming critical healthcare challenges into scalable, tech-enabled solutions. With innovation campuses across Nigeria, Kenya, South Africa, and Morocco, it leverages a structured venture-building model and a multidisciplinary team to design and launch impactful healthcare startups that improve systems and outcomes across the continent.',
  },
  {
    key: 'healthsquare',
    title: 'HealthSquare Africa',
    href: '/projects/healthsquare',
    icon: '/projects/project-icons/logo3.png',
    description:
      'HealthSquare Africa is a community-driven health platform focused on connecting individuals who care about better healthcare in Nigeria. It provides a space for open conversations, shared experiences, and accessible health insights, helping to make healthcare more relatable, engaging, and easier to understand for everyday people.',
  },
  {
    key: 'rivchipp',
    title: 'RIVCHPP',
    href: '/projects/rivchipp',
    icon: '/projects/project-icons/logo2.png',
    description:
      'RIVCHPP is the official health insurance program of the Rivers State Government, dedicated to delivering accessible, affordable, and quality healthcare services. Through comprehensive coverage and a network of providers, it supports improved health outcomes by ensuring residents can access essential medical care without financial burden.',
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
        <div className={styles.heroGrid}>
          <div className={styles.heroMain}>
            <h1 className={styles.name}>
              <span>Godswill</span>
              <span>Boma Peterside</span>
            </h1>

            <div className={styles.bio}>
              <p>
              A dynamic content creator and event host with a passion for storytelling, audience engagement, and digital communication. Skilled in producing trend-aware content and delivering compelling live.
              </p>
              <p>
                I&apos;ve hosted beauty pageants, talk shows, interviews, and live digital
                conversations, while also leading content strategy as a Community Manager and Social
                Media Lead within the healthcare space.
              </p>
              <p>
                Today, I create trend-aware, audience-focused content that informs, entertains, and
                builds meaningful connections across platforms.
              </p>
              <p>
                I&apos;m currently open to opportunities as a Content Creator or Event Host, bringing
                energy, creativity, and a strong audience-first mindset to every project.
              </p>
            </div>

            <nav className={styles.social} aria-label="Social links">
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a href={SOCIAL.x} target="_blank" rel="noopener noreferrer" aria-label="X">
                <XIcon />
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
          </div>

          <div className={styles.heroPortraitColumn}>
            <div className={styles.heroPortrait}>
              <Image
                src="/file/bio.png"
                alt="Godswill Boma Peterside"
                fill
                sizes="(min-width: 900px) min(42vw, 440px), min(100%, 420px)"
                className={styles.heroPortraitImg}
                priority
              />
            </div>
            <p className={styles.heroRoles}>Content Creator &amp; Event Host</p>
          </div>
        </div>
      </header>

      <section aria-labelledby="work-heading">
        <h2 id="work-heading" className={styles.sectionTitle}>
          Moments & Media
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
                  {'year' in exp ? `${exp.title}, ${exp.year}` : exp.title}
                </Link>
                <p className={styles.experimentBody}>{exp.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerLine}>
          <span>© {new Date().getFullYear()} Godswill Boma Peterside</span>
          <span className={styles.footerSep} aria-hidden>
            ·
          </span>
          <a
            href={SOCIAL.linkedin}
            className={styles.bioLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span className={styles.footerSep} aria-hidden>
            ·
          </span>
          <a
            href={SOCIAL.cv}
            className={styles.bioLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </p>
      </footer>
    </main>
  );
}
