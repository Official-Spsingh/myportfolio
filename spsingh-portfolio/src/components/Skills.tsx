import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Server, Database, Layers, Cloud, Terminal, Users, Code2 } from 'lucide-react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
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
        <section id="skills" className="py-20 md:py-24 px-6 bg-[#0A0A0A]">
            <div className="container mx-auto">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">The <span className="text-[#D97767]">Tech Stack</span></h2>
                    <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs">Skills categorized by domain expertise</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SKILLS.map((category, idx) => (
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
