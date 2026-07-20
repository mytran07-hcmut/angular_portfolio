export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  tags: string[];
  mockupUrls: string[];
  role?: string;
  stack?: string[];
  timeline?: string;
  demoUrl?: string;
  caseStudyUrl?: string;
}

export interface FeaturedProject extends Project {
  problem: string;
  problemDetail: string;
  impact: string;
  impactDetail: string;
  aiFeatures: string[];
  productFeatures: string[];
}

export const FEATURED_PROJECT: FeaturedProject = {
  id: 'pockie',
  title: 'Pockie — AI Gamified Finance Assistant',
  shortDescription: 'Transform expense tracking into a motivating experience through AI pets, receipt OCR, and gamification.',
  tags: ['Featured', 'AI + Product', 'Hackathon', 'Production-minded'],
  mockupUrls: [
    'https://placehold.co/300x600/0b1c0d/ffffff?text=Pockie+Mockup+1',
    'https://placehold.co/300x600/103a16/ffffff?text=Pockie+Mockup+2',
    'https://placehold.co/300x600/0b1c0d/ffffff?text=Pockie+Mockup+3'
  ],
  problem: 'Gen Z gives up after a few days',
  problemDetail: 'Most finance apps have low retention because manual data entry is too tedious.',
  impact: '3 seconds to save a receipt',
  impactDetail: 'Designed for minimal daily actions to build habits rather than forcing users to log everything.',
  aiFeatures: [
    'OCR + receipt parsing',
    'NLP categorization',
    'Anomaly detection',
    'Personalized nudges'
  ],
  productFeatures: [
    'Gamification loop',
    'Streak system',
    'Voucher marketplace',
    'Gen Z-first UX'
  ],
  role: 'Team Leader',
  stack: ['Flutter', 'Node.js', 'MinIO', 'OpenAI', 'ViteJS'],
  timeline: '6 weeks',
  demoUrl: '#',
  caseStudyUrl: '#'
};

export const EXPLORER_PROJECTS: Project[] = [
  {
    id: 'civictech',
    title: 'CivicTech — Civic Engagement Platform',
    shortDescription: 'A platform connecting citizens with local government through an AI chatbot and community data analysis.',
    tags: ['AI + Civic', 'Web App'],
    mockupUrls: ['assets/projects/civictech/banner.jpg'],
    role: 'Fullstack Dev',
    stack: ['Angular', 'Node.js', 'LLMs'],
    timeline: '3 months',
    demoUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 'ocg',
    title: 'OCG — Optimization & Consulting Group',
    shortDescription: 'An AI system that automates the process of analyzing and optimizing business operations.',
    tags: ['B2B', 'Automation', 'Data Analytics'],
    mockupUrls: ['assets/projects/ocg/banner.jpg'],
    role: 'AI Engineer',
    stack: ['Python', 'FastAPI', 'Pandas'],
    timeline: '4 months',
    demoUrl: '#',
    caseStudyUrl: '#'
  }
];

export interface ResearchProject {
  title: string;
  field: string;
  status: string;
  description: string;
  link?: string;
}

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    title: 'Quantum-Enhanced Artifact Reduction in Mobile ECG',
    field: 'Quantum AI',
    status: 'In Progress',
    description: 'Research on leveraging Quantum Machine Learning algorithms to mitigate motion artifacts and enhance real-time ECG signal quality in wearable healthcare devices.',
  },
  {
    title: 'Vietnamese Legal Document Search Engine Using Semantic Search with Embeddings and FAISS',
    field: 'NLP',
    status: 'Completed',
    description: 'Building an AI-powered legal search system that goes beyond keyword matching to retrieve relevant Vietnamese laws and regulations based on semantic meaning.',
  }
];
