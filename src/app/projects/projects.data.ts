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
  shortDescription: 'Biến việc quản lý chi tiêu thành một trải nghiệm có động lực thông qua AI pet, OCR hóa đơn và gamification.',
  tags: ['Featured', 'AI + Product', 'Hackathon', 'Production-minded'],
  mockupUrls: [
    'https://placehold.co/300x600/0b1c0d/ffffff?text=Pockie+Mockup+1',
    'https://placehold.co/300x600/103a16/ffffff?text=Pockie+Mockup+2',
    'https://placehold.co/300x600/0b1c0d/ffffff?text=Pockie+Mockup+3'
  ],
  problem: 'Gen Z bỏ cuộc sau vài ngày',
  problemDetail: 'Hầu hết ứng dụng tài chính có retention thấp vì thao tác nhập liệu quá phiền.',
  impact: '3s để lưu một hóa đơn',
  impactDetail: 'Thiết kế hành động tối thiểu hằng ngày để tạo thói quen thay vì ép người dùng ghi chép.',
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
  role: 'Team Lead',
  stack: ['Angular', 'Python', 'OpenAI'],
  timeline: '6 tuần',
  demoUrl: '#',
  caseStudyUrl: '#'
};

export const EXPLORER_PROJECTS: Project[] = [
  {
    id: 'civictech',
    title: 'CivicTech — Civic Engagement Platform',
    shortDescription: 'Nền tảng giúp kết nối người dân với chính quyền địa phương qua AI chatbot và phân tích dữ liệu cộng đồng.',
    tags: ['AI + Civic', 'Web App'],
    mockupUrls: ['assets/projects/civictech/banner.jpg'],
    role: 'Fullstack Dev',
    stack: ['Angular', 'Node.js', 'LLMs'],
    timeline: '3 tháng',
    demoUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 'ocg',
    title: 'OCG — Optimization & Consulting Group',
    shortDescription: 'Hệ thống AI tự động hóa quy trình phân tích và tối ưu hóa hoạt động doanh nghiệp.',
    tags: ['B2B', 'Automation', 'Data Analytics'],
    mockupUrls: ['assets/projects/ocg/banner.jpg'],
    role: 'AI Engineer',
    stack: ['Python', 'FastAPI', 'Pandas'],
    timeline: '4 tháng',
    demoUrl: '#',
    caseStudyUrl: '#'
  }
];
