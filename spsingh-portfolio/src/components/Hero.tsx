import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Download } from 'lucide-react';
import { SOCIAL_LINKS, PROFILE_IMAGE, RESUME, CONTACT_INFO } from '../constants';
import { SocialIcon, LinkedInIcon, GithubIcon, YoutubeIcon, InstagramIcon } from './Shared';
import Magnetic from './Magnetic';

const Hero: React.FC = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section id="home" className="min-h-screen flex items-center pt-24 pb-12 px-6 relative overflow-hidden">
            {/* Parallax Ghost Text */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-20 left-10 text-[10vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none z-0"
            >
                TECHNICAL LEAD
            </motion.div>
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-20 right-10 text-[8vw] font-black text-white/[0.01] whitespace-nowrap pointer-events-none select-none z-0"
            >
                SCALABLE SYSTEMS
            </motion.div>

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
                        <Magnetic>
                            <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#D97767] to-[#BC5D4E] hover:from-[#BC5D4E] hover:to-[#D97767] text-white rounded-xl font-bold transition-all shadow-md shadow-[#D97767]/20 group active:scale-95">
                                <span>Let's Talk</span>
                                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Magnetic>
                        <a href={RESUME} download='Shubham Pratap Singh Resume' className="flex items-center justify-center space-x-2 px-8 py-4 bg-[#1a1a1a]/80 backdrop-blur-md border border-white/5 hover:bg-[#252525] rounded-xl font-bold transition-all active:scale-95 text-[#F5E8D8] shadow-lg">
                            <Download size={18} />
                            <span>Download CV</span>
                        </a>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4">
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
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#D97767]/30 to-[#B5935B]/20 rounded-[1.5rem] sm:rounded-[2.5rem] rotate-6 scale-105 blur-3xl -z-10 transition-transform duration-1000"></div>
                        <motion.div
                            initial={{ opacity: 0, filter: 'blur(20px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="aspect-square rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border-4 border-[#1a1a1a] shadow-2xl relative"
                        >
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
                        </motion.div>
                        <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 p-4 sm:p-6 bg-[#0A0A0A]/90 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-[#3d3d3d] shadow-xl hidden sm:block">
                            <div className="text-xl sm:text-2xl font-bold text-[#D97767]">6+ Years</div>
                            <div className="text-[10px] sm:text-xs text-zinc-500 uppercase font-bold tracking-widest">Industry Experience</div>
                        </div>
                        <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 p-4 sm:p-6 bg-[#0A0A0A]/90 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-[#3d3d3d] shadow-xl hidden sm:block">
                            <div className="text-xl sm:text-2xl font-bold text-[#B5935B]">Lumenore</div>
                            <div className="text-[10px] sm:text-xs text-zinc-500 uppercase font-bold tracking-widest">Technical Lead</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
