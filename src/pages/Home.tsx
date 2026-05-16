import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SEO } from '@/src/components/SEO';
import { Section, SectionHeader } from '@/src/components/Section';
import { SERVICES, AREAS, PROJECTS } from '@/src/data/websiteData';
import { 
  ArrowRight, 
  Code, 
  Smartphone, 
  Globe, 
  Search, 
  Zap, 
  Layout, 
  Users, 
  Building2, 
  Store, 
  School, 
  Hospital,
  ExternalLink 
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Home() {
  return (
    <>
      <SEO 
        title="Professional Website Designer in Chennai | Web Design Agency"
        description="Charles Web Designer Chennai provides premium website design, WordPress development, and Shopify stores for local businesses. Dominate SEO in Chennai today!"
        keywords={['Website Designer Chennai', 'Web Development Chennai', 'Freelance Web Designer Chennai', 'SEO Expert Chennai']}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-yellow/5 rounded-full blur-[120px] -mr-96 -mt-96"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-orange/5 rounded-full blur-[100px] -ml-40 -mb-40"></div>
        
        <div className="max-w-7xl mx-auto px-5 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-yellow text-[10px] uppercase tracking-[0.2em] font-bold mb-8">
              <span className="w-2 h-2 rounded-full bg-primary-yellow animate-pulse"></span>
              The Best Web Agency in Chennai
            </div>
            <h1 className="text-5xl md:text-8xl font-bold leading-[1.05] mb-8">
              Professional <br />
              <span className="text-gradient">Website Designer</span> <br />
              in Chennai
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              Modern business websites for startups, shops, hospitals, schools, and local businesses across Chennai. We build with a focus on conversion and SEO.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <Link to="/contact" className="bg-gradient text-dark-bg px-10 py-5 rounded-full font-bold text-lg w-full sm:w-auto text-center glow-yellow hover:scale-105 transition-all">
                Get Free Quote
              </Link>
              <Link to="/portfolio" className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-bold text-lg w-full sm:w-auto text-center hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                View Portfolio <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 glass-card p-4 rounded-[40px] rotate-3 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" 
                alt="Web Design Showcase" 
                className="rounded-[30px] w-full aspect-square object-cover"
              />
            </div>
            {/* Decals */}
            <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-2xl -rotate-6 z-20 shadow-xl border border-primary-yellow/20">
               <div className="text-3xl font-display font-bold text-gradient mb-1">100%</div>
               <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">SEO Optimized</div>
            </div>
            <div className="absolute top-20 -right-10 glass-card p-6 rounded-2xl rotate-12 z-20 shadow-xl border border-primary-orange/20">
               <div className="flex items-center gap-2 mb-2">
                  {[1,2,3,4,5].map(i => <div key={i} className="w-3 h-3 bg-primary-yellow rounded-full"></div>)}
               </div>
               <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">5 Star Rated Agency</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <Section className="bg-slate-900 border-y border-white/5">
        <SectionHeader 
          title="Digital Services for Growing Businesses"
          subtitle="Everything you need to launch and scale your business online in Chennai and beyond."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 6).map((service, idx) => (
            <Link to={`/services/${service.slug}`} key={service.id}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="glass-card p-10 h-full hover:border-primary-yellow/40 transition-colors group"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary-yellow mb-8 group-hover:bg-gradient group-hover:text-dark-bg transition-all duration-500">
                  {getIcon(idx)}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-primary-yellow">
                  Explore Service <ArrowRight size={14} />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        <div className="mt-16 text-center">
            <Link to="/services" className="text-slate-400 font-medium hover:text-white transition-colors border-b border-white/10 pb-1">
              View All 10+ Services
            </Link>
        </div>
      </Section>

      {/* Industries We Serve */}
      <Section className="bg-dark-bg">
        <SectionHeader 
          title="Industries We Empower"
          subtitle="Specialized web solutions tailored for different business niches in Chennai."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <IndustryCard icon={<Building2 />} title="Startups" />
          <IndustryCard icon={<Store />} title="Local Shops" />
          <IndustryCard icon={<Hospital />} title="Hospitals" />
          <IndustryCard icon={<School />} title="Schools" />
          <IndustryCard icon={<Layout />} title="Real Estate" />
          <IndustryCard icon={<Users />} title="Institutes" />
          <IndustryCard icon={<Globe />} title="Export Firms" />
          <IndustryCard icon={<Search />} title="Local Agencies" />
        </div>
      </Section>

      {/* Chennai Local SEO Mastery */}
      <Section className="bg-slate-900 overflow-hidden relative">
         {/* Decorative circle */}
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-primary-yellow/5 rounded-full blur-[80px]"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
             <div className="relative">
                <div className="aspect-[4/3] glass-card p-6 rotate-2 shadow-2xl z-10 relative overflow-hidden">
                   <div className="bg-dark-bg rounded-2xl h-full w-full p-8 space-y-4">
                      <div className="flex items-center gap-3">
                         <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                            <Zap size={20} fill="currentColor" />
                         </div>
                         <div>
                            <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Google Performance</div>
                            <div className="text-xl font-bold">Lighthouse 100/100</div>
                         </div>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                         <div className="h-full w-[95%] bg-gradient"></div>
                      </div>
                      <div className="pt-4 space-y-3">
                         <div className="h-4 w-3/4 bg-white/5 rounded-full animate-pulse"></div>
                         <div className="h-4 w-1/2 bg-white/5 rounded-full animate-pulse"></div>
                         <div className="h-10 w-full border border-white/10 rounded-xl"></div>
                      </div>
                   </div>
                </div>
                {/* Secondary card */}
                <div className="absolute -bottom-10 -right-5 glass-card p-6 -rotate-3 z-0">
                   <div className="text-primary-yellow text-sm font-bold mb-1">Local SEO Rank</div>
                   <div className="text-white text-3xl font-display font-bold">#1 SPOT</div>
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Chennai Local <br /><span className="text-gradient">SEO Expertise</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              We specialize in "Hyper-Local SEO". Your business doesn't need global traffic; it needs traffic from [Area Name] in Chennai. We optimize your website code and GMB profile to ensure nearby customers see you first.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-300">
                <div className="w-5 h-5 rounded-full bg-primary-yellow/20 flex items-center justify-center text-primary-yellow">
                  <ArrowRight size={12} />
                </div>
                GMB (Google Merchant Business) Setup 
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <div className="w-5 h-5 rounded-full bg-primary-yellow/20 flex items-center justify-center text-primary-yellow">
                  <ArrowRight size={12} />
                </div>
                Local Citations & Directory Submissions
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <div className="w-5 h-5 rounded-full bg-primary-yellow/20 flex items-center justify-center text-primary-yellow">
                  <ArrowRight size={12} />
                </div>
                Area-Specific Keyword Targeting
              </li>
            </ul>
            <div className="pt-4">
              <Link to="/contact" className="text-primary-yellow font-bold flex items-center gap-2 group">
                Boost Your Local Ranking <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Portfolio Preview */}
      <Section className="bg-dark-bg">
        <SectionHeader 
          title="Recent Portfolio Highlights"
          subtitle="A glimpse into the high-conversion digital assets we've built for Chennai's local business community."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.slice(0, 3).map((project, idx) => (
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
                 <h3 className="text-2xl font-bold text-white group-hover:text-primary-yellow transition-colors">{project.title}</h3>
                 <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-sm italic">Located in {project.area}</span>
                    <Link to="/portfolio" className="text-primary-yellow opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-sm font-bold">
                       View Case <ExternalLink size={14} />
                    </Link>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
            <Link to="/portfolio" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              View Entire Portfolio
            </Link>
        </div>
      </Section>

      {/* Area Links - Crucial for SEO Internal linking */}
      <Section className="bg-dark-bg">
        <SectionHeader 
          title="Serving Every Corner of Chennai"
          subtitle="Click on your area to find how we can help your local business grow."
        />
        <div className="flex flex-wrap justify-center gap-3">
          {AREAS.map((area) => (
            <Link 
              key={area.id} 
              to={`/areas/${area.slug}`}
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:border-primary-yellow hover:text-primary-yellow transition-all"
            >
              {area.name}
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient text-dark-bg py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 italic">Let's build your dream website today.</h2>
          <p className="text-dark-bg/80 text-xl font-medium mb-12">No more excuses. Your competitors are already online. Are you?</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="bg-dark-bg text-white px-10 py-5 rounded-full font-bold text-xl glow-yellow hover:scale-105 transition-all">
              Start Your Project
            </Link>
            <div className="flex flex-col items-center md:items-start">
               <span className="text-sm uppercase tracking-widest font-bold text-dark-bg/60">Call Directly</span>
               <span className="text-2xl font-display font-bold">+91 75988 25487</span>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

const getIcon = (idx: number) => {
  const icons = [<Layout />, <Code />, <Globe />, <Search />, <Smartphone />, <Zap />];
  return icons[idx % icons.length];
};

const IndustryCard = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="glass-card p-6 flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-colors cursor-pointer group">
    <div className="text-primary-yellow group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 40 })}
    </div>
    <span className="font-bold text-sm text-slate-300">{title}</span>
  </div>
);
