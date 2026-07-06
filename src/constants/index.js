import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  git,
  mongodb,
  docker,
  python,
  java,
  cplusplus,
  flask,
  fastapi,
  firebase,
  vercel,
  vscode,
  github_tech,
  render_tech,
  railway_tech,
  geeksforgeeks,
  education,
  carrent,
  jobit,
  tripguide,
  typescript,
  redux,
  tailwind,
  nodejs,
  figma,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work & Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "AI & ML Enthusiast",
    icon: creator,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "B.Tech CSE Student",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Bachelor of Technology (B.Tech)",
    company_name: "Amity University, Noida",
    icon: education,
    iconBg: "#383E56",
    date: "2024 – 2028",
    points: [
      "Pursuing a Bachelor of Technology in Computer Science & Engineering.",
      "Current CGPA: ~6",
      "Gaining hands-on experience in computer science fundamentals, data structures, and algorithms.",
      "Exploring Python development, AI/ML models, backend development, and web systems.",
    ],
  },
  {
    title: "Team Coordinator",
    company_name: "GeeksforGeeks Student Chapter",
    icon: geeksforgeeks,
    iconBg: "#E6DEDD",
    date: "2024 – Present",
    points: [
      "Managed technical event coordination and organization for student activities.",
      "Collaborated closely with the marketing team to design outreach strategies and promotional campaigns.",
      "Organized workshops, hackathons, and coding contests to foster student growth in development.",
      "Coordinated with student volunteers to guarantee seamless event execution and high participation rates.",
    ],
  },
];

const personalInfo = {
  name: "Aditya Mehta",
  title: "B.Tech CSE Student | Python Developer | AI & ML Enthusiast | Full Stack Developer",
  shortIntro: "I am a Computer Science student at Amity University with a strong interest in Python development, Artificial Intelligence, Machine Learning, and full-stack web development. I enjoy building practical applications that solve real-world problems while continuously learning new technologies and improving my problem-solving skills.",
  email: "adityamehta@example.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  location: "Noida, India",
  aboutMe: {
    paragraphs: [
      "I'm currently pursuing a Bachelor of Technology in Computer Science & Engineering at Amity University, Noida.",
      "My primary interests are Python development, AI/ML, backend development, and modern web technologies. I enjoy transforming ideas into real-world applications and constantly exploring new frameworks, cloud platforms, and developer tools.",
      "Apart from coding, I enjoy working out at the gym, watching movies, listening to music, and exploring the latest advancements in AI."
    ],
    stats: [
      { text: "B.Tech CSE Student", icon: "🎓" },
      { text: "4+ Major Projects", icon: "💻" },
      { text: "Full Stack Developer", icon: "🚀" },
      { text: "AI/ML Enthusiast", icon: "🤖" },
      { text: "Cloud Deployment Experience", icon: "🌐" },
      { text: "Continuous Learner", icon: "📚" }
    ]
  },
  careerObjective: "To become a skilled Software Engineer specializing in Python, Artificial Intelligence, and scalable backend systems while contributing to impactful products that solve real-world problems.",
  softSkills: [
    "Problem Solving",
    "Teamwork",
    "Leadership",
    "Communication",
    "Quick Learner",
    "Time Management"
  ],
  achievements: [
    "Built multiple full-stack web applications.",
    "Actively learning AI and Machine Learning.",
    "Experience deploying applications on modern cloud platforms.",
    "GitHub Student Developer Pack member.",
    "Continuously improving through real-world projects."
  ],
  hobbies: [
    "Gym & Fitness",
    "Exploring AI",
    "Movies",
    "Music",
    "Learning New Technologies"
  ],
  interests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Backend Development",
    "Web Development",
    "Open Source",
    "Python",
    "Cloud Computing"
  ]
};

const projects = [
  {
    name: "Calorithm",
    description:
      "AI-powered Diet Planner that generates personalized meal plans based on user preferences using AI APIs. Features include BMI calculation, nutrition recommendations, user dashboard, responsive UI, authentication, and integration of payments.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "ai-api",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "AssignMate",
    description:
      "A platform connecting students with professional academic writers. Streamlines assignment requirements, tracking, submission, writer interaction, user dashboards, and processes payments securely.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Smart College Event Management System",
    description:
      "A full-featured event planning and management portal for colleges. Allows students to discover and register for campus events, access personal event schedules, and gives admins tools to manage bookings.",
    tags: [
      {
        name: "html5-css3",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "LocalBoy",
    description:
      "A localized tourism and travel ecosystem connecting visiting tourists with trusted local drivers. Provides direct communication, booking options, active tourist & driver dashboards, and an optimized interface.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
];

const skillsList = [
  {
    title: "Programming Languages",
    items: [
      { name: "Python", icon: python },
      { name: "Java", icon: java },
      { name: "C++", icon: cplusplus },
      { name: "JavaScript", icon: javascript },
      { name: "HTML5", icon: html },
      { name: "CSS3", icon: css },
    ]
  },
  {
    title: "Frameworks",
    items: [
      { name: "Flask", icon: flask },
      { name: "FastAPI", icon: fastapi },
      { name: "React", icon: reactjs },
    ]
  },
  {
    title: "AI & Machine Learning",
    items: [
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "Data Preprocessing" },
      { name: "Logistic Regression" },
      { name: "KNN" },
      { name: "Naive Bayes" },
      { name: "XGBoost" },
      { name: "ROC-AUC Evaluation" },
    ]
  },
  {
    title: "Database & Cloud",
    items: [
      { name: "MongoDB", icon: mongodb },
      { name: "SQL" },
      { name: "Vercel", icon: vercel },
      { name: "Render", icon: render_tech },
      { name: "Railway", icon: railway_tech },
    ]
  },
  {
    title: "Developer Tools",
    items: [
      { name: "Git", icon: git },
      { name: "GitHub", icon: github_tech },
      { name: "VS Code", icon: vscode },
      { name: "Docker", icon: docker },
      { name: "Firebase", icon: firebase },
      { name: "Razorpay" },
      { name: "Stripe" },
      { name: "Postman" },
    ]
  },
  {
    title: "Currently Learning",
    items: [
      { name: "Advanced Python" },
      { name: "FastAPI" },
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "Docker" },
      { name: "System Design" },
      { name: "Cloud Deployment" },
    ]
  }
];

export { services, technologies, experiences, personalInfo, projects, skillsList };
