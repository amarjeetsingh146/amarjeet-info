"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (path, exact = false) => {
    if (exact) {
      return pathname === path ? 'active' : '';
    }
    return pathname.startsWith(path) ? 'active' : '';
  };

  return (
    <>
      {/* Mobile top bar — height: 64px to match Adam's h-16 */}
      <header className="fixed top-0 left-0 right-0 h-[64px] bg-white border-b border-[#e2e8f0] px-4 items-center justify-between z-[1000] hidden max-md:flex">
        <nav className="flex gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
          <Link href="/" className={`inline-block py-2 px-2 sm:px-4 no-underline font-normal transition-all duration-200 text-[16px] whitespace-nowrap ${isActive('/', true) ? 'text-black font-medium' : 'text-[#718096] hover:text-black'}`}>Home</Link>
          <Link href="/reading" className={`inline-block py-2 px-2 sm:px-4 no-underline font-normal transition-all duration-200 text-[16px] whitespace-nowrap ${isActive('/reading') ? 'text-black font-medium' : 'text-[#718096] hover:text-black'}`}>Reading</Link>
          <Link href="/writing" className={`inline-block py-2 px-2 sm:px-4 no-underline font-normal transition-all duration-200 text-[16px] whitespace-nowrap ${isActive('/writing') ? 'text-black font-medium' : 'text-[#718096] hover:text-black'}`}>Writing</Link>
        </nav>
        <button
          className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#f1f3f5] rounded-md text-[#333] cursor-pointer focus:outline-none ml-2"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Mobile backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/10 z-[998] md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Sidebar — matches Adam's layout: fixed left, positioned to the left of content */}
      <aside
        className={`fixed bg-white z-[999]
          md:top-0 md:left-0 md:h-screen md:w-[440px]
          md:pt-[90px] md:pb-[90px] md:pr-[34px] md:pl-[284px]
          max-md:top-[64px] max-md:left-auto max-md:right-4 max-md:h-auto
          max-md:w-[240px] max-md:rounded-xl max-md:shadow-2xl
          max-md:border max-md:border-gray-100
          max-md:pt-5 max-md:pb-5 max-md:px-6
          max-md:transition-all max-md:duration-200 max-md:origin-top-right
          ${isMenuOpen ? 'max-md:opacity-100 max-md:scale-100 max-md:visible' : 'max-md:opacity-0 max-md:scale-95 max-md:invisible max-md:pointer-events-none'}`}
        id="sidebar"
      >
        {/* NAVIGATION group — matches Adam's VStack spacing={10} = 40px between groups */}
        <div className="mb-[40px]">
          {/* Label: Adam uses fontWeight="bold" fontSize="smaller" */}
          <p className="text-[14px] font-bold tracking-[0.12em] uppercase text-black mb-[12px]">NAVIGATION</p>
          {/* Links: Adam uses fontSize="lg" (18px), spacing={3} = 12px between items */}
          <Link href="/" className={`block text-[20px] font-medium mb-[12px] no-underline transition-colors duration-200 ${isActive('/', true) ? 'text-black' : 'text-[#718096] hover:text-black'}`}>Home</Link>
          <Link href="/reading" className={`block text-[20px] font-medium mb-[12px] no-underline transition-colors duration-200 ${isActive('/reading') ? 'text-black' : 'text-[#718096] hover:text-black'}`}>Reading</Link>
          <Link href="/writing" className={`block text-[20px] font-medium mb-[12px] no-underline transition-colors duration-200 ${isActive('/writing') ? 'text-black' : 'text-[#718096] hover:text-black'}`}>Writing</Link>
          <Link href="/deep-dive" className={`block text-[20px] font-medium mb-[12px] no-underline transition-colors duration-200 ${isActive('/deep-dive') ? 'text-black' : 'text-[#718096] hover:text-black'}`}>Deep Dives</Link>
        </div>

        {/* FIND ME ON group */}
        <div className="mb-[40px]">
          <p className="text-[14px] font-bold tracking-[0.12em] uppercase text-black mb-[12px]">FIND ME ON</p>
          <a href="https://x.com/amarjeet_076" target="_blank" rel="noopener noreferrer" className="block text-[20px] font-medium mb-[12px] text-[#718096] no-underline transition-colors duration-200 hover:text-black">Twitter</a>
          <a href="https://www.linkedin.com/in/amarjeetsingh461/" target="_blank" rel="noopener noreferrer" className="block text-[20px] font-medium mb-[12px] text-[#718096] no-underline transition-colors duration-200 hover:text-black">LinkedIn</a>
          <a href="https://github.com/amarjeetsingh146" target="_blank" rel="noopener noreferrer" className="block text-[20px] font-medium mb-[12px] text-[#718096] no-underline transition-colors duration-200 hover:text-black">GitHub</a>
        </div>
      </aside>

      {children}
    </>
  );
}

