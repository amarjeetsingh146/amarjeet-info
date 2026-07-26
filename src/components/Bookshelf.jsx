'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

export default function Bookshelf({ books }) {
  const [focusedBookId, setFocusedBookId] = useState(null);
  const scrollRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  const focusedBook = books.find(b => b.id === focusedBookId);

  const startScroll = (direction) => {
    stopScroll();
    scrollIntervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: direction === 'left' ? -2 : 2 });
      }
    }, 10);
  };

  const stopScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

  return (
    <div className="mb-[40px] relative">
      {/* SVG Filter for paper texture */}
      <svg style={{ position: 'absolute', inset: 0, visibility: 'hidden' }}>
        <defs>
          <filter id="paper" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="8" result="noise"></feTurbulence>
            <feDiffuseLighting in="noise" lightingColor="white" surfaceScale="1" result="diffLight">
              <feDistantLight azimuth="45" elevation="35"></feDistantLight>
            </feDiffuseLighting>
          </filter>
        </defs>
      </svg>

      {/* 3D Bookshelf Row */}
      <div className="flex flex-row items-center justify-start gap-[12px] pt-[20px] pb-[60px] max-w-full overflow-x-auto overflow-y-hidden scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" ref={scrollRef}>
        <button
          className="sticky left-0 bg-white/95 border border-[#eaeaea] w-[41.5px] h-[220px] flex items-center justify-center cursor-pointer z-[100] shadow-[2px_0_10px_rgba(0,0,0,0.1)] text-[20px] text-[#333] transition-all duration-200 shrink-0 hover:bg-[#f0f0f0] hover:shadow-[4px_0_14px_rgba(0,0,0,0.15)]"
          onMouseEnter={() => startScroll('left')}
          onMouseLeave={stopScroll}
          onClick={() => { if (scrollRef.current) scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' }) }}
        >
          &#10094;
        </button>

        {books.map((book) => {
          const isFocused = focusedBookId === book.id;
          return (
            <button
              key={book.id}
              className={`relative w-[41.5px] h-[220px] [transform-style:preserve-3d] [perspective:1200px] cursor-pointer transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] shrink-0 bg-transparent border-none p-0 outline-none ${isFocused ? 'z-[10]' : 'hover:-translate-y-[10px] z-[1]'}`}
              onClick={() => setFocusedBookId(isFocused ? null : book.id)}
            >
              {/* Spine */}
              <div
                className="absolute inset-0 w-full h-full rounded-l-[3px] shadow-[-2px_0_5px_rgba(0,0,0,0.2)] flex items-center justify-center [transform-style:preserve-3d] origin-left transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] shrink-0 z-[2]"
                style={{
                  backgroundColor: book.spineColor,
                  color: book.textColor,
                  transform: isFocused ? 'rotateY(-90deg)' : 'rotateY(0deg)'
                }}
              >
                <span className="absolute inset-0 z-[50] opacity-40 pointer-events-none [filter:url(#paper)]"></span>
                <h2 className="font-mono font-bold text-[14px] uppercase tracking-[1px] m-0 whitespace-nowrap -rotate-90 pointer-events-none [text-shadow:0_1px_1px_rgba(255,255,255,0.1)]">{book.title}</h2>
              </div>

              {/* Cover */}
              <div
                className="absolute top-0 left-[41.5px] w-[145px] h-[220px] rounded-r-[3px] shadow-[2px_0_10px_rgba(0,0,0,0.3)] origin-left transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] shrink-0 overflow-hidden [transform-style:preserve-3d] brightness-90 contrast-[1.2]"
                style={{
                  transform: isFocused ? 'rotateY(0deg)' : 'rotateY(88.8deg)'
                }}
              >
                <span className="absolute inset-0 z-[50] opacity-40 pointer-events-none [filter:url(#paper)]"></span>
                <span className="absolute top-0 left-[2%] w-[8%] h-full bg-gradient-to-r from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0)] z-[40] pointer-events-none"></span>
                <img src={book.coverImg} alt={book.title} className="w-full h-full object-cover pointer-events-none" />
              </div>
            </button>
          );
        })}

        <button
          className="sticky right-0 bg-white/95 border border-[#eaeaea] w-[41.5px] h-[220px] flex items-center justify-center cursor-pointer z-[100] shadow-[-2px_0_10px_rgba(0,0,0,0.1)] text-[20px] text-[#333] transition-all duration-200 shrink-0 hover:bg-[#f0f0f0] hover:shadow-[-4px_0_14px_rgba(0,0,0,0.15)]"
          onMouseEnter={() => startScroll('right')}
          onMouseLeave={stopScroll}
          onClick={() => { if (scrollRef.current) scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' }) }}
        >
          &#10095;
        </button>
      </div>

      {/* Summary Panels */}
      <div className="flex flex-col gap-[32px] w-full max-w-[720px] mt-[10px]">
        {(focusedBookId ? [focusedBook] : books).map(book => (
          <div key={book.id} className="bg-white border border-[#eaeaea] rounded-[8px] p-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] [animation:fadeIn_0.4s_ease-out_forwards]">
            <div className="flex gap-[20px] mb-0 flex-col sm:flex-row">
              <img src={book.coverImg} alt={book.title} className="w-[100px] sm:w-[120px] h-[140px] sm:h-[160px] object-cover border border-[#ddd] shrink-0 self-start" />
              <div>
                <h2 className="text-[20px] mb-[4px] font-bold text-[#111]">{book.title}</h2>
                <p className="text-[14px] text-[#888] mb-0">{book.author}</p>
                {book.readDate && book.rating && (
                  <p className="text-[13px] text-[#999] mb-[8px] mt-[4px]">Read: {book.readDate} • Rating: {book.rating}</p>
                )}
                <p className="text-[17px] leading-[1.5] text-[#333] mb-[10px] mt-[6px]">{book.summary}</p>
                <Link href={book.link} className="text-[14px] no-underline text-[#111] font-medium transition-opacity duration-200 hover:opacity-60 inline-flex items-center">
                  Read my thoughts <span className="ml-[4px]">→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
