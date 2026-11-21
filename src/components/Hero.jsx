import React, { useState } from 'react';
import { ArrowRight, Star, Award, Users, BookOpen, CheckCircle } from 'lucide-react';

const Hero = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const updateTilt = (clientX, clientY, target) => {
    const rect = target.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -y * 12, y: x * 12 });
  };

  const handlePointerMove = (e) => {
    updateTilt(e.clientX, e.clientY, e.currentTarget);
  };

  const handlePointerDown = (e) => {
    updateTilt(e.clientX, e.clientY, e.currentTarget);
  };

  const handlePointerLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const isActive = tilt.x !== 0 || tilt.y !== 0;

  return (
    <section
      id="home"
      className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-white text-slate-900 border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs sm:text-sm font-semibold mb-5">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-500 text-amber-500 shrink-0" />
              <span>4.8★ Rated Coaching Institute in Mithi</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-5">
              Shaping Future Toppers Through{' '}
              <span className="text-blue-700">Concept-Based Learning</span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-600 mb-7 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Quality coaching for Grades IX, X, XI &amp; XII with weekly Grand Tests, air-conditioned classrooms, and Mithi&apos;s most dedicated teaching faculty.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3.5 sm:gap-4 mb-8">
              <a
                href="#admission"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 active:bg-blue-800 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition shadow-sm text-sm sm:text-base"
              >
                Apply for Admission
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#faculty"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-slate-300 hover:border-blue-300 transition text-sm sm:text-base"
              >
                Meet Our Teachers
              </a>
            </div>

            {/* Mini Trust Points */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" /> AC Classrooms &amp; UPS
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" /> Weekly Grand Tests
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" /> BISE Board Focused
              </span>
            </div>
          </div>

          {/* Right Clean Image Card with Pointer 3D Tilt */}
          <div className="lg:col-span-5" style={{ perspective: '1000px' }}>
            <div
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              onPointerCancel={handlePointerLeave}
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isActive ? 1.02 : 1})`,
              }}
              className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden border ${
                isActive ? 'border-blue-400 shadow-lg' : 'border-slate-200'
              } hover:border-blue-400 shadow-md bg-slate-50 transition-all duration-200 ease-out cursor-pointer select-none touch-none`}
            >
              <img
                src="/841370562_1146776664350898_6685232727510895758_n.jpg"
                alt="High Tech Coaching Center Mithi Students"
                className={`w-full h-64 sm:h-80 lg:h-[420px] object-cover transition-transform duration-500 ${
                  isActive ? 'scale-105' : 'group-hover:scale-105'
                }`}
              />

              {/* Soft & Balanced Bottom Caption */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 via-slate-950/35 to-transparent px-4 py-3 sm:px-5 sm:py-3.5">
                <p className="text-white text-xs sm:text-sm font-semibold tracking-wide drop-shadow-sm">
                  Mithi Campus • Concept-Based Learning
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6">
          <div className="text-center p-3 rounded-xl bg-white border border-slate-100 hover:border-blue-200 transition">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700 mx-auto mb-1.5" />
            <div className="text-xl sm:text-3xl font-bold text-slate-900">15.6K+</div>
            <div className="text-[11px] sm:text-sm text-slate-600">Facebook Community</div>
          </div>
          <div className="text-center p-3 rounded-xl bg-white border border-slate-100 hover:border-blue-200 transition">
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700 mx-auto mb-1.5" />
            <div className="text-xl sm:text-3xl font-bold text-slate-900">IX – XII</div>
            <div className="text-[11px] sm:text-sm text-slate-600">Science &amp; Board Prep</div>
          </div>
          <div className="text-center p-3 rounded-xl bg-white border border-slate-100 hover:border-blue-200 transition">
            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 mx-auto mb-1.5" />
            <div className="text-xl sm:text-3xl font-bold text-slate-900">Weekly</div>
            <div className="text-[11px] sm:text-sm text-slate-600">Grand Test System</div>
          </div>
          <div className="text-center p-3 rounded-xl bg-white border border-slate-100 hover:border-blue-200 transition">
            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 mx-auto mb-1.5" />
            <div className="text-xl sm:text-3xl font-bold text-slate-900">4.8 / 5</div>
            <div className="text-[11px] sm:text-sm text-slate-600">Student Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;