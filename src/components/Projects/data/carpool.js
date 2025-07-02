import carpool_img from "../../../Assets/Projects/readme-img.png";
import carpool_img2 from "../../../Assets/Projects/car-login.png";
import carpool_img3 from "../../../Assets/Projects/car-trip-create.png";
import carpool_img4 from "../../../Assets/Projects/car-trip-discovery.png";
import carpool_img5 from "../../../Assets/Projects/car-telegram.png";
import carpool_img6 from "../../../Assets/Projects/car-dashboard.png";
const carpoolProject = {
  id: 1,
  title: "Carpool Management System",
  description: "A full-stack ride-sharing application built with React, Express.js, and PostgreSQL. Features real-time notifications, Telegram integration, and comprehensive trip management.",
  fullDescription: "Carpool Management System is a comprehensive ride-sharing platform that streamlines carpooling for institutional communities. Built with modern web technologies, it provides a complete ecosystem for trip creation, ride matching, real-time communication, and administrative oversight. The platform emphasizes user experience with intuitive interfaces, robust security, and seamless mobile responsiveness.",
  imgPath: carpool_img6,
  technologies: [
    "React 18", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Node.js", "Express.js", "PostgreSQL", "Drizzle ORM", "WebSocket (ws)", "Passport.js", "Telegram Bot API", "Vite"
  ],
  features: [
    "🔐 Multi-role Authentication System (Admin, Driver, Passenger)",
    "🚗 Smart Trip Creation & Management",
    "🔍 Intelligent Ride Matching Algorithm",
    "📱 Real-time Trip Updates & Notifications",
    "💬 Integrated Telegram Bot Notifications",
    "👨‍💼 Comprehensive Admin Dashboard",
    "📊 Trip Analytics & Reporting",
    "🌐 Fully Responsive Mobile Design",
    "🔔 Push Notifications & Email Alerts",
    "💳 Secure Payment Integration Ready"
  ],
  workflow: [
    {
      step: 1,
      title: "User Registration & Authentication",
      description: "Users sign up with role selection and verify their accounts",
      screenshot: {
        src: carpool_img2, // Replace with actual login/registration screenshot
        alt: "User Registration Interface",
        caption: "Secure registration with role selection for Admin, Driver, or Passenger"
      }
    },
    {
      step: 2,
      title: "Trip Creation",
      description: "Drivers create trips with route details, timing, and passenger capacity",
      screenshot: {
        src: carpool_img3, // Replace with trip creation screenshot
        alt: "Trip Creation Form",
        caption: "Intuitive trip creation with route mapping and passenger settings"
      }
    },
    {
      step: 3,
      title: "Ride Discovery & Booking",
      description: "Passengers search for available trips and send ride requests",
      screenshot: {
        src: carpool_img4, // Replace with search/booking screenshot
        alt: "Trip Search Interface",
        caption: "Advanced search filters help passengers find perfect rides"
      }
    },
    {
      step: 4,
      title: "Real-time Communication",
      description: "Instant notifications via WebSocket and Telegram integration",
      screenshot: {
        src: carpool_img5, // Replace with notifications screenshot
        alt: "Real-time Notifications",
        caption: "Live updates and Telegram bot notifications keep users informed"
      }
    },
  ],
  keyHighlights: [
    "🏆 Successfully deployed for institute carpooling community",
    "⚡ Real-time WebSocket communication for instant updates",
    "🤖 Automated Telegram bot integration for notifications",
    "🛡️ Enterprise-grade security with session management",
  ],
  screenshots: [
    {
      src: carpool_img6,
      alt: "Carpool System Dashboard",
      caption: "Main dashboard showing available trips and user overview",
      category: "Overview"
    },
    {
      src: carpool_img,
      alt: "Carpool Project Overview",
      caption: "Project overview and architecture diagram",
      category: "Documentation"
    }
  ],
  isBlog: false
};

export default carpoolProject; 