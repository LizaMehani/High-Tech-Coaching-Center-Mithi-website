import React, { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Facilities', href: '#features' },
    { label: 'Classes', href: '#programs' },
    { label: 'Teachers', href: '#faculty' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Admissions', href: '#admission' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo Image + Name */}
          <a href="#home" className="flex items-center space-x-2.5 sm:space-x-3 min-w-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
              {!logoError ? (
                <img
                  src="/Screenshot 2026-11-19 164019.png"
                  alt="High Tech Coaching Center Logo"
                  className="w-full h-full object-cover"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="text-blue-800 font-extrabold text-sm sm:text-base">HT</span>
              )}
            </div>
            <div className="truncate">
              <span className="font-bold text-base sm:text-xl tracking-wide text-slate-900 block leading-tight truncate">
                HIGH TECH
              </span>
              <span className="text-[10px] sm:text-xs text-blue-700 font-semibold tracking-wider block truncate">
                COACHING CENTER MITHI
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-700 transition whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+923332508463"
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2.5 rounded-lg font-semibold transition whitespace-nowrap"
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
              className="p-2 rounded-lg text-slate-700 hover:text-blue-700 hover:bg-slate-100 transition"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-1.5 shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2.5 px-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-700 text-sm font-medium transition"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="tel:+923332508463"
              className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-3 rounded-lg text-sm font-semibold transition"
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