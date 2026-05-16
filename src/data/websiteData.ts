export interface Service {
  id: string;
  title: string;
  description: string;
  slug: string;
  keywords: string[];
}

export interface Area {
  id: string;
  name: string;
  slug: string;
  keywords: string[];
}

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Website Design Chennai',
    description: 'Bespoke UI/UX design tailored for Chennai businesses.',
    slug: 'website-design-chennai',
    keywords: ['Website Designer Chennai', 'Freelance Web Designer Chennai', 'Professional Web Design Chennai']
  },
  {
    id: 's2',
    title: 'Web Development Chennai',
    description: 'High-performance coding for scalable web solutions.',
    slug: 'web-development-chennai',
    keywords: ['Web Development Company Chennai', 'Coding Services Chennai', 'Full Stack Development Chennai']
  },
  {
    id: 's3',
    title: 'Ecommerce Website Development Chennai',
    description: 'Scalable online stores with secure payment integration.',
    slug: 'ecommerce-website-development-chennai',
    keywords: ['Ecommerce Web Design Chennai', 'Online Store Builder Chennai', 'Payment Gateway Integration Chennai']
  },
  {
    id: 's4',
    title: 'WordPress Development Chennai',
    description: 'Customized WordPress themes and plugins for easy management.',
    slug: 'wordpress-development-chennai',
    keywords: ['WordPress Developer Chennai', 'WP Design Chennai', 'WordPress Support Chennai']
  },
  {
    id: 's5',
    title: 'Shopify Development Chennai',
    description: 'Expert Shopify setup and customization for global sales.',
    slug: 'shopify-development-chennai',
    keywords: ['Shopify Expert Chennai', 'Shopify Store Design Chennai', 'Shopify App Integration Chennai']
  },
  {
    id: 's6',
    title: 'SEO Services Chennai',
    description: 'Dominate Google rankings with local SEO strategies.',
    slug: 'seo-services-chennai',
    keywords: ['SEO Expert Chennai', 'Local SEO Services Chennai', 'Google Ranking Chennai']
  },
  {
    id: 's7',
    title: 'Landing Page Design Chennai',
    description: 'Conversion-optimized landing pages for your marketing campaigns.',
    slug: 'landing-page-design-chennai',
    keywords: ['Landing Page Designer Chennai', 'Conversion Rate Optimization Chennai', 'Sales Page Design Chennai']
  },
  {
    id: 's8',
    title: 'Responsive Website Design Chennai',
    description: 'Mobile-first websites that look great on any device.',
    slug: 'responsive-website-design-chennai',
    keywords: ['Mobile Friendly Website Chennai', 'Responsive Web Design Chennai', 'Cross-browser Design Chennai']
  },
  {
    id: 's9',
    title: 'Website Redesign Chennai',
    description: 'Modernize your outdated website with a fresh look.',
    slug: 'website-redesign-chennai',
    keywords: ['Update Old Website Chennai', 'Modernize Website Chennai', 'UI Refresh Chennai']
  },
  {
    id: 's10',
    title: 'Website Maintenance Chennai',
    description: 'Keep your website secure and updated regularly.',
    slug: 'website-maintenance-chennai',
    keywords: ['Website AMC Chennai', 'Hack Recovery Chennai', 'Speed Optimization Chennai']
  }
];

export interface Project {
  id: number;
  title: string;
  category: string;
  img: string;
  area: string;
}

export const PROJECTS: Project[] = [
  { id: 1, title: 'Chennai Gold Palace', category: 'Ecommerce', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80', area: 'T Nagar' },
  { id: 2, title: 'Adyar Medical Clinic', category: 'Healthcare', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80', area: 'Adyar' },
  { id: 3, title: 'Elite School of Arts', category: 'Education', img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80', area: 'Anna Nagar' },
  { id: 4, title: 'TechHub Startups', category: 'Corporate', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80', area: 'OMR' },
  { id: 5, title: 'Velachery Organic Store', category: 'Retail', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80', area: 'Velachery' },
  { id: 6, title: 'Tambaram Real Estate', category: 'Real Estate', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80', area: 'Tambaram' },
];

export const AREAS: Area[] = [
  { id: 'a1', name: 'Avadi', slug: 'website-designer-avadi', keywords: ['Website Designer in Avadi', 'Web Design Avadi', 'SEO Expert Avadi'] },
  { id: 'a2', name: 'Anna Nagar', slug: 'website-designer-anna-nagar', keywords: ['Website Designer in Anna Nagar', 'Web Design Anna Nagar', 'SEO Expert Anna Nagar'] },
  { id: 'a3', name: 'Adyar', slug: 'website-designer-adyar', keywords: ['Website Designer in Adyar', 'Web Design Adyar', 'SEO Expert Adyar'] },
  { id: 'a4', name: 'Velachery', slug: 'website-designer-velachery', keywords: ['Website Designer in Velachery', 'Web Design Velachery', 'SEO Expert Velachery'] },
  { id: 'a5', name: 'T Nagar', slug: 'website-designer-t-nagar', keywords: ['Website Designer in T Nagar', 'Web Design T Nagar', 'SEO Expert T Nagar'] },
  { id: 'a6', name: 'Porur', slug: 'website-designer-porur', keywords: ['Website Designer in Porur', 'Web Design Porur', 'SEO Expert Porur'] },
  { id: 'a7', name: 'Tambaram', slug: 'website-designer-tambaram', keywords: ['Website Designer in Tambaram', 'Web Design Tambaram', 'SEO Expert Tambaram'] },
  { id: 'a8', name: 'OMR', slug: 'website-designer-omr', keywords: ['Website Designer in OMR', 'Web Design OMR', 'SEO Expert OMR'] },
  { id: 'a9', name: 'Ashok Nagar', slug: 'website-designer-ashok-nagar', keywords: ['Website Designer in Ashok Nagar', 'Web Design Ashok Nagar', 'SEO Expert Ashok Nagar'] },
  { id: 'a10', name: 'Kodambakkam', slug: 'website-designer-kodambakkam', keywords: ['Website Designer in Kodambakkam', 'Web Design Kodambakkam', 'SEO Expert Kodambakkam'] },
  { id: 'a11', name: 'Ambattur', slug: 'website-designer-ambattur', keywords: ['Website Designer in Ambattur', 'Web Design Ambattur', 'SEO Expert Ambattur'] },
  { id: 'a12', name: 'Mylapore', slug: 'website-designer-mylapore', keywords: ['Website Designer in Mylapore', 'Web Design Mylapore', 'SEO Expert Mylapore'] },
  { id: 'a13', name: 'Perungudi', slug: 'website-designer-perungudi', keywords: ['Website Designer in Perungudi', 'Web Design Perungudi', 'SEO Expert Perungudi'] },
  { id: 'a14', name: 'Sholinganallur', slug: 'website-designer-sholinganallur', keywords: ['Website Designer in Sholinganallur', 'Web Design Sholinganallur', 'SEO Expert Sholinganallur'] },
  { id: 'a15', name: 'Pallikaranai', slug: 'website-designer-pallikaranai', keywords: ['Website Designer in Pallikaranai', 'Web Design Pallikaranai', 'SEO Expert Pallikaranai'] }
];
