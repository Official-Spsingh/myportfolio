import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Career from './components/Career';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './AIChat';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import NotFound from './components/NotFound';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';

const SectionWrapper = ({ children, id }: { children: React.ReactNode; id: string }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.section>
);

const MainPortfolio = ({
  isMenuOpen,
  setIsMenuOpen,
  scrolled
}: {
  isMenuOpen: boolean,
  setIsMenuOpen: (v: boolean) => void,
  scrolled: boolean
}) => (
  <>
    <Navbar
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
      scrolled={scrolled}
    />
    <main>
      <SectionWrapper id="home"><Hero /></SectionWrapper>
      <SectionWrapper id="about"><About /></SectionWrapper>
      <SectionWrapper id="career"><Career /></SectionWrapper>
      <SectionWrapper id="skills"><Skills /></SectionWrapper>
      <SectionWrapper id="projects"><Projects /></SectionWrapper>
      <SectionWrapper id="contact"><Contact /></SectionWrapper>
    </main>
    <Footer />
  </>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5E8D8] selection:bg-[#D97767]/30">
      <CustomCursor />
      <ScrollProgress />

      <Routes>
        <Route path="/" element={
          <MainPortfolio
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            scrolled={scrolled}
          />
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <AIChat />
    </div >
  );
};

export default App;
