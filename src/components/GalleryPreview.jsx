import React, { useState } from 'react';
import { Images, ArrowRight } from 'lucide-react';
import { galleryItems } from '../data/galleryData';

const GalleryPreview = ({ onOpenFullGallery }) => {
  const [activeId, setActiveId] = useState(null);
  const previewPhotos = galleryItems.slice(0, 3);

  return (
    <section id="gallery" className="py-12 sm:py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="text-center md:text-left">
            <span className="text-sky-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Campus Life
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold mt-1.5 sm:mt-2">
              Gallery & Grand Test Highlights
            </h2>
            <p className="text-slate-400 mt-2 text-xs sm:text-base max-w-xl mx-auto md:mx-0">
              Glimpses of our classrooms, weekly Grand Tests, and student celebrations at Mithi campus.
            </p>
          </div>

          <button
            onClick={onOpenFullGallery}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-sky-500 active:bg-sky-600 text-white border border-slate-700 hover:border-sky-500 px-5 sm:px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition cursor-pointer"
          >
            <Images className="w-4 h-4" />
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
                className={`group relative h-52 sm:h-72 rounded-2xl overflow-hidden border bg-slate-900 cursor-pointer transition-all duration-300 ${
                  isHovered
                    ? '-translate-y-1.5 border-sky-400 shadow-2xl shadow-sky-500/25'
                    : 'border-slate-800 hover:-translate-y-1.5 hover:border-sky-400 hover:shadow-2xl hover:shadow-sky-500/25'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.category}
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
              </div>
            );
          })}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <button
            onClick={onOpenFullGallery}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition shadow-lg shadow-sky-500/25 cursor-pointer"
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