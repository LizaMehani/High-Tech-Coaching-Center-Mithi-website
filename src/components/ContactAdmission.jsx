import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, UserCheck } from 'lucide-react';

const ContactAdmission = () => {
  const [formData, setFormData] = useState({
    name: '',
    studentClass: 'Class XII (Pre-Engineering)',
    phone: '',
    message: '',
  });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = `Assalam-o-Alaikum Sir Naresh Kumar!%0A*New Admission Inquiry - High Tech Coaching Center Mithi*%0A%0A*Student Name:* ${formData.name}%0A*Class:* ${formData.studentClass}%0A*Phone:* ${formData.phone}%0A*Note:* ${formData.message || 'Please share batch timings and fee details.'}`;
    window.open(`https://wa.me/923332508463?text=${text}`, '_blank');
  };

  return (
    <section id="admission" className="py-14 sm:py-20 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Official Contact Details */}
          <div>
            <span className="text-blue-700 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mt-2 mb-3">
              Admissions Open for New Session
            </h2>
            <p className="text-slate-600 mb-6 sm:mb-8 text-sm sm:text-base">
              Visit our campus in Mithi or send your details directly to our administration via WhatsApp for quick registration.
            </p>

            <div className="space-y-4 sm:space-y-6 bg-slate-50 p-5 sm:p-8 rounded-2xl border border-slate-200">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="bg-blue-50 border border-blue-100 p-2.5 sm:p-3 rounded-xl text-blue-700 shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Campus Address</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Balani Siraan Colony (Beside Marvi Grammar High School, Khatri/Lohana Mohalla), Mithi, Tharparkar
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="bg-blue-50 border border-blue-100 p-2.5 sm:p-3 rounded-xl text-blue-700 shrink-0">
                  <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Director / Contact Person</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">Sir Naresh Kumar</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="bg-blue-50 border border-blue-100 p-2.5 sm:p-3 rounded-xl text-blue-700 shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Phone &amp; WhatsApp</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">+92 333 2508463</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="bg-blue-50 border border-blue-100 p-2.5 sm:p-3 rounded-xl text-blue-700 shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Email</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 break-all">hightech8@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Admission Form */}
          <div className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-sm border border-slate-200">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5 sm:mb-6">
              Quick Admission Form
            </h3>
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                  Student Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter student name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                  Select Class / Program
                </label>
                <select
                  value={formData.studentClass}
                  onChange={(e) => setFormData({ ...formData, studentClass: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none bg-white transition"
                >
                  <option>Class IX (Matric Science)</option>
                  <option>Class X (Matric Science)</option>
                  <option>Class XI (Pre-Engineering)</option>
                  <option>Class XI (Pre-Medical)</option>
                  <option>Class XII (Pre-Engineering)</option>
                  <option>Class XII (Pre-Medical)</option>
                  <option>Summer English Classes</option>
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="03XX-XXXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                  Message (Optional)
                </label>
                <textarea
                  rows="3"
                  placeholder="Ask about batch timings, fee structure, or grand tests..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold py-3.5 sm:py-4 rounded-xl text-sm sm:text-base transition shadow-sm cursor-pointer"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                Send Inquiry on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAdmission;