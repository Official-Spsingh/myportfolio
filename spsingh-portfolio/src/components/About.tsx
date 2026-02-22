import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
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
    );
};

export default About;
