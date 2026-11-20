import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    category: 'Grand Tests',
    image: '/WhatsApp Image 2026-11-19 at 8.42.12 PM (1).jpeg',
  },
  {
    id: 2,
    category: 'Classrooms',
    title: 'Interactive Science Lecture',
    desc: 'Concept-based Physics and Chemistry class in air-conditioned hall.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    category: 'Celebrations',
    title: 'Toppers & Celebration Moments',
    desc: 'Celebrating student achievements and Grand Test high scorers at Mithi campus.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    category: 'Classrooms',
    title: 'Focused Study Environment',
    desc: 'Dedicated preparation batches for Matric and Intermediate students.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    category: 'Grand Tests',
    title: 'Weekly Assessment & Evaluation',
    desc: 'Regular testing to track every student’s academic progress.',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    category: 'Celebrations',
    title: 'Motivational Seminar & Guidance',
    desc: 'Career counseling and board exam strategy session with faculty.',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  const categories = ['All', 'Classrooms', 'Grand Tests', 'Celebrations'];

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sky-400 font-semibold text-sm uppercase tracking-wider">Campus Life</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Gallery & Grand Test Highlights</h2>
          <p className="text-slate-400 mt-3">
            A glimpse into our classrooms, weekly Grand Tests, and student celebration moments at High Tech Coaching Center Mithi.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition"></div>

              <div className="absolute top-4 right-4 bg-slate-950/70 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition">
                <ZoomIn className="w-5 h-5 text-sky-400" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">{item.title}</h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal when Image Clicked */}
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
              className="absolute top-4 right-4 bg-slate-950/80 hover:bg-red-500 text-white p-2 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>
            <img src={activeImage.image} alt={activeImage.title} className="w-full max-h-[70vh] object-cover" />
            <div className="p-6">
              <span className="text-xs font-bold text-sky-400 uppercase">{activeImage.category}</span>
              <h3 className="text-xl font-bold text-white mt-1">{activeImage.title}</h3>
              <p className="text-sm text-slate-300 mt-1">{activeImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;