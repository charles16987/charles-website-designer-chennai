import React from 'react';
import { SEO } from '@/src/components/SEO';
import { Section, SectionHeader } from '@/src/components/Section';
import { Link } from 'react-router-dom';
import { ExternalLink, Star, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

import { PROJECTS } from '@/src/data/websiteData';

const Portfolio = () => {
  return (
    <>
      <SEO 
        title="Portfolio | Our Best Web Design Projects in Chennai"
        description="Browse our portfolio of high-converting websites built for Chennai businesses. From ecommerce to corporate, see what we've delivered."
      />

      {/* Hero */}
      <Section className="pt-32 text-center bg-slate-900 border-b border-white/5">
        <h1 className="text-5xl md:text-8xl font-bold mb-8">Our <span className="text-gradient">Portfolio</span></h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto italic">"A showcase of digital excellence across Chennai's most vibrant business hubs."</p>
      </Section>

      {/* Projects Grid */}
      <Section className="bg-dark-bg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-2xl glass-card border-white/5 mb-6 relative">
                 <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 bg-primary-yellow text-dark-bg px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                   {project.category}
                </div>
              </div>
              <div className="space-y-2">
                 <div className="flex items-center justify-between">
                    {/* <span className="text-slate-500 text-sm italic">Located in {project.area}, Chennai</span> */}
                 <h3 className="text-2xl font-bold text-white group-hover:text-primary-yellow transition-colors">{project.title}</h3>
                    <a href={project.links} target="_blank"  className="text-primary-yellow opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-sm font-bold">
                       View <ExternalLink size={14} />
                    </a>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-slate-900 overflow-hidden relative">
        <SectionHeader title="Trusted by Local Leaders" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <TestimonialCard 
              name="Rahul Sharma" 
              role="CEO, Chennai Gold" 
              text="Charles delivered our ecommerce site within 20 days. Our online sales from T Nagar and Adyar have tripled since the launch."
           />
           <TestimonialCard 
              name="Priya Krishnan" 
              role="Director, Adyar Clinic" 
              text="The SEO expertise Charles brought to the table is unmatched. We are now ranking #1 for the best medical clinic in Adyar."
           />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient text-dark-bg py-24">
         <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">Ready to see your business here?</h2>
            <Link to="/contact" className="bg-dark-bg text-white px-10 py-5 rounded-full font-bold text-xl glow-yellow hover:scale-105 transition-all inline-block">
              Start Your Project
            </Link>
         </div>
      </Section>
    </>
  );
};

const TestimonialCard = ({ name, role, text }: { name: string; role: string; text: string }) => (
  <div className="glass-card p-10 bg-white/5 border-white/5 relative">
     <div className="flex gap-1 mb-6 text-primary-yellow">
        {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
     </div>
     <p className="text-slate-300 text-lg leading-relaxed mb-8 italic">"{text}"</p>
     <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient rounded-full"></div>
        <div>
           <div className="font-bold text-white">{name}</div>
           <div className="text-xs uppercase tracking-widest text-slate-500">{role}</div>
        </div>
     </div>
  </div>
);

export default Portfolio;
