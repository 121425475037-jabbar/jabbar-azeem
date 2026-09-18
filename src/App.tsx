import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { CustomCursor } from './components/CustomCursor';
import { ScrollToTop } from './components/ScrollToTop';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Achievements } from './pages/Achievements';
import { Skills } from './pages/Skills';
import { Education } from './pages/Education';
import { Contact } from './pages/Contact';

// Scroll to top on route change helper
const ScrollToTopOnRoute: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTopOnRoute />
      <div className="relative min-h-screen flex flex-col justify-between text-[#f1f1f5] selection:bg-cyan-500/20 selection:text-cyan-200">
        {/* Ambient Animated Background */}
        <AnimatedBackground />

        {/* Desktop Custom Cursor */}
        <CustomCursor />

        {/* Global Sticky Navigation */}
        <Navbar />

        {/* Main Content View with Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating back-to-top button */}
        <ScrollToTop />
      </div>
    </Router>
  );
}
