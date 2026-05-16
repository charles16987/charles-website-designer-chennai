import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '@/src/data/websiteData';
import { SEO } from '@/src/components/SEO';
import { Section, SectionHeader } from '@/src/components/Section';
import { CheckCircle2, ArrowRight, Zap, Smartphone, Globe, ShieldCheck, Clock, Settings } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <div className="py-40 text-center">Service not found.</div>;
  }

  return (
    <>
      <SEO 
        title={`${service.title} | Specialist Web Services Chennai`}
        description={`Professional ${service.title} in Chennai. We offer data-driven, high-converting ${service.title.toLowerCase()} for businesses of all sizes.`}
        keywords={service.keywords}
      />

      {/* Hero */}
      <Section className="bg-slate-900 pt-32 h-[60vh] flex items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-yellow/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-primary-yellow font-bold uppercase tracking-widest text-xs mb-4"
          >
            Premium Web Service
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            {service.title}
          </motion.h1>
          <p className="text-slate-400 text-xl md:text-2xl font-light leading-relaxed mb-10">
            {service.description} High-end functionality meets stunning aesthetics for your Chennai business.
          </p>
          <Link to="/contact" className="bg-gradient text-dark-bg px-8 py-4 rounded-full font-bold inline-block glow-yellow">
            Get Pricing for {service.title.split(' ')[0]}
          </Link>
        </div>
      </Section>

      {/* Detail Content */}
      <Section className="bg-dark-bg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Why You Need Professional <span className="text-primary-yellow">{service.title}</span>?</h2>
            <p className="text-slate-400 leading-relaxed italic border-l-2 border-primary-yellow pl-6 py-2">
              "A website is the front door of your business in the digital world. If it's slow, ugly, or hard to use, you are losing money every second."
            </p>
            <div className="space-y-6 text-slate-400">
              <p>
                In the competitive Chennai market, generic templates won't set you apart. Our approach to <strong>{service.title.toLowerCase()}</strong> focuses on creating a unique identity for your brand. We analyze your competitors and build a strategy that places you ahead of them.
              </p>
              <p>
                From clean code to semantic keyword structures, every element of our {service.title.toLowerCase()} is designed for maximum performance. Whether you need a simple informative site or a complex web application, our Chennai-based team delivers with precision.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureItem title="Fast Loading" desc="Under 3s load time for better SEO." icon={<Zap size={20} />} />
            <FeatureItem title="Mobile Ready" desc="Perfect layout on every device." icon={<Smartphone size={20} />} />
            <FeatureItem title="SEO Optimized" desc="Rank higher in local searches." icon={<Globe size={20} />} />
            <FeatureItem title="Secure Code" desc="Protected against common threats." icon={<ShieldCheck size={20} />} />
            <FeatureItem title="24/7 Support" desc="We are always here for you." icon={<Clock size={20} />} />
            <FeatureItem title="Custom UI" desc="No boring templates here." icon={<Settings size={20} />} />
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-slate-900">
        <SectionHeader title="Our Design & Development Process" subtitle="A structured approach to ensure your project's success from start to finish." />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <ProcessStep number="01" title="Discovery" desc="We learn about your business goals and audience in Chennai." />
          <ProcessStep number="02" title="Strategy" desc="We map out the SEO keywords and site architecture." />
          <ProcessStep number="03" title="Design" desc="We create a beautiful, custom UI that reflects your brand." />
          <ProcessStep number="04" title="Launch" desc="We deploy, test, and optimize for Google ranking." />
        </div>
      </Section>

      {/* Pricing and Packages */}
      <Section className="bg-dark-bg">
        <SectionHeader title="Affordable Service Packages" subtitle="Pick the perfect plan for your business needs." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <ServicePackage 
            title="Basic Setup" 
            price="₹15,000" 
            benefits={['UI/UX Design', 'Custom Layout', '3 Pages', 'SEO Basics', '1 Month Support']} 
          />
          <ServicePackage 
            title="Premium Solution" 
            price="₹45,000" 
            benefits={['Full Custom Dev', '10+ Pages', 'Advance SEO', 'Admin Dashboard', '1 Year Maintenance']} 
            featured 
          />
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-slate-900 border-t border-white/5">
        <SectionHeader title="Service FAQ" align="left" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
           <FAQItem q={`How long does ${service.title} take?`} a="Typically, a standard project takes 2-4 weeks depending on complexity." />
           <FAQItem q="Do you provide hosting and domain?" a="Yes, we offer free hosting and domain for the first year with our premium packages." />
           <FAQItem q="Will my website be mobile-friendly?" a="Absolutely. 100% of our websites are fully responsive across all devices." />
           <FAQItem q="Can I update the content myself?" a="Yes, we provide an easy-to-use CMS (like WordPress) or a custom dashboard for you to manage content." />
        </div>
      </Section>

      <Section className="bg-gradient text-dark-bg py-20">
         <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-5xl mx-auto text-center md:text-left">
            <div>
              <h2 className="text-4xl font-bold mb-4">Interested in {service.title}?</h2>
              <p className="text-xl font-medium opacity-80">Let's discuss how we can grow your business.</p>
            </div>
            <Link to="/contact" className="bg-dark-bg text-white px-12 py-5 rounded-full font-bold text-xl glow-yellow hover:scale-105 transition-all">
              Book Free Consultation
            </Link>
         </div>
      </Section>
    </>
  );
};

const FeatureItem = ({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) => (
  <div className="glass-card p-6 border-white/5 hover:border-primary-yellow/20 transition-all">
    <div className="w-10 h-10 bg-primary-yellow/10 rounded-lg flex items-center justify-center text-primary-yellow mb-4">
      {icon}
    </div>
    <h3 className="font-bold text-white mb-1">{title}</h3>
    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
  </div>
);

const ProcessStep = ({ number, title, desc }: { number: string; title: string; desc: string }) => (
  <div className="relative group">
    <div className="text-6xl font-black text-white/5 absolute -top-4 -left-2 group-hover:text-primary-yellow/10 transition-colors">{number}</div>
    <div className="relative z-10 pt-6">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const ServicePackage = ({ title, price, benefits, featured = false }: { title: string; price: string; benefits: string[]; featured?: boolean }) => (
  <div className={cn(
    "p-10 border rounded-2xl flex flex-col",
    featured ? "bg-white/5 border-primary-orange scale-105" : "border-white/10"
  )}>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <div className="text-4xl font-bold mb-8 text-gradient">{price}</div>
    <ul className="space-y-4 mb-10 flex-grow">
      {benefits.map((b, i) => (
        <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
          <CheckCircle2 size={16} className="text-primary-yellow" /> {b}
        </li>
      ))}
    </ul>
    <Link to="/contact" className={cn(
      "py-4 rounded-xl font-bold text-center",
      featured ? "bg-gradient text-dark-bg" : "bg-white/5 border border-white/10"
    )}>
      Select Plan
    </Link>
  </div>
);

const FAQItem = ({ q, a }: { q: string; a: string }) => (
  <div className="space-y-3">
    <h4 className="text-white font-bold flex gap-3 text-lg">
      <span className="text-primary-yellow italic">Q.</span> {q}
    </h4>
    <p className="text-slate-400 text-sm pl-8 border-l border-white/10">{a}</p>
  </div>
);

export default ServiceDetail;
