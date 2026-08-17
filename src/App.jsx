import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import VideoModal from './components/VideoModal.jsx';

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import FoundersPage from './pages/FoundersPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import CommunityPage from './pages/CommunityPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={setActivePage} setSelectedVideo={setSelectedVideo} />;
      case 'about':
        return <AboutPage setActivePage={setActivePage} />;
      case 'founders':
        return <FoundersPage setActivePage={setActivePage} />;
      case 'services':
        return <ServicesPage setActivePage={setActivePage} />;
      case 'portfolio':
        return <PortfolioPage setSelectedVideo={setSelectedVideo} setActivePage={setActivePage} />;
      case 'community':
        return <CommunityPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setActivePage={setActivePage} setSelectedVideo={setSelectedVideo} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#07080c] text-slate-100 flex flex-col justify-between selection:bg-violet-600/40 selection:text-white relative bg-grid-pattern">
      
      {/* Navbar Header */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer setActivePage={setActivePage} />

      {/* Video Modal Preview */}
      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}

    </div>
  );
}
