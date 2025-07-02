import tawjeehai_main from "../../../Assets/Projects/tawjeeh-main.png";
import tawjeeh2 from "../../../Assets/Projects/tawjeeh2.png";
import tawjeeh3 from "../../../Assets/Projects/tawjeeh3.png";
import tawjeeh4 from "../../../Assets/Projects/tawjeeh4.png";

const tawjeehaiProject = {
  id: 7,
  title: "TawjeehAI - AI Consulting and Development Platform",
  description: "A modern, bilingual (Arabic-English) AI consulting and development company website built with a full-stack TypeScript architecture. The platform showcases AI services, captures contact inquiries, and provides an engaging user experience with animated neural network visualizations and particle effects.",
  fullDescription: "TawjeehAI is a comprehensive AI consulting and development platform that serves as the digital presence for an innovative AI company. The platform is built with a modern full-stack TypeScript architecture, featuring bilingual support (Arabic-English) with complete RTL layout implementation. The website showcases AI services through interactive neural network animations and particle effects, creating an engaging and professional user experience. The platform includes a functional contact system with email notifications, responsive design for all devices, and modern UI components built with shadcn/ui and Tailwind CSS.",
  imgPath: tawjeehai_main,
  technologies: [
    "React 18", "TypeScript", "Wouter", "Tailwind CSS", "shadcn/ui", "TanStack Query", "i18next", "Vite", "Node.js", "Express.js", "PostgreSQL", "Drizzle ORM", "Nodemailer", "Zod", "tsparticles", "Radix UI"
  ],
  features: [
    "🌐 Bilingual Support with Native Arabic and English Language Support",
    "📱 RTL Layout Support for Arabic Text and Layout Direction",
    "🎨 Interactive Neural Network Animations and Visualizations",
    "✨ Dynamic Particle Background Effects using tsparticles",
    "📧 Functional Contact Form with Email Notifications",
    "📱 Mobile-First Responsive Design for All Devices",
    "🎯 Modern UI Built with shadcn/ui Components",
    "🛡️ Full TypeScript Implementation Across Frontend and Backend",
    "⚡ Server State Management with React Query",
    "🔧 API Validation with Zod Schema Validation"
  ],
  workflow: [
    {
      step: 1,
      title: "Bilingual Content Management",
      description: "Implementation of i18next for seamless Arabic-English language switching with RTL layout support",
      screenshot: {
        src: tawjeehai_main,
        alt: "TawjeehAI Bilingual Interface",
        caption: "Seamless language switching between Arabic and English with proper RTL layout implementation"
      }
    },
    {
      step: 2,
      title: "Interactive Neural Network Animations",
      description: "Custom neural network visualizations that respond to user interactions and showcase AI capabilities",
      screenshot: {
        src: tawjeeh3,
        alt: "Neural Network Animations",
        caption: "Dynamic neural network animations that demonstrate AI technology and engage users"
      }
    },
    {
      step: 4,
      title: "Modern UI with shadcn/ui Components",
      description: "Beautiful, accessible components built with Radix UI primitives and Tailwind CSS styling",
      screenshot: {
        src: tawjeeh4,
        alt: "Modern UI Components",
        caption: "Professional design system with consistent component library and responsive layout"
      }
    },
  ],
  keyHighlights: [
    "🏆 Full-stack TypeScript architecture with modern development practices",
    "🌍 Complete bilingual support with RTL layout for Arabic content",
    "🎨 Interactive animations and particle effects for engaging user experience",
    "📧 Functional contact system with email notifications",
    "📱 Mobile-first responsive design that works on all devices",
    "🛡️ Type-safe development with comprehensive validation",
  ],
  screenshots: [
    {
      src: tawjeehai_main,
      alt: "TawjeehAI Main Dashboard",
      caption: "Main platform interface showcasing AI services with bilingual support",
      category: "Overview"
    },
    {
      src: tawjeeh2,
      alt: "Neural Network Animations",
      caption: "Interactive neural network visualizations and particle effects",
      category: "Animations"
    },
    {
      src: tawjeeh4,
      alt: "Contact Form System",
      caption: "Professional contact form with email integration and validation",
      category: "Contact"
    }
  ],
  isBlog: false
};

export default tawjeehaiProject; 