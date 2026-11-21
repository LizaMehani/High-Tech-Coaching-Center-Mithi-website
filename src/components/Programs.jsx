import React, { useState } from 'react';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';

const classData = {
  'IX & X': {
    title: 'Matriculation Science & General Coaching (Grades IX & X)',
    badge: 'Foundation & Board Prep',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology / Computer', 'English Grammar'],
    highlights: [
      'Complete Sindh Textbook Board syllabus coverage',
      'Numerical & practical problem-solving sessions',
      'Monthly parent-teacher progress updates',
    ],
  },
  'XI & XII': {
    title: 'Intermediate Pre-Engineering & Pre-Medical (Grades XI & XII)',
    badge: 'Board Toppers Track',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English'],
    highlights: [
      'Entry-test oriented conceptual lectures (ECAT / MDCAT base)',
      'Grand Test series modeled strictly on BISE Mirpurkhas pattern',
      'Past paper analysis & time-management workshops',
    ],
  },
  'Summer Camp': {
    title: 'Special Summer English & Skill Classes',
    badge: 'Seasonal Program',
    subjects: ['Spoken English', 'Tenses & Essay Writing', 'Vocabulary Building', 'Presentation Skills'],
    highlights: [
      'Interactive classroom speaking drills',
      'Confidence building for school & college students',
      'Certificate upon successful completion',
    ],
  },
};

const Programs = () => {
  const [activeTab, setActiveTab] = useState('XI & XII');

  return (
    <section id="programs" className="py-14 sm:py-20 bg-slate-50 text-slate-900 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-blue-700 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Academic Programs
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mt-2">
            Courses &amp; Batches Offered
          </h2>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 flex-wrap">
          {Object.keys(classData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition cursor-pointer ${
                activeTab === tab
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Active Card */}
        <div className="bg-white text-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-sm border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 sm:mb-6 pb-5 border-b border-slate-100">
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-800 border border-blue-200 px-3.5 py-1 rounded-full text-xs font-semibold w-fit">
              <Sparkles className="w-3.5 h-3.5 text-blue-700" />
              {classData[activeTab].badge}
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-600 text-xs sm:text-sm font-medium">
              <Clock className="w-4 h-4 text-blue-700 shrink-0" />
              Morning &amp; Evening Batches Available
            </span>
          </div>

          <h3 className="text-xl sm:text-3xl font-bold text-slate-900 mb-6 leading-snug">
            {classData[activeTab].title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h4 className="text-xs sm:text-sm uppercase tracking-wider text-slate-500 font-semibold mb-3 sm:mb-4">
                Subjects Covered
              </h4>
              <div className="flex flex-wrap gap-2">
                {classData[activeTab].subjects.map((sub, i) => (
                  <span
                    key={i}
                    className="bg-slate-50 text-slate-800 border border-slate-200 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-medium"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm uppercase tracking-wider text-slate-500 font-semibold mb-3 sm:mb-4">
                Key Highlights
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {classData[activeTab].highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-700 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;