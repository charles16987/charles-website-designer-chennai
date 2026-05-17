import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '@/src/data/websiteData';
import { SEO } from '@/src/components/SEO';
import { Section, SectionHeader } from '@/src/components/Section';
import {
  CheckCircle2,
  ArrowRight,
  Zap,
  Smartphone,
  Globe,
  ShieldCheck,
  Clock,
  Settings,
} from 'lucide-react';
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
        description={`Professional ${service.title} in Chennai. We create high-performance and SEO-focused websites for businesses.`}
        keywords={service.keywords}
      />

      {/* Hero Section */}
      <Section className="bg-slate-900 pt-32 h-[70vh] flex items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-yellow/10 rounded-full blur-[120px] -mr-40 -mt-40"></div>

        <div className="max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary-yellow font-bold uppercase tracking-[4px] text-sm mb-5"
          >
            Premium Digital Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black leading-tight mb-8"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-2xl leading-relaxed max-w-3xl mb-10"
          >
            {service.description} We create visually stunning,
            high-converting, and SEO-optimized digital experiences for
            businesses that want to grow faster online.
          </motion.p>

          <Link
            to="/contact"
            className="bg-gradient text-dark-bg px-10 py-5 rounded-full font-bold inline-flex items-center gap-3 hover:scale-105 transition-all glow-yellow"
          >
            Get Free Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </Section>

      {/* Why Choose */}
      <Section className="bg-dark-bg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-black leading-tight">
              Why Businesses Need
              <span className="text-primary-yellow">
                {' '}
                Professional {service.title}
              </span>
            </h2>

            <p className="text-slate-400 leading-relaxed border-l-4 border-primary-yellow pl-6 italic text-lg">
              “Your website is the first impression customers get about your
              business. A modern, fast, and professional website builds trust
              instantly.”
            </p>

            <div className="space-y-6 text-slate-400 leading-relaxed">
              <p>
                A strong online presence helps businesses attract more customers,
                improve credibility, and generate quality leads. We create
                custom websites that are designed for speed, SEO, and user
                engagement.
              </p>

              <p>
                From modern UI/UX design to clean coding and optimization,
                every detail is carefully crafted to improve conversion and
                search engine visibility.
              </p>

              <p>
                Whether you need a business website, portfolio, landing page,
                or custom web application, we deliver scalable solutions with
                premium design quality.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureItem
              title="Fast Loading"
              desc="Optimized performance with ultra-fast loading speed."
              icon={<Zap size={20} />}
            />

            <FeatureItem
              title="Mobile Friendly"
              desc="Perfect experience across phones, tablets, and desktops."
              icon={<Smartphone size={20} />}
            />

            <FeatureItem
              title="SEO Optimized"
              desc="Built with proper SEO structure for Google ranking."
              icon={<Globe size={20} />}
            />

            <FeatureItem
              title="Secure System"
              desc="Strong protection against security vulnerabilities."
              icon={<ShieldCheck size={20} />}
            />

            <FeatureItem
              title="24/7 Support"
              desc="Quick technical assistance whenever needed."
              icon={<Clock size={20} />}
            />

            <FeatureItem
              title="Custom UI Design"
              desc="Unique modern design tailored for your business."
              icon={<Settings size={20} />}
            />
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-slate-900">
        <SectionHeader
          title="Our Development Process"
          subtitle="A streamlined workflow designed for quality and performance."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <ProcessStep
            number="01"
            title="Research"
            desc="Understanding your business goals, audience, and competitors."
          />

          <ProcessStep
            number="02"
            title="Planning"
            desc="Creating wireframes, structure, and SEO strategy."
          />

          <ProcessStep
            number="03"
            title="Design"
            desc="Crafting premium UI/UX with modern visual aesthetics."
          />

          <ProcessStep
            number="04"
            title="Launch"
            desc="Testing, deployment, optimization, and final delivery."
          />
        </div>
      </Section>

      {/* Pricing */}
      {/* <Section className="bg-dark-bg">
        <SectionHeader
          title="Flexible Service Packages"
          subtitle="Choose the perfect package for your business requirements."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <ServicePackage
            title="Minimum Package"
            price="₹8,000"
            description="Perfect for startups and small businesses needing a professional online presence."
            benefits={[
              'Modern UI Design',
              'Up to 5 Pages',
              'Mobile Responsive',
              'Basic SEO Setup',
              'Contact Form',
              'WhatsApp Integration',
              'Fast Loading Speed',
              '7 Days Support',
            ]}
          />

          <ServicePackage
            title="Standard Package"
            price="₹16,000"
            description="Ideal for growing businesses that need branding and lead generation."
            benefits={[
              'Custom Premium Design',
              'Up to 8 Pages',
              'Advanced SEO Setup',
              'Google Map Integration',
              'Social Media Integration',
              'Admin Panel / CMS',
              'Performance Optimization',
              'WhatsApp & Call Buttons',
              '30 Days Support',
            ]}
            featured
          />

          <ServicePackage
            title="Premium Package"
            price="₹25,000"
            description="Complete high-end solution with advanced features and premium UI/UX."
            benefits={[
              'Fully Custom Website',
              'Unlimited Sections',
              'Premium Animations',
              'Advanced UI/UX',
              'High Conversion Layout',
              'Custom Dashboard',
              'Blog System',
              'Advanced SEO Optimization',
              'Google Analytics Setup',
              'Lead Management System',
              '1 Year Support',
            ]}
          />
        </div>
      </Section> */}

      {/* FAQ */}
      <Section className="bg-slate-900 border-t border-white/5">
        <SectionHeader title="Frequently Asked Questions" align="left" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          <FAQItem
            q={`How long does ${service.title} take?`}
            a="Most projects are completed within 2 to 4 weeks depending on requirements."
          />

          <FAQItem
            q="Will the website be mobile-friendly?"
            a="Yes. Every website we build is fully responsive and optimized for all devices."
          />

          <FAQItem
            q="Do you provide hosting and domain?"
            a="Yes, hosting and domain support can be included based on your package."
          />

          <FAQItem
            q="Can I edit the website content later?"
            a="Absolutely. We can provide CMS access or custom admin dashboard support."
          />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient text-dark-bg py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-5">
              Ready to Build Your Next Website?
            </h2>

            <p className="text-xl font-medium opacity-80 max-w-2xl">
              Let’s create a modern, high-performance website that helps your
              business grow faster online.
            </p>
          </div>

          <Link
            to="/contact"
            className="bg-dark-bg text-white px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all glow-yellow inline-flex items-center gap-3"
          >
            Book Free Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </Section>
    </>
  );
};

/* Feature Card */
const FeatureItem = ({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) => (
  <div className="glass-card p-7 border border-white/5 rounded-2xl hover:border-primary-yellow/20 transition-all duration-300 hover:-translate-y-1">
    <div className="w-12 h-12 bg-primary-yellow/10 rounded-xl flex items-center justify-center text-primary-yellow mb-5">
      {icon}
    </div>

    <h3 className="font-bold text-white text-lg mb-2">{title}</h3>

    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

/* Process Step */
const ProcessStep = ({
  number,
  title,
  desc,
}: {
  number: string;
  title: string;
  desc: string;
}) => (
  <div className="relative group">
    <div className="text-7xl font-black text-white/5 absolute -top-5 left-0 group-hover:text-primary-yellow/10 transition-colors">
      {number}
    </div>

    <div className="relative z-10 pt-10">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>

      <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
    </div>
  </div>
);

/* Pricing Card */
const ServicePackage = ({
  title,
  price,
  description,
  benefits,
  featured = false,
}: {
  title: string;
  price: string;
  description: string;
  benefits: string[];
  featured?: boolean;
}) => (
  <div
    className={cn(
      'relative rounded-3xl border p-8 lg:p-10 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2',
      featured
        ? 'bg-gradient-to-b from-primary-yellow/10 to-primary-orange/10 border-primary-yellow shadow-2xl shadow-primary-yellow/10 scale-105'
        : 'bg-white/5 border-white/10 hover:border-primary-yellow/20'
    )}
  >
    {featured && (
      <div className="absolute top-5 right-5 bg-primary-yellow text-dark-bg text-xs font-bold px-4 py-1 rounded-full">
        MOST POPULAR
      </div>
    )}

    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>

    <div className="flex items-end gap-2 mb-4">
      <span className="text-5xl font-black text-gradient">{price}</span>

      <span className="text-slate-400 mb-1">starting</span>
    </div>

    <p className="text-slate-400 text-sm leading-relaxed mb-8">
      {description}
    </p>

    <ul className="space-y-4 mb-10 flex-grow">
      {benefits.map((b, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
        >
          <CheckCircle2
            size={18}
            className="text-primary-yellow mt-0.5 flex-shrink-0"
          />

          <span>{b}</span>
        </li>
      ))}
    </ul>

    <Link
      to="/contact"
      className={cn(
        'group py-4 rounded-2xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-2',
        featured
          ? 'bg-gradient text-dark-bg hover:scale-[1.02]'
          : 'bg-white/5 border border-white/10 hover:border-primary-yellow hover:bg-primary-yellow/10'
      )}
    >
      Get Started

      <ArrowRight
        size={18}
        className="group-hover:translate-x-1 transition-transform"
      />
    </Link>
  </div>
);

/* FAQ */
const FAQItem = ({
  q,
  a,
}: {
  q: string;
  a: string;
}) => (
  <div className="space-y-4">
    <h4 className="text-white font-bold flex gap-3 text-lg">
      <span className="text-primary-yellow">Q.</span>
      {q}
    </h4>

    <p className="text-slate-400 text-sm leading-relaxed pl-7 border-l border-white/10">
      {a}
    </p>
  </div>
);

export default ServiceDetail;