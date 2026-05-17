import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { AREAS, SERVICES } from '@/src/data/websiteData';
import { SEO } from '@/src/components/SEO';
import { Section, SectionHeader } from '@/src/components/Section';
import {
  CheckCircle2,
  Star,
  ArrowRight,
  Smartphone,
  Globe,
  Zap,
  MessageSquare,
  ShoppingCart,
  Phone,
  ShieldCheck,
  MonitorSmartphone,
  LayoutDashboard,
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

const AreaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = AREAS.find((a) => a.slug === slug);

  if (!area) {
    return <div className="py-40 text-center">Area not found.</div>;
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Charles Web Designer - ${area.name}`,
    description: `Professional website designer in ${area.name}, Chennai.`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: area.name,
      addressRegion: 'Chennai, Tamil Nadu',
      addressCountry: 'IN',
    },
  };

  return (
    <>
      <SEO
        title={`Website Designer in ${area.name} | Web Design Company`}
        description={`Professional website designer in ${area.name}. We create modern, SEO-friendly websites for local businesses.`}
        keywords={area.keywords}
        schema={schema}
      />

      {/* HERO */}
      <Section className="bg-slate-900 pt-32 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-yellow/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-primary-yellow text-xs uppercase tracking-[3px] font-bold mb-8"
          >
            Premium Web Design Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black leading-tight mb-8"
          >
            Website Designer in{' '}
            <span className="text-gradient">{area.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto mb-12"
          >
            We build modern websites for shops, startups, clinics,
            restaurants, schools, and businesses in {area.name}. Fast,
            responsive, SEO-optimized, and designed to generate more customers.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              to="/contact"
              className="bg-gradient text-dark-bg px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all"
            >
              Get Free Quote
            </Link>

            <Link
              to="/portfolio"
              className="border border-white/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/5 transition-all"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </Section>

      {/* ABOUT */}
      <Section className="bg-dark-bg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Grow Your Business in{' '}
              <span className="text-primary-yellow">{area.name}</span>
            </h2>

            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                Your website is your digital showroom. Businesses today need
                professional websites that look modern, load quickly, and
                generate trust.
              </p>

              <p>
                We create custom business websites with strong SEO structure,
                premium UI/UX, mobile responsiveness, and conversion-focused
                layouts.
              </p>

              <p>
                Whether you need a company website, ecommerce store, portfolio,
                landing page, or custom web application, we provide complete
                solutions tailored for your business.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <StatItem number="150+" text="Projects Completed" />
              <StatItem number="5 Star" text="Client Reviews" />
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="Website Design"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-primary-yellow/10 blur-3xl rounded-full w-40 h-40"></div>
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section className="bg-slate-900">
        <SectionHeader
          title={`Services Available in ${area.name}`}
          subtitle="Complete website solutions for businesses and startups."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="glass-card p-8 rounded-3xl border border-white/5 hover:border-primary-yellow/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-yellow/10 flex items-center justify-center text-primary-yellow mb-6">
                {getServiceIcon(s.id)}
              </div>

              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Premium {s.title.toLowerCase()} services with modern UI,
                responsive layouts, SEO optimization, and high-performance
                development.
              </p>

              <Link
                to={`/services/${s.slug}`}
                className="flex items-center gap-2 text-primary-yellow font-bold"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* FEATURES */}
      <Section className="bg-dark-bg">
        <SectionHeader
          title="Why Choose Charles Web Designer?"
          subtitle="Modern technology combined with creative design."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FeatureBlock
            title="Mobile Responsive Design"
            description="Your website will work perfectly on mobiles, tablets, laptops, and smart TVs."
            icon={<Smartphone size={26} />}
          />

          <FeatureBlock
            title="SEO Friendly Structure"
            description="Built with modern SEO standards to improve your Google visibility."
            icon={<Zap size={26} />}
          />

          <FeatureBlock
            title="WhatsApp Integration"
            description="Direct customer communication with floating WhatsApp buttons."
            icon={<MessageSquare size={26} />}
          />

          <FeatureBlock
            title="Secure Development"
            description="Professional coding standards with optimized performance and security."
            icon={<ShieldCheck size={26} />}
          />
        </div>
      </Section>

      {/* PRICING */}
      {/* <Section className="bg-slate-900">
        <SectionHeader
          title="Website Pricing Packages"
          subtitle={`Professional website solutions for businesses in ${area.name}.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Starter Website"
            price="₹12,999"
            description="Perfect for startups and small businesses."
            features={[
              '5 Page Website',
              'Modern UI Design',
              'Mobile Responsive Layout',
              'Free Hosting Included',
              'WhatsApp Integration',
              'Contact Form Setup',
              'Basic SEO Optimization',
              'Fast Loading Speed',
              'Google Map Integration',
              'Social Media Links',
              '1 Revision Support',
            ]}
          />

          <PricingCard
            title="Business Website"
            price="₹24,999"
            description="Perfect for growing businesses and lead generation."
            features={[
              '10+ Premium Pages',
              'Advanced UI/UX Design',
              'Free Hosting Included',
              'Admin Panel / CMS',
              'Advanced SEO Setup',
              'Google Business Optimization',
              'Call & WhatsApp Buttons',
              'Premium Animations',
              'Lead Capture Forms',
              'Performance Optimization',
              'Blog Integration',
              '30 Days Support',
            ]}
            featured
          />

          <PricingCard
            title="Ecommerce Website"
            price="₹54,999"
            description="Complete ecommerce solution for online stores."
            features={[
              'Unlimited Products',
              'Custom Ecommerce Design',
              'Free Hosting Included',
              'Shopping Cart System',
              'Razorpay Integration',
              'Order Management',
              'Invoice System',
              'Admin Dashboard',
              'SEO Product Pages',
              'Advanced Security Setup',
              'Speed Optimization',
              '1 Year Support',
            ]}
          />
        </div>
      </Section> */}

      {/* CTA */}
      <Section className="bg-gradient text-dark-bg py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-black mb-8">
            Ready to Build Your Website?
          </h2>

          <p className="text-xl font-medium opacity-80 mb-12">
            Let’s create a modern website that helps your business grow faster.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/contact"
              className="bg-dark-bg text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-all"
            >
              <Phone size={20} />
              Call Now
            </Link>

            <Link
              to="/contact"
              className="bg-white/20 px-10 py-5 rounded-full font-bold text-lg border border-dark-bg/10 hover:bg-white/30 transition-all"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

const StatItem = ({
  number,
  text,
}: {
  number: string;
  text: string;
}) => (
  <div>
    <div className="text-4xl font-black text-primary-yellow">
      {number}
    </div>

    <div className="text-slate-500 uppercase tracking-[3px] text-sm mt-1">
      {text}
    </div>
  </div>
);

const FeatureBlock = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <div className="flex gap-5">
    <div className="w-14 h-14 rounded-2xl bg-primary-yellow/10 border border-primary-yellow/10 flex items-center justify-center text-primary-yellow flex-shrink-0">
      {icon}
    </div>

    <div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>

      <p className="text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const PricingCard = ({
  title,
  price,
  description,
  features,
  featured = false,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}) => (
  <div
    className={cn(
      'relative rounded-3xl p-10 border transition-all duration-300 flex flex-col hover:-translate-y-2',
      featured
        ? 'bg-gradient-to-b from-primary-yellow/10 to-primary-orange/10 border-primary-yellow scale-105 shadow-2xl shadow-primary-yellow/10'
        : 'bg-white/5 border-white/10 hover:border-primary-yellow/20'
    )}
  >
    {featured && (
      <div className="absolute top-5 right-5 bg-primary-yellow text-dark-bg px-4 py-1 rounded-full text-xs font-bold uppercase">
        Popular
      </div>
    )}

    <h3 className="text-2xl font-bold mb-3">{title}</h3>

    <div className="flex items-end gap-2 mb-5">
      <span className="text-5xl font-black text-gradient">
        {price}
      </span>

      <span className="text-slate-400 mb-1">starting</span>
    </div>

    <p className="text-slate-400 text-sm leading-relaxed mb-8">
      {description}
    </p>

    <ul className="space-y-4 mb-10 flex-grow">
      {features.map((f, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
        >
          <CheckCircle2
            size={18}
            className="text-primary-yellow mt-0.5 flex-shrink-0"
          />

          <span>{f}</span>
        </li>
      ))}
    </ul>

    <Link
      to="/contact"
      className={cn(
        'py-4 rounded-2xl font-bold text-center transition-all duration-300',
        featured
          ? 'bg-gradient text-dark-bg hover:scale-[1.02]'
          : 'bg-white/5 border border-white/10 hover:border-primary-yellow hover:bg-primary-yellow/10'
      )}
    >
      Get Quote
    </Link>
  </div>
);

const getServiceIcon = (id: string) => {
  switch (id) {
    case 's1':
      return <Globe size={24} />;
    case 's2':
      return <Zap size={24} />;
    case 's3':
      return <ShoppingCart size={24} />;
    case 's4':
      return <MonitorSmartphone size={24} />;
    case 's5':
      return <LayoutDashboard size={24} />;
    default:
      return <Star size={24} />;
  }
};

export default AreaDetail;