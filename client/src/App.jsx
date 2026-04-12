import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import WovenTours from './pages/WovenTours';
import MMGVagamon from './pages/MMGVagamon';
import MMGWayanad from './pages/MMGWayanad';
import MMGKodaikanal from './pages/MMGKodaikanal';

const AnimatedRoutes = () => {
  const location = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/woven-tours" element={<WovenTours />} />
        <Route path="/mmg-vagamon" element={<MMGVagamon />} />
        <Route path="/mmg-wayanad" element={<MMGWayanad />} />
        <Route path="/mmg-kodaikanal" element={<MMGKodaikanal />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-navy text-cream font-body selection:bg-gold/30 selection:text-gold-light">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
