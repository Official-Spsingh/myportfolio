import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Server, Database, Layers, Cloud, Terminal, Users, Code2 } from 'lucide-react';
import { SKILLS } from '../constants';

const RADAR_DATA = [
    { subject: 'Frontend', fullMark: 100, A: 98 },
    { subject: 'Backend', fullMark: 100, A: 90 },
    { subject: 'Database', fullMark: 100, A: 88 },
    { subject: 'Architecture', fullMark: 100, A: 88 },
    { subject: 'Cloud', fullMark: 100, A: 80 },
    { subject: 'Leadership', fullMark: 100, A: 95 },
];

const RadarChart: React.FC = () => {
    const center = 150;
    const radius = 100;
    const angleStep = (Math.PI * 2) / RADAR_DATA.length;

    const points = RADAR_DATA.map((d, i) => {
        const x = center + (radius * (d.A / 100)) * Math.cos(i * angleStep - Math.PI / 2);
        const y = center + (radius * (d.A / 100)) * Math.sin(i * angleStep - Math.PI / 2);
        return `${x},${y}`;
    }).join(' ');

    const gridLevels = [0.2, 0.4, 0.6, 0.8, 1];

    return (
        <div className="flex justify-center items-center mb-20 relative">
            <svg width="300" height="300" className="drop-shadow-[0_0_30px_rgba(217,119,103,0.15)]">
                {/* Grid */}
                {gridLevels.map((level) => (
                    <polygon
                        key={level}
                        points={RADAR_DATA.map((_, i) => {
                            const x = center + (radius * level) * Math.cos(i * angleStep - Math.PI / 2);
                            const y = center + (radius * level) * Math.sin(i * angleStep - Math.PI / 2);
                            return `${x},${y}`;
                        }).join(' ')}
                        fill="none"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="1"
                    />
                ))}
                {/* Axis */}
                {RADAR_DATA.map((d, i) => {
                    const x = center + radius * Math.cos(i * angleStep - Math.PI / 2);
                    const y = center + radius * Math.sin(i * angleStep - Math.PI / 2);
                    return (
                        <line
                            key={d.subject}
                            x1={center} y1={center} x2={x} y2={y}
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                        />
                    );
                })}
                {/* Labels */}
                {RADAR_DATA.map((d, i) => {
                    const x = center + (radius + 25) * Math.cos(i * angleStep - Math.PI / 2);
                    const y = center + (radius + 20) * Math.sin(i * angleStep - Math.PI / 2);
                    return (
                        <text
                            key={d.subject}
                            x={x} y={y}
                            textAnchor="middle"
                            className="text-[10px] font-black uppercase tracking-tighter fill-zinc-500"
                        >
                            {d.subject}
                        </text>
                    );
                })}
                {/* Data Area */}
                <motion.polygon
                    points={points}
                    fill="rgba(217,119,103,0.15)"
                    stroke="#D97767"
                    strokeWidth="2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-1 h-1 bg-[#D97767] rounded-full blur-sm animate-pulse" />
            </div>
        </div>
    );
};

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
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-5xl font-black mb-6">Mastery <span className="text-[#D97767]">Radar</span></h2>
                    <p className="text-zinc-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-12">Core Competency Analysis</p>
                    <RadarChart />
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
