import React from 'react';
import { SEO } from '@/src/components/SEO';
import { Section, SectionHeader } from '@/src/components/Section';
import { CheckCircle2, Award, Zap, Heart, MessageSquare, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <SEO 
        title="About Us | Expert Web Design Team in Chennai"
        description="Learn more about Charles Web Designer Chennai. We are a team of dedicated designers and SEO experts helping Chennai businesses succeed online."
      />

      {/* Hero */}
      <Section className="pt-32 bg-slate-900 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              We Craft <br /><span className="text-gradient">Digital Success</span> <br />in Chennai
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed max-w-lg">
              Started as a solo freelancer, Charles has grown into a premier web design hub in Chennai, serving over 15+ local areas and hundreds of businesses.
            </p>
            <div className="flex gap-6">
               <div>
                  <div className="text-4xl font-bold text-white mb-1">8+</div>
                  <div className="text-xs uppercase tracking-widest text-primary-yellow font-bold">Years Experience</div>
               </div>
               <div className="w-px h-12 bg-white/10"></div>
               <div>
                  <div className="text-4xl font-bold text-white mb-1">200+</div>
                  <div className="text-xs uppercase tracking-widest text-primary-yellow font-bold">Projects Done</div>
               </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square glass-card overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                 alt="Our Team" 
                 className="w-full h-full object-cover"
               />
            </div>
            {/* Decal */}
            <div className="absolute -bottom-6 -right-6 bg-gradient p-8 rounded-2xl text-dark-bg font-bold shadow-2xl">
               Trust & Result Based Agency
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-dark-bg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass-card p-12 bg-white/5 border-white/10 hover:border-primary-yellow/20 transition-all">
            <h3 className="text-3xl font-bold mb-6 text-primary-yellow font-display italic">Our Mission</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              To empower Chennai's local businesses with high-end, affordable website designs that don't just look good but rank on the first page of Google. We aim to bridge the digital gap for small shops and startups.
            </p>
          </div>
          <div className="glass-card p-12 bg-white/5 border-white/10 hover:border-primary-orange/20 transition-all">
            <h3 className="text-3xl font-bold mb-6 text-primary-orange font-display italic">Our Vision</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              To become Chennai's #1 destination for 'Hyper-Local SEO' and Conversion-Oriented web design, known for our integrity, technical prowess, and commitment to client business growth.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-slate-900 overflow-hidden relative">
        <SectionHeader 
          title="Why Chennai Businesses Trust Us"
          subtitle="We are not just service providers; we are your growth partners."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <ValueItem icon={<Award />} title="Quality First" desc="We maintain international standards in UI/UX design for every Chennai client." />
           <ValueItem icon={<Zap />} title="Hyper-Fast Delivery" desc="We value your time. Most our standard websites are launched within 15 days." />
           <ValueItem icon={<Shield />} title="Total Security" desc="All our websites are SSL secured and protected against malware and hacks." />
           <ValueItem icon={<Heart />} title="Client Centric" desc="We listen to your specific needs and build tailored solutions for your niche." />
           <ValueItem icon={<MessageSquare />} title="Excellent Support" desc="Post-launch maintenance and support from our Chennai-based core team." />
           <ValueItem icon={<CheckCircle2 />} title="Local SEO Experts" desc="We know Chennai's local search landscape better than anyone else." />
        </div>
      </Section>

      {/* Design Process */}
      <Section className="bg-dark-bg">
        <SectionHeader title="Our Professional Workflow" />
        <div className="space-y-4">
           <StepBar num="01" title="Initial Consultation" desc="We discuss your business, goals, and area-specific competition in Chennai." />
           <StepBar num="02" title="Wireframing & UI Design" desc="Our designers create a visual mockup of your future website." />
           <StepBar num="03" title="Development & SEO" desc="We code the site and integrate all local SEO keywords and meta tags." />
           <StepBar num="04" title="Testing & Launch" desc="Rigorous cross-browser testing before pushing your site live." />
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient text-dark-bg py-24">
         <div className="text-center max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-6xl font-bold">Experience the Charles Difference.</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="bg-dark-bg text-white px-10 py-5 rounded-full font-bold text-xl glow-yellow hover:scale-105 transition-all">
                Let's Talk Business
              </Link>
              <Link to="/portfolio" className="bg-white/20 text-dark-bg px-10 py-5 rounded-full font-bold text-xl hover:bg-white/30 transition-all border border-dark-bg/10">
                Browse Portfolio
              </Link>
            </div>
         </div>
      </Section>
    </>
  );
};

const ValueItem = ({ icon, title, desc }: { icon: React.ReactNode; title: string, desc: string }) => (
  <div className="glass-card p-8 group hover:border-primary-yellow/30 transition-transform hover:-translate-y-2">
    <div className="flex items-center gap-4 mb-6">
       <div className="text-primary-yellow">{React.cloneElement(icon as React.ReactElement, { size: 32 })}</div>
       <h4 className="text-xl font-bold">{title}</h4>
    </div>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const StepBar = ({ num, title, desc }: { num: string; title: string; desc: string }) => (
  <div className="flex gap-6 items-start glass-card p-8 bg-white/5 border-white/5 hover:bg-white/10 transition-colors">
     <div className="text-4xl font-black text-white/10 group-hover:text-primary-yellow font-display">{num}</div>
     <div>
        <h4 className="text-xl font-bold mb-2 text-white">{title}</h4>
        <p className="text-slate-400 text-sm">{desc}</p>
     </div>
  </div>
);

export default About;
