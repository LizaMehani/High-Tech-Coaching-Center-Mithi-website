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
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between">
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">
          <button
            onClick={onBackHome}
            className="inline-flex items-center gap-2 bg-slate-100 hover:bg-blue-700 active:bg-blue-800 text-slate-800 hover:text-white border border-slate-200 hover:border-blue-700 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          <div className="flex items-center gap-2 min-w-0">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700 shrink-0" />
            <span className="font-bold text-xs sm:text-base tracking-wide text-slate-900 truncate">
              HIGH TECH CAMPUS GALLERY
            </span>
          </div>
        </div>
      </header>

      <main className="py-10 sm:py-16 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-blue-700 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Photo Archive
            </span>
            <h1 className="text-2xl sm:text-5xl font-extrabold text-slate-900 mt-2">
              Complete Campus Gallery
            </h1>
            <p className="text-slate-600 mt-2.5 sm:mt-3 text-xs sm:text-base">
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
                  className={`group relative h-52 sm:h-72 rounded-2xl overflow-hidden border bg-slate-100 cursor-pointer transition-all duration-300 ${
                    isHovered
                      ? '-translate-y-1 border-blue-400 shadow-md'
                      : 'border-slate-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-md'
                  }`}
                >
                  <img
                    src={item.image}
                    alt="Gallery photo"
                    loading="lazy"
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      isHovered ? 'scale-105' : 'group-hover:scale-105'
                    }`}
                  />

                  {/* Picture ke upar subtle hover/press overlay (bina kisi text ke) */}
                  <div
                    className={`pointer-events-none absolute inset-0 transition-opacity duration-300 bg-slate-900/15 ${
                      isHovered ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />

                  <div
                    className={`absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/95 border border-slate-200 p-2 rounded-full text-slate-800 shadow-sm transition duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700" />
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
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={() => setActiveImage(null)}
              aria-label="Close Preview"
              className="absolute top-4 right-4 z-10 bg-white/95 hover:bg-red-600 text-slate-800 hover:text-white border border-slate-200 p-2 rounded-full shadow-sm transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeImage.image}
              alt="Gallery preview"
              className="w-full max-h-[75vh] object-contain bg-slate-50"
            />
          </div>
        </div>
      )}

      <Footer onNavigateSection={onNavigateSection} />
    </div>
  );
};

export default FullGalleryPage;