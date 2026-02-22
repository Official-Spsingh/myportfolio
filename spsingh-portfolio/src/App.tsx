
import React, { useState, useEffect } from 'react';
import {
  Menu, X, Mail, Phone, ExternalLink, Download,
  ChevronRight, Briefcase, GraduationCap, Code2, Layers, Heart, Send,
  Laptop, Server, Database, Cloud, Terminal, Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CAREER_HISTORY, EDUCATION, PROJECTS, SKILLS, SOCIAL_LINKS, PROFILE_IMAGE, RESUME } from './constants';
import axios from 'axios';
import AIChat from './AIChat';



const SocialIcon = ({ href, children, label }: { href: string; children: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-3 bg-[#2a2a2a] border border-[#3d3d3d] rounded-xl text-zinc-400 hover:text-[#D97767] hover:border-[#D97767]/50 hover:bg-[#333] transition-all active:scale-95 flex items-center justify-center group"
  >
    <span className="w-6 h-6 flex items-center justify-center">
      {children}
    </span>
  </a>
);

const LinkedInIcon = () => (
  <svg viewBox="64 64 896 896" fill="currentColor" className="w-5 h-5">
    <path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 10-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="64 64 896 896" fill="currentColor" className="w-5 h-5">
    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="64 64 896 896" fill="currentColor" className="w-5 h-5">
    <path d="M960 509.2c0-2.2 0-4.7-.1-7.6-.1-8.1-.3-17.2-.5-26.9-.8-27.9-2.2-55.7-4.4-81.9-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 00-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2-37.1-1.4-76.8-2.3-116.5-2.8-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4-39.7.5-79.4 1.4-116.5 2.8-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0082.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9-.3 9.7-.4 18.8-.5 26.9 0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6.1 8.1.3 17.2.5 26.9.8 27.9 2.2 55.7 4.4 81.9 3 36.1 7.4 66.2 13.4 88.8 12.8 47.9 50.4 85.7 98.3 98.5 28.2 7.6 83.7 12.3 161.7 15.2 37.1 1.4 76.8 2.3 116.5 2.8 13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4 39.7-.5 79.4-1.4 116.5-2.8 78-3 133.5-7.7 161.7-15.2 47.9-12.8 85.5-50.5 98.3-98.5 6.1-22.6 10.4-52.7 13.4-88.8 2.2-26.2 3.6-54 4.4-81.9.3-9.7.4-18.8.5-26.9 0-2.9.1-5.4.1-7.6v-5.6zm-72 5.2c0 2.1 0 4.4-.1 7.1-.1 7.8-.3 16.4-.5 25.7-.7 26.6-2.1 53.2-4.2 77.9-2.7 32.2-6.5 58.6-11.2 76.3-6.2 23.1-24.4 41.4-47.4 47.5-21 5.6-73.9 10.1-145.8 12.8-36.4 1.4-75.6 2.3-114.7 2.8-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8-71.9-2.8-124.9-7.2-145.8-12.8-23-6.2-41.2-24.4-47.4-47.5-4.7-17.7-8.5-44.1-11.2-76.3-2.1-24.7-3.4-51.3-4.2-77.9-.3-9.3-.4-18-.5-25.7 0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1.1-7.8.3-16.4.5-25.7.7-26.6 2.1-53.2 4.2-77.9 2.7-32.2 6.5-58.6 11.2-76.3 6.2-23.1 24.4-41.4 47.4-47.5 21-5.6 73.9-10.1 145.8-12.8 36.4-1.4 75.6-2.3 114.7-2.8 13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8 71.9 2.8 124.9 7.2 145.8 12.8 23 6.2 41.2 24.4 47.4 47.5 4.7 17.7 8.5-44.1-11.2-76.3-2.1-24.7-3.4-51.3-4.2-77.9.3-9.3-.4-18 .5-25.7 0-2.7.1-5.1.1-7.1v4.8zM423 646l232-135-232-133z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="64 64 896 896" fill="currentColor" className="w-5 h-5">
    <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-73 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
  </svg>
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

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [msg, setmessage] = useState('')
  const [loading, setloading] = useState(false)
  const [sent, setSent] = useState(false)
  const sendMessage = () => {
    setloading(true)
    if (name.length && email.length && msg.length) {
      let obj = {
        "name": name,
        "email": email,
        "message": msg
      }
      axios.post('https://spsinghapi.herokuapp.com/addData', obj).then(res => {
        if (res.status == 200) {
          setname('')
          setemail('')
          setmessage('')
          setloading(false)
          setSent(true)
          setTimeout(() => {
            setSent(false)
          }, 2000);
        }
        else {
          setname('')
          setemail('')
          setmessage('')
          setloading(false)
        }

      })
        .catch(err => {
          setname('')
          setemail('')
          setmessage('')
          setloading(false)
        })
    }
    else {
      setloading(false)
    }
  }
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Career', href: '#career' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5E8D8] selection:bg-[#D97767]/30">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#3d3d3d]/50 py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-2xl md:text-3xl font-black tracking-tighter hover:text-[#D97767] transition-colors">
            <span className="text-[#D97767]">sp</span>singh<span className="text-[#B5935B]">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <div className="h-6 w-px bg-zinc-900 mx-2"></div>
            <div className="flex items-center space-x-3">
              <SocialIcon href={SOCIAL_LINKS.linkedin} label="LinkedIn"><LinkedInIcon /></SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.github} label="GitHub"><GithubIcon /></SocialIcon>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-zinc-400 p-2 hover:bg-[#2a2a2a] rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-3xl font-bold text-zinc-400 hover:text-white transition-all transform hover:scale-110"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-4 px-6">
              <SocialIcon href={SOCIAL_LINKS.linkedin} label="LinkedIn"><LinkedInIcon /></SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.github} label="GitHub"><GithubIcon /></SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.youtube} label="YouTube"><YoutubeIcon /></SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.instagram} label="Instagram"><InstagramIcon /></SocialIcon>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center pt-24 pb-12 px-6 relative overflow-hidden">
          <div className="absolute top-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#D97767]/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 left-0 w-48 md:w-72 h-48 md:h-72 bg-[#B5935B]/10 rounded-full blur-[60px] md:blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>

          <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="z-10 text-center lg:text-left"
            >
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#D97767]/10 border border-[#D97767]/20 text-[#D97767] font-mono text-xs font-semibold tracking-wider uppercase">
                Technical Lead & Full Stack Engineer
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight mb-6 tracking-tight">
                Shubham <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97767] via-[#B5935B] to-[#D97767] drop-shadow-[0_0_30px_rgba(255,111,97,0.2)]">Pratap Singh</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                6+ years of mastery in MERN Stack. Architecting scalable digital ecosystems and leading high-performance engineering teams.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
                <a href='tel:+91 7067350842' className="flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#D97767] to-[#BC5D4E] hover:from-[#BC5D4E] hover:to-[#D97767] text-white rounded-xl font-bold transition-all shadow-xl shadow-[#D97767]/30 group active:scale-95">
                  <span>Let's Talk</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={RESUME} download='Shubham Pratap Singh Resume' className="flex items-center justify-center space-x-2 px-8 py-4 bg-[#1a1a1a]/80 backdrop-blur-md border border-white/5 hover:bg-[#252525] rounded-xl font-bold transition-all active:scale-95 text-[#F5E8D8] shadow-lg">
                  <Download size={18} />
                  <span>Download CV</span>
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4">
                <span className="hidden sm:inline-block text-sm font-bold text-zinc-500 uppercase tracking-widest mr-2">Follow Me</span>
                <SocialIcon href={SOCIAL_LINKS.linkedin} label="LinkedIn"><LinkedInIcon /></SocialIcon>
                <SocialIcon href={SOCIAL_LINKS.github} label="GitHub"><GithubIcon /></SocialIcon>
                <SocialIcon href={SOCIAL_LINKS.youtube} label="YouTube"><YoutubeIcon /></SocialIcon>
                <SocialIcon href={SOCIAL_LINKS.instagram} label="Instagram"><InstagramIcon /></SocialIcon>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative z-10 w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[450px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#D97767]/30 to-[#B5935B]/20 rounded-[1.5rem] sm:rounded-[2.5rem] rotate-6 scale-105 blur-3xl -z-10 group-hover:rotate-12 transition-transform duration-1000"></div>
                <div className="aspect-square rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border-4 border-[#1a1a1a] shadow-2xl relative">
                  <img
                    src={PROFILE_IMAGE}
                    alt="Shubham Pratap Singh"
                    width="450"
                    height="450"
                    decoding="async"
                    loading="eager"
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#D97767]/10 mix-blend-overlay"></div>
                </div>
                {/* Float tags */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 p-4 sm:p-6 bg-[#0A0A0A]/90 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-[#3d3d3d] shadow-xl hidden sm:block">
                  <div className="text-xl sm:text-2xl font-bold text-[#D97767]">6+ Years</div>
                  <div className="text-[10px] sm:text-xs text-zinc-500 uppercase font-bold tracking-widest">Industry Experience</div>
                </div>
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 p-4 sm:p-6 bg-[#0A0A0A]/90 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-[#3d3d3d] shadow-xl hidden sm:block">
                  <div className="text-xl sm:text-2xl font-bold text-[#B5935B]">Lumenore</div>
                  <div className="text-[10px] sm:text-xs text-zinc-500 uppercase font-bold tracking-widest">Tech Lead</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-24 px-6 bg-[#2a2a2a]/40">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
              <div className="h-1.5 w-12 bg-[#D97767] rounded-full mb-4"></div>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.2em] text-[#B5935B]">The Story So Far</h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start"
            >
              <div className="lg:col-span-3">
                <p className="text-xl md:text-3xl text-[#F5E8D8] leading-relaxed font-medium mb-12">
                  "Full Stack Engineer and Technical Lead with 6+ years of experience specializing in the <span className="text-[#D97767]">MERN stack</span>. Skilled in React.js, Node.js, JavaScript, and modern web technologies. Proven expertise in designing <span className="text-[#B5935B]">scalable architectures</span>, leading teams, and building high-performance micro-frontend applications."
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-zinc-400 font-bold uppercase text-xs tracking-widest mb-3">Location</h3>
                    <p className="text-lg font-bold">Bhopal, India</p>
                  </div>
                  <div>
                    <h3 className="text-zinc-400 font-bold uppercase text-xs tracking-widest mb-3">Specialty</h3>
                    <p className="text-lg font-bold">MERN Stack & Micro Frontends</p>
                  </div>
                  <div>
                    <h3 className="text-zinc-400 font-bold uppercase text-xs tracking-widest mb-3">Leadership</h3>
                    <p className="text-lg font-bold">Technical Team Lead</p>
                  </div>
                  <div>
                    <h3 className="text-zinc-400 font-bold uppercase text-xs tracking-widest mb-3">Interests</h3>
                    <p className="text-lg font-bold">System Design & AI</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div className="p-6 md:p-8 bg-[#1a1a1a]/60 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/5 hover:border-[#D97767]/30 transition-all shadow-2xl">
                  <div className="text-4xl md:text-5xl font-black text-[#D97767] mb-2 drop-shadow-[0_0_15px_rgba(255,111,97,0.3)]">6+</div>
                  <div className="text-xs md:text-sm font-bold text-zinc-400 uppercase tracking-widest">Years of Excellence</div>
                </div>
                <div className="p-6 md:p-8 bg-[#1a1a1a]/60 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/5 hover:border-[#B5935B]/30 transition-all shadow-2xl">
                  <div className="text-4xl md:text-5xl font-black text-[#B5935B] mb-2 drop-shadow-[0_0_15px_rgba(218,165,32,0.3)]">2+</div>
                  <div className="text-xs md:text-sm font-bold text-zinc-400 uppercase tracking-widest">Enterprise-grade, AI Driven Products</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Career Section */}
        <section id="career" className="py-20 md:py-24 px-6 relative">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
              {/* Experience */}
              <div className="flex-[3]">
                <div className="flex items-center space-x-4 mb-10 md:mb-12">
                  <div className="p-3 bg-[#D97767]/10 rounded-xl text-[#D97767]">
                    <Briefcase size={28} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Professional Journey</h3>
                </div>
                <div className="space-y-12 border-l border-[#3d3d3d] ml-4 pl-8 md:pl-10 relative">
                  {CAREER_HISTORY.map((exp, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group relative"
                    >
                      <div className="absolute -left-[37px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#0A0A0A] border border-[#3d3d3d] group-hover:border-[#D97767] transition-colors"></div>
                      <div className="inline-block px-3 py-1 rounded bg-[#D97767]/10 text-[#D97767] text-xs font-mono font-bold mb-3">{exp.period}</div>
                      <h4 className="text-xl md:text-2xl font-bold text-[#F5E8D8] mb-1">{exp.role}</h4>
                      <div className="text-base md:text-lg text-zinc-400 font-medium mb-2">{exp.company}</div>
                      <p className="text-xs md:text-sm text-zinc-500 uppercase tracking-widest font-bold">{exp.department}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="flex-[2]">
                <div className="flex items-center space-x-4 mb-10 md:mb-12">
                  <div className="p-3 bg-[#B5935B]/5 rounded-xl text-[#B5935B]">
                    <GraduationCap size={28} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Academics</h3>
                </div>
                <div className="space-y-12 border-l border-[#3d3d3d] ml-4 pl-8 md:pl-10 relative">
                  {EDUCATION.map((edu, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group relative"
                    >
                      <div className="absolute -left-[37px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#0A0A0A] border border-[#3d3d3d] group-hover:border-[#B5935B] transition-colors"></div>
                      <div className="inline-block px-3 py-1 rounded bg-[#B5935B]/5 text-[#B5935B] text-xs font-mono font-bold mb-3">{edu.period}</div>
                      <h4 className="text-lg md:text-xl font-bold text-[#F5E8D8] mb-1">{edu.degree}</h4>
                      <div className="text-zinc-400 mb-1 text-sm md:text-base">{edu.institution}</div>
                      <div className="text-xs md:text-sm text-zinc-500 mb-3">{edu.location}</div>
                      <div className="text-sm font-black text-[#D97767]">{edu.score}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 md:py-24 px-6 bg-[#0A0A0A]">
          <div className="container mx-auto">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-black mb-4">The <span className="text-[#D97767]">Tech Stack</span></h2>
              <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs">Skills categorized by domain expertise</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILLS.map((category, idx) => {
                const getCategoryIcon = (title: string) => {
                  switch (title) {
                    case 'Frontend': return <Laptop size={24} />;
                    case 'Backend': return <Server size={24} />;
                    case 'Database': return <Database size={24} />;
                    case 'Architecture': return <Layers size={24} />;
                    case 'Cloud & Devops': return <Cloud size={24} />;
                    case 'Others': return <Terminal size={24} />;
                    case 'Soft Skills': return <Users size={24} />;
                    default: return <Code2 size={24} />;
                  }
                };

                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 bg-[#1a1a1a] border border-[#3d3d3d] rounded-[2rem] hover:border-[#D97767]/30 transition-all group"
                  >
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="p-3 bg-[#D97767]/10 rounded-xl text-[#D97767] group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,111,97,0.1)]">
                        {getCategoryIcon(category.title)}
                      </div>
                      <h3 className="text-xl font-bold text-[#F5E8D8]">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map(skill => (
                        <span key={skill} className="px-3 py-1.5 bg-white/[0.03] backdrop-blur-md border border-white/[0.05] rounded-lg text-xs font-bold text-zinc-400 group-hover:text-[#F5E8D8] group-hover:bg-[#D97767]/10 transition-all duration-300">{skill}</span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-24 px-6 relative">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">Built to <span className="text-[#D97767]">Scale</span></h2>
                <p className="text-zinc-400 max-w-xl text-base md:text-lg leading-relaxed font-medium italic">"A curated collection of projects where architecture meets performance and design."</p>
              </div>
              <a href="https://github.com/Official-Spsingh?tab=repositories" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[#D97767] hover:text-[#BC5D4E] font-black border-b border-[#D97767]/20 pb-2 transition-all group">
                <span>Explore Ecosystem</span>
                <ExternalLink size={20} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {PROJECTS.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-[#2a2a2a] rounded-3xl overflow-hidden border border-[#3d3d3d] hover:border-[#D97767]/30 transition-all flex flex-col"
                >
                  <div className="relative h-60 md:h-72 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      width="600"
                      height="400"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#0A0A0A]/60 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm flex items-center justify-center p-8">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient-to-r from-[#F5E8D8] to-white text-[#0A0A0A] rounded-xl font-bold flex items-center space-x-2 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                        <span>Explore</span>
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <div className="p-8 md:p-10 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-[#D97767] py-1 px-3 bg-[#D97767]/5 backdrop-blur-md rounded-full border border-[#D97767]/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 group-hover:text-[#D97767] transition-colors tracking-tight">{project.title}</h3>
                    <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-8 flex-1">{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-xs md:text-sm font-black text-zinc-400 hover:text-[#F5E8D8] transition-all group/link uppercase tracking-widest">
                      <span>Explore</span>
                      <ChevronRight size={18} className="group-hover/link:translate-x-2 transition-transform text-[#D97767]" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-[#D97767] rounded-3xl sm:rounded-[3.5rem] p-1 shadow-2xl shadow-[#D97767]/20 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D97767] to-[#B5935B] group-hover:rotate-180 transition-all duration-1000"></div>

              <div className="bg-[#0A0A0A] rounded-[1.4rem] sm:rounded-[3.4rem] p-6 sm:p-12 md:p-16 lg:p-20 relative z-10 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D97767]/5 rounded-full blur-3xl"></div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                  <div className="z-10 text-center lg:text-left">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-none">Let's <br /><span className="text-[#B5935B]">Connect.</span></h2>
                    <p className="text-zinc-400 text-lg md:text-xl mb-10 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
                      Discussing product engineering, high-performance web systems, or leadership opportunities? Drop a message.
                    </p>

                    <div className="space-y-6 md:space-y-8 max-w-md mx-auto lg:mx-0">
                      <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-5 text-center sm:text-left">
                        <div className="p-3 md:p-4 bg-[#1a1a1a] rounded-2xl text-[#D97767] border border-[#3d3d3d]">
                          <Mail size={24} className="md:w-[26px] md:h-[26px]" />
                        </div>
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-black mb-1">Email Me</div>
                          <a href="mailto:shubhampratpsingh@gmail.com" className="text-base sm:text-lg md:text-xl font-bold hover:text-[#D97767] transition-colors break-all">shubhampratpsingh@gmail.com</a>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-5 text-center sm:text-left">
                        <div className="p-3 md:p-4 bg-[#1a1a1a] rounded-2xl text-[#B5935B] border border-[#3d3d3d]">
                          <Phone size={24} className="md:w-[26px] md:h-[26px]" />
                        </div>
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-black mb-1">Call Me</div>
                          <a href="tel:+91 7067350842" className="text-base sm:text-lg md:text-xl font-bold hover:text-[#D97767] transition-colors">+91-7067350842</a>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12 md:mt-16 text-center lg:text-left">
                      <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-black mb-6">Social Footprint</div>
                      <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 sm:scale-110 sm:origin-left">
                        <SocialIcon href={SOCIAL_LINKS.linkedin} label="LinkedIn"><LinkedInIcon /></SocialIcon>
                        <SocialIcon href={SOCIAL_LINKS.github} label="GitHub"><GithubIcon /></SocialIcon>
                        <SocialIcon href={SOCIAL_LINKS.youtube} label="YouTube"><YoutubeIcon /></SocialIcon>
                        <SocialIcon href={SOCIAL_LINKS.instagram} label="Instagram"><InstagramIcon /></SocialIcon>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 w-full max-w-xl mx-auto">
                    <form className="space-y-6 sm:space-y-8 bg-[#1a1a1a]/50 p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-[2.5rem] border border-[#D97767]/30 backdrop-blur-sm shadow-xl" onSubmit={(e) => e.preventDefault()}>
                      <div className="space-y-5 sm:space-y-6">
                        <div className="relative group/input">
                          <label htmlFor="fullname" className="block text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2 sm:mb-3 ml-1 group-focus-within/input:text-[#D97767] transition-colors">Full Name</label>
                          <input id="fullname" value={name} onChange={(e: any) => setname(e.target.value)} type="text" className="w-full bg-[#0A0A0A] border border-[#D97767]/20 rounded-xl sm:rounded-2xl py-3 sm:py-4 px-5 sm:px-6 text-[#F5E8D8] text-sm sm:text-base focus:outline-none focus:border-[#D97767] transition-all font-semibold" placeholder="Shubham Pratap Singh" />
                        </div>
                        <div className="relative group/input">
                          <label htmlFor="email" className="block text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2 sm:mb-3 ml-1 group-focus-within/input:text-[#D97767] transition-colors">E-mail</label>
                          <input id="email" value={email} onChange={(e: any) => setemail(e.target.value)} type="email" className="w-full bg-[#0A0A0A] border border-[#D97767]/20 rounded-xl sm:rounded-2xl py-3 sm:py-4 px-5 sm:px-6 text-[#F5E8D8] text-sm sm:text-base focus:outline-none focus:border-[#D97767] transition-all font-semibold" placeholder="shubham@example.com" />
                        </div>
                        <div className="relative group/input">
                          <label htmlFor="message" className="block text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2 sm:mb-3 ml-1 group-focus-within/input:text-[#D97767] transition-colors">Message</label>
                          <textarea id="message" value={msg} onChange={(e: any) => setmessage(e.target.value)} className="w-full bg-[#0A0A0A] border border-[#D97767]/20 rounded-xl sm:rounded-2xl py-3 sm:py-4 px-5 sm:px-6 text-[#F5E8D8] text-sm sm:text-base focus:outline-none focus:border-[#D97767] transition-all font-semibold min-h-[120px] sm:min-h-[160px] resize-none" placeholder="Let's build something epic..."></textarea>
                        </div>
                      </div>
                      <button onClick={(loading || sent) ? () => { } : sendMessage} type="submit" className="w-full py-4 sm:py-5 bg-[#D97767] hover:bg-[#BC5D4E] text-white font-black rounded-xl sm:rounded-2xl flex items-center justify-center space-x-3 transition-all active:scale-[0.98] shadow-2xl shadow-[#D97767]/20 uppercase tracking-[0.2em] text-xs sm:text-sm">
                        <span>{loading ? 'Sending...' : sent ? 'Sent!' : 'Send Transmission'}</span>
                        <Send size={18} className="transform rotate-12" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 md:py-16 px-6 relative border-t border-[#3d3d3d]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex flex-col items-center md:items-start gap-4">
              <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-2xl md:text-3xl font-black tracking-tighter hover:text-[#D97767] transition-colors">
                <span className="text-[#D97767]">sp</span>singh<span className="text-[#B5935B]">.</span>
              </a>
              <p className="text-zinc-500 text-[10px] md:text-sm font-bold max-w-xs text-center md:text-left uppercase tracking-widest">Architecting High Performance Systems.</p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center space-x-4 sm:space-x-6">
                <SocialIcon href={SOCIAL_LINKS.linkedin} label="LinkedIn"><LinkedInIcon /></SocialIcon>
                <SocialIcon href={SOCIAL_LINKS.github} label="GitHub"><GithubIcon /></SocialIcon>
                <SocialIcon href={SOCIAL_LINKS.youtube} label="YouTube"><YoutubeIcon /></SocialIcon>
                <SocialIcon href={SOCIAL_LINKS.instagram} label="Instagram"><InstagramIcon /></SocialIcon>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-600">
                <a href="#" className="hover:text-[#D97767] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#D97767] transition-colors">Terms & Conditions</a>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-500">&copy; {new Date().getFullYear()} SPSINGH</div>
              <div className="flex items-center space-x-2 text-zinc-400 text-xs md:text-sm font-bold">
                <span>Handcrafted with</span>
                <Heart size={16} className="text-[#D97767] fill-[#D97767] animate-pulse" />
                <span>by Shubham</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <AIChat />
    </div >
  );
};

export default App;
