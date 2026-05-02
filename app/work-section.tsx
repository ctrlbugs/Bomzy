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

/**
 * Increment when you replace thumbnails under `public/projects` so browsers and
 * `next/image` do not keep serving an older file at the same path.
 */
const WORK_THUMB_CACHE = '6';

function workThumbSrc(path: string) {
  return `${path}?v=${WORK_THUMB_CACHE}`;
}

/** Full-size gallery for the Fashion Week card (`public/projects/Fashion/1.jpeg` … `7.jpeg`). */
const FASHION_GALLERY_SRCS = [1, 2, 3, 4, 5, 6, 7].map((n) =>
  workThumbSrc(`/projects/Fashion/${n}.jpeg`),
);

const FASHION_THUMB = workThumbSrc('/projects/Fashion/thumb/1.png');

/** Shared poster for all reel / Moments & Media video tiles. */
const REEL_COVER_THUMB = workThumbSrc('/projects/thumbs/cover.png');

/** Reels in `public/file/` (shown after image cards in the work strip). */
const REEL_ENTRIES = [
  { key: 'reel-1', title: 'Uncle Ben @45🎉', path: '/file/reel 1.mp4' },
  { key: 'reel-2', title: 'Celebr8  Centre Event', path: '/file/reel 2.mp4' },
  { key: 'reel-3', title: 'Wedding Ceremony', path: '/file/reel 3.mp4' },
  { key: 'reel-4', title: 'RIVCHPP #Health4AllRivers', path: '/file/reel 4.mp4' },
  { key: 'reel-5', title: 'Women Converge 2025', path: '/file/reel 5.mp4' },
  { key: 'reel-9', title: 'King Dr, Dandeson Douglas Jaja', path: '/file/reel9.mp4' },
  { key: 'reel-10', title: 'Fareware to his Royal Majesty', path: '/file/reel10.mp4' },
] as const;

const REEL_WORK_ITEMS: WorkItem[] = REEL_ENTRIES.map((r) => ({
  kind: 'video',
  key: r.key,
  title: r.title,
  file: r.path,
  thumbnail: REEL_COVER_THUMB,
  alt: `${r.title} video`,
}));

/** Rivchpp: `thumb/2.png` is the strip thumbnail; `1.jpeg`–`4.jpeg` open in the modal. */
const RIVCHPP_THUMB = workThumbSrc('/projects/Rivchpp/thumb/2.png');
const RIVCHPP_GALLERY_SRCS = [1, 2, 3, 4].map((n) =>
  workThumbSrc(`/projects/Rivchpp/${n}.jpeg`),
);

type InlineGalleryId = 'fashion-week' | 'rivchipp';

const INLINE_GALLERY_META: Record<
  InlineGalleryId,
  { title: string; sources: readonly string[] }
> = {
  'fashion-week': {
    title: 'Fashion Week',
    sources: FASHION_GALLERY_SRCS,
  },
  rivchipp: {
    title: 'Rivchipp',
    sources: RIVCHPP_GALLERY_SRCS,
  },
};

/** Work card `key` → inline image gallery (no route navigation). */
const INLINE_GALLERY_BY_WORK_KEY: Partial<Record<string, InlineGalleryId>> = {
  biopay: 'fashion-week',
  rivchipp: 'rivchipp',
};

const WORK_ITEMS: WorkItem[] = [
  {
    kind: 'image',
    key: 'biopay',
    title: 'Fashion Week',
    image: FASHION_THUMB,
    alt: 'Fashion Week preview',
  },
  {
    kind: 'image',
    key: 'rivchipp',
    title: 'Rivchipp',
    image: RIVCHPP_THUMB,
    alt: 'Rivchipp preview',
  },
  ...REEL_WORK_ITEMS,
];

function videoSrc(file: string) {
  if (file.startsWith('/')) {
    return (
      '/' +
      file
        .split('/')
        .filter(Boolean)
        .map((segment) => encodeURIComponent(segment))
        .join('/')
    );
  }
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

const IMAGE_PROJECT_ROUTES: Partial<Record<Extract<WorkItem, { kind: 'image' }>['key'], string>> =
  {};

export function WorkSection() {
  const router = useRouter();
  const carouselRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [videoModalIndex, setVideoModalIndex] = useState<number | null>(null);
  const [inlineGallery, setInlineGallery] = useState<{
    id: InlineGalleryId;
    slide: number;
  } | null>(null);
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

  const modalOpen = videoModalIndex !== null || inlineGallery !== null;

  const closeModal = useCallback(() => {
    setVideoModalIndex(null);
    setInlineGallery(null);
  }, []);

  const goVideoModal = useCallback((delta: number) => {
    setVideoModalIndex((i) => {
      if (i === null) return null;
      const n = WORK_ITEMS.length;
      return (i + delta + n) % n;
    });
  }, []);

  const goInlineGallerySlide = useCallback((delta: number) => {
    setInlineGallery((g) => {
      if (g === null) return null;
      const sources = INLINE_GALLERY_META[g.id].sources;
      const n = sources.length;
      return { ...g, slide: (g.slide + delta + n) % n };
    });
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (inlineGallery !== null) goInlineGallerySlide(-1);
        else goVideoModal(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (inlineGallery !== null) goInlineGallerySlide(1);
        else goVideoModal(1);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [modalOpen, inlineGallery, closeModal, goVideoModal, goInlineGallerySlide]);

  useEffect(() => {
    if (!modalOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [modalOpen]);

  useEffect(() => {
    if (modalOpen) {
      closeRef.current?.focus();
    }
  }, [modalOpen]);

  const openAt = (index: number) => {
    const current = WORK_ITEMS[index];
    if (current.kind === 'image') {
      const galleryId = INLINE_GALLERY_BY_WORK_KEY[current.key];
      if (galleryId) {
        setVideoModalIndex(null);
        setInlineGallery({ id: galleryId, slide: 0 });
        return;
      }
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
    setInlineGallery(null);
    setVideoModalIndex(index);
  };

  const videoItem = videoModalIndex !== null ? WORK_ITEMS[videoModalIndex] : null;

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
                    : INLINE_GALLERY_BY_WORK_KEY[work.key]
                      ? `Open gallery: ${work.title}`
                      : `Open image: ${work.title}`
                }
              >
                <div className={styles.visualCardMedia}>
                  {work.kind === 'image' ? (
                    <div className={styles.visualCardImageHost}>
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
                      <span className={styles.workVideoTitleOnThumb} aria-hidden="true">
                        {work.title}
                      </span>
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

      {(inlineGallery !== null || videoItem) && (
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
              onClick={() => {
                if (inlineGallery !== null) goInlineGallerySlide(-1);
                else goVideoModal(-1);
              }}
              aria-label={inlineGallery !== null ? 'Previous image' : 'Previous item'}
            >
              <ChevronIcon dir="left" />
            </button>
            <button
              type="button"
              className={`${styles.workModalNav} ${styles.workModalNavNext}`}
              onClick={() => {
                if (inlineGallery !== null) goInlineGallerySlide(1);
                else goVideoModal(1);
              }}
              aria-label={inlineGallery !== null ? 'Next image' : 'Next item'}
            >
              <ChevronIcon dir="right" />
            </button>

            <p id={titleId} className={styles.workModalTitle}>
              {inlineGallery !== null
                ? INLINE_GALLERY_META[inlineGallery.id].title
                : videoItem?.title}
            </p>

            <div className={styles.workModalStage}>
              {inlineGallery !== null ? (
                <div className={styles.workModalImageHost}>
                  <Image
                    key={`${inlineGallery.id}-${inlineGallery.slide}`}
                    src={INLINE_GALLERY_META[inlineGallery.id].sources[inlineGallery.slide]}
                    alt={`${INLINE_GALLERY_META[inlineGallery.id].title} — photo ${inlineGallery.slide + 1} of ${INLINE_GALLERY_META[inlineGallery.id].sources.length}`}
                    fill
                    sizes="(max-width: 960px) 100vw, 960px"
                    className={styles.workModalImage}
                    priority
                  />
                </div>
              ) : videoItem && videoItem.kind === 'video' ? (
                <video
                  key={videoItem.file}
                  className={styles.workModalVideo}
                  src={videoSrc(videoItem.file)}
                  controls
                  playsInline
                  controlsList="nodownload"
                  autoPlay
                />
              ) : null}
            </div>
          </div>
        </div>
      )}

    </>
  );
}
