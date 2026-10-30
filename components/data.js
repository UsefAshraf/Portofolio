export const PROFILE = {
  name: "Yousef Ashraf",
  fullName: "Yousef Ashraf Abdelmoez",
  title: "Full Stack Software Engineer",
  email: "usefashraf.dev@gmail.com",
  phone: "+20 114 314 8742",
  location: "Cairo, Egypt",
  github: "https://github.com/UsefAshraf",
  linkedin: "https://www.linkedin.com/in/youssef-ashraf0/",
  cv: "/Yousef-Ashraf-CV.pdf",
}

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "CISS",
    period: "07/2026 – Present",
    location: "Cairo, Egypt",
    points: [
      "Developed a SaaS e-commerce app (React, .NET) for a Bahrain-based jewellery brand serving customers across the MENA region and the Americas.",
      "Worked in a team to build and deploy a large-scale web platform (React, Node.js) serving about 10,000 users; supported testing, bug fixes, and user feedback surveys.",
      "Delivered features and system integrations for EgyptAir's large-scale aviation platforms.",
      "Built a bilingual (English/Arabic) RAG assistant with Next.js, PostgreSQL + pgvector, Voyage AI, and Claude Haiku 4.5, using hybrid search, streamed answers, and a human-handoff fallback; compared Gemini, Groq, and Claude to select the best model.",
      "Developed an AI CV-screening system (Next.js) that analyzes and scores candidate CVs to support hiring.",
    ],
    tags: ["React", "Next.js", "Node.js", ".NET", "PostgreSQL", "pgvector", "Claude API"],
  },
  {
    role: "Software Engineer",
    company: "Blue Developments",
    period: "01/2026 – 06/2026",
    location: "Cairo, Egypt · Hybrid",
    points: [
      "Built a car-repair booking platform (React, NestJS) for a US company, with WhatsApp notifications, an AI booking assistant, and an admin dashboard.",
      "Developed REST APIs, optimized databases, customized Odoo modules, and built React Native and Firebase mobile apps.",
    ],
    tags: ["React", "NestJS", "Odoo", "React Native", "Firebase"],
  },
  {
    role: "Integration Developer Intern",
    company: "Worex Technology",
    period: "01/2026 – 04/2026",
    location: "Maadi, Egypt · Hybrid, Part-time",
    points: [
      "Built integration flows and APIs with IBM App Connect Enterprise, ESQL, and IBM MQ; tested with Postman and SoapUI.",
    ],
    tags: ["IBM ACE", "ESQL", "IBM MQ", "SoapUI"],
  },
  {
    role: "Full Stack Web Development Intern",
    company: "Egyptian Space Agency (EgSA)",
    period: "07/2025 – 10/2025",
    location: "New Capital, Egypt · Onsite",
    points: [
      "Built satellite-data dashboards with React.js, Express.js, and PostgreSQL, and integrated real-time telemetry APIs.",
    ],
    tags: ["React", "Express", "PostgreSQL"],
  },
  {
    role: "Full Stack Web Development Intern",
    company: "Algoriza",
    period: "06/2025 – 07/2025",
    location: "Cairo, Egypt · Remote",
    points: [
      "Built responsive full-stack apps with React.js, Node.js, and MongoDB, including authentication, API integration, and state management, in Agile teams.",
    ],
    tags: ["React", "Node.js", "MongoDB"],
  },
]

export const EDUCATION = [
  {
    title: "B.Sc. Communication and Computer Engineering",
    place: "Faculty of Engineering at Shoubra, Benha University",
    detail: "Graduated 2025 · Grade: Very Good",
  },
  {
    title: "Open-Source Applications Developer, Full-Stack Web Development",
    place: "NTI, Smart Village",
    detail: "10/2026 – 12/2026 · 420-hour program · React, Next.js, Node.js, PostgreSQL, MongoDB, Docker, AWS",
  },
]

export const SKILLS = [
  { group: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "Python", "C#", "SQL", "HTML5", "CSS3"] },
  { group: "Frontend", items: ["React.js", "Next.js", "Angular", "React Native", "Redux Toolkit", "Zustand", "Tailwind CSS", "Shadcn/UI", "Bootstrap"] },
  { group: "Backend", items: ["Node.js", "NestJS", "Express.js", ".NET", "REST APIs", "Socket.IO", "Kafka"] },
  { group: "Databases", items: ["PostgreSQL", "MongoDB", "Firebase", "pgvector"] },
  { group: "AI & ERP", items: ["RAG Systems", "Claude API", "Voyage AI", "LLM Integration", "Odoo Module Development"] },
  { group: "Testing & DevOps", items: ["Jest", "Supertest", "Cypress", "Postman", "Docker", "GitHub Actions", "AWS", "CI/CD", "Git", "Agile/Scrum"] },
]

export const PROFESSIONAL_PROJECTS = [
  {
    title: "Jewellery E-Commerce SaaS",
    description: "Multi-region e-commerce platform for a Bahrain-based jewellery brand, selling to customers across the MENA region and the Americas.",
    tags: ["React", ".NET"],
  },
  {
    title: "Bilingual RAG Assistant",
    description: "English/Arabic assistant with hybrid search, streamed answers, and a human-handoff fallback. Benchmarked Gemini, Groq, and Claude to pick the best model.",
    tags: ["Next.js", "pgvector", "Voyage AI", "Claude"],
  },
  {
    title: "AI CV Screening",
    description: "Analyzes and scores candidate CVs to help hiring teams shortlist faster.",
    tags: ["Next.js", "LLMs"],
  },
  {
    title: "Large-Scale Web Platform",
    description: "Confidential platform serving about 10,000 users, built with the team: development, deployment, testing, and user feedback.",
    tags: ["React", "Node.js"],
  },
  {
    title: "Car-Repair Booking Platform",
    description: "Booking platform for a US company with WhatsApp notifications, an AI booking assistant, and an admin dashboard.",
    tags: ["React", "NestJS"],
  },
]

export const OPEN_SOURCE_PROJECTS = [
  {
    title: "Estate Hub",
    description: "Full-featured real estate platform with listings, search, authentication, and transactions, deployed on AWS.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "AWS"],
    links: [
      { label: "Frontend", href: "https://github.com/UsefAshraf/RealEstate_project" },
      { label: "Backend", href: "https://github.com/UsefAshraf/Estate_hub" },
    ],
    liveUrl: "https://statehub.duckdns.org/",
  },
  {
    title: "Full Stack Chat App",
    description: "Real-time chat with authentication, message persistence, and online/offline presence tracking.",
    tags: ["React", "Node.js", "Socket.IO", "MongoDB"],
    links: [{ label: "Code", href: "https://github.com/UsefAshraf/Full_stack_chat_app" }],
  },
  {
    title: "Video Calling App",
    description: "Peer-to-peer video calls using WebRTC, with a Node.js and Socket.IO signaling server.",
    tags: ["React", "WebRTC", "Socket.IO"],
    links: [{ label: "Code", href: "https://github.com/UsefAshraf/Simple_Video_web" }],
  },
  {
    title: "Event-Driven Activity Logs",
    description: "Scalable microservice for real-time processing of user activity logs.",
    tags: ["Node.js", "Express", "Kafka"],
    links: [{ label: "Code", href: "https://github.com/UsefAshraf/Eyego_task" }],
  },
  {
    title: "Social Media API",
    description: "REST API with authentication, posts, comments, likes, real-time chat, and notifications.",
    tags: ["Node.js", "Express", "MongoDB", "Socket.IO"],
    links: [{ label: "Code", href: "https://github.com/UsefAshraf/Social-_Media_API_NTI" }],
  },
  {
    title: "Sequelize REST API",
    description: "Clean-architecture API with Users/Posts relations and automated tests.",
    tags: ["Node.js", "Sequelize", "Jest", "Supertest"],
    links: [{ label: "Code", href: "https://github.com/UsefAshraf/Simple_Social_media_app_with_sequelize" }],
  },
  {
    title: "FreshCart",
    description: "E-commerce app with cart, wishlist, checkout, and payments, built in both React and Angular.",
    tags: ["React", "Angular", "Tailwind CSS"],
    links: [
      { label: "React", href: "https://github.com/UsefAshraf/fresh-cart" },
      { label: "Angular", href: "https://github.com/UsefAshraf/fresh-cart-angular" },
    ],
    liveUrl: "https://fresh-cart-angular-nine.vercel.app",
  },
  {
    title: "Task View",
    description: "Task manager with category filtering, pagination, and a Supabase backend.",
    tags: ["React", "React Query", "Supabase"],
    links: [{ label: "Code", href: "https://github.com/UsefAshraf/Task_View" }],
    liveUrl: "https://taskview-six.vercel.app",
  },
  {
    title: "Geo Egypt",
    description: "Offline map search tool for Egyptian cities using OpenLayers and JSON geodata.",
    tags: ["React", "OpenLayers"],
    links: [{ label: "Code", href: "https://github.com/UsefAshraf/GeoEgypt" }],
    liveUrl: "https://geo-egypt.vercel.app",
  },
  {
    title: "Predictive EV Battery Charging",
    description: "Real-time battery monitoring with UART, MQTT, and machine learning for SOC & SOH prediction.",
    tags: ["Python", "MQTT", "Machine Learning"],
    links: [{ label: "Code", href: "https://github.com/UsefAshraf/Predictive_EV_battery_Charging" }],
  },
]
