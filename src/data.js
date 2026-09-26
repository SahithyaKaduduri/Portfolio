import profilePhoto from './assets/profilephoto.jpg';
import certOracle from './assets/certs/cert_oracle.jpg';
import certServiceNow from './assets/certs/cert_servicenow.jpg';
import certTcsIon from './assets/certs/cert_tcsion.jpg';
import certCisco from './assets/certs/cert_cisco.jpg';
import certSupraja from './assets/certs/cert_supraja.jpg';
import certMagistech from './assets/certs/cert_magistech.jpg';
import certSih from './assets/certs/cert_sih.jpg';
import certHacksavvy26 from './assets/certs/cert_hacksavvy26.jpg';
import certHacksavvy25 from './assets/certs/cert_hacksavvy25.jpg';
import certMahindra from './assets/certs/cert_mahindra.jpg';

export const profile = {
  name: 'Kaduduri Sahithya',
  tagline: 'A passionate student who wants to learn new things — exploring AI, data and design one project at a time.',
  location: 'Hyderabad, India',
  email: 'sahithyakaduduri@gmail.com',
  phone: '+91 82476 98265',
  linkedin: 'https://www.linkedin.com/in/kaduduri-sahithya-043a0b342/',
  github: 'https://github.com/SahithyaKaduduri',
  resumeUrl: '/SahithyaKaduduri Resume.pdf',
  photo: profilePhoto,
  bio: [
    "Hi, I'm Sahithya — currently pursuing my Bachelor of Technology in Information Technology at Mahatma Gandhi Institute of Technology, Hyderabad. I like connecting with people and picking up knowledge in places I haven't explored yet.",
    "I'd describe myself as a tech aspirant with a confident, leadership-driven approach — someone who learns by building.",
  ],
  hobbies: ['Drawing', 'Gaming', 'Listening to music'],
};

export const stats = [
  { num: '8.99', label: 'CGPA at MGIT' },
  { num: '4', label: 'Hackathons & projects' },
  { num: '10+', label: 'Certifications' },
  { num: '1st', label: "Place, Code Scramble '25" },
];

export const education = [
  { years: '2024 — Present', school: 'Mahatma Gandhi Institute of Technology, Hyderabad', degree: 'B.E. in Information Technology', score: '8.99 / 10' },
  { years: '2022 — 2024', school: 'Alphores Junior College', degree: 'Intermediate', score: '97%' },
  { years: '2012 — 2022', school: 'Siddartha High School', degree: 'Schooling', score: '9.8 GPA' },
];

export const skillGroups = [
  { category: 'Languages & Foundations', skills: ['C', 'Python', 'Data Structures', 'HTML', 'CSS', 'JavaScript'] },
  { category: 'Concepts', skills: ['Machine Learning', 'Data Science', 'Operating Systems', 'MySQL', 'IoT'] },
  { category: 'Tools & Platforms', skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Figma', 'Canva', 'Tableau', 'Draw.io', 'Overleaf'] },
  { category: 'Ways of working', skills: ['Vibe coding', 'Hackathon sprints', 'Rapid prototyping'] },
];

export const projects = [
  {
    title: '2D Image to Point Cloud',
    meta: 'Independent build',
    description: 'A tool that converts a flat 2D image into a DOT-cloud model representation, exploring how depth and structure can be inferred from a single image.',
    stack: ['Python', 'Computer Vision'],
    codeUrl: 'https://github.com/SahithyaKaduduri/2D_To_PointCloud',
  },
  {
    title: 'Smart Tourist Monitoring & Incident Response',
    meta: 'Smart India Hackathon · Sep 2025',
    description: "A safety system for tourists combining AI, geofencing and a blockchain-based digital ID — built with a team for the Smart India Hackathon's internal round at MGIT.",
    stack: ['AI', 'Geofencing', 'Blockchain'],
  },
  {
    title: 'Real vs. AI-Generated Image Detector',
    meta: 'HackSavvy-26 · Feb 2026',
    description: 'Built during a 24-hour national-level hackathon to classify whether a given image is a real photograph or AI-generated.',
    stack: ['Machine Learning', 'Image Classification'],
  },
  {
    title: 'Alcohol & Sleep Detection While Driving',
    meta: 'HackSavvy-25 · Mar 2025',
    description: 'A driver-safety concept that detects signs of alcohol influence and drowsiness in real time, aimed at reducing accidents caused by impaired driving.',
    stack: ['IoT', 'Sensors', 'Safety Systems'],
  },
];

export const certificates = [
  { img: certOracle, title: 'Oracle Certified Foundations Associate — Agentic AI', issuer: 'Oracle University · Aug 2026' },
  { img: certServiceNow, title: 'ServiceNow Virtual Internship Program', issuer: 'ServiceNow University · Apr 2026' },
  { img: certTcsIon, title: 'Generative AI Essentials', issuer: 'TCS iON, AI for All · May 2026' },
  { img: certCisco, title: 'Operating Systems Basics', issuer: 'Cisco Networking Academy · May 2026' },
  { img: certSupraja, title: 'Cyber Security & Ethical Hacking Workshop', issuer: 'Supraja Technologies · Feb 2026' },
  { img: certMagistech, title: 'Code Scramble — 1st Place', issuer: 'MAGISTECH 2025, ISTE MGIT · Sep 2025' },
  { img: certSih, title: 'Smart India Hackathon 2025 — Internal Round', issuer: 'MGIT, Team Journautics · Sep 2025' },
  { img: certHacksavvy26, title: 'HackSavvy-26 — 24hr National Hackathon', issuer: 'MGIT · Feb 2026' },
  { img: certHacksavvy25, title: 'HackSavvy-25 — 24hr National Hackathon', issuer: 'MGIT · Mar 2025' },
  { img: certMahindra, title: '418 Hackathon — AEON 2026', issuer: 'Mahindra University · Apr 2026' },
];
