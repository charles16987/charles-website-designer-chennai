import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Youtube, ExternalLink } from 'lucide-react';
import { SERVICES, AREAS } from '@/src/data/websiteData';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient rounded-lg flex items-center justify-center font-bold text-dark-bg text-xl">
              C
            </div>
            <span className="font-display font-bold text-2xl">Charles</span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            Premium web design and SEO agency in Chennai. We build high-performance websites that help Chennai businesses grow and dominate local search results.
          </p>
          <div className="flex items-center gap-4">
            <SocialIcon icon={<Instagram size={18} />} href="#" />
            <SocialIcon icon={<Facebook size={18} />} href="#" />
            <SocialIcon icon={<Linkedin size={18} />} href="#" />
            <SocialIcon icon={<Youtube size={18} />} href="#" />
          </div>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="font-display font-bold text-xl mb-6 text-white">Services</h4>
          <ul className="space-y-3">
            {SERVICES.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link to={`/services/${service.slug}`} className="text-slate-400 hover:text-primary-yellow text-sm transition-colors">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas Links */}
        <div>
          <h4 className="font-display font-bold text-xl mb-6 text-white">Service Areas</h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            {AREAS.slice(0, 10).map((area) => (
              <Link key={area.id} to={`/areas/${area.slug}`} className="text-slate-400 hover:text-primary-yellow text-xs transition-colors">
                {area.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="font-display font-bold text-xl mb-6 text-white">Contact Us</h4>
          <ul className="space-y-4">
            <ContactItem 
              icon={<Phone className="text-primary-yellow" size={18} />} 
              text="+91 75988 25487" 
              subText="Call for free consultation"
            />
            <ContactItem 
              icon={<Mail className="text-primary-yellow" size={18} />} 
              text="charlescharlie1671998@gmail.com" 
              subText="Direct email support"
            />
            <ContactItem 
              icon={<MapPin className="text-primary-yellow" size={18} />} 
              text=" Chennai, India" 
              subText="Our Main Office"
            />
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-5 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-slate-500 text-xs text-center md:text-left">
          © {new Date().getFullYear()} Charles Web Designer Chennai. All Rights Reserved. 
          <br className="md:hidden" /> Developed for Local SEO Traffic in Chennai.
        </p>
        <div className="flex gap-8">
          <Link to="/privacy" className="text-slate-500 hover:text-white text-xs">Privacy Policy</Link>
          <Link to="/terms" className="text-slate-500 hover:text-white text-xs">Terms of Service</Link>
          <Link to="/sitemap" className="text-slate-500 hover:text-white text-xs">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a 
    href={href} 
    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-primary-yellow hover:text-primary-yellow transition-all"
  >
    {icon}
  </a>
);

const ContactItem = ({ icon, text, subText }: { icon: React.ReactNode; text: string; subText: string }) => (
  <div className="flex gap-3">
    <div className="mt-1">{icon}</div>
    <div>
      <div className="text-white text-sm font-medium">{text}</div>
      <div className="text-slate-500 text-[11px] uppercase tracking-wider">{subText}</div>
    </div>
  </div>
);
