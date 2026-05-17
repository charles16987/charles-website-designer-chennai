import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { SEO } from '@/src/components/SEO';
import { Section, SectionHeader } from '@/src/components/Section';

const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact Us | Hire the Best Web Designer in Chennai"
        description="Get a free quote for your web design or SEO project in Chennai. Contact Charles Web Designer today for a consultation!"
      />

      <Section className="pt-32">
        <SectionHeader 
          title="Get Your Free Quote" 
          subtitle="Looking to launch your next website? Let's discuss your project goals and how we can achieve them together." 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="glass-card p-8 space-y-8">
              <h3 className="text-2xl font-bold text-white">Contact Info</h3>
              
              <ContactCard 
                icon={<Phone className="text-primary-yellow" />} 
                title="Call or WhatsApp"
                value="+91 75988 25487"
                sub="Available 10 AM - 8 PM"
              />
              
              <ContactCard 
                icon={<Mail className="text-primary-yellow" />} 
                title="Email Us"
                value="charles@chennaidesigner.in"
                sub="Response within 24 hours"
              />
              
              <ContactCard 
                icon={<MapPin className="text-primary-yellow" />} 
                title="Our Location"
                value=" Chennai"
                sub="Tamil Nadu, India"
              />
            </div>

            <div className="bg-gradient p-8 rounded-2xl text-dark-bg">
              <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
                <MessageCircle fill="currentColor" /> Live Chat
              </h4>
              <p className="text-dark-bg/80 text-sm mb-6 font-medium">Quick questions? Chat with Charles directly on WhatsApp for instant support.</p>
              <a 
                href="https://wa.me/917598825487" 
                target="_blank" 
                rel="noreferrer"
                className="bg-dark-bg text-white px-6 py-3 rounded-xl font-bold text-sm inline-block shadow-lg"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
             <div className="glass-card p-10 bg-white/5 border-white/10">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary-yellow outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                      <input type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary-yellow outline-none transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Phone Number</label>
                      <input type="tel" placeholder="+91 9XXXX XXXXX" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary-yellow outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Subject</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary-yellow outline-none transition-colors appearance-none">
                        <option className="bg-dark-bg">New Website Design</option>
                        <option className="bg-dark-bg">SEO Services</option>
                        <option className="bg-dark-bg">Ecommerce Store</option>
                        <option className="bg-dark-bg">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">How can we help?</label>
                    <textarea rows={5} placeholder="Tell us about your project requirements..." className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-primary-yellow outline-none transition-colors resize-none"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-gradient text-dark-bg py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl hover:opacity-90 transition-opacity">
                    Send Message <Send size={20} />
                  </button>
                  <p className="text-center text-slate-500 text-xs">By submitting this form, you agree to our privacy policy.</p>
                </form>
             </div>
          </div>
        </div>
      </Section>

      {/* Map Placeholder */}
      <Section className="bg-slate-900 border-y border-white/5 py-0 px-0 h-96 overflow-hidden relative">
        <div className="absolute inset-0 grayscale opacity-40 hover:grayscale-0 transition-all duration-500">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124401.17112040188!2d80.12601956428784!3d12.985655767228833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d333d%3A0xfa33748386f91672!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1715870000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Section>
    </>
  );
};

const ContactCard = ({ icon, title, value, sub }: { icon: React.ReactNode; title: string, value: string, sub: string }) => (
  <div className="flex gap-4">
    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 flex-shrink-0">
      {icon}
    </div>
    <div>
      <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">{title}</div>
      <div className="text-white font-bold">{value}</div>
      <div className="text-slate-400 text-xs mt-0.5">{sub}</div>
    </div>
  </div>
);

export default Contact;
