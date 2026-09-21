export const portfolio = {
  name: "Ali Taqi",
  initials: "AT",
  role: "AI/ML Engineer + Backend Engineer",
  roleTracking: "AI / ML  ENGINEER  +  BACKEND  ENGINEER",
  tagline: "Building intelligent systems, machine-learning pipelines, and production-ready backend infrastructure.",
  location: "Remote · Worldwide",
  email: "alitaqiuos@gmail.com",
  availability: "Open to AI/ML & Backend engineering opportunities",
  bio: "I am a Software Engineering graduate focused on AI/ML engineering and backend systems. My approach is practical: I like taking data, models, APIs, and infrastructure and turning them into working systems. My background in backend engineering gives me a strong foundation for building AI applications beyond experimentation — including data pipelines, model integration, APIs, services, and deployment infrastructure.",
  
  typewriterPhrases: [
    "I build intelligent systems",
    "I build ML pipelines & backend infra",
    "I turn research models into software",
    "I architect scalable Python backends"
  ],

  socials: {
    linkedin: "https://www.linkedin.com/in/ali-taqi-171b863a9",
    twitter: "https://twitter.com/",
    github: "https://github.com/taqi-stark",
    instagram: "https://instagram.com/",
    email: "mailto:alitaqiuos@gmail.com"
  },

  quickLinks: [
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" }
  ],

  stats: [
    { value: "5+", label: "Years Engineering" },
    { value: "30+", label: "APIs & Services Shipped" },
    { value: "10M+", label: "Daily Transactions Handled" },
    { value: "<30ms", label: "ML Inference Latency" }
  ],

  capabilities: {
    aiml: [
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "Model Evaluation",
      "Feature Engineering",
      "ML Pipelines",
      "Signal Processing"
    ],
    backend: [
      "Python",
      "FastAPI",
      "Django",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "Redis",
      "RabbitMQ"
    ],
    infrastructure: [
      "Docker",
      "Kubernetes",
      "Kafka",
      "AWS",
      "Terraform",
      "Prometheus",
      "Grafana"
    ],
    data: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "scikit-learn",
      "TensorFlow/Keras",
      "SQL"
    ]
  },

  skills: [
    // Backend
    { name: "Python", proficiency: 95, category: "Backend", icon: "python" },
    { name: "Node.js", proficiency: 90, category: "Backend", icon: "node" },
    { name: "FastAPI", proficiency: 94, category: "Backend", icon: "fastapi" },
    { name: "Express", proficiency: 88, category: "Backend", icon: "express" },
    { name: "MySQL / PostgreSQL", proficiency: 89, category: "Backend", icon: "postgres" },

    // AI/ML
    { name: "Python (ML)", proficiency: 93, category: "AI/ML", icon: "python" },
    { name: "PyTorch", proficiency: 90, category: "AI/ML", icon: "torch" },
    { name: "TensorFlow", proficiency: 88, category: "AI/ML", icon: "tensor" },
    { name: "scikit-learn", proficiency: 92, category: "AI/ML", icon: "scikit" },
    { name: "Jupyter Notebook", proficiency: 95, category: "AI/ML", icon: "jupyter" },
    { name: "Google Colab", proficiency: 94, category: "AI/ML", icon: "colab" },

    // Cloud / Tooling
    { name: "Google Cloud (GCP)", proficiency: 86, category: "Cloud/Tooling", icon: "gcp" },
    { name: "Vercel", proficiency: 90, category: "Cloud/Tooling", icon: "vercel" },
    { name: "Git", proficiency: 93, category: "Cloud/Tooling", icon: "git" },
    { name: "GitHub", proficiency: 95, category: "Cloud/Tooling", icon: "github" }
  ],

  experience: [
    {
      role: "AI / ML Pre-Intern",
      company: "LimeOx LLC",
      location: "Sargodha, Pakistan",
      fullRole: "AI / ML Pre-Intern",
      fullCompany: "LimeOx LLC · Sargodha, Pakistan",
      period: "10/09/2026 – CURRENT",
      logoType: "limeox",
      tech: ["Python", "Jupyter", "scikit-learn", "Git"],
      highlight: "Building practical AI/ML skills through algorithms, neural networks, and hands-on Python experiments.",
      points: [
        "Developing practical skills in Artificial Intelligence and Machine Learning.",
        "Studying machine learning algorithms, neural networks, and deep learning.",
        "Applying AI/ML concepts through hands-on projects and experiments.",
        "Working with Python and data analysis tools for ML workflows.",
        "Exploring model development, evaluation, and practical AI applications."
      ]
    },
    {
      role: "IT Intern",
      company: "Agritech Fertilizers Limited",
      location: "Daud Khel, Mianwali, Pakistan",
      fullRole: "IT Intern",
      fullCompany: "Agritech Fertilizers Limited · Daud Khel, Mianwali, Pakistan",
      period: "03/08/2026 – 03/09/2026",
      logoType: "agritech",
      tech: ["Networking", "Windows", "Git"],
      highlight: "Delivered IT support across systems, networking, and equipment setup to keep internal workflows running smoothly.",
      points: [
        "Provided IT and technical support for day-to-day operations.",
        "Assisted with computer systems, software, networking, and troubleshooting.",
        "Supported data management and digital documentation.",
        "Assisted in maintaining and configuring IT systems and equipment.",
        "Contributed to software and technology-related tasks to improve internal workflows."
      ]
    },
    {
      role: "Backend Developer Intern",
      company: "ValuePrice",
      location: "Sargodha, Pakistan",
      fullRole: "Backend Developer Intern",
      fullCompany: "ValuePrice · Sargodha, Pakistan",
      period: "15/10/2025 – 15/12/2025",
      logoType: "valueprice",
      tech: ["Python", "FastAPI", "MySQL", "Git", "GitHub"],
      highlight: "Built FastAPI backend APIs with MySQL and contributed to a Smart Healthcare ecosystem FYP.",
      points: [
        "Developed backend APIs using Python and FastAPI.",
        "Designed and implemented RESTful API endpoints and database integrations.",
        "Worked on backend architecture, authentication, and API testing.",
        "Contributed to the design and initial development of my Final Year Project (FYP), a Smart Healthcare Ecosystem.",
        "Collaborated on integrating backend services with frontend and AI-powered components."
      ]
    }
  ],

  projects: [
    {
      id: "project-1",
      number: 1,
      name: "EEG Seizure Detection Pipeline",
      tag: "AI/ML · Biomedical Signal Processing",
      featured: true,
      category: "aiml",
      summary: "End-to-end biomedical signal processing and deep learning pipeline for real-time epileptic seizure detection from multi-channel raw EEG.",
      tech: ["Python", "PyTorch", "SciPy", "MNE", "Scikit-Learn", "FastAPI", "Docker"],
      problem: "Real-time automated detection and classification of epileptic seizure patterns from noisy, high-dimensional multi-channel continuous EEG signals with high inter-patient variability.",
      pipeline: "Raw EEG Multi-Lead → Bandpass & Notch Filtering → Wavelet & Spectral Power Extraction → CNN / BiLSTM Classifier → 10-Fold Cross-Validation & ROC-AUC → Low-Latency FastAPI Inference Service",
      engineering: "Designed memory-efficient sliding-window segmentation, channel selection optimization algorithms, and a containerized inference service delivering <30ms latency.",
      outcome: "Validated reproducible ML pipeline achieving high sensitivity and specificity across patient-independent benchmark evaluation datasets.",
      images: [
        "/projects/ml/ml2.png",
        "/projects/ml/ml1.png",
        "/projects/ml/ml3.png",
      ],
      repo: "https://github.com/taqi-stark",
      live: "",
      role: "Lead ML & Pipeline Engineer"
    },
    {
      id: "project-2",
      number: 2,
      name: "Smart Healthcare Ecosystem",
      tag: "Final Year Project · Full-Stack Healthcare Platform",
      featured: true,
      category: "aiml",
      summary: "Developed a full-stack healthcare platform with doctor appointment booking, blood bank management, medical report analysis, and an AI chatbot. Implemented role-based access for patients, doctors, and administrators.",
      tech: ["React.js", "Laravel", "FastAPI", "Python", "MySQL", "REST APIs", "OCR", "AI/LLM"],
      problem: "Fragmented healthcare services resulting in long wait times, inefficient blood bank donor matching, and delayed medical report analysis.",
      pipeline: "React Frontend → Laravel & FastAPI Services → MySQL Multi-tenant Database → AI Chatbot & OCR Engine → Role-based Access Layer",
      engineering: "Designed unified authentication with JWT role-based access control (Patient, Doctor, Admin) and integrated OCR for automated medical report parameter parsing.",
      outcome: "Shipped fully integrated medical portal supporting appointment scheduling, blood inventory tracking, and automated report triage.",
      images: [
        "/projects/medinova/blood-bank.png",
        "/projects/medinova/hero.png",
        "/projects/medinova/about.png"
      ],
      repo: "",
      live: "https://medinova-health1.vercel.app/",
      role: "Full-Stack & Backend Architect"
    },
    {
      id: "project-3",
      number: 3,
      name: "LinguaBridge — AI Language Learning Platform",
      tag: "Applied AI · Multimodal Language Learning",
      featured: true,
      category: "aiml",
      summary: "Designed an AI-powered language learning platform supporting translation, OCR, conversational roleplay, vocabulary management, and personalized language-learning workflows.",
      tech: ["Python", "FastAPI", "AI/LLM", "OCR", "OpenAI / Gemini", "DeepL", "Next.js", "PostgreSQL"],
      problem: "Traditional language learning apps lack interactive conversational immersion and automated contextual text extraction from real-world documents.",
      pipeline: "User Audio/Text/Image → OCR & Whisper Ingestion → LLM Roleplay Engine (OpenAI/Gemini/DeepL) → Spaced Repetition Matrix → Interactive Feedback UI",
      engineering: "Architected low-latency conversational streaming with FastAPI and integrated DeepL API with dual fallback to generative LLMs for nuanced cultural idiomatic translations.",
      outcome: "Empowered learners with real-time roleplay dialogues, camera-to-flashcard OCR extraction, and adaptive vocabulary mastery tracking.",
      images: [
        "/projects/linguabridge/workspace.png",
        "/projects/linguabridge/hero.png",
        "/projects/linguabridge/guides.png"
      ],
      repo: "",
      live: "https://linguabridge-ai.alitaqiuos.workers.dev/",
      role: "AI & Full-Stack Engineer"
    },
    {
      id: "project-4",
      number: 4,
      name: "Business Portfolio & Digital Solutions Website",
      tag: "Web Engineering · Business Software Solutions",
      featured: true,
      category: "web",
      summary: "Developed a professional business portfolio website showcasing digital solutions for businesses, including custom websites, software systems, backend development, APIs, automation, and AI integrations. Designed the platform to present business-focused technology services and demonstrate practical software solutions.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs", "AI/ML"],
      problem: "Enterprises require clear, performance-driven showcases to understand software architecture, automation pipelines, and modern AI integration capabilities.",
      pipeline: "Next.js 14 App Router → Responsive Tailwind Component Architecture → Optimized Dynamic Asset Delivery → Interactive Service Demos",
      engineering: "Engineered responsive modular components, high-contrast typography, and dynamic interactive service showcases with sub-second page loads.",
      outcome: "High-performance digital platform presenting comprehensive software services and live engineering demonstrations for enterprise clients.",
      images: [
        "/projects/buisness/buis2.png",
        "/projects/buisness/buis1.png",
        "/projects/buisness/buis3.png"
      ],
      repo: "",
      live: "https://alitaqibuis.vercel.app/",
      role: "Lead Frontend & Solutions Architect"
    }
  ],

  research: [
    {
      title: "EEG Channel Selection Optimization for Low-Power Seizure Detection",
      focus: "Biomedical Signal Processing & Model Compression",
      description: "Investigated spatial channel reduction techniques on 10-20 international standard EEG montage. By applying mutual information scoring and recursive feature elimination, reduced required channels from 23 to 6 while maintaining >94% seizure classification sensitivity.",
      dataset: "CHB-MIT Scalp EEG & PhysioNet Databases",
      metrics: "94.2% Sensitivity, 95.8% Specificity, 65% reduction in compute latency"
    },
    {
      title: "Wavelet vs. Spectral Power Density in Non-Stationary Time-Series",
      focus: "Feature Engineering & Signal Preprocessing",
      description: "Benchmarked Continuous Wavelet Transform (CWT) against Short-Time Fourier Transform (STFT) for extracting localized time-frequency characteristics from non-stationary neural signals, yielding superior robustness against muscular and ocular artifacts.",
      dataset: "Clinical Neurological Datasets",
      metrics: "Improved signal-to-noise ratio by 4.2 dB across raw recordings"
    }
  ]
};

