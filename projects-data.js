// =====================================================
// PROJECTS DATA
// Single source of truth for every project on the site.
//
// HOW TO ADD A NEW PROJECT:
// 1. Copy one of the objects below.
// 2. Give it a unique `id` (used in the URL as ?id=yourId).
// 3. Fill in the fields. `features` and `tech` are arrays of strings.
// 4. Add a new card in index.html's Projects section that links to
//    project.html?id=yourId
//
// That's it — project.html will render it automatically.
// =====================================================

const PROJECTS = [
    {
      id: "autoapply",
      title: "MamaMoHiligMagApply",
      subtitle: "AI-Powered Job Application Autofiller",
      icon: "extension",
      badges: ["Latest"],
      role: "Full-Stack Developer",
      year: "2026",
      type: "Browser Extension",
      tech: [
        "JavaScript",
        "HTML",
        "CSS",
        "Chrome Extension Manifest V3",
        "Groq API",
        "LLaMA 3.3 70B",
        "Chrome Storage API",
        "MutationObserver API",
      ],
      github: "https://github.com/tyronepascual6/MamaMoHiligMagApply",
      liveDemo: null,
      publication: null,
      description:
        "MamaMoHiligMagApply is a Chrome browser extension built to speed up the job application process by automatically filling application forms using information extracted from your CV. Upload your CV once, let the AI parse it, and the extension handles the rest — intelligently filling fields across LinkedIn, JobStreet, Indeed, Kalibrr, Google Forms, and any standard job application page. Built with a multi-layer intelligence system that combines HTML autocomplete detection, confidence scoring, sibling context analysis, and Groq AI disambiguation to correctly identify and fill even the most ambiguous fields like split name fields.",
      features: [
        "AI-powered CV parsing using Groq API (LLaMA 3.3 70B) — free tier, no credit card needed",
        "Confidence scoring system that rates each form field against 17 data types before filling",
        "Sibling context analysis that correctly splits Full Name into First, Middle, and Last Name fields",
        "HTML autocomplete attribute detection for near-perfect accuracy on modern job sites",
        "MutationObserver integration for auto-filling dynamically loaded forms and modals",
        "AI disambiguation via Groq for ambiguous fields the scoring system cannot confidently resolve",
        "Custom fields tab for adding any extra information job sites might ask for",
        "Supports LinkedIn Easy Apply, JobStreet, Indeed, Kalibrr, and Google Forms",
        "Native input value setter to bypass React and Vue internal state for framework-rendered forms",
        "Fallback keyword matching system when no API key is configured",
        "Profile review section to verify and edit AI-extracted CV data before saving",
        "All data stored locally in Chrome Storage — nothing sent to external servers except Groq API calls",
      ],
    },
    {
      id: "vitalis",
      title: "Vitalis",
      subtitle: "AI Health Assistant & Symptom Analysis",
      icon: "health_and_safety",
      badges: ["Capstone", "Published"],
      role: "Group Leader / Corresponding Author",
      year: "2025",
      type: "Mobile App",
      tech: [
        "React Native",
        "Expo Router",
        "JavaScript",
        "Firebase Authentication",
        "Firestore",
        "Natural Language Processing (NLP)",
        "REST API",
      ],
      github: "https://github.com/tyronepascual6/vitalis-chatbot",
      liveDemo: null,
      publication: "https://ideas.repec.org/a/bjf/journl/v10y2025i8p1964-1978.html",
      description:
        "Vitalis is an AI-driven virtual health assistant designed to provide preliminary symptom analysis and health guidance for common illnesses. It uses Natural Language Processing (NLP) to understand user-input symptoms and provides evidence-based health suggestions while encouraging professional medical consultation when necessary. The system was built as our capstone project — I led the group as corresponding author, and the study was published in the International Journal of Research (2025), available on Google Scholar.",
      features: [
        "AI-powered chatbot for real-time symptom analysis",
        "Natural Language Processing (NLP) for understanding user input",
        "Preliminary health guidance for common illnesses",
        "Emergency guidance recommendations for serious symptoms",
        "User authentication with Firebase (Email & Google login)",
        "Chat history storage using Firestore",
        "Customizable user profile with avatar selection",
        "Onboarding screens explaining app features and limitations",
        "Terms of Service and Privacy Policy integration",
        "User-friendly and accessible mobile interface",
        "Data privacy-focused design (no medical diagnosis, no prescription)",
      ],
    },
    {
      id: "gym",
      title: "Rico Gym",
      subtitle: "Full-Stack Gym Management System",
      icon: "fitness_center",
      badges: [],
      role: "Full-Stack Developer",
      year: "2026",
      type: "Web Application",
      tech: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "Supabase", "Tailwind CSS", "Jinja2", "JavaScript", "Render.com"],
      github: "https://github.com/tyronepascual6/Rico-Gym",
      liveDemo: null,
      publication: null,
      description:
        "A full-stack web application built for local gyms that still rely on paper-based check-ins and manual cash counting. The system digitizes daily operations — logging every member and walk-in check-in, computing earnings automatically across daily, weekly, monthly, and annual periods, and giving gym owners a real-time dashboard they can monitor from any device. Deployed on Render with a PostgreSQL database hosted on Supabase, and designed to be reusable across multiple gym clients with minimal configuration changes.",
      features: [
        "Real-time earnings dashboard with daily, weekly, monthly, and annual breakdowns",
        "Digital check-in system supporting both registered members and walk-in guests",
        "Staff PIN protection to restrict check-in access to authorized personnel only",
        "Secure admin login with session-based authentication",
        "Member registration with auto-generated unique member IDs",
        "Searchable member directory with initials-based avatars",
        "Full check-in history with date range filtering and CSV export",
        "Earnings soft-reset feature that preserves all historical data",
        "Subscription-based suspension system for developer access control",
        "Fully responsive design compatible with desktop, tablet, and mobile",
        "Dynamic open and closed gym status based on operating hours",
        "Cloud-deployed with PostgreSQL on Supabase and hosted on Render",
        "Timezone-aware data recording using Philippine Standard Time (UTC+8)",
      ],
    },
    {
      id: "portfolio",
      title: "Mobile Portfolio App",
      subtitle: "Personal Portfolio — React Native",
      icon: "smartphone",
      badges: [],
      role: "Full-Stack Developer",
      year: "2026",
      type: "Mobile App",
      tech: ["React Native", "Expo Router", "JavaScript", "Firebase Authentication", "Groq API"],
      github: "https://github.com/tyronepascual6/Pascual-Mobile-Portfolio",
      liveDemo: null,
      publication: null,
      description:
        "A personal portfolio app designed to showcase my personal information and projects with a clean glassmorphism UI and smooth navigation. Built with Firebase Auth for login/logout, dynamic routing via Expo Router, and an integrated Groq-powered AI chatbot that visitors can talk to about my background and skills.",
      features: [
        "Glassmorphism UI with animated name scramble effect and color-pulsing header",
        "Firebase Auth login/logout with confirmation modal",
        "Floating chat button routing to an integrated Groq AI chatbot",
        "Dynamic routing with Expo Router",
        "Reusable, modular component architecture",
        "About, Skills, Achievements, Education, and Languages panels in a frosted-glass scrollable sheet",
      ],
    },
    {
      id: "movieapp",
      title: "Movie Mobile App",
      subtitle: "React Native Movie Browser",
      icon: "movie",
      badges: ["First RN Project"],
      role: "Developer",
      year: "2025",
      type: "Mobile App",
      tech: ["React Native", "Expo Router", "JavaScript", "REST API"],
      github: "https://github.com/tyronepascual6/Movie-App-Pascual",
      liveDemo: null,
      publication: null,
      description:
        "My first React Native based app, utilizing a public API for movie data and images. It's front-end focused — there's no actual video playback, just the UI — but it was a solid first project for learning mobile UI patterns, API integration, and animation.",
      features: [
        "Dark mode with modern, sleek UI design",
        "Movie cards with high-quality images and rounded corners",
        "Smooth, interactive search bar with live search results",
        "Horizontal and vertical scrolling of movie lists",
        "Responsive layout suitable for different screen sizes",
        "Reusable card components for movies",
        "Clean typography and consistent spacing for readability",
        "Animated touch feedback on movie cards and buttons",
      ],
    },
  ];
  
  // Helper used by project.html
  function getProjectById(id) {
    return PROJECTS.find((p) => p.id === id) || null;
  }