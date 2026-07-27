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
      <header className="fixed top-0 left-0 right-0 h-[56px] bg-white border-b border-gray-200 px-4 items-center justify-between z-[1000] hidden max-md:flex">
        <nav className="flex gap-4">
          <Link href="/" className={`inline-block py-2 px-4 text-[#4a5d73] no-underline font-normal transition-all duration-200 text-[16px] tracking-[0.01em] ${isActive('/', true) ? 'text-black font-medium' : 'hover:text-black'}`}>Home</Link>
          <Link href="/reading" className={`inline-block py-2 px-4 text-[#4a5d73] no-underline font-normal transition-all duration-200 text-[16px] tracking-[0.01em] ${isActive('/reading') ? 'text-black font-medium' : 'hover:text-black'}`}>Reading</Link>
          <Link href="/writing" className={`inline-block py-2 px-4 text-[#4a5d73] no-underline font-normal transition-all duration-200 text-[16px] tracking-[0.01em] ${isActive('/writing') ? 'text-black font-medium' : 'hover:text-black'}`}>Writing</Link>
        </nav>
        <button className="text-[22px] bg-transparent border-none cursor-pointer" onClick={toggleMenu}>☰</button>
      </header>

      <aside className={`fixed top-0 left-0 w-[440px] h-screen pt-[90px] pb-[90px] pr-[34px] pl-[284px] bg-white z-[999] transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'max-md:-translate-x-full'}`} id="sidebar">
        <div className="mb-[32px]">
          <div className="text-[15px] tracking-[1px] mb-[10px] text-black">
          <h5 className="font-bold">NAVIGATION</h5>
          </div>
          <Link href="/" className={`block font-lora text-[#4a5d73] tracking-[1px] mb-[1px] py-[1px] opacity-70 transition-all duration-200 text-[18px] ${isActive('/', true) ? 'text-black font-medium opacity-100' : 'hover:text-black hover:opacity-100'}`}>Home</Link>
          <Link href="/reading" className={`block font-lora text-[#4a5d73] tracking-[1px] mb-[1px] py-[1px] opacity-70 transition-all duration-200 text-[18px] ${isActive('/reading') ? 'text-black font-medium opacity-100' : 'hover:text-black hover:opacity-100'}`}>Reading</Link>
          <Link href="/writing" className={`block font-lora text-[#4a5d73] tracking-[1px] mb-[1px] py-[1px] opacity-70 transition-all duration-200 text-[18px] ${isActive('/writing') ? 'text-black font-medium opacity-100' : 'hover:text-black hover:opacity-100'}`}>Writing</Link>
          <Link href="/deep-dive" className={`block font-lora text-[#4a5d73] tracking-[1px] mb-[1px] py-[1px] opacity-70 transition-all duration-200 text-[18px] ${isActive('/deep-dive') ? 'text-black font-medium opacity-100' : 'hover:text-black hover:opacity-100'}`}>Deep Dives</Link>
        </div>

        <div className="mb-[32px]">
          <div className="text-[15px] tracking-[1px] mb-[10px] text-black">
          <h5 className="font-bold">FIND ME ON</h5>
          </div>
          <a href="https://x.com/amarjeet_076" target="_blank" rel="noopener noreferrer" className="block font-lora text-[#4a5d73] tracking-[1px] mb-[1px] py-[1px] opacity-70 transition-all duration-200 text-[18px] hover:text-black hover:opacity-100">Twitter</a>
          <a href="https://www.linkedin.com/in/amarjeetsingh461/" target="_blank" rel="noopener noreferrer" className="block font-lora text-[#4a5d73] tracking-[1px] mb-[1px] py-[1px] opacity-70 transition-all duration-200 text-[18px] hover:text-black hover:opacity-100">Linkedin</a>
          <a href="https://github.com/amarjeetsingh146" target="_blank" rel="noopener noreferrer" className="block font-lora text-[#4a5d73] tracking-[1px] mb-[1px] py-[1px] opacity-70 transition-all duration-200 text-[18px] hover:text-black hover:opacity-100">GitHub</a>
        </div>
      </aside>

      {children}
    </>
  );
}
