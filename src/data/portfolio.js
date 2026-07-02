export const ROLES = [
  'Full Stack Apps 🚀',
  'AI-Powered Products 🤖',
  'Blockchain Solutions ⛓️',
  'ML Models 🧠',
  'Open Source 🌍',
  'Smart Contracts 📜',
];

export const STATS = [
  { value: '950+', label: 'LeetCode Problems' },
  { value: '3',    label: 'Hackathon Wins' },
  { value: '500+', label: 'Day Streak' },
  { value: '5+',   label: 'OSS PRs Merged' },
];

export const LINKS = {
  github:   'https://github.com/sunkireddy-Barath',
  linkedin: 'https://www.linkedin.com/in/sunkireddy-barath/',
  email:    'sunkireddybarath07@gmail.com',
  phone:    '+91 8438784178',
  location: 'Chennai, Tamil Nadu, India',
  leetcode:   'https://leetcode.com/barath80',
  codechef:   'https://www.codechef.com/users/barath80',
  codeforces: 'https://codeforces.com/profile/sunkireddybarath07',
};

export const EDUCATION = {
  degree:      'B.E. — Computer Science & Engineering',
  institution: 'Chennai Institute of Technology',
  year:        '2024 – 2028',
  location:    'Chennai, India',
  cgpa:        8.8,
  highlights:  ['Data Structures', 'Algorithms', 'Machine Learning', 'DBMS', 'Operating Systems', 'OOPs'],
};

export const INTERNSHIPS = [
  {
    company:  'KaizenSpark Tech Pvt Ltd',
    role:     'Full Stack Developer',
    period:   'Jun – Jul 2025',
    location: 'Chennai, India',
    color:    '#00f5ff',
    color2:   '#0066ff',
    initials: 'KS',
    points: [
      "Built the company's new official website using modern web technologies end-to-end",
      'Delivered clean UI/UX with optimized performance and seamless multi-device user experience',
      'Collaborated with team in agile workflow shipping production-ready features',
    ],
    stack: ['React.js', 'Node.js', 'UI/UX', 'Performance Optimization'],
  },
  {
    company:  'NullClass EduTech Pvt Ltd',
    role:     'Data Science Intern',
    period:   'Nov 2025 – Feb 2026',
    location: 'Krishnagiri, India',
    color:    '#ff00ff',
    color2:   '#8800ff',
    initials: 'NC',
    points: [
      'Developed an Emotion Detection system using machine learning and computer vision techniques',
      'Built and trained models to recognize human emotions from facial expressions with high accuracy',
      'Improved user behavior analysis, engagement metrics, and intelligent decision-making systems',
    ],
    stack: ['Python', 'TensorFlow', 'OpenCV', 'Scikit-learn', 'Pandas'],
  },
  {
    company:  'L2M Labs',
    role:     'Software Development Intern',
    period:   'Jan – Mar 2026',
    location: 'Chennai, India',
    color:    '#00ff88',
    color2:   '#00aa44',
    initials: 'L2',
    points: [
      'Developed Enrollix AI — large-scale student registration platform for CIT Chennai',
      'Built scalable backend architecture with automation to handle high user traffic efficiently',
      'Reduced manual workload and streamlined registration processes, improving operational efficiency',
    ],
    stack: ['Full Stack', 'AI', 'Scalable Architecture', 'Automation'],
  },
];

export const OSS = [
  {
    org:     'Wikimedia Foundation',
    project: 'WikiEdu Dashboard — GSoC 2026',
    desc:    'Contributed to the Wiki Education Foundation during the GSoC 2026 contribution period, improving the WikiEduDashboard platform through multiple frontend and internationalization fixes.',
    prs: [
      { id: '#6705', label: 'Fix image caption handling in GetRevisionPlaintext',          status: 'merged', href: 'https://github.com/WikiEducationFoundation/WikiEduDashboard/pull/6705' },
      { id: '#6752', label: 'Resolve i18n deprecation warnings in user profile headers',   status: 'merged', href: 'https://github.com/WikiEducationFoundation/WikiEduDashboard/pull/6752' },
      { id: '#6758', label: 'Improve image tooltip pluralization logic',                   status: 'merged', href: 'https://github.com/WikiEducationFoundation/WikiEduDashboard/pull/6758' },
      { id: '#6754', label: 'Remove hardcoded strings from embed_stats_button.jsx',        status: 'merged', href: 'https://github.com/WikiEducationFoundation/WikiEduDashboard/pull/6754' },
      { id: '#6786', label: 'Fix internationalized Edit button behavior in Block component',status: 'merged', href: 'https://github.com/WikiEducationFoundation/WikiEduDashboard/pull/6786' },
    ],
    stack:    ['Ruby on Rails', 'React.js', 'i18n', 'Frontend'],
    prCount:  '5 PRs Merged',
    featured: true,
  },
  {
    org:     'Data for the Common Good',
    project: 'FHIR Resource Tabular Viewer',
    desc:    'Contributed to the FHIR Resource Tabular Viewer by working on developer workflow setup and project configuration improvements for better onboarding and DX.',
    prs: [
      { id: '#46', label: 'Dev workflow setup and project configuration improvements', status: 'review' },
    ],
    stack:    ['FHIR', 'Healthcare', 'Dev Tooling', 'Config'],
    prCount:  'Under Review',
    featured: false,
  },
];

export const PROJECTS = [
  {
    title:  'AgriSmart',
    sub:    'Smart Farming with AI',
    desc:   'AI-powered platform for crop recommendation, disease detection, weather insights, and multilingual voice support. Plant disease detection API achieves 80–90% accuracy across common crop diseases.',
    icon:   '🌿',
    color:  '#00ff88',
    color2: '#00aa44',
    metrics: [
      { val: '80-90%', key: 'Disease Detection Accuracy' },
      { val: '40%',    key: 'Crop Loss Reduction' },
    ],
    stack:  ['React.js', 'Flask', 'Supabase', 'Python', 'NumPy', 'Pandas', 'Scikit-learn'],
    github: '#',
    demo:   '#',
  },
  {
    title:  'Lendora AI',
    sub:    'Decentralized Lending & Borrowing AI',
    desc:   'AI-driven platform automating borrower-lender negotiations with predictive risk analysis. Generates optimized loan agreements using intelligent decision models.',
    icon:   '💰',
    color:  '#ffd700',
    color2: '#ff8c00',
    award:  { label: '🥇 1st Place', type: 'winner' },
    metrics: [
      { val: '$2,000', key: 'Prize Won' },
      { val: '3000+',  key: 'Teams Competed' },
    ],
    stack:  ['Blockchain', 'AI/ML', 'Full Stack', 'DeFi', 'Smart Contracts'],
    github: '#',
    demo:   '#',
    hackathon: 'Cardano Asia × IBW 2025',
  },
  {
    title:  'Contexta',
    sub:    'Autonomous AI Threat Intelligence Platform',
    desc:   'Multi-agent AI SOC platform for vulnerability analysis and attack path simulation. Uses graph-based digital twin simulation with custom BWVS risk scoring.',
    icon:   '🛡️',
    color:  '#ff0055',
    color2: '#8800ff',
    award:  { label: '🥉 2nd Runner-Up', type: 'runner' },
    metrics: [
      { val: '₹20K',        key: 'Prize Won' },
      { val: 'Multi-Agent', key: 'AI Architecture' },
    ],
    stack:  ['Next.js', 'FastAPI', 'PostgreSQL', 'AI Agents', 'Graph DB'],
    github: '#',
    demo:   '#',
    hackathon: 'BeachHack National 2026',
  },
  {
    title:  'NeuroCred',
    sub:    'AI On-Chain Credit Passport',
    desc:   'AI-powered decentralized credit system evaluating wallet behavior for DeFi lending. Stores credit scores as Soulbound NFTs for tamper-proof on-chain verification.',
    icon:   '🔗',
    color:  '#00f5ff',
    color2: '#0066ff',
    award:  { label: '🥇 1st Place', type: 'winner' },
    metrics: [
      { val: '$2,500',    key: 'Prize Won' },
      { val: 'Soulbound', key: 'NFT Credit Scores' },
    ],
    stack:  ['Solidity', 'FastAPI', 'Next.js', 'Web3', 'AI', 'NFTs'],
    github: '#',
    demo:   '#',
    hackathon: 'QIE International Blockchain 2026',
  },
  {
    title:  'PredicSure',
    sub:    'Smart Urban Utility Outage Prediction',
    desc:   'AI/ML platform predicting outages in electricity, water, and disaster management systems. Uses time-series forecasting, anomaly detection, and real-time alert mechanisms.',
    icon:   '⚡',
    color:  '#ff8c00',
    color2: '#ff0055',
    metrics: [
      { val: '1.8s',      key: 'Faster Response Time' },
      { val: 'Real-time', key: 'Alert System' },
    ],
    stack:  ['React Native', 'Flask', 'Supabase', 'Python', 'Scikit-learn'],
    github: '#',
    demo:   '#',
  },
];

export const SKILLS = [
  {
    category: 'Languages',
    icon: '⌨️',
    type: 'bar',
    items: [
      { name: 'Python',             level: 95, color: '#00f5ff' },
      { name: 'JavaScript / TS',    level: 90, color: '#ffd700' },
      { name: 'C / C++',            level: 82, color: '#ff00ff' },
      { name: 'Java',               level: 75, color: '#ff8c00' },
      { name: 'SQL',                level: 78, color: '#00ff88' },
      { name: 'Ruby',               level: 68, color: '#ff4444' },
    ],
  },
  {
    category: 'Frontend & Design',
    icon: '🎨',
    type: 'tags',
    items: ['React.js', 'Next.js', 'HTML / CSS', 'Bootstrap', 'Tailwind CSS', 'React Native', 'Figma', 'Canva'],
  },
  {
    category: 'Backend & Database',
    icon: '⚙️',
    type: 'tags',
    items: ['Node.js', 'Express.js', 'Flask', 'FastAPI', 'Ruby on Rails', 'PostgreSQL', 'MongoDB', 'MySQL', 'Supabase', 'Firebase'],
  },
  {
    category: 'Artificial Intelligence and Machine Learning',
    icon: '🤖',
    type: 'tags',
    items: ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'TensorFlow', 'PyTorch', 'OpenCV', 'Keras'],
  },
  {
    category: 'DevOps and Cloud',
    icon: '☁️',
    type: 'tags',
    items: ['Git', 'GitHub', 'Docker', 'Jenkins', 'Linux', 'Shell Scripting', 'CI/CD', 'AWS (EC2, S3)'],
  },
  {
    category: 'CS Fundamentals',
    icon: '📐',
    type: 'tags',
    items: ['Data Structures', 'Algorithms', 'Operating Systems', 'DBMS', 'OOPs', 'Machine Learning', 'Computer Networks'],
  },
];

export const HACKATHONS = [
  {
    place:   '🥈',
    name:    'Hack Karnataka',
    project: 'Top 2 (Finalist)',
    stats:   'State Level',
    prize:   '',
    color:   '#c0c0c0',
    year:    '2024',
  },
  {
    place:   '🥇',
    name:    'Cardano Asia × IBW Hackathon 2025',
    project: 'Lendora AI — AI Financial Platform',
    stats:   'Asia Level · 3000+ teams',
    prize:   '$2,000 USD',
    color:   '#ffd700',
    year:    '2025',
  },
  {
    place:   '🥉',
    name:    "BeachHack National Hackathon '26",
    project: 'Contexta — Cyber Threat Intelligence Platform',
    stats:   'National Level',
    prize:   '₹20,000',
    color:   '#c0c0c0',
    year:    '2026',
  },
  {
    place:   '🥇',
    name:    "QIE International Blockchain Hackathon '26",
    project: 'NeuroCred — On-Chain Credit Passport for DeFi',
    stats:   'International',
    prize:   '$2,500 USD',
    color:   '#ffd700',
    year:    '2026',
  },
];

export const CP = [
  {
    platform: 'LeetCode',
    handle:   '@barath80',
    initials: 'LC',
    color:    '#ffa500',
    link:     'https://leetcode.com/barath80',
    stats: [
      { val: '950', key: 'Problems Solved', suffix: '+' },
      { val: '1790', key: 'Max Rating', suffix: '' },
      { val: '500', key: 'Day Streak', suffix: '+' },
    ],
    badge: 'Top 10% Globally',
    extra: 'Daily Streak • Contest Contender',
  },
  {
    platform: 'CodeChef',
    handle:   '@barath80',
    initials: 'CC',
    color:    '#7c5c3e',
    link:     'https://www.codechef.com/users/barath80',
    stats: [
      { val: '222', key: 'Problems Solved', suffix: '+' },
      { val: '1183', key: 'Max Rating', suffix: '' },
    ],
    badge: 'Bronze & Gold Badges',
    extra: 'Div 4 • Contest Contender',
  },
  {
    platform: 'CodeForces',
    handle:   '@sunkireddybarath07',
    initials: 'CF',
    color:    '#1f8dd6',
    link:     'https://codeforces.com/profile/sunkireddybarath07',
    stats: [
      { val: '706', key: 'Max Rating', suffix: '' },
      { val: '6', key: 'Weeks Active', suffix: '' },
    ],
    badge: 'Newbie',
    extra: 'Enhancing Logic & Efficiency',
  },
];
