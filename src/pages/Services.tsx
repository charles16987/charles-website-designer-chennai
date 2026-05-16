import React from 'react';
import { SEO } from '@/src/components/SEO';
import { Section, SectionHeader } from '@/src/components/Section';
import { SERVICES } from '@/src/data/websiteData';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const Services = () => {
  return (
    <>
      <SEO 
        title="Our Services | Full-Stack Web Solutions in Chennai"
        description="Comprehensive web design and SEO services in Chennai. We offer WordPress, Shopify, Responsive Design, and Local SEO for businesses."
      />

      {/* Hero */}
      <Section className="pt-32 text-center bg-slate-900 border-b border-white/5">
        <h1 className="text-5xl md:text-8xl font-bold mb-8">Our <span className="text-gradient">Services</span></h1>
        <p className="text-slate-400 text-xl max-w-3xl mx-auto">
          We provide a full suite of digital solutions designed to help Chennai businesses grow through strategic design and technical excellence.
        </p>
      </Section>

      {/* Services List */}
      <Section className="bg-dark-bg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES.map((s, idx) => (
            <motion.div 
               key={s.id}
               initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="glass-card p-10 bg-white/5 border-white/5 hover:border-primary-yellow/20 transition-all flex flex-col justify-between group"
            >
               <div>
                  <div className="flex items-center justify-between mb-8">
                     <span className="text-4xl font-black text-white/5 group-hover:text-primary-yellow/10 transition-colors uppercase">Service {idx + 1}</span>
                     <Link to={`/services/${s.slug}`} className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary-yellow group-hover:text-dark-bg transition-all">
                        <ArrowRight size={20} />
                     </Link>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{s.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">{s.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    <BenefitItem text="Custom Design" />
                    <BenefitItem text="SEO Optimized" />
                    <BenefitItem text="Mobile Ready" />
                    <BenefitItem text="High Performance" />
                  </div>
               </div>
               
               <Link to={`/services/${s.slug}`} className="text-primary-yellow font-bold flex items-center gap-2 group-hover:underline">
                  View Service Details <ArrowRight size={16} />
               </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Custom Solutions */}
      <Section className="bg-slate-900">
         <div className="max-w-4xl mx-auto glass-card p-12 bg-white/5 border-white/10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5">
               <CheckCircle2 size={120} />
            </div>
            <h3 className="text-3xl font-bold mb-6">Need a custom solution?</h3>
            <p className="text-slate-400 text-lg mb-10">
               If your business has unique requirements that don't fit into our standard service list, don't worry. We specialize in building bespoke web applications tailored to your specific workflow.
            </p>
            <Link to="/contact" className="bg-gradient text-dark-bg px-10 py-5 rounded-full font-bold text-lg inline-block glow-yellow">
               Talk to us about your idea
            </Link>
         </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient text-dark-bg py-24">
         <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 italic italic">Ready to transform your digital presence?</h2>
            <Link to="/contact" className="bg-dark-bg text-white px-10 py-5 rounded-full font-bold text-xl glow-yellow hover:scale-105 transition-all inline-block">
              Get Started Now
            </Link>
         </div>
      </Section>
    </>
  );
};

const BenefitItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 text-slate-300 text-sm">
    <CheckCircle2 size={16} className="text-primary-yellow" /> {text}
  </div>
);

export default Services;
