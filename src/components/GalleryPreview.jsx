import React, { useState } from 'react';
import { Images, ArrowRight } from 'lucide-react';
import { galleryItems } from '../data/galleryData';

const GalleryPreview = ({ onOpenFullGallery }) => {
  const [activeId, setActiveId] = useState(null);
  const previewPhotos = galleryItems.slice(0, 3);

  return (
    <section id="gallery" className="py-12 sm:py-20 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="text-center md:text-left">
            <span className="text-blue-700 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Campus Life
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mt-1.5 sm:mt-2">
              Gallery &amp; Grand Test Highlights
            </h2>
            <p className="text-slate-600 mt-2 text-xs sm:text-base max-w-xl mx-auto md:mx-0">
              Glimpses of our classrooms, weekly Grand Tests, and student celebrations at Mithi campus.
            </p>
          </div>

          <button
            onClick={onOpenFullGallery}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 active:bg-blue-100 text-slate-800 hover:text-blue-800 border border-slate-300 hover:border-blue-300 px-5 sm:px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition cursor-pointer"
          >
            <Images className="w-4 h-4 text-blue-700" />
            See All Pictures ({galleryItems.length})
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {previewPhotos.map((item) => {
            const isHovered = activeId === item.id;

            return (
              <div
                key={item.id}
                data-category={item.category}
                onPointerEnter={() => setActiveId(item.id)}
                onPointerLeave={() => setActiveId(null)}
                onPointerDown={() => setActiveId(item.id)}
                onPointerCancel={() => setActiveId(null)}
                onClick={onOpenFullGallery}
                className={`group relative h-52 sm:h-72 rounded-2xl overflow-hidden border bg-slate-100 cursor-pointer transition-all duration-300 ${
                  isHovered
                    ? '-translate-y-1 border-blue-400 shadow-md'
                    : 'border-slate-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-md'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.category}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    isHovered ? 'scale-105' : 'group-hover:scale-105'
                  }`}
                />

                {/* Picture ke upar subtle hover/press highlight (bina kisi text ke) */}
                <div
                  className={`pointer-events-none absolute inset-0 transition-opacity duration-300 bg-slate-900/15 ${
                    isHovered ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                />
              </div>
            );
          })}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <button
            onClick={onOpenFullGallery}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition shadow-sm cursor-pointer"
          >
            See All Pictures
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;