'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Constants ──────────────────────────────────────────────────────────────────
const EASE = [0.22, 1, 0.36, 1];

// ─── Info Card ──────────────────────────────────────────────────────────────────
function BookInfoCard({ book, onClose }) {
  return (
    <motion.div
      key={book.id || book.title}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: EASE }}
      className="
        mt-8 bg-white border border-gray-100 rounded-2xl p-6
        shadow-[0_4px_32px_rgba(0,0,0,0.06)]
        flex gap-5 flex-col sm:flex-row
        relative
      "
    >
      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          aria-label="Close book details"
          className="
            absolute top-4 right-4 w-7 h-7 rounded-full
            flex items-center justify-center
            text-gray-300 hover:text-gray-500 hover:bg-gray-50
            transition-colors duration-150 focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-gray-300
          "
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <line x1="2" y1="2" x2="12" y2="12" />
            <line x1="12" y1="2" x2="2" y2="12" />
          </svg>
        </button>
      )}

      <img
        src={book.coverImg}
        alt={book.title}
        className="w-24 sm:w-28 h-36 sm:h-40 object-cover border-2 border-gray-200 shadow-md shrink-0 self-start"
        loading="lazy"
        draggable={false}
      />
      <div className="flex flex-col min-w-0 pr-6">
        <h2 className="text-[20px] font-bold text-gray-900 mb-[3px] leading-snug">{book.title}</h2>
        <p className="text-[14px] text-gray-400 mb-[2px]">Book By {book.author}</p>
        {book.readDate && book.rating && (
          <p className="text-[13px] text-gray-500 mb-2 font-medium">Read: {book.readDate} • Rating: {book.rating}</p>
        )}
        <p className="text-[16px] leading-[1.65] text-gray-600 mb-4">{book.summary}</p>
        <a
          href={book.link}
          className="text-[13px] font-semibold text-gray-800 no-underline inline-flex items-center gap-[5px] hover:opacity-50 transition-opacity duration-200"
        >
          Read my thoughts <span aria-hidden="true">→</span>
        </a>
      </div>
    </motion.div>
  );
}

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// ─── Bookshelf ──────────────────────────────────────────────────────────────────
export default function BookshelfCarousel({ books = [] }) {
  const [bookIndex, setBookIndex] = useState(-1);
  const [scroll, setScroll] = useState(0); // initial scroll

  const bookshelfRef = useRef(null);
  const viewportRef = useRef(null);
  const scrollRightRef = useRef(null);
  const scrollLeftRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [booksInViewport, setBooksInViewport] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const width = 41.5;
  const height = 220;

  const spineWidth = width;
  const coverWidth = width * 4;
  const bookWidth = width * 5;

  const minScroll = 0;
  const maxScroll = useMemo(() => {
    return Math.max(0,
      (width + 4) * (books.length - booksInViewport) +
      (bookIndex > -1 ? width * 4 : 0)
    );
  }, [bookIndex, books.length, booksInViewport, width]);

  const boundedScroll = useCallback((scrollX) => {
    setScroll(Math.max(minScroll, Math.min(maxScroll, scrollX)));
  }, [maxScroll, minScroll]);

  const boundedRelativeScroll = useCallback(
    (incrementX) => {
      setScroll((_scroll) =>
        Math.max(minScroll, Math.min(maxScroll, _scroll + incrementX))
      );
    },
    [maxScroll, minScroll]
  );

  useEffect(() => {
    if (bookIndex === -1) {
      // Don't auto-scroll to 0, just stay where they are or make sure they're within bounds
      boundedRelativeScroll(0);
    } else {
      boundedScroll((bookIndex - (booksInViewport - 1) / 2) * (width + 4));
    }
  }, [bookIndex, boundedRelativeScroll, boundedScroll, booksInViewport, width]);

  useEffect(() => {
    const updateDimensions = () => {
      if (viewportRef.current) {
        const w = viewportRef.current.getBoundingClientRect().width;
        // Subtract the 84px taken by the permanent left (42px) and right (42px) buttons
        const availableWidth = w - 84;
        const numberOfBooks = availableWidth / (width + 4);
        setBooksInViewport(numberOfBooks);
        // Force bounds re-evaluation based on new viewport
        boundedRelativeScroll(0);
      }
    };

    // Initial update
    updateDimensions();

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });

    if (viewportRef.current) {
      resizeObserver.observe(viewportRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [boundedRelativeScroll, width]);

  useEffect(() => {
    const currentScrollRightRef = scrollRightRef.current;
    const currentScrollLeftRef = scrollLeftRef.current;

    if (!currentScrollRightRef || !currentScrollLeftRef) return;

    let scrollInterval = null;

    const setScrollRightInterval = () => {
      setIsScrolling(true);
      scrollInterval = setInterval(() => {
        boundedRelativeScroll(3);
      }, 10);
    };

    const setScrollLeftInterval = () => {
      setIsScrolling(true);
      scrollInterval = setInterval(() => {
        boundedRelativeScroll(-3);
      }, 10);
    };

    const clearScrollInterval = () => {
      setIsScrolling(false);
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };

    const addEvents = (el, startFn) => {
      // Touch events for mobile
      el.addEventListener('touchstart', startFn, { passive: true });
      el.addEventListener('touchend', clearScrollInterval);
      el.addEventListener('touchcancel', clearScrollInterval);
      // Hover events for desktop
      el.addEventListener('mouseenter', startFn);
      el.addEventListener('mouseleave', clearScrollInterval);
    };

    const removeEvents = (el, startFn) => {
      el.removeEventListener('touchstart', startFn);
      el.removeEventListener('touchend', clearScrollInterval);
      el.removeEventListener('touchcancel', clearScrollInterval);
      el.removeEventListener('mouseenter', startFn);
      el.removeEventListener('mouseleave', clearScrollInterval);
    };

    addEvents(currentScrollRightRef, setScrollRightInterval);
    addEvents(currentScrollLeftRef, setScrollLeftInterval);

    return () => {
      clearScrollInterval();
      removeEvents(currentScrollRightRef, setScrollRightInterval);
      removeEvents(currentScrollLeftRef, setScrollLeftInterval);
    };
  }, [boundedRelativeScroll]);

  const openBook = bookIndex > -1 ? books[bookIndex] : null;

  return (
    <section aria-label="Bookshelf" className="w-full focus-visible:outline-none mb-12">
      {/* SVG Filters for paper texture */}
      <svg style={{ position: "absolute", inset: 0, visibility: "hidden" }}>
        <defs>
          <filter id="paper" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="8"
              result="noise"
            />
            <feDiffuseLighting
              in="noise"
              lightingColor="white"
              surfaceScale="1"
              result="diffLight"
            >
              <feDistantLight azimuth="45" elevation="35" />
            </feDiffuseLighting>
          </filter>
        </defs>
      </svg>

      <div className="relative w-full" ref={bookshelfRef}>
        {/* Left Scroll Button */}
        <div
          className="absolute z-20 transition-opacity duration-200"
          style={{ left: 0, top: 32 }}
        >
          <button
            ref={scrollLeftRef}
            className="flex items-center justify-center shrink-0 origin-right outline-none cursor-pointer hover:brightness-110 transition-all"
            style={{
              width: spineWidth,
              height: height,
              backgroundColor: '#1E293B',
              color: '#F8FAFC',
              filter: "brightness(0.8) contrast(2)",
              transformStyle: "preserve-3d",
              boxShadow: "4px 0 15px rgba(0,0,0,0.4)"
            }}
            aria-label="Scroll left"
          >
            <span
              className="pointer-events-none absolute top-0 left-0 z-[10] opacity-40"
              style={{
                height: height,
                width: spineWidth,
                filter: "url(#paper)",
              }}
            />
            <h2
              className="text-sm font-bold font-sans select-none relative z-[20] text-white"
              style={{
                writingMode: "horizontal-tb",
                transform: "none",
                textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                color: "#FFFFFF"
              }}
            >
              &lt;
            </h2>
          </button>
        </div>

        {/* Viewport */}
        <div
          className="flex items-center gap-1 overflow-x-hidden cursor-grab py-8 px-[42px] select-none"
          ref={viewportRef}
        >
          {books.map((book, index) => {
            const isOpen = bookIndex === index;

            return (
              <button
                key={book.id || book.title}
                onClick={() => {
                  setBookIndex(isOpen ? -1 : index);
                }}
                className="flex flex-row items-center justify-start outline-none shrink-0"
                style={{
                  transform: `translateX(-${scroll}px)`,
                  width: isOpen ? bookWidth : spineWidth,
                  perspective: "1000px",
                  WebkitPerspective: "1000px",
                  gap: "0px",
                  transition: isScrolling
                    ? `transform 100ms linear`
                    : `all 800ms ease`,
                  willChange: "auto",
                }}
              >
                  <div
                    className="flex items-center justify-center shrink-0 origin-right relative"
                    style={{
                      width: spineWidth,
                      height: height,
                      backgroundColor: book.spineColor,
                      transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${isOpen ? "-60deg" : "0deg"
                        }) rotateZ(0deg) skew(0deg, 0deg)`,
                      transition: "all 800ms ease",
                      willChange: "auto",
                      filter: "brightness(0.8) contrast(2)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                  <span
                    className="pointer-events-none absolute top-0 left-0 z-[10] opacity-40"
                    style={{
                      height: height,
                      width: spineWidth,
                      filter: "url(#paper)",
                    }}
                  />
                  <h2
                    className="text-xs font-sans select-none overflow-hidden text-ellipsis whitespace-nowrap relative z-[20]"
                    style={{
                      writingMode: "vertical-rl",
                      maxHeight: `${height - 24}px`,
                      color: book.textColor
                    }}
                  >
                    {book.title}
                  </h2>
                </div>

                {/* Cover */}
                <div
                  className="relative shrink-0 overflow-hidden origin-left"
                  style={{
                    width: coverWidth,
                    height: height,
                    transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${isOpen ? "30deg" : "88.8deg"
                      }) rotateZ(0deg) skew(0deg, 0deg)`,
                    transition: "all 800ms ease",
                    willChange: "auto",
                    filter: "brightness(0.8) contrast(2)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <span
                    className="pointer-events-none absolute top-0 right-0 z-50 opacity-40"
                    style={{
                      height: height,
                      width: coverWidth,
                      filter: "url(#paper)",
                    }}
                  />
                  <span
                    className="pointer-events-none absolute top-0 left-0 z-50"
                    style={{
                      height: height,
                      width: coverWidth,
                      background: `linear-gradient(to right, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.5) 3px, rgba(255, 255, 255, 0.25) 4px, rgba(255, 255, 255, 0.25) 6px, transparent 7px, transparent 9px, rgba(255, 255, 255, 0.25) 9px, transparent 12px)`,
                    }}
                  />
                  <img
                    src={book.coverImg}
                    alt={book.title}
                    style={{
                      width: coverWidth,
                      height: height,
                      transition: "all 800ms ease",
                      willChange: "auto",
                      objectFit: "fill",
                    }}
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Scroll Button */}
        <div
          className="absolute z-20 transition-opacity duration-200"
          style={{ right: 0, top: 32 }}
        >
          <button
            ref={scrollRightRef}
            className="flex items-center justify-center shrink-0 origin-left outline-none cursor-pointer hover:brightness-110 transition-all"
            style={{
              width: spineWidth,
              height: height,
              backgroundColor: '#1E293B',
              color: '#F8FAFC',
              filter: "brightness(0.8) contrast(2)",
              transformStyle: "preserve-3d",
              boxShadow: "-4px 0 15px rgba(0,0,0,0.4)"
            }}
            aria-label="Scroll right"
          >
            <span
              className="pointer-events-none absolute top-0 left-0 z-[10] opacity-40"
              style={{
                height: height,
                width: spineWidth,
                filter: "url(#paper)",
              }}
            />
            <h2
              className="text-sm font-bold font-sans select-none relative z-[20] text-white"
              style={{
                writingMode: "horizontal-tb",
                textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                color: "#FFFFFF"
              }}
            >
              &gt;
            </h2>
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {openBook ? (
          <BookInfoCard
            key={openBook.id || openBook.title}
            book={openBook}
            onClose={() => setBookIndex(-1)}
          />
        ) : (
          <motion.div
            key="all-books"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="flex flex-col gap-2"
          >
            {books.map((book) => (
              <BookInfoCard key={book.id || book.title} book={book} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
