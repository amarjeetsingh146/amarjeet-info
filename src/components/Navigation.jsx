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
      <header className="fixed top-0 left-0 right-0 h-[56px] bg-white border-b border-gray-200 shadow-sm px-4 items-center justify-between z-[1000] hidden max-md:flex">
        <nav className="flex gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
          <Link href="/" className={`inline-block py-2 px-2 sm:px-4 text-[#4a5d73] no-underline font-normal transition-all duration-200 text-[15px] sm:text-[16px] tracking-[0.01em] whitespace-nowrap ${isActive('/', true) ? 'text-black font-medium' : 'hover:text-black'}`}>Home</Link>
          <Link href="/reading" className={`inline-block py-2 px-2 sm:px-4 text-[#4a5d73] no-underline font-normal transition-all duration-200 text-[15px] sm:text-[16px] tracking-[0.01em] whitespace-nowrap ${isActive('/reading') ? 'text-black font-medium' : 'hover:text-black'}`}>Reading</Link>
          <Link href="/writing" className={`inline-block py-2 px-2 sm:px-4 text-[#4a5d73] no-underline font-normal transition-all duration-200 text-[15px] sm:text-[16px] tracking-[0.01em] whitespace-nowrap ${isActive('/writing') ? 'text-black font-medium' : 'hover:text-black'}`}>Writing</Link>
        </nav>
        <button 
          className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#e8edf2] rounded-md text-[#333] cursor-pointer focus:outline-none ml-2" 
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

      <aside className={`fixed bg-white z-[999] md:top-0 md:left-0 md:h-screen md:w-[440px] md:pt-[90px] md:pb-[90px] md:pr-[34px] md:pl-[284px] max-md:top-[64px] max-md:left-auto max-md:right-4 max-md:h-auto max-md:w-[240px] max-md:rounded-xl max-md:shadow-2xl max-md:border max-md:border-gray-100 max-md:pt-5 max-md:pb-5 max-md:px-6 max-md:transition-all max-md:duration-200 max-md:origin-top-right ${isMenuOpen ? 'max-md:opacity-100 max-md:scale-100 max-md:visible' : 'max-md:opacity-0 max-md:scale-95 max-md:invisible max-md:pointer-events-none'}`} id="sidebar">
        <div className="mb-[32px]">
          <div className="text-[14px] tracking-[1px] mb-[12px] text-black">
            <h5 className="font-bold">NAVIGATION</h5>
          </div>
          <Link href="/" className={`block font-lora text-[#64748b] tracking-[1px] mb-[12px] opacity-90 transition-all duration-200 text-[18px] ${isActive('/', true) ? 'text-black font-medium opacity-100' : 'hover:text-black hover:opacity-100'}`}>Home</Link>
          <Link href="/reading" className={`block font-lora text-[#64748b] tracking-[1px] mb-[12px] opacity-90 transition-all duration-200 text-[18px] ${isActive('/reading') ? 'text-black font-medium opacity-100' : 'hover:text-black hover:opacity-100'}`}>Reading</Link>
          <Link href="/writing" className={`block font-lora text-[#64748b] tracking-[1px] mb-[12px] opacity-90 transition-all duration-200 text-[18px] ${isActive('/writing') ? 'text-black font-medium opacity-100' : 'hover:text-black hover:opacity-100'}`}>Writing</Link>
          <Link href="/deep-dive" className={`block font-lora text-[#64748b] tracking-[1px] mb-[12px] opacity-90 transition-all duration-200 text-[18px] ${isActive('/deep-dive') ? 'text-black font-medium opacity-100' : 'hover:text-black hover:opacity-100'}`}>Deep Dives</Link>
        </div>

        <div className="mb-[32px]">
          <div className="text-[14px] tracking-[1px] mb-[12px] text-black">
            <h5 className="font-bold">FIND ME ON</h5>
          </div>
          <a href="https://x.com/amarjeet_076" target="_blank" rel="noopener noreferrer" className="block font-lora text-[#64748b] tracking-[1px] mb-[12px] opacity-90 transition-all duration-200 text-[18px] hover:text-black hover:opacity-100">Twitter</a>
          <a href="https://www.linkedin.com/in/amarjeetsingh461/" target="_blank" rel="noopener noreferrer" className="block font-lora text-[#64748b] tracking-[1px] mb-[12px] opacity-90 transition-all duration-200 text-[18px] hover:text-black hover:opacity-100">Linkedin</a>
          <a href="https://github.com/amarjeetsingh146" target="_blank" rel="noopener noreferrer" className="block font-lora text-[#64748b] tracking-[1px] mb-[12px] opacity-90 transition-all duration-200 text-[18px] hover:text-black hover:opacity-100">GitHub</a>
        </div>
      </aside>

      {children}
    </>
  );
}
