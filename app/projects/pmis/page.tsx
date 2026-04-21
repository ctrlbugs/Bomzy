import Image from 'next/image';
import { ProjectBackLink } from '@/app/projects/project-back-link';
import styles from '../project-detail.module.css';

const TECH_STACK_ICONS = [
  { label: 'TypeScript', src: '/projects/pmis/typescript.png' },
  { label: 'React', src: '/projects/pmis/logo-react.png' },
  { label: 'Bootstrap', src: '/projects/pmis/bootstrap.png' },
  { label: 'Figma', src: '/projects/Tech-stacks/figma.png' },
] as const;

export default function PmisProjectPage() {
  return (
    <main className={`${styles.page} ${styles.pmisPage}`}>
      <div className={styles.grid}>
        <section className={styles.leftCol}>
          <ProjectBackLink className={styles.backLink} href="/" />

          <Image
            src="/projects/pmis/Pmis-logo.png"
            alt="PMIS logo"
            width={140}
            height={40}
            className={`${styles.kickerLogo} ${styles.pmisKickerLogo}`}
          />
          <h1 className={styles.title}>
            PMIS is transforming how public procurement is managed across Nigeria.
          </h1>
          <p className={styles.subtitle}>
            A centralized e-procurement platform that connects Ministries, Departments, Agencies
            (MDAs), and Procuring Entities (PEs) to verified contractors, live tenders, and
            structured procurement workflows.{' '}
            <span className={styles.subtitleCta}>
              Visit{' '}
              <a href="https://pmis.rsbopp.rv.gov.ng/" target="_blank" rel="noopener noreferrer">
                PMIS
              </a>{' '}
              to learn more ↗
            </span>
          </p>

          <div className={styles.techWrap}>
            <p className={styles.techLabel}>Technologies used</p>
            <ul className={styles.techList}>
              {TECH_STACK_ICONS.map((tech, index) => (
                <li key={`${tech.label}-${index}`}>
                  <span className={styles.techIcon} aria-label={tech.label}>
                    <Image
                      src={tech.src}
                      alt={tech.label}
                      width={36}
                      height={36}
                      className={styles.techIconImage}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.rightCol}>
          <p>
          PMIS establishes a centralized procurement ecosystem that addresses long-standing challenges in public sector procurement, including lack of transparency, fragmented processes, delayed approvals, and limited access to tender information.

Through the platform, contractors can register, verify their credentials, and gain access to relevant bids and opportunities across MDAs and PEs. At the same time, government entities can publish tenders, manage submissions, evaluate bids, and monitor contract execution in real time.
          </p>
          <p>
          The system also introduces structured compliance workflows, audit trails, and reporting dashboards that support decision-making and regulatory oversight.

By digitizing procurement processes, PMIS strengthens governance, reduces administrative bottlenecks, and promotes fair competition across all levels of public contracting.
          </p>
        </section>
      </div>

      <div className={`${styles.stackWrap} ${styles.pmisStackWrap}`}>
        <div className={`${styles.stackCard} ${styles.pmisStackCard} ${styles.stackCardTransition}`}>
          <Image
            src="/projects/pmis/RSBoPP.png"
            alt="PMIS RSBoPP screen"
            width={1200}
            height={1600}
            priority
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 46vw, 22vw"
            className={styles.stackImage}
          />
        </div>
        <div className={`${styles.stackCard} ${styles.pmisStackCard}`}>
          <Image
            src="/projects/pmis/Landingpage.png"
            alt="PMIS landing page screen"
            width={1200}
            height={1600}
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 46vw, 22vw"
            className={styles.stackImage}
          />
        </div>
      </div>

    </main>
  );
}
