import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import axios from 'axios';
import confetti from 'canvas-confetti';
import { SOCIAL_LINKS, CONTACT_INFO } from '../constants';
import { SocialIcon, LinkedInIcon, GithubIcon, YoutubeIcon, InstagramIcon } from './Shared';

const Contact: React.FC = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [msg, setmessage] = useState('');
    const [loading, setloading] = useState(false);
    const [sent, setSent] = useState(false);

    const sendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        setloading(true);
        if (name.length && email.length && msg.length) {
            let obj = {
                "name": name,
                "email": email,
                "message": msg
            };
            axios.post('https://spsinghapi.herokuapp.com/addData', obj).then(res => {
                if (res.status === 200) {
                    setname('');
                    setemail('');
                    setmessage('');
                    setloading(false);
                    setSent(true);
                    confetti({
                        particleCount: 150,
                        spread: 70,
                        origin: { y: 0.6 },
                        colors: ['#D97767', '#B5935B', '#ffffff']
                    });
                    setTimeout(() => {
                        setSent(false);
                    }, 2000);
                } else {
                    setloading(false);
                }
            })
                .catch(err => {
                    console.error(err);
                    setname('');
                    setemail('');
                    setmessage('');
                    setloading(false);
                    setSent(true);
                    confetti({
                        particleCount: 150,
                        spread: 70,
                        origin: { y: 0.6 },
                        colors: ['#D97767', '#B5935B', '#ffffff']
                    });
                    setTimeout(() => {
                        setSent(false);
                    }, 2000);
                });
        } else {
            setloading(false);
        }
    };

    return (
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
                                            <a href={`mailto:${CONTACT_INFO.email}`} className="text-base sm:text-lg md:text-xl font-bold hover:text-[#D97767] transition-colors break-all">{CONTACT_INFO.email}</a>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-5 text-center sm:text-left">
                                        <div className="p-3 md:p-4 bg-[#1a1a1a] rounded-2xl text-[#B5935B] border border-[#3d3d3d]">
                                            <Phone size={24} className="md:w-[26px] md:h-[26px]" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-black mb-1">Call Me</div>
                                            <a href={`tel:${CONTACT_INFO.phone}`} className="text-base sm:text-lg md:text-xl font-bold hover:text-[#D97767] transition-colors">{CONTACT_INFO.phone}</a>
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
                                <form className="space-y-6 sm:space-y-8 bg-[#1a1a1a]/50 p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-[2.5rem] border border-[#D97767]/30 backdrop-blur-sm shadow-xl" onSubmit={sendMessage}>
                                    <div className="space-y-5 sm:space-y-6">
                                        <div className="relative group/input">
                                            <label htmlFor="fullname" className="block text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2 sm:mb-3 ml-1 group-focus-within/input:text-[#D97767] transition-colors">Full Name</label>
                                            <input id="fullname" value={name} onChange={(e: any) => setname(e.target.value)} type="text" className="w-full bg-[#0A0A0A] border border-[#D97767]/20 rounded-xl sm:rounded-2xl py-3 sm:py-4 px-5 sm:px-6 text-[#F5E8D8] text-sm sm:text-base focus:outline-none focus:border-[#D97767] transition-all font-semibold" placeholder="John Doe" required />
                                        </div>
                                        <div className="relative group/input">
                                            <label htmlFor="email" className="block text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2 sm:mb-3 ml-1 group-focus-within/input:text-[#D97767] transition-colors">E-mail</label>
                                            <input id="email" value={email} onChange={(e: any) => setemail(e.target.value)} type="email" className="w-full bg-[#0A0A0A] border border-[#D97767]/20 rounded-xl sm:rounded-2xl py-3 sm:py-4 px-5 sm:px-6 text-[#F5E8D8] text-sm sm:text-base focus:outline-none focus:border-[#D97767] transition-all font-semibold" placeholder="johndoe@mail.com" required />
                                        </div>
                                        <div className="relative group/input">
                                            <label htmlFor="message" className="block text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2 sm:mb-3 ml-1 group-focus-within/input:text-[#D97767] transition-colors">Message</label>
                                            <textarea id="message" value={msg} onChange={(e: any) => setmessage(e.target.value)} className="w-full bg-[#0A0A0A] border border-[#D97767]/20 rounded-xl sm:rounded-2xl py-3 sm:py-4 px-5 sm:px-6 text-[#F5E8D8] text-sm sm:text-base focus:outline-none focus:border-[#D97767] transition-all font-semibold min-h-[120px] sm:min-h-[160px] resize-none" placeholder="Let's build something epic..." required></textarea>
                                        </div>
                                    </div>
                                    <button disabled={loading || sent} type="submit" className="w-full py-4 sm:py-5 bg-[#D97767] hover:bg-[#BC5D4E] text-white font-black rounded-xl sm:rounded-2xl flex items-center justify-center space-x-3 transition-all active:scale-[0.98] shadow-2xl shadow-[#D97767]/20 uppercase tracking-[0.2em] text-xs sm:text-sm">
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
    );
};

export default Contact;
