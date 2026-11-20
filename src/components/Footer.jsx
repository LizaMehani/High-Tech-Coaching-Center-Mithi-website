import React from 'react';
import { MapPin, Phone, Mail, ArrowUpRight, Clock } from 'lucide-react';

const Footer = ({ onNavigateSection }) => {
  const handleLinkClick = (e, sectionId) => {
    if (onNavigateSection) {
      e.preventDefault();
      onNavigateSection(sectionId);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Logo Image + Intro */}
          <div className="space-y-4">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, 'home')}
              className="flex items-center gap-3.5 group"
            >
              {/* Logo Image Placeholder - Apna logo public/images/logo.png mein daal dena */}
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                <img
                  src="/Screenshot 2026-11-19 164019.png"
                  alt="High Tech Coaching Center Logo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Agar abhi logo image nahi dali ho to clean fallback badge dikhega
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML =
                      '<span class="text-sky-400 font-extrabold text-lg">HT</span>';
                  }}
                />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-wide block leading-tight">
                  HIGH TECH
                </span>
                <span className="text-xs text-sky-400 font-semibold tracking-wider">
                  COACHING CENTER MITHI
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering students of Grades IX, X, XI & XII in Mithi, Tharparkar with concept-based education and weekly Grand Tests.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://web.facebook.com/HiTechCoachingCenterMithi/?_rdc=1&_rdr#"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-sky-500 text-slate-300 hover:text-white border border-slate-800 px-3.5 py-2 rounded-lg text-xs font-semibold transition"
              >
                Facebook <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.tiktok.com/@hightech457"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-sky-500 text-slate-300 hover:text-white border border-slate-800 px-3.5 py-2 rounded-lg text-xs font-semibold transition"
              >
                TikTok <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Section Links */}
          <div>
            <h4 className="text-white font-bold text-base uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, 'home')}
                  className="text-slate-400 hover:text-sky-400 transition block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={(e) => handleLinkClick(e, 'features')}
                  className="text-slate-400 hover:text-sky-400 transition block"
                >
                  Campus Facilities
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  onClick={(e) => handleLinkClick(e, 'programs')}
                  className="text-slate-400 hover:text-sky-400 transition block"
                >
                  Classes & Batches (IX–XII)
                </a>
              </li>
              <li>
                <a
                  href="#faculty"
                  onClick={(e) => handleLinkClick(e, 'faculty')}
                  className="text-slate-400 hover:text-sky-400 transition block"
                >
                  Our Teachers
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleLinkClick(e, 'gallery')}
                  className="text-slate-400 hover:text-sky-400 transition block"
                >
                  Campus Gallery
                </a>
              </li>
              <li>
                <a
                  href="#admission"
                  onClick={(e) => handleLinkClick(e, 'admission')}
                  className="text-slate-400 hover:text-sky-400 transition block"
                >
                  Online Admission
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Programs Offered */}
          <div>
            <h4 className="text-white font-bold text-base uppercase tracking-wider mb-5">
              Programs
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Matric Science (IX & X)</li>
              <li>Pre-Engineering (XI & XII)</li>
              <li>Pre-Medical (XI & XII)</li>
              <li>Weekly Grand Test Series</li>
              <li>Summer English Classes</li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 className="text-white font-bold text-base uppercase tracking-wider mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-relaxed">
                  Balani Siraan Colony (Beside Marvi Grammar High School, Khatri/Lohana Mohalla), Mithi, Tharparkar
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-400 shrink-0" />
                <a
                  href="tel:+923332508463"
                  className="text-slate-300 hover:text-sky-400 font-medium transition"
                >
                  +92 333 2508463 (Sir Naresh Kumar)
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-400 shrink-0" />
                <a
                  href="mailto:hightech8@gmail.com"
                  className="text-slate-300 hover:text-sky-400 font-medium transition break-all"
                >
                  hightech8@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-sky-400 shrink-0" />
                <span className="text-slate-400">Mon – Sat (Morning & Evening)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} High Tech Coaching Center Mithi. All rights reserved.
          </p>
          <p className="text-slate-500">
            Designed & Developed with ❤️ in Mithi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;