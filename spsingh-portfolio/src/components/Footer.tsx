import React from 'react';
import { Heart } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { SocialIcon, LinkedInIcon, GithubIcon, YoutubeIcon, InstagramIcon } from './Shared';

const Footer: React.FC = () => {
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
        }
    };

    return (
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
    );
};

export default Footer;
