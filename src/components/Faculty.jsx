import React, { useState } from 'react';

const facultyMembers = [
  {
    id: 1,
    name: 'Sir Naresh Kumar',
    subject: 'Physics & Chemistry',
    image:
      '/WhatsApp Image 2026-11-20 at 7.48.10 AM (2).jpeg',
  },
  {
    id: 2,
    name: 'Sir Chater Singh',
    subject: 'Mathematics',
    image:
      '/WhatsApp Image 2026-11-19 at 8.42.12 PM.jpeg',
  },
  {
    id: 3,
    name: 'Sir Name 3',
    subject: 'Chemistry',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    name: 'Sir Name 4',
    subject: 'English',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    name: 'Sir Name 5',
    subject: 'Biology',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    name: 'Sir Name 6',
    subject: 'Computer / Physics',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
  },
];

const Teachers = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="faculty" className="py-12 sm:py-20 bg-slate-50 text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-blue-700 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Experienced Mentors
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mt-1.5 sm:mt-2">
            Our Teachers
          </h2>
          <p className="text-slate-600 mt-2 text-xs sm:text-base">
            Dedicated faculty guiding students at High Tech Coaching Center Mithi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {facultyMembers.map((teacher) => {
            const isHovered = hoveredId === teacher.id;

            return (
              <div
                key={teacher.id}
                onPointerEnter={() => setHoveredId(teacher.id)}
                onPointerLeave={() => setHoveredId(null)}
                onPointerDown={() => setHoveredId(teacher.id)}
                onPointerCancel={() => setHoveredId(null)}
                className={`group rounded-2xl overflow-hidden border bg-white p-5 text-center transition-all duration-300 ${
                  isHovered
                    ? '-translate-y-1 border-blue-400 shadow-md'
                    : 'border-slate-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-md'
                }`}
              >
                {/* Chhoti aur clean image (upar koi text nahi) */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-2 border-blue-100 bg-slate-100">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    loading="lazy"
                    className={`w-full h-full object-cover object-top transition-transform duration-500 ${
                      isHovered ? 'scale-105' : 'group-hover:scale-105'
                    }`}
                  />

                  {/* Image ke upar subtle hover/press overlay */}
                  <div
                    className={`pointer-events-none absolute inset-0 transition-opacity duration-300 bg-slate-900/15 ${
                      isHovered ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </div>

                {/* Sirf Sir ka naam aur subject */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-4">
                  {teacher.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-blue-700 mt-1">
                  {teacher.subject}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Teachers;