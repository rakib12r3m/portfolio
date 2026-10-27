import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    slug: "bazar-dor",
    title: "BazarDor",
    tagline: "Bengali Daily Commodity Market Price Tracker",
    category: "Full Stack Web Application",
    description:
      "A Bengali market-price exploration platform helping users track everyday commodity prices, compare market trends, and make informed purchasing decisions.",
    longDescription:
      "BazarDor is a modern full-stack web application dedicated to bringing transparency to everyday essential commodity prices in Bangladesh. Users can explore organized market categories—including rice, lentils, cooking oil, fresh vegetables, fish, meat, dairy, and spices—with direct indicators of price increases or decreases and percentage shifts.",
    problemSolved:
      "Daily commodity prices in local markets often fluctuate unpredictably. Finding a consolidated, localized, and easily readable summary of prices in Bengali is a recurring challenge for consumers. BazarDor bridges this information gap by providing a central digital hub where citizens can verify prices before shopping.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Better Auth",
      "DaisyUI",
      "Vercel",
    ],
    keyFeatures: [
      "Daily Market Prices: Instant overview of essential commodities across multiple categories",
      "Price Fluctuation Tracking: Clear upward and downward price indicators with percentage metrics",
      "Categorized Exploration: Fast navigation across grains, vegetables, protein, and spices",
      "Search & Sorting: Convenient sorting by price ranges and item names",
      "Bengali Interface: Localized text and terminology for maximum accessibility",
      "Fully Responsive: Built for seamless use on smartphones while on the go in local markets",
    ],
    contributions: [
      "Architected the full-stack web application utilizing the Next.js App Router and TypeScript",
      "Configured MongoDB database integration for storing product details and market data",
      "Implemented secure authentication and session management via Better Auth",
      "Styled a clean, mobile-first Bengali user interface using Tailwind CSS and DaisyUI",
      "Deployed and optimized the application on Vercel with automated preview pipelines",
    ],
    challenges: [
      {
        challenge:
          "Ensuring consistent typography and formatting for Bengali numerals and currency representations alongside dynamic sorting.",
        solution:
          "Implemented dedicated utility formatters for localized currency (BDT ৳) and ensured clean sorting using numerical backend values.",
      },
      {
        challenge:
          "Structuring the MongoDB document schema to support category filtering and price trend calculations smoothly.",
        solution:
          "Designed clean product schemas with structured category fields and indexed query properties for fast lookup.",
      },
    ],
    futureImprovements: [
      "Community crowd-sourced price reporting with peer verification voting",
      "Regional market filters (comparing prices across Dhaka, Chittagong, Sylhet, etc.)",
      "Historical price analytics charts to observe seasonal inflation patterns",
      "Push notifications or email alerts for significant price drops on staple items",
    ],
    liveUrl: "https://bazar-dor-app-steel.vercel.app/",
    githubUrl: "https://github.com/rakib12r3m/bazar-dor-app",
    featured: true,
    accentColor: "#10B981", // Emerald
    iconName: "ShoppingBag",
    image: "/images/Bengali Market Prices App Showcase.png",
  },
  {
    slug: "fitlog",
    title: "FitLog",
    tagline: "Modern Workout Library & Daily Exercise Planner",
    category: "Fitness & Productivity Application",
    description:
      "A fitness-focused web application designed to provide a user-friendly experience for exploring exercises, managing daily workout routines, and bookmarking favorites.",
    longDescription:
      "FitLog is an exercise library and routine builder designed to help fitness enthusiasts organize their workouts without unnecessary complexity. It features curated exercises targeted by muscle groups (Chest, Back, Legs, Arms, Shoulders, Core, and Full Body) with equipment specifications, duration estimates, and calories burned.",
    problemSolved:
      "Many fitness apps are overly bloated with paywalls and complicated signups. FitLog provides a fast, lightweight, and clutter-free interface where users can quickly look up proper movements, curate their daily workout plan, and stay consistent with their training.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Context API",
      "Lucide Icons",
      "DaisyUI",
      "Vercel",
    ],
    keyFeatures: [
      "Targeted Muscle Groups: Browse exercises for Chest, Back, Legs, Arms, Shoulders, Core, and Full Body",
      "Today's Workout Plan: Assemble a personalized daily workout routine with a dynamic counter in the navigation bar",
      "Save Favorite Workouts: Bookmark exercises for quick access during training sessions",
      "Exercise Detail Views: In-depth movement specs, equipment requirements, estimated times, and calorie burn metrics",
      "Responsive Layout: Optimized specifically for gym mobile usage as well as desktop planning",
    ],
    contributions: [
      "Constructed the complete frontend architecture with Next.js App Router and TypeScript",
      "Built global state management using React Context API to manage the active workout plan and saved bookmarks",
      "Created reusable workout card components, filter tabs, and responsive navigation badges",
      "Ensured accessibility standards with semantic HTML, keyboard navigation, and responsive typography",
      "Deployed and verified live performance on Vercel",
    ],
    challenges: [
      {
        challenge:
          "Managing state updates between the exercise catalog, the active workout plan, and the navbar counter without page reloads.",
        solution:
          "Implemented a unified React Context provider that exposes clean action dispatchers for adding, removing, and toggling saved workouts.",
      },
      {
        challenge:
          "Designing card layouts that display extensive metadata (equipment, calories, time, rating) without visual clutter on small mobile viewports.",
        solution:
          "Utilized compact badge layouts, iconography, and structured spacing with Tailwind CSS for high legibility.",
      },
    ],
    futureImprovements: [
      "Integrated rest timer and audible interval beeps for sets",
      "Persistent cloud database storage for tracking completed workout history over time",
      "Custom exercise creation with user-uploaded tips and notes",
    ],
    liveUrl: "https://fit-log-app-theta.vercel.app/",
    githubUrl: "https://github.com/rakib12r3m/fit-log-app",
    featured: true,
    accentColor: "#38BDF8", // Cyan / Sky
    iconName: "Activity",
    image: "/images/FitLog_ Train With Intent.png",
  },
  {
    slug: "devstack",
    title: "DevStack",
    tagline: "Interactive Developer Tech Stack Explorer & Builder",
    category: "Developer Tool & Learning Platform",
    description:
      "An interactive web application enabling developers to explore modern web technologies across frontend, backend, and database domains, and assemble their custom stack.",
    longDescription:
      "DevStack helps developers navigate the modern web development ecosystem. It organizes essential web technologies into distinct categories with difficulty ratings, tags, and documentation references, allowing users to assemble an interactive tech stack and inspect architectural layers in real time.",
    problemSolved:
      "With countless libraries, frameworks, and tools emerging across the software industry, early-career engineers and students often struggle to understand how technologies relate to one another. DevStack clarifies the landscape through intuitive categorization and hands-on stack curation.",
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "React-Toastify",
      "Vite",
      "Netlify",
    ],
    keyFeatures: [
      "Technology Catalog: Categorized exploration across Frontend, Backend, Databases, and Developer Tooling",
      "Build Your Stack: Add and remove technologies interactively with immediate duplicate prevention",
      "Feedback System: Instant toast alerts acknowledging additions, removals, and stack resets",
      "Responsive Grid: Clean, multi-column card system adapting to mobile, tablet, and desktop viewports",
      "Technical Knowledge Hub: Integrated architectural concepts and React core principles",
    ],
    contributions: [
      "Developed the single-page application using React, TypeScript, and Vite for fast build tooling",
      "Implemented stateful stack curation logic with React hooks (`useState`, `useEffect`)",
      "Integrated interactive toast notifications with React-Toastify for seamless user feedback",
      "Styled dynamic technology cards with custom badges and Tailwind CSS utilities",
      "Configured automated deployment and hosting on Netlify",
    ],
    challenges: [
      {
        challenge:
          "Preventing duplicate item selection while maintaining clean state transitions and friendly user feedback.",
        solution:
          "Structured state checks with unique ID comparisons and triggered warning toasts when duplicate technologies were selected.",
      },
      {
        challenge:
          "Structuring the JSON schema to accommodate diverse metadata (categories, difficulty, ratings, descriptions) cleanly.",
        solution:
          "Defined strict TypeScript interfaces for all technology entities, ensuring complete compile-time type safety.",
      },
    ],
    futureImprovements: [
      "Exporting curated stacks as customizable README Markdown badges for GitHub profiles",
      "Side-by-side comparison matrix for competing technologies (e.g. Next.js vs Vite, MongoDB vs PostgreSQL)",
      "Community ratings and curated starter template links for each technology",
    ],
    liveUrl: "https://a5-dev-stack.netlify.app/",
    githubUrl: "https://github.com/rakib12r3m/A5-DevStack",
    featured: true,
    accentColor: "#818CF8", // Indigo
    iconName: "Code2",
    image: "/images/DevStack Neon Technology Dashboard.png",
  },
];
