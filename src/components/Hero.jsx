import React, { useState } from 'react';
import { ArrowRight, Star, Award, Users, BookOpen, CheckCircle } from 'lucide-react';

const Hero = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const updateTilt = (clientX, clientY, target) => {
    const rect = target.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -y * 16, y: x * 16 });
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
    <section id="home" className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-slate-950 text-white overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-16 left-4 w-56 sm:w-72 h-56 sm:h-72 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-4 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-sky-400 text-xs sm:text-sm font-medium mb-5">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400 shrink-0" />
              <span>4.8★ Rated Coaching Institute in Mithi</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-5">
              Shaping Future Toppers Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                Concept-Based Learning
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-400 mb-7 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Quality coaching for Grades IX, X, XI &amp; XII with weekly Grand Tests, air-conditioned classrooms, and Mithi&apos;s most dedicated teaching faculty.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3.5 sm:gap-4 mb-8">
              <a
                href="#admission"
                className="touch-btn-sky w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 active:bg-sky-400 hover:-translate-y-0.5 active:scale-95 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/30 text-sm sm:text-base"
              >
                Apply for Admission
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#faculty"
                className="touch-btn-dark w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 active:bg-slate-700 hover:border-sky-400 hover:-translate-y-0.5 active:scale-95 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-slate-700 transition-all duration-200 text-sm sm:text-base"
              >
                Meet Our Teachers
              </a>
            </div>

            {/* Mini Trust Points */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2.5 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" /> AC Classrooms &amp; UPS
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" /> Weekly Grand Tests
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" /> BISE Board Focused
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
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isActive ? 1.04 : 1})`,
              }}
              className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 ${
                isActive ? 'border-sky-400 shadow-sky-500/25' : 'border-slate-800'
              } hover:border-sky-400 shadow-2xl transition-all duration-200 ease-out cursor-pointer select-none touch-none`}
            >
              <img
                src="/841370562_1146776664350898_6685232727510895758_n.jpg"
                alt="High Tech Coaching Center Mithi Students"
                className={`w-full h-64 sm:h-80 lg:h-[420px] object-cover transition-transform duration-500 ${
                  isActive ? 'scale-105' : 'group-hover:scale-105'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-slate-900/75 border border-slate-800 rounded-2xl p-4 sm:p-6 backdrop-blur-sm">
          <div className="text-center p-2 rounded-xl hover:bg-slate-800/70 active:bg-slate-800/70 transition">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400 mx-auto mb-1.5" />
            <div className="text-xl sm:text-3xl font-bold">15.6K+</div>
            <div className="text-[11px] sm:text-sm text-slate-400">Facebook Community</div>
          </div>
          <div className="text-center p-2 rounded-xl hover:bg-slate-800/70 active:bg-slate-800/70 transition">
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400 mx-auto mb-1.5" />
            <div className="text-xl sm:text-3xl font-bold">IX – XII</div>
            <div className="text-[11px] sm:text-sm text-slate-400">Science &amp; Board Prep</div>
          </div>
          <div className="text-center p-2 rounded-xl hover:bg-slate-800/70 active:bg-slate-800/70 transition">
            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 mx-auto mb-1.5" />
            <div className="text-xl sm:text-3xl font-bold">Weekly</div>
            <div className="text-[11px] sm:text-sm text-slate-400">Grand Test System</div>
          </div>
          <div className="text-center p-2 rounded-xl hover:bg-slate-800/70 active:bg-slate-800/70 transition">
            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 mx-auto mb-1.5" />
            <div className="text-xl sm:text-3xl font-bold">4.8 / 5</div>
            <div className="text-[11px] sm:text-sm text-slate-400">Student Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;