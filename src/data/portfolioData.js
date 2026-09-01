// Centralized Portfolio Data for Harigovind P
// Edit content, links, metrics, and certifications easily from this single file.

export const personalInfo = {
  name: "Harigovind P",
  title: "Data Science & AI Enthusiast",
  headline: "Computer Science & Engineering Graduate",
  bio: "Computer Science & Engineering graduate focused on turning data into intelligent solutions using Machine Learning, AI and modern software technologies.",
  location: "Kasargod, Kerala, India",
  email: "harigovindp.dev@gmail.com",
  social: {
    github: "https://github.com/Haariiiii",
    linkedin: "https://linkedin.com/in/harigovind-p",
    emailLink: "mailto:harigovindp.dev@gmail.com"
  },
  resumePath: "/resume.pdf", // Place your updated resume.pdf in the public/ folder
  profileImage: "/profile.png", // Profile image path in public folder
  formspreeEndpoint: "https://formspree.io/f/your_form_id" // Replace with your actual Formspree endpoint or EmailJS key
};

export const aboutData = {
  introduction: `I am a Computer Science & Engineering graduate from Kerala with a deep passion for Data Science, Machine Learning, and Artificial Intelligence. My focus lies in designing end-to-end data-driven systems—from raw data extraction and exploratory analysis to training advanced deep learning models and deploying real-time applications.`,
  points: [
    {
      title: "Strong CSE Foundation",
      description: "Solid grounding in computer science principles, algorithms, data structures, and database management."
    },
    {
      title: "Data Science & Analytics",
      description: "Proficient in Python-based data manipulation, statistical EDA, feature engineering, and predictive modeling."
    },
    {
      title: "Computer Vision & ML",
      description: "Experience building object detection pipelines (YOLO11), custom vision algorithms, and PyTorch deep learning models."
    },
    {
      title: "Web Development & Deployment",
      description: "Capable of integrating machine learning models with Flask/Django backends and responsive web frontends."
    },
    {
      title: "Practical Problem Solving",
      description: "Dedicated to transforming complex real-world challenges into reliable, production-ready technical solutions."
    }
  ]
};

export const skillCategories = [
  {
    name: "Programming",
    icon: "Code2",
    skills: ["Python", "C", "SQL"]
  },
  {
    name: "Data Science",
    icon: "BarChart3",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Power BI"]
  },
  {
    name: "Machine Learning & AI",
    icon: "BrainCircuit",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "Generative AI", "PyTorch", "TensorFlow", "YOLO11"]
  }
];

export const projectsData = [
  {
    id: "pothole-lane-detection",
    title: "Road Pothole Detection & Smart Lane Analysis",
    category: "Computer Vision",
    featured: true,
    tagline: "Vision-based intelligent road safety assistant combining real-time pothole detection with lane departure warning.",
    description: "An advanced computer vision system that integrates real-time YOLO11s object detection for road hazard monitoring alongside custom lane analysis (bird's-eye perspective transformation, HLS thresholding, sliding-window polynomial fitting). Delivered through a Flask backend with Server-Sent Events (SSE) live streaming to a responsive web dashboard.",
    technologies: ["Python", "YOLO11", "OpenCV", "Flask", "PyTorch", "Computer Vision"],
    highlights: [
      "Real-time YOLO11s pothole detection with custom dataset training",
      "Lane detection using bird's-eye perspective transformation, HLS color thresholding, and sliding-window techniques",
      "Real-time video processing pipeline designed for dashcam & smartphone video feeds",
      "Flask backend serving SSE streaming directly to an interactive web dashboard UI",
      "In-depth metric evaluations showcasing GPU inference speed and precision"
    ],
    results: [
      { label: "Precision", value: "84.22%" },
      { label: "Recall", value: "81.70%" },
      { label: "F1 Score", value: "82.94%" },
      { label: "mAP@0.50", value: "88.10%" },
      { label: "mAP@0.50-0.95", value: "58.62%" },
      { label: "Inference Time", value: "43.67 ms" },
      { label: "Frame Rate", value: "~22.9 FPS (GPU)" }
    ],
    githubUrl: "https://github.com/harigovindp/pothole-lane-detection",
    liveUrl: "https://pothole-lane-detection.vercel.app"
  },
  {
    id: "indian-job-salary-prediction",
    title: "Indian Job Salary Prediction",
    category: "Data Science & ML",
    featured: false,
    tagline: "Machine learning regression project predicting job salaries using real-world Indian job-market data.",
    description: "A machine learning pipeline that predicts software and industry job salaries based on Indian job market attributes. Encompasses automated data cleaning, missing-value handling, frequency encoding for high-cardinality categorical features, EDA visual analyses, and multi-model regression comparison.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    highlights: [
      "Comprehensive data preprocessing & missing value imputation pipeline",
      "Feature engineering & frequency encoding for job locations, skills, and roles",
      "Exploratory Data Analysis (EDA) identifying key salary determinants in the Indian tech market",
      "Model benchmark comparing Random Forest Regressor, Linear Models, and Decision Trees",
      "Optimized regression performance evaluating RMSE and R² metrics"
    ],
    results: [
      { label: "Data Pipeline", value: "Automated Cleaning & Encoding" },
      { label: "Top Model", value: "Random Forest Regressor" },
      { label: "Evaluation", value: "R² & RMSE Benchmark" }
    ],
    githubUrl: "https://github.com/harigovindp/indian-job-salary-prediction",
    liveUrl: null
  },
  {
    id: "sales-performance-analysis",
    title: "Multi-Year Sales Performance & Profitability Analysis",
    category: "Data Analytics & BI",
    featured: false,
    tagline: "Interactive Power BI dashboard analyzing multi-year sales performance and profitability using AdventureWorks data.",
    description: "An enterprise business intelligence dashboard built to analyze multi-year revenue, volume, and profit margins. Models data using a Star Schema architectural framework, utilizes complex DAX formulas for Year-over-Year (YoY) time intelligence calculations, and presents dynamic visual reports for executive decision-making.",
    technologies: ["Power BI", "DAX", "SQL", "Data Analysis"],
    highlights: [
      "Designed Star Schema dimensional data models separating facts and dimensions",
      "Authored custom DAX calculations for YoY growth, profit margins, and rolling metrics",
      "Built dynamic Power BI interactive reports with drill-through slicers and executive KPI cards",
      "Data extraction, cleaning, and transformation using SQL and Power Query",
      "In-depth profitability analysis across product lines and geographic territories"
    ],
    results: [
      { label: "Schema", value: "Star Schema Dimensional Model" },
      { label: "Analytics", value: "YoY & Profit Margin DAX Measures" },
      { label: "Tool", value: "Power BI Interactive Dashboard" }
    ],
    githubUrl: "https://github.com/harigovindp/sales-profitability-analysis",
    liveUrl: null
  }
];

export const educationData = [
  {
    degree: "Data Science & Generative AI",
    institution: "Entri Elevate",
    location: "Kerala, India",
    period: "2025 – Present",
    status: "Pursuing / In Progress",
    grade: "Gen AI Specialization",
    details: "Advanced hands-on program focusing on Data Science, Machine Learning, Deep Learning, Generative AI models, Large Language Models (LLMs), and Prompt Engineering."
  },
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "LBS College of Engineering",
    location: "Kasaragod, Kerala",
    period: "2022 – 2026",
    status: "Expected 2026",
    grade: "CGPA: 8.4 / 10",
    details: "Specializing in Computer Science & Engineering with coursework in Data Structures, Algorithms, Machine Learning, Operating Systems, Database Management Systems, and Artificial Intelligence."
  },
  {
    degree: "Higher Secondary Education (HSE)",
    institution: "GHSS Bandadka",
    location: "Kasaragod, Kerala",
    period: "2020 – 2022",
    status: "Completed",
    grade: "Science Stream",
    details: "Focused on Physics, Chemistry, Mathematics, and Computer Science."
  }
];

export const experienceData = [
  {
    role: "Data Science & Machine Learning Developer",
    type: "Projects & Practical Research",
    company: "Academic & Independent Engineering Projects",
    location: "Kasargod, Kerala",
    period: "2024 – Present",
    description: "Architected and implemented end-to-end data science and machine learning applications targeting computer vision and predictive analytics.",
    achievements: [
      "Trained and tuned YOLO11 computer vision models for real-time edge hazard detection with 88.1% mAP.",
      "Engineered machine learning pipelines utilizing Pandas, Scikit-learn, and Matplotlib for real-world salary regression.",
      "Developed web dashboards combining Python ML backends (Flask) with modern responsive UI templates."
    ]
  }
];

export const certificationsData = [
  {
    title: "Data Science & Machine Learning Foundations",
    issuer: "Online Certification / Academy",
    year: "2024",
    skills: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    verificationUrl: "https://example.com/cert/ds-ml"
  },
  {
    title: "Deep Learning & Computer Vision",
    issuer: "Specialization Course",
    year: "2024",
    skills: ["PyTorch", "OpenCV", "YOLO", "CNNs"],
    verificationUrl: "https://example.com/cert/cv"
  },
  {
    title: "SQL & Relational Database Design",
    issuer: "Database Engineering Track",
    year: "2023",
    skills: ["SQL", "Relational Modeling", "Database Queries"],
    verificationUrl: "https://example.com/cert/sql"
  },
  {
    title: "Power BI Data Analyst Associate",
    issuer: "Business Intelligence Track",
    year: "2024",
    skills: ["Power BI", "DAX", "Data Visualization", "Star Schema"],
    verificationUrl: "https://example.com/cert/powerbi"
  }
];
