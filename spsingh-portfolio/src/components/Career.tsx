import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { CAREER_HISTORY, EDUCATION } from '../constants';

const Career: React.FC = () => {
    return (
        <section id="career" className="py-20 md:py-24 px-6 relative">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
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
    );
};

export default Career;
