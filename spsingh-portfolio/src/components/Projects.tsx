import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
    const [filter, setFilter] = React.useState('All');
    const categories = ['All', 'ReactJS', 'Typescript', 'Micro-frontend', 'GenAI'];

    const filteredProjects = filter === 'All'
        ? PROJECTS
        : PROJECTS.filter(project => project.tags.includes(filter));

    return (
        <section id="projects" className="py-20 md:py-24 px-6 relative">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">Built to <span className="text-[#D97767]">Scale</span></h2>
                        <p className="text-zinc-400 max-w-xl text-base md:text-lg leading-relaxed font-medium italic">"A curated collection of projects where architecture meets performance and design."</p>
                    </div>
                    <a href="https://github.com/Official-Spsingh?tab=repositories" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[#D97767] hover:text-[#BC5D4E] font-black border-b border-[#D97767]/20 pb-2 transition-all group">
                        <span>Explore Ecosystem</span>
                        <ExternalLink size={20} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </div>

                <div className="flex flex-wrap gap-3 mb-12 md:mb-16">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all border ${filter === cat
                                ? 'bg-[#D97767] border-[#D97767] text-white shadow-lg shadow-[#D97767]/20'
                                : 'bg-[#1a1a1a] border-[#3d3d3d] text-zinc-400 hover:border-[#D97767]/50 hover:text-[#F5E8D8]'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 transition-all">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, idx) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
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
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Projects;
