export const COMPANY_INFO = {
  name: "Goodness Labtech Solutions LLP",
  tagline: "Your Trusted Partner For Material Testing",
  fullTitle: "Goodness Lab : A Accredited Lab",
  description: "NABL-accredited material testing laboratory dedicated to providing the highest degree of accuracy, fast turnaround time, affordable cost, and customer satisfaction.",

  address: {
    line1: "Second Floor, Swara Enterprise Building",
    line2: "Block- J/536/3, MIDC Bhosari",
    city: "Pimpri Chinchwad",
    state: "Maharashtra",
    zip: "411039",
    country: "India",
    formatted: "Second Floor, Swara Enterprise Building, Block- J/536/3, MIDC Bhosari, Pimpri Chinchwad, Pune-411039, Maharashtra, India"
  },

  contact: {
    phone: "+91-7058300308",
    phoneDisplay: "+91 7058300308",
    email: "info@goodnesslab.in",
    whatsapp: "917058300308", // Without + for WhatsApp API
  },

  accreditation: {
    nabl: "ISO 17025:2017",
    nablTitle: "NABL (National Accreditation Board for Testing and Calibration Laboratories)",
    description: "A Constituent Board of the Quality Council of India, Government of India",
  },

  social: {
    // Add social media links if available
    linkedin: "",
    facebook: "",
    twitter: "",
  }
};

export const VALUE_PROPOSITIONS = [
  {
    id: "one-point",
    title: "One-Point Solutions",
    description: "Comprehensive testing services under one roof",
    icon: "FaCheckCircle"
  },
  {
    id: "fast-turnaround",
    title: "Fast Turnaround Time",
    description: "Within 24 hours for most standard tests",
    highlight: "24 hours*",
    icon: "FaClock"
  },
  {
    id: "customer-satisfaction",
    title: "Customer Satisfaction",
    description: "Dedicated to exceeding client expectations",
    icon: "FaSmile"
  },
  {
    id: "affordable",
    title: "Affordable Cost",
    description: "Competitive pricing without compromising quality",
    icon: "FaDollarSign"
  },
  {
    id: "accuracy",
    title: "Highest Degree of Accuracy",
    description: "State-of-the-art equipment and skilled professionals",
    icon: "FaBullseye"
  },
  {
    id: "sample-pickup",
    title: "Sample Pickup Facility",
    description: "Convenient sample collection service available",
    icon: "FaTruck"
  },
];

export const WHY_CHOOSE_US = [
  {
    id: "quality",
    title: "Quality",
    description: "Commitment to providing world-class testing services"
  },
  {
    id: "reliability",
    title: "Reliability",
    description: "Consistent, accurate results you can trust"
  },
  {
    id: "prompt-service",
    title: "Prompt Service",
    description: "Quick turnaround time without compromising quality"
  },
  {
    id: "quick-turnaround",
    title: "Quick Turnaround Time",
    description: "Fast delivery of test results"
  },
];

export const QUALITY_POLICY_POINTS = [
  "Providing world-class testing services for Mechanical, Metallurgical & Chemical testing",
  "Enhance the competence of the laboratory in these fields",
  "Commitment from all levels of employees towards impartiality, confidentiality for laboratory activities, and validity of testing results",
  "Ensured consistency in all operations of laboratory",
  "Strictly follow the applicable statutory & regulatory requirements",
  "Providing Technical support and information for testing",
  "Continually improve the effectiveness of the laboratory management system",
];

export const NAVIGATION_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
    submenu: [
      { label: "Testimonials", href: "/about/testimonials" },
      { label: "Quality Policy", href: "/about/quality-policy" },
      { label: "Instruments", href: "/about/instruments" },
    ],
  },
  {
    label: "Testing Services",
    href: "/services",
    submenu: [
      { label: "Mechanical Testing", href: "/services/mechanical-testing" },
      { label: "Chemical Testing", href: "/services/chemical-testing" },
      { label: "Microstructure & Metallography", href: "/services/microstructure-metallography" },
      { label: "Corrosion Testing", href: "/services/corrosion-testing" },
      { label: "Failure Analysis", href: "/services/failure-analysis" },
    ],
  },
  {
    label: "Certificates",
    href: "/certificates",
  },
  {
    label: "News & Events",
    href: "/news",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Career",
    href: "/career",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export const SERVICES_OVERVIEW = [
  {
    id: "mechanical-testing",
    title: "Mechanical Testing",
    slug: "mechanical-testing",
    excerpt: "Comprehensive range of Mechanical Testing services for metallic materials",
    icon: "FaCog",
  },
  {
    id: "chemical-testing",
    title: "Chemical Testing",
    slug: "chemical-testing",
    excerpt: "Chemical analysis of ferrous and non-ferrous metals to PPM or percentage level",
    icon: "FaFlask",
  },
  {
    id: "microstructure-metallography",
    title: "Microstructure & Metallography",
    slug: "microstructure-metallography",
    excerpt: "Metallographic evaluation and microstructure examination",
    icon: "FaMicroscope",
  },
  {
    id: "corrosion-testing",
    title: "Corrosion Testing",
    slug: "corrosion-testing",
    excerpt: "Wide range of corrosion and stress corrosion tests as per ASTM NACE standards",
    icon: "FaShieldAlt",
  },
  {
    id: "failure-analysis",
    title: "Failure Analysis",
    slug: "failure-analysis",
    excerpt: "Expert failure analysis services for materials and components",
    icon: "FaSearch",
  },
];

export const CAREER_BENEFITS = [
  {
    id: "dynamic",
    title: "Dynamic Work Environment",
    description: "Collaborate with a team of creative thinkers and problem solvers",
    icon: "FaUsers",
  },
  {
    id: "growth",
    title: "Career Growth",
    description: "We invest in your professional development with training, mentorship, and advancement opportunities",
    icon: "FaChartLine",
  },
  {
    id: "inclusive",
    title: "Inclusive Culture",
    description: "Diversity and inclusion are at the heart of our workplace. We celebrate different perspectives and backgrounds",
    icon: "FaHeart",
  },
  {
    id: "balance",
    title: "Work-Life Balance",
    description: "We offer flexible work arrangements, competitive benefits, and wellness programs to support you",
    icon: "FaBalanceScale",
  },
];

export const SITE_METADATA = {
  title: "Goodness Labtech Solutions - NABL Accredited Material Testing Lab in Pune",
  description: "Professional material testing laboratory in Pune offering mechanical, chemical, metallography, corrosion testing. NABL accredited, ISO 17025:2017. Fast 24-hour turnaround.",
  keywords: "material testing lab Pune, NABL accredited lab, mechanical testing, chemical analysis, metallography, corrosion testing, failure analysis, ISO 17025, MIDC Bhosari",
  author: "Goodness Labtech Solutions LLP",
  siteUrl: "https://goodnesslab.in", // Update with actual domain
  ogImage: "/images/og-image.jpg",
};
