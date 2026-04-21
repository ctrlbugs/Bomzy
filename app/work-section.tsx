'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import styles from './page.module.css';

type WorkItem =
  | {
      kind: 'image';
      key: string;
      title: string;
      image: string;
      alt: string;
    }
  | {
      kind: 'video';
      key: string;
      title: string;
      file: string;
      thumbnail: string;
      alt: string;
    };

const WORK_ITEMS: WorkItem[] = [
  {
    kind: 'image',
    key: 'biopay',
    title: 'Biopay',
    image: '/projects/Biopay.png',
    alt: 'Biopay project preview',
  },
  {
    kind: 'image',
    key: 'iyawo',
    title: 'Iyawo',
    image: '/projects/Iyawo.png',
    alt: 'Iyawo project preview',
  },
  {
    kind: 'image',
    key: 'jossy',
    title: 'Jossy',
    image: '/projects/Jossy.png',
    alt: 'Jossy project preview',
  },
  {
    kind: 'image',
    key: 'socialbox',
    title: 'Socialbox',
    image: '/projects/socialbox.png',
    alt: 'Socialbox project preview',
  },
  {
    kind: 'video',
    key: 'light-inc',
    title: 'Light Inc brand video',
    file: 'Light Inc brand video.mp4',
    thumbnail: '/projects/thumbs/light-inc.png',
    alt: 'Light Inc brand video',
  },
  {
    kind: 'video',
    key: 'roqqu',
    title: 'New Roqqu',
    file: 'New Roqqu.mp4',
    thumbnail: '/projects/thumbs/new-roqqu.png',
    alt: 'New Roqqu video',
  },
  {
    kind: 'video',
    key: 'nutnosh',
    title: 'NutNosh animation',
    file: 'NutNosh animation.mp4',
    thumbnail: '/projects/thumbs/nutnosh.png',
    alt: 'NutNosh animation',
  },
  {
    kind: 'video',
    key: 'desiree',
    title: 'Desiree logo animation',
    file: 'our Desiree logo animation.MP4',
    thumbnail: '/projects/thumbs/desiree.png',
    alt: 'Desiree logo animation',
  },
  {
    kind: 'video',
    key: 'servicio-luna',
    title: 'Servicio Luna logo animation',
    file: 'Servicio Luna logo animation.mp4',
    thumbnail: '/projects/thumbs/servicio-luna.png',
    alt: 'Servicio Luna logo animation',
  },
];

function videoSrc(file: string) {
  return `/projects/${encodeURIComponent(file)}`;
}

function ChevronIcon({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      {dir === 'left' ? (
        <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

function EdgeChevronIcon({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg
      className={styles.workEdgeChevronSvg}
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      {dir === 'left' ? (
        <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg className={styles.workVideoPlayIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

/** Match `@container work` breakpoints in page.module.css (carousel inline size, not window). */
function cardsPerViewForContainerWidth(width: number): number {
  if (width < 768) return 2;
  if (width < 1200) return 4;
  return 5;
}

function workPageCount(itemCount: number, perView: number): number {
  return Math.max(1, Math.ceil(itemCount / perView));
}

function activePageFromScroll(
  scrollLeft: number,
  scrollWidth: number,
  clientWidth: number,
  pageCount: number,
): number {
  if (pageCount <= 1) return 0;
  const maxScroll = Math.max(0, scrollWidth - clientWidth);
  if (maxScroll <= 0) return 0;
  const ratio = scrollLeft / maxScroll;
  return Math.min(
    pageCount - 1,
    Math.max(0, Math.round(ratio * (pageCount - 1))),
  );
}

type DocumentWithViewTransition = Document & {
  startViewTransition?: (update: () => void) => { finished: Promise<void> };
};

const IMAGE_PROJECT_ROUTES: Partial<Record<Extract<WorkItem, { kind: 'image' }>['key'], string>> = {
  biopay: '/branding/biopay',
  iyawo: '/projects/iyawo',
  jossy: '/branding/jossy',
  socialbox: '/branding/socialbox',
};

export function WorkSection() {
  const router = useRouter();
  const carouselRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [cardsPerView, setCardsPerView] = useState(2);
  const [activeWorkPage, setActiveWorkPage] = useState(0);
  const [stripHovered, setStripHovered] = useState(false);
  const [pointerZone, setPointerZone] = useState<'left' | 'right' | null>(null);
  const [scrollEdges, setScrollEdges] = useState({ canPrev: false, canNext: false });
  const titleId = useId();

  const pageCount = workPageCount(WORK_ITEMS.length, cardsPerView);

  const EPS = 6;

  const syncStripScrollState = useCallback(() => {
    const el = stripRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = Math.max(0, scrollWidth - clientWidth);
    setScrollEdges({
      canPrev: scrollLeft > EPS,
      canNext: scrollLeft < maxScroll - EPS,
    });
    const pc = workPageCount(WORK_ITEMS.length, cardsPerView);
    setActiveWorkPage(
      activePageFromScroll(scrollLeft, scrollWidth, clientWidth, pc),
    );
  }, [cardsPerView]);

  useLayoutEffect(() => {
    const el = carouselRef.current;
    if (!el || typeof ResizeObserver === 'undefined') {
      setCardsPerView(cardsPerViewForContainerWidth(window.innerWidth));
      return;
    }
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width ?? 0;
      if (w > 0) setCardsPerView(cardsPerViewForContainerWidth(w));
    });
    ro.observe(el);
    const w = el.getBoundingClientRect().width;
    if (w > 0) setCardsPerView(cardsPerViewForContainerWidth(w));
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    syncStripScrollState();
  }, [cardsPerView, syncStripScrollState]);

  const goWorkPage = useCallback(
    (pageIndex: number) => {
      const el = stripRef.current;
      if (!el) return;
      const pc = workPageCount(WORK_ITEMS.length, cardsPerView);
      if (pc <= 1) return;
      const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
      const left = (pageIndex / (pc - 1)) * maxScroll;
      el.scrollTo({ left, behavior: 'smooth' });
      setActiveWorkPage(pageIndex);
    },
    [cardsPerView],
  );

  const onStripScroll = useCallback(() => {
    syncStripScrollState();
  }, [syncStripScrollState]);

  const scrollStripPage = useCallback((dir: -1 | 1) => {
    const el = stripRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' });
  }, []);

  const onStripMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const node = e.currentTarget;
    const r = node.getBoundingClientRect();
    const x = e.clientX - r.left;
    setPointerZone(x < r.width / 2 ? 'left' : 'right');
  }, []);

  const showEdgeArrows = cardsPerView >= 4 && pageCount > 1;

  const closeModal = useCallback(() => setModalIndex(null), []);

  const goModal = useCallback(
    (delta: number) => {
      setModalIndex((i) => {
        if (i === null) return null;
        const n = WORK_ITEMS.length;
        return (i + delta + n) % n;
      });
    },
    [],
  );

  useEffect(() => {
    if (modalIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goModal(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goModal(1);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [modalIndex, closeModal, goModal]);

  useEffect(() => {
    if (modalIndex === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [modalIndex]);

  useEffect(() => {
    if (modalIndex !== null) {
      closeRef.current?.focus();
    }
  }, [modalIndex]);

  const openAt = (index: number) => {
    const current = WORK_ITEMS[index];
    if (current.kind === 'image') {
      const route = IMAGE_PROJECT_ROUTES[current.key];
      if (!route) return;
      const doc = document as DocumentWithViewTransition;
      if (doc.startViewTransition) {
        doc.startViewTransition(() => {
          router.push(route);
        });
      } else {
        router.push(route);
      }
      return;
    }
    setModalIndex(index);
  };

  const item = modalIndex !== null ? WORK_ITEMS[modalIndex] : null;

  return (
    <>
      <div
        ref={carouselRef}
        className={styles.workCarousel}
        role="region"
        aria-label="Selected work"
      >
        <div
          className={styles.workCarouselStripWrap}
          onMouseEnter={() => setStripHovered(true)}
          onMouseLeave={() => {
            setStripHovered(false);
            setPointerZone(null);
          }}
          onMouseMove={onStripMouseMove}
        >
          <div
            ref={stripRef}
            className={styles.workStrip}
            onScroll={onStripScroll}
          >
            {WORK_ITEMS.map((work, index) => (
              <button
                key={work.key}
                type="button"
                className={`${styles.visualCard} ${styles.visualCardInteractive}`}
                onClick={() => openAt(index)}
                aria-label={
                  work.kind === 'video'
                    ? `Open video: ${work.title}`
                    : `Open image: ${work.title}`
                }
              >
                <div className={styles.visualCardMedia}>
                  {work.kind === 'image' ? (
                    <div
                      className={`${styles.visualCardImageHost} ${work.key === 'biopay' ? styles.biopayTransitionSource : ''}`}
                    >
                      <Image
                        src={work.image}
                        alt={work.alt}
                        fill
                        sizes="(max-width: 767px) 46vw, (max-width: 1199px) 23vw, 19vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  ) : (
                    <div className={styles.workVideoThumb}>
                      <div className={styles.visualCardImageHost}>
                        <Image
                          src={work.thumbnail}
                          alt={work.alt}
                          fill
                          sizes="(max-width: 767px) 46vw, (max-width: 1199px) 23vw, 19vw"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <span className={styles.workVideoThumbOverlay} aria-hidden>
                        <span className={styles.workVideoPlayRing}>
                          <PlayIcon />
                        </span>
                      </span>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {showEdgeArrows && (
            <div
              className={`${styles.workCarouselEdgeNav} ${stripHovered ? styles.workCarouselEdgeNavVisible : ''}`}
              aria-hidden
            >
              <button
                type="button"
                className={`${styles.workCarouselEdgeBtn} ${styles.workCarouselEdgeBtnLeft} ${pointerZone === 'left' && scrollEdges.canPrev ? styles.workCarouselEdgeBtnEmphasis : ''}`}
                disabled={!scrollEdges.canPrev}
                onClick={(e) => {
                  e.stopPropagation();
                  scrollStripPage(-1);
                }}
                aria-label="Scroll work carousel left"
              >
                <EdgeChevronIcon dir="left" />
              </button>
              <button
                type="button"
                className={`${styles.workCarouselEdgeBtn} ${styles.workCarouselEdgeBtnRight} ${pointerZone === 'right' && scrollEdges.canNext ? styles.workCarouselEdgeBtnEmphasis : ''}`}
                disabled={!scrollEdges.canNext}
                onClick={(e) => {
                  e.stopPropagation();
                  scrollStripPage(1);
                }}
                aria-label="Scroll work carousel right"
              >
                <EdgeChevronIcon dir="right" />
              </button>
            </div>
          )}
        </div>

        {pageCount > 1 && (
          <nav className={styles.workPager} aria-label="Work carousel pagination">
            {Array.from({ length: pageCount }, (_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1} of ${pageCount}`}
                aria-current={activeWorkPage === i ? 'true' : undefined}
                className={
                  activeWorkPage === i
                    ? `${styles.workPagerBar} ${styles.workPagerBarActive}`
                    : styles.workPagerBar
                }
                onClick={() => goWorkPage(i)}
              />
            ))}
          </nav>
        )}
      </div>

      {item && (
        <div
          className={styles.workModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={closeModal}
        >
          <div className={styles.workModalInner} onClick={(e) => e.stopPropagation()}>
            <button
              ref={closeRef}
              type="button"
              className={styles.workModalClose}
              onClick={closeModal}
              aria-label="Close"
            >
              <span aria-hidden>×</span>
            </button>
            <button
              type="button"
              className={styles.workModalNav}
              onClick={() => goModal(-1)}
              aria-label="Previous item"
            >
              <ChevronIcon dir="left" />
            </button>
            <button
              type="button"
              className={`${styles.workModalNav} ${styles.workModalNavNext}`}
              onClick={() => goModal(1)}
              aria-label="Next item"
            >
              <ChevronIcon dir="right" />
            </button>

            <p id={titleId} className={styles.workModalTitle}>
              {item.title}
            </p>

            <div className={styles.workModalStage}>
              {item.kind === 'image' ? (
                <div className={styles.workModalImageHost}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 960px) 100vw, 960px"
                    className={styles.workModalImage}
                    priority
                  />
                </div>
              ) : (
                <video
                  key={item.file}
                  className={styles.workModalVideo}
                  src={videoSrc(item.file)}
                  controls
                  playsInline
                  controlsList="nodownload"
                  autoPlay
                />
              )}
            </div>
          </div>
        </div>
      )}

    </>
  );
}
