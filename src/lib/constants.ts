export const personalInfo = {
  name: "Jaymin Chavda",
  role: "B.Tech CSE Student (Semester 6)",
  tagline: "Building Smart Tech Solutions with Innovation",
  email: "jaymin29chavda@gmail.com",
  location: "Gujarat, India",
  university: "Vishwakarma Government Engineering College (VGEC)",
  cpi: 8.12,
  goal: "Machine Learning & Data Science Enthusiast",
  github: "https://github.com/jaymin_2901",
  linkedin: "https://linkedin.com/in/jaymin-chavda",
  twitter: "https://twitter.com/jayminchavda",
  profileImage: "/profile.png", // Your profile photo
};

export const skills = {
  programming: [
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "Java", level: 70 },
    { name: "C++", level: 65 },
    { name: "SQL", level: 80 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 70 },
    { name: "VS Code", level: 95 },
    { name: "Figma", level: 60 },
    { name: "Jupyter", level: 85 },
    { name: "Linux", level: 75 },
  ],
  concepts: [
    { name: "Data Structures", level: 80 },
    { name: "Algorithms", level: 75 },
    { name: "Machine Learning", level: 70 },
    { name: "Web Development", level: 85 },
    { name: "Database Design", level: 80 },
    { name: "Cloud Computing", level: 65 },
  ],
};

export const projects = [
  {
    id: 4,
    title: "Car Price Prediction",
    description: "Machine learning model to predict car prices using Random Forest Regressor. Features data preprocessing with Pandas, NumPy for numerical operations, and Flask backend API. Includes data visualization with Matplotlib and Seaborn.",
    tech: ["Python", "Scikit-learn", "Random Forest", "Flask", "Pandas", "NumPy", "Matplotlib", "Seaborn", "HTML", "CSS", "Bootstrap"],
    category: "Machine Learning",
    github: "https://github.com/jaymin_2901/car-price-prediction",
    live: "",
    image: "/projects/car-price.jpg",
  },
  {
    id: 1,
    title: "Clinic Management System",
    description: "A comprehensive clinic management system featuring patient records, appointment scheduling, prescription management, and billing. Built with a modern React frontend and robust backend API.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    category: "Web Application",
    github: "https://github.com/jaymin-2901/bansari-clinic",
    live: "https://bansari-clinic.vercel.app",
    image: "/projects/clinic.jpg",
  },
  {
    id: 3,
    title: "Portfolio System",
    description: "A next-generation portfolio website featuring AI chatbot, smooth animations, glassmorphism design, and dark/light mode toggle. Built with modern web technologies.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Web Application",
    github: "https://github.com/jaymin-2901/portfolio",
    live: "https://jaymin-chavda-dev.vercel.app/",
    image: "/projects/portfolio.jpeg",
  },
  {
    id: 5,
    title: "ResumeIQ",
    description: "AI-powered resume analysis and career assistant platform that helps users optimize resumes with ATS scoring and job-specific recommendations. Features intelligent resume parsing, real-time feedback, secure authentication, and responsive dashboard UI with modern full-stack architecture.",
    tech: ["React", "Vite", "JavaScript", "Node.js", "Express.js", "MongoDB", "JWT", "AI Integration", "REST API", "HTML", "CSS", "Bootstrap"],
    category: "Full Stack Development",
    github: "https://github.com/jaymin-2901/resumeiq",
    live: "",
    image: "/projects/resumeiq.jpeg",
  },
  {
    id: 6,
    title: "Intelligent Docs Organizer",
    description: "AI-powered desktop application for intelligent document management and categorization. Features automated document classification, PDF viewing with gesture controls using MediaPipe, secure file organization, SQLite database persistence, and a modern Electron-based interface with React and Express backend integration.",
    tech: ["React", "Vite", "Electron", "Node.js", "Express.js", "Python", "SQLite", "MediaPipe", "Machine Learning", "JavaScript", "CSS", "Docker"],
    category: "AI & Desktop Application",
    github: "https://github.com/jaymin-2901/Intelligent-Docs-Organizer",
    live: "https://intelligent-docs-organizer.vercel.app",
    image: "/projects/docs-organizer.jpeg",
  },
  {
    id: 7,
    title: "Sellfinity E-Commerce Platform",
    description: "Production-ready full-stack e-commerce platform featuring a premium glassmorphism UI and modern shopping experience. Includes JWT authentication, product catalog with filtering and pagination, cart and checkout system, order management, reviews, and a powerful admin dashboard with analytics and CRUD operations.",
    tech: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Tailwind CSS", "Framer Motion", "Axios", "React Router", "JavaScript"],
    category: "Full Stack Development",
    github: "https://github.com/jaymin-2901/sellfinity-ecommerce-platform",
    live: "https://sellfinity-ecommerce-platform.vercel.app/",
    image: "/projects/sellfinity.jpeg",
  },
  {
    id: 8,
    title: "Customer Churn Analysis",
    description: "Repository for the Customer Churn Intelligence analysis project.",
    tech: ["Jupyter Notebook"],
    category: "Data Science",
    github: "https://github.com/jaymin-2901/Customer-Churn-Intelligence-Platform",
    live: "",
    image: "/projects/default.svg",
  },
  {
    id: 9,
    title: "Nutri AI",
    description: "AI-powered nutrition and food decision platform that analyzes meals using Gemini 1.5 Flash AI. Features intelligent meal scoring, personalized nutrition recommendations, macro tracking dashboard, AI chat assistant, streak system, and healthy food discovery with a modern glassmorphism interface",
    tech: ["JavaScript"],
    category: "Web Application",
    github: "https://github.com/jaymin-2901/nutri--ai",
    live: "https://nutri-ai-oqyg.vercel.app/",
    image: "/projects/nutri-ai.jpeg",
  },


];

export const timeline = [
  {
    id: 1,
    title: "Started B.Tech Computer Science and Engineering",
    organization: "Vishwakarma Government Engineering College (VGEC)",
    date: "2023",
    description: "Began journey in Computer Science and Engineering, discovering passion for combining technology with business applications.",
    type: "education",
  },
  {
    id: 2,
    title: "First Web Development Project",
    organization: "Personal",
    date: "2024",
    description: "Built first full-stack web application, learning React, Node.js, and database management.",
    type: "project",
  },
  {
   id: 3,
   title: "Car Price Prediction (ML)",
   organization: "Personal",
   date: "2025",
   description: "Built machine learning model using Random Forest Regressor to predict car prices. Used Pandas, NumPy for data preprocessing and Matplotlib, Seaborn for visualization.",
   type: "project",
 },
  {
    id: 4,
    title: "Clinic Management System",
    organization: "Bansari Homeopathic Clinic",
    date: "2026",
    description: "Developed complete clinic management solution for local homeopathic practice, handling 500+ patient records.",
    type: "work",
  },
];

export const achievements = [
  {
    id: 1,
    title: "Academic Excellence",
    value: "8.12",
    suffix: "CPI",
    description: "Current Cumulative Performance Index",
  },
  {
    id: 2,
    title: "Father's Achievement",
    value: "India Book",
    suffix: "Record",
    description: "Family legacy in record-breaking achievements",
  },
  {
    id: 3,
    title: "Projects Completed",
    value: "10+",
    suffix: "",
    description: "Full-stack projects delivered",
  },
  {
    id: 4,
    title: "Tech Stack",
    value: "15+",
    suffix: "",
    description: "Technologies mastered",
  },
];

export const chatBotResponses: Record<string, string> = {
  greeting: "Hello! I'm Jaymin's AI assistant. How can I help you today?",
  about: "Jaymin Chavda is a B.Tech CSE student at Vishwakarma Government Engineering College (VGEC) (Semester 6) with a CPI of 8.12. He's passionate about Machine Learning and Data Science, aspiring to become a Data Scientist while being a tech enthusiast.",
  skills: "Jaymin is proficient in Python, JavaScript, TypeScript, Java, and C++. He has expertise in web development, machine learning, data science, and database design. He works with tools like React, Node.js, Flask, Scikit-learn, Docker, and Git.",
  projects: "Jaymin has built several projects including:\n1. Car Price Prediction (ML with Random Forest)\n2. Clinic Management System\n3. This Portfolio Website\n\nWould you like to know more about any specific project?",
  availability: "Jaymin is currently open to internship opportunities in machine learning, data science, and web development. Feel free to reach out via email!",
  contact: "You can reach Jaymin at:\nEmail: jaymin29chavda@gmail.com\nLinkedIn: linkedin.com/in/jaymin-chavda\nGitHub: github.com/jaymin_2901",
  education: "Jaymin is pursuing B.Tech in Computer Science and Engineering at Vishwakarma Government Engineering College (VGEC). He's passionate about Machine Learning and Data Science.",
  default: "That's an interesting question! Jaymin is always excited to connect. Feel free to ask about his skills, projects, education, or availability for opportunities.",
};

export const quickQuestions = [
  "Who is Jaymin?",
  "What are his skills?",
  "Tell me about his projects",
  "Is he available for work?",
  "How can I contact him?",
];
