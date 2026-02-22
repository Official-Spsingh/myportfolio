import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NotFound: React.FC = () => {
    const [lines, setLines] = useState<string[]>([]);
    const [isRebooting, setIsRebooting] = useState(false);

    const terminalLines = [
        "> INITIALIZING SYSTEM RECOVERY...",
        "> ERROR CODE: 404_PAGE_NOT_FOUND",
        "> FAULT ADDR: 0x000F8A2B",
        "> ATTEMPTING TO LOCATE MISSING PACKETS...",
        "> SCANNING NODE: /HOME...",
        "> SCANNING NODE: /PROJECTS...",
        "> CRITICAL FAILURE: SOURCE NOT FOUND.",
        "> RECOMMENDATION: SYSTEM REBOOT."
    ];

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < terminalLines.length) {
                setLines(prev => [...prev, terminalLines[i]]);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 300);
        return () => clearInterval(interval);
    }, []);

    const handleReboot = () => {
        setIsRebooting(true);
        setTimeout(() => {
            window.location.href = '/';
        }, 1500);
    };

    return (
        <div className="fixed inset-0 bg-[#0A0A0A] flex items-center justify-center z-[1000] p-6 font-mono">
            <AnimatePresence>
                {isRebooting && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-white z-[1001] flex items-center justify-center"
                    >
                        <h2 className="text-[#0A0A0A] text-4xl font-black">REBOOTING...</h2>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="w-full max-w-2xl bg-[#141414] border border-[#3d3d3d] rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-[#1f1f1f] px-4 py-2 border-b border-[#3d3d3d] flex items-center justify-between">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">System Console</span>
                </div>
                <div className="p-8 space-y-4 min-h-[400px]">
                    <div className="space-y-2">
                        {lines.map((line, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className={`text-sm md:text-base font-mono ${line?.includes('ERROR') ? 'text-[#ff5f56]' : line?.includes('FAILURE') ? 'text-[#ffbd2e]' : 'text-zinc-400'}`}
                            >
                                {line}
                                {idx === lines.length - 1 && lines.length < terminalLines.length && (
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.8 }}
                                        className="inline-block w-2 h-5 bg-[#D97767] ml-1 align-middle"
                                    />
                                )}
                            </motion.div>
                        ))}
                        {lines.length === terminalLines.length && (
                            <div className="flex items-center text-zinc-400 text-sm md:text-base">
                                <span className="mr-2">&gt;</span>
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    className="inline-block w-2 h-5 bg-[#D97767] align-middle"
                                />
                            </div>
                        )}
                    </div>

                    {lines.length === terminalLines.length && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <button
                                onClick={handleReboot}
                                className="mt-8 px-8 py-3 bg-[#D97767] text-white rounded-lg font-bold hover:bg-[#BC5D4E] transition-all flex items-center space-x-2 active:scale-95 shadow-lg shadow-[#D97767]/20"
                            >
                                <span>REBOOT SYSTEM</span>
                            </button>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NotFound;
