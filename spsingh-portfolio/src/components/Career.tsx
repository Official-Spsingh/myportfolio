import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { CAREER_HISTORY, EDUCATION } from '../constants';

const Career: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="career" ref={sectionRef} className="py-20 md:py-24 px-6 relative">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Experience Column */}
                    <div className="flex-[3]">
                        <div className="flex items-center space-x-4 mb-10 md:mb-12">
                            <div className="p-3 bg-[#D97767]/10 rounded-xl text-[#D97767]">
                                <Briefcase size={28} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold italic tracking-tight">Professional Journey</h3>
                        </div>
                        <div className="space-y-12 ml-4 pl-8 md:pl-12 relative">
                            {/* Vertical Progress Line */}
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#3d3d3d]/30 overflow-hidden">
                                <motion.div
                                    style={{ scaleY, originY: 0 }}
                                    className="absolute inset-0 w-full bg-gradient-to-b from-[#D97767] to-[#BC5D4E] shadow-[0_0_15px_rgba(217,119,103,0.3)]"
                                />
                            </div>

                            {CAREER_HISTORY.map((exp, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative"
                                >
                                    <div className="absolute -left-[37px] md:-left-[53px] top-1.5 w-3 h-3 rounded-full bg-[#0A0A0A] border-2 border-[#3d3d3d] group-hover:border-[#D97767] group-hover:bg-[#D97767] group-hover:scale-125 transition-all z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
                                    <div className="inline-block px-3 py-1 rounded-full bg-[#D97767]/10 text-[#D97767] text-[10px] font-black uppercase tracking-widest mb-4">{exp.period}</div>
                                    <h4 className="text-xl md:text-2xl font-black text-[#F5E8D8] mb-1 group-hover:text-[#D97767] transition-colors">{exp.role}</h4>
                                    <div className="text-base md:text-lg text-zinc-400 font-bold mb-2">{exp.company}</div>
                                    <p className="text-xs md:text-sm text-zinc-500 uppercase tracking-[0.2em] font-black opacity-60">{exp.department}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div className="flex-[2]">
                        <div className="flex items-center space-x-4 mb-10 md:mb-12">
                            <div className="p-3 bg-[#B5935B]/5 rounded-xl text-[#B5935B]">
                                <GraduationCap size={28} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold italic tracking-tight">Academics</h3>
                        </div>
                        <div className="space-y-12 ml-4 pl-8 md:pl-12 relative">
                            {/* Vertical Progress Line */}
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#3d3d3d]/30 overflow-hidden">
                                <motion.div
                                    style={{ scaleY, originY: 0 }}
                                    className="absolute inset-0 w-full bg-gradient-to-b from-[#B5935B] to-[#9A7D4D] shadow-[0_0_15px_rgba(181,147,91,0.2)]"
                                />
                            </div>

                            {EDUCATION.map((edu, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative"
                                >
                                    <div className="absolute -left-[37px] md:-left-[53px] top-1.5 w-3 h-3 rounded-full bg-[#0A0A0A] border-2 border-[#3d3d3d] group-hover:border-[#B5935B] group-hover:bg-[#B5935B] group-hover:scale-125 transition-all z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
                                    <div className="inline-block px-3 py-1 rounded-full bg-[#B5935B]/10 text-[#B5935B] text-[10px] font-black uppercase tracking-widest mb-4">{edu.period}</div>
                                    <h4 className="text-lg md:text-xl font-black text-[#F5E8D8] mb-1 group-hover:text-[#B5935B] transition-colors">{edu.degree}</h4>
                                    <div className="text-zinc-400 font-bold mb-1 text-sm md:text-base">{edu.institution}</div>
                                    <div className="text-xs md:text-sm text-zinc-500 mb-4 opacity-70">{edu.location}</div>
                                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-black text-[#D97767]">
                                        <span>SCORE:</span>
                                        <span className="text-white">{edu.score}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Career;
