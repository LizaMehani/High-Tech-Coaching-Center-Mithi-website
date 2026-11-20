import React, { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Facilities', href: '#features' },
    { label: 'Classes', href: '#programs' },
    { label: 'Teachers', href: '#faculty' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Admissions', href: '#admission' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo Image + Name */}
          <a href="#home" className="flex items-center space-x-2.5 sm:space-x-3 min-w-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
              <img
                src="/Screenshot 2026-11-19 164019.png"
                alt="High Tech Coaching Center Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML =
                    '<span class="text-sky-400 font-extrabold text-sm sm:text-base">HT</span>';
                }}
              />
            </div>
            <div className="truncate">
              <span className="font-bold text-base sm:text-xl tracking-wide block leading-tight truncate">
                HIGH TECH
              </span>
              <span className="text-[10px] sm:text-xs text-sky-400 font-medium tracking-wider block truncate">
                COACHING CENTER MITHI
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-sky-400 transition whitespace-nowrap">
                {link.label}
              </a>
            ))}
            <a
              href="tel:+923332508463"
              className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2.5 rounded-full font-semibold transition shadow-lg shadow-sky-500/25 whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4" />
              0333-2508463
            </a>
          </div>

          {/* Mobile / Tablet Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2.5 px-3 rounded-xl text-slate-200 hover:bg-slate-800 hover:text-sky-400 text-sm font-medium transition"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="tel:+923332508463"
              className="w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-3 rounded-xl text-sm font-semibold transition"
            >
              <PhoneCall className="w-4 h-4" />
              Call Now: 0333-2508463
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;