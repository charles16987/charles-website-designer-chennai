import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { AREAS, SERVICES } from '@/src/data/websiteData';
import { SEO } from '@/src/components/SEO';
import { Section, SectionHeader } from '@/src/components/Section';
import { CheckCircle2, Star, ArrowRight, Smartphone, Globe, Zap, MessageSquare, ShieldCheck, ShoppingCart, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

const AreaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = AREAS.find((a) => a.slug === slug);

  if (!area) {
    return <div className="py-40 text-center">Area not found.</div>;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Charles Web Designer - ${area.name}`,
    "description": `Professional website designer in ${area.name}, Chennai. Providing high-quality web design and SEO services for businesses in ${area.name}.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": area.name,
      "addressRegion": "Chennai, Tamil Nadu",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <SEO 
        title={`Website Designer in ${area.name} | Web Design Company in ${area.name}`}
        description={`Top-rated Website Designer in ${area.name}. We help businesses in ${area.name}, Chennai build professional, SEO-friendly websites. Get a free quote today!`}
        keywords={area.keywords}
        schema={schema}
      />

      {/* Hero Section */}
      <Section className="bg-slate-900 pt-32 h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center"></div>
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary-yellow text-xs font-bold uppercase tracking-widest mb-6"
          >
            Serving Local Businesses in {area.name}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold mb-6"
          >
            Website Designer in <span className="text-gradient underline decoration-primary-yellow/20">{area.name}</span>
          </motion.h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Professional web design services for shops, startups, schools, and hospitals in {area.name}, Chennai. We build websites that rank on Google and convert visitors into customers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="bg-gradient text-dark-bg px-8 py-4 rounded-full font-bold w-full sm:w-auto glow-yellow">
              Consult with Charles
            </Link>
            <Link to="/portfolio" className="border border-white/20 text-white px-8 py-4 rounded-full font-bold w-full sm:w-auto hover:bg-white/5">
              View Local Projects
            </Link>
          </div>
        </div>
      </Section>

      {/* Intro Text - Thick for SEO */}
      <Section className="bg-dark-bg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Empowering Businesses in <span className="text-primary-yellow">{area.name}</span> with Modern Web Presence</h2>
            <div className="space-y-6 text-slate-400 leading-relaxed text-base md:text-lg">
              <p>
                Are you looking for a reliable <strong>Website Designer in {area.name}</strong>? Charles designer is your Go-To partner for all things digital. In today's competitive market, having just a website isn't enough; you need a digital asset that works for you. Businesses in {area.name} ranging from small retail shops to large healthcare facilities are moving online, and we are here to lead that transition.
              </p>
              <p>
                Our web design company in {area.name} understands the local pulse. Whether you are located near the {area.name} main market or the residential hubs, our SEO-optimized website structures ensure that local customers find you first. When someone searches for your service in {area.name}, your business should appear on the first page of Google. That is exactly what we specialize in.
              </p>
              <p>
                We don't just use templates. Each website we build for {area.name} clients is a unique masterpiece, refined for speed, mobile responsiveness, and high conversion rates. Our design philosophy combines the vibrant energy of Chennai with international aesthetic standards.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <StatItem number="150+" text="Happy Clients" />
              <StatItem number="5 Star" text="Google Rating" />
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square glass-card overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
                  alt="Web Design Process" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-primary-yellow font-bold text-xl mb-1">Tailored for {area.name}</p>
                  <p className="text-white text-sm">Strategic web layouts designed to convert local traffic into loyal customers.</p>
                </div>
             </div>
             {/* Floating decorative elements */}
             <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-orange/20 rounded-full blur-2xl"></div>
             <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-yellow/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </Section>

      {/* Services in Area */}
      <Section className="bg-slate-900 border-y border-white/5">
        <SectionHeader 
          title={`Our Web Services in ${area.name}`}
          subtitle="Comprehensive digital solutions specifically crafted for the local business ecosystem of Chennai."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <div key={s.id} className="glass-card p-8 hover:border-primary-yellow/30 transition-colors group">
              <div className="mb-6 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary-yellow group-hover:bg-primary-yellow group-hover:text-dark-bg transition-colors">
                {getServiceIcon(s.id)}
              </div>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Looking for {s.title.toLowerCase()} in {area.name}? We provide top-tier {s.title} with a focus on business growth.
              </p>
              <Link to={`/services/${s.slug}`} className="flex items-center gap-2 text-primary-yellow font-bold text-sm">
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Features List - Thick for SEO */}
      <Section className="bg-dark-bg overflow-hidden relative">
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Businesses in <span className="text-primary-yellow">{area.name}</span> Choose Charles?</h2>
            <p className="text-slate-400 text-lg">We don't just build websites; we build revenue-generating machines for the entrepreneurs of {area.name}.</p>
          </div>
          
          <div className="space-y-12">
             <FeatureBlock 
               title={`Local SEO Expertise for ${area.name}`}
               description={`If you are in ${area.name}, your website needs to show up when customers nearby search for your products. We optimize your GMB (Google Business Profile) along with your website to ensure you dominate local searches in ${area.name}.`}
               icon={<Zap size={24} />}
             />
             <FeatureBlock 
               title="Professional Mobile Responsiveness"
               description={`Over 80% of users in ${area.name} access the web via mobile devices. Our websites are 'Thumb-Friendly' and adapt perfectly to all screen sizes, from smart TVs to compact smartphones.`}
               icon={<Smartphone size={24} />}
             />
             <FeatureBlock 
               title={`WordPress & Shopify for ${area.name} Sellers`}
               description={`Whether you want a simple corporate site or a massive ecommerce platform, our Shopify and WordPress specialists in ${area.name} ensure your store is robust, secure, and fast.`}
               icon={<Globe size={24} />}
             />
             <FeatureBlock 
               title="24/7 WhatsApp Integration"
               description="Direct communication is key in Chennai. We integrate floating WhatsApp buttons that connect your customers directly to your sales team with one click."
               icon={<MessageSquare size={24} />}
             />
          </div>
        </div>
      </Section>

      {/* Pricing - Simple for now */}
      <Section className="bg-slate-900">
        <SectionHeader 
          title="Transparent Pricing Packages"
          subtitle={`Affordable web design costs in ${area.name}, Chennai with zero hidden fees.`}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <PricingCard title="Starter" price="₹9,999" features={['5 Pages', 'Free Domain (1yr)', 'Free Hosting (1yr)', 'Mobile Responsive', 'Social Media Links']} />
           <PricingCard title="Business" price="₹19,999" features={['10 Pages', 'SEO Setup', 'GMB Optimization', 'WhatsApp Integration', 'Content Writing']} featured />
           <PricingCard title="Ecommerce" price="₹49,999" features={['Unlimited Products', 'Payment Gateway', 'Inventory Management', 'Invoice System', 'Premium Support']} />
        </div>
      </Section>

      {/* Final SEO Text - Massive word count contribution */}
      <Section className="bg-dark-bg text-slate-400 text-sm leading-relaxed border-t border-white/5">
        <div className="max-w-5xl mx-auto space-y-8">
          <h3 className="text-white text-xl font-bold">A Deeper Dive into Web Design in {area.name}</h3>
          <p>
            When we talk about <strong>website design in {area.name}</strong>, we are talking about a unique demographic. People in {area.name} value trust and speed. A slow website that looks unprofessional is a death sentence for your brand reputation. This is why we focus heavily on "Web Vitals" - the performance metrics that Google uses to rank sites.
          </p>
          <p>
            The industries in {area.name} are varied. From the bustling educational sector (schools and coaching centers) near {area.name} to the specialized medical clinics and hospitals, each requires a different UX strategy. A school website in {area.name} needs clear parent-teacher portals, while a hospital needs prominent appointment booking forms. We specialize in identifying these nuances and building custom solutions that fit.
          </p>
          <p>
             Our <strong>SEO Expert services in {area.name}</strong> go beyond just keywords. We look at semantic search entities. If you are a real estate agent in {area.name}, we don't just target "flats for sale in {area.name}", we target "3BHK luxury apartments near {area.name} station" because that is what real buyers search for.
          </p>
          <p>
             Our <strong>Shopify development for {area.name} stores</strong> integrates local payment players like Razorpay and Instamojo, ensuring that your Chennai customers can pay via UPI (GPay, PhonePe) seamlessly. This friction-less checkout is what drives 50% more sales compared to generic international setups.
          </p>
          <p>
             Conclusion: If you are serious about your business growth in {area.name}, don't settle for a "just okay" website. Partner with Charles Web Designer Chennai, and let's craft a digital future for your brand that truly represents the excellence of Chennai's business spirit.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient text-dark-bg py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to dominate {area.name} search results?</h2>
          <p className="text-dark-bg/80 text-xl font-medium mb-12">Get a free website audit and a quote for your {area.name} business today.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="bg-dark-bg text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2">
              <Phone size={20} /> Call Now: +91 75988 25487
            </Link>
            <Link to="/contact" className="bg-white/20 text-dark-bg px-10 py-5 rounded-full font-bold text-lg hover:bg-white/30 transition-all border border-dark-bg/10">
              Get Free Quote
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

const StatItem = ({ number, text }: { number: string; text: string }) => (
  <div className="space-y-1">
    <div className="text-3xl font-bold text-primary-yellow font-display">{number}</div>
    <div className="text-sm text-slate-500 uppercase tracking-widest">{text}</div>
  </div>
);

const FeatureBlock = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
  <div className="flex gap-6 group">
    <div className="flex-shrink-0 w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary-yellow group-hover:bg-gradient group-hover:text-dark-bg transition-all">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary-yellow transition-colors">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm">{description}</p>
    </div>
  </div>
);

const PricingCard = ({ title, price, features, featured = false }: { title: string; price: string; features: string[]; featured?: boolean }) => (
  <div className={cn(
    "p-10 border transition-all flex flex-col",
    featured ? "bg-white/5 border-primary-yellow scale-105 relative z-10 rounded-2xl shadow-2xl" : "border-white/10 rounded-2xl hover:border-white/20"
  )}>
    {featured && <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary-yellow text-dark-bg px-4 py-1 rounded-full text-xs font-bold uppercase">Popular</div>}
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <div className="text-4xl font-bold mb-8 text-gradient">{price}</div>
    <ul className="space-y-4 mb-10 flex-grow">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
          <CheckCircle2 size={16} className="text-primary-yellow" /> {f}
        </li>
      ))}
    </ul>
    <Link to="/contact" className={cn(
      "py-4 rounded-xl font-bold text-center transition-all",
      featured ? "bg-gradient text-dark-bg hover:opacity-90" : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
    )}>
      Order Now
    </Link>
  </div>
);

const getServiceIcon = (id: string) => {
  switch(id) {
    case 's1': return <Globe size={24} />;
    case 's2': return <Zap size={24} />;
    case 's3': return <ShoppingCart size={24} />;
    case 's4': return <Star size={24} />;
    case 's5': return <Smartphone size={24} />;
    case 's6': return <Star size={24} />;
    default: return <CheckCircle2 size={24} />;
  }
};

export default AreaDetail;
