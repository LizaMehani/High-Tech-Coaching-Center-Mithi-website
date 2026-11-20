import React, { useState, useEffect } from 'react';
import { ArrowLeft, X, ZoomIn, GraduationCap } from 'lucide-react';
import { galleryItems } from '../data/galleryData';
import Footer from './Footer';

const FullGalleryPage = ({ onBackHome, onNavigateSection }) => {
  const [activeImage, setActiveImage] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">
          <button
            onClick={onBackHome}
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-sky-500 active:bg-sky-600 text-white px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          <div className="flex items-center gap-2 min-w-0">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400 shrink-0" />
            <span className="font-bold text-xs sm:text-base tracking-wide truncate">
              HIGH TECH CAMPUS GALLERY
            </span>
          </div>
        </div>
      </header>

      <main className="py-10 sm:py-16 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-sky-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Photo Archive
            </span>
            <h1 className="text-2xl sm:text-5xl font-extrabold mt-2">
              Complete Campus Gallery
            </h1>
            <p className="text-slate-400 mt-2.5 sm:mt-3 text-xs sm:text-base">
              Explore all moments from our classrooms, weekly Grand Tests, and student celebrations in Mithi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {galleryItems.map((item) => {
              const isHovered = hoveredId === item.id;

              return (
                <div
                  key={item.id}
                  onPointerEnter={() => setHoveredId(item.id)}
                  onPointerLeave={() => setHoveredId(null)}
                  onPointerDown={() => setHoveredId(item.id)}
                  onPointerCancel={() => setHoveredId(null)}
                  onClick={() => setActiveImage(item)}
                  className={`group relative h-52 sm:h-72 rounded-2xl overflow-hidden border bg-slate-900 cursor-pointer transition-all duration-300 ${
                    isHovered
                      ? '-translate-y-1.5 border-sky-400 shadow-2xl shadow-sky-500/25'
                      : 'border-slate-800 hover:-translate-y-1.5 hover:border-sky-400 hover:shadow-2xl hover:shadow-sky-500/25'
                  }`}
                >
                  <img
                    src={item.image}
                    alt="Gallery photo"
                    loading="lazy"
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      isHovered ? 'scale-110' : 'group-hover:scale-110'
                    }`}
                  />

                  {/* Picture ke upar hover/press shadow (bina kisi text ke) */}
                  <div
                    className={`pointer-events-none absolute inset-0 transition-opacity duration-300 shadow-[inset_0_0_45px_rgba(2,6,23,0.75)] bg-slate-950/35 ${
                      isHovered ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />

                  <div
                    className={`absolute top-3 right-3 sm:top-4 sm:right-4 bg-slate-950/80 p-2 rounded-full text-white transition duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden"
          >
            <button
              onClick={() => setActiveImage(null)}
              aria-label="Close Preview"
              className="absolute top-4 right-4 bg-slate-950/80 hover:bg-red-500 text-white p-2 rounded-full transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeImage.image}
              alt="Gallery preview"
              className="w-full max-h-[75vh] object-contain bg-slate-950"
            />
          </div>
        </div>
      )}

      <Footer onNavigateSection={onNavigateSection} />
    </div>
  );
};

export default FullGalleryPage;