import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Programs from './components/Programs';
import Faculty from './components/Faculty';
import GalleryPreview from './components/GalleryPreview';
import FullGalleryPage from './components/FullGalleryPage';
import ContactAdmission from './components/ContactAdmission';
import Footer from './components/Footer';

function App() {
  const [showFullGallery, setShowFullGallery] = useState(false);

  const handleNavigateSection = (sectionId) => {
    setShowFullGallery(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (showFullGallery) {
    return (
      <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
        <FullGalleryPage
          onBackHome={() => setShowFullGallery(false)}
          onNavigateSection={handleNavigateSection}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Programs />
      <Faculty />
      <GalleryPreview onOpenFullGallery={() => setShowFullGallery(true)} />
      <ContactAdmission />
      <Footer onNavigateSection={handleNavigateSection} />
    </div>
  );
}

export default App;