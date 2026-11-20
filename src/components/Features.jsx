import React from 'react';
import { Snowflake, Zap, ShieldCheck, FileCheck2, BrainCircuit, Languages } from 'lucide-react';

const featuresList = [
  {
    icon: BrainCircuit,
    title: 'Concept-Based Learning',
    desc: 'Deep understanding of Sindh Board topics rather than rote memorization.',
  },
  {
    icon: FileCheck2,
    title: 'Regular & Grand Tests',
    desc: 'Weekly chapter tests and board-pattern Grand Tests to boost exam confidence.',
  },
  {
    icon: Snowflake,
    title: 'Air-Conditioned Classrooms',
    desc: 'Comfortable, peaceful, and focused environment even during peak Thar summers.',
  },
  {
    icon: Zap,
    title: 'Uninterrupted UPS Backup',
    desc: 'Zero study disruption with full power backup across all lecture rooms.',
  },
  {
    icon: ShieldCheck,
    title: '24/7 CCTV Monitoring',
    desc: 'Safe, disciplined, and secure campus environment for every student.',
  },
  {
    icon: Languages,
    title: 'Summer English Classes',
    desc: 'Special spoken English and grammar bootcamps to sharpen communication skills.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-14 sm:py-20 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-sky-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-2xl sm:text-4xl font-bold mt-2">Modern Facilities for Serious Learners</h2>
          <p className="text-slate-600 mt-2.5 text-sm sm:text-base">
            Everything a student needs to excel in Matric and Intermediate board examinations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {featuresList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                tabIndex={0}
                className="touch-card group bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl active:shadow-xl focus:shadow-xl hover:-translate-y-1.5 active:-translate-y-1.5 focus:-translate-y-1.5 hover:border-sky-400 active:border-sky-400 transition-all duration-300"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mb-4 sm:mb-5">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;