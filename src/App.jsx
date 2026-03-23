import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import GDzPage from './pages/GDzPage';
import GEzPage from './pages/GEzPage';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <div className="bg-orb orb-purple"></div>
      <div className="bg-orb orb-blue"></div>
      <div className="bg-orb orb-pink"></div>

      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gdz" element={<GDzPage />} />
        <Route path="/gez" element={<GEzPage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      
      <Footer />
    </>
  );
}

export default App;
