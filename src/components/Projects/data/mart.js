import mart_img from "../../../Assets/Projects/mart-main.png";
import mart_img2 from "../../../Assets/Projects/mart-login.png";
import mart_img3 from "../../../Assets/Projects/mart-admin.png";

const martProject = {
  id: 5,
  title: "Mart - Used Items Marketplace",
  description: "A comprehensive full-stack web application for buying and selling used items, featuring advanced geolocation-based search, secure authentication, and real-time messaging.",
  fullDescription: "Mart is a sophisticated marketplace platform that revolutionizes the buying and selling of used items. Built with cutting-edge technologies, it provides an intuitive and secure environment for users to discover, list, and transact with items in their local community. The platform emphasizes location-based discovery, real-time communication, and user trust through comprehensive verification systems.",
  imgPath: mart_img,
  technologies: [
    "React 18", "TypeScript", "Wouter", "Shadcn/ui", "Tailwind CSS", "TanStack Query", "Leaflet.js", "Node.js", "Express.js", "PostgreSQL", "Drizzle ORM", "WebSocket", "Passport.js", "Vite"
  ],
  features: [
    "🏪 Advanced Marketplace with Category-based Organization",
    "🗺️ Interactive Location Mapping with Geolocation Services",
    "💬 Real-time WebSocket-powered Chat System",
    "🔐 Secure Authentication with bcrypt Hashing",
    "👤 Comprehensive User Management & Profiles",
    "🔍 Advanced Search with Price & Distance Filtering",
    "📊 Admin Dashboard for Content Moderation",
    "🔔 Real-time Notifications & Unread Indicators",
    "🌐 Reverse/Forward Geocoding for Address Recognition"
  ],
  workflow: [
    {
      step: 1,
      title: "User Authentication & Registration",
      description: "Secure user registration and login with form validation and session management",
      screenshot: {
        src: mart_img2,
        alt: "Mart Login Interface",
        caption: "Secure authentication system with bcrypt password hashing and session management"
      }
    },
    {
      step: 2,
      title: "Item Listing & Location Mapping",
      description: "Users can list items with interactive map location selection and automatic address recognition",
      screenshot: {
        src: mart_img,
        alt: "Mart Main Interface",
        caption: "Interactive marketplace with location-based item discovery and mapping integration"
      }
    },
    {
      step: 3,
      title: "Advanced Search & Filtering",
      description: "Comprehensive search with category filters, price ranges, and distance-based radius filtering",
      screenshot: {
        src: mart_img,
        alt: "Search and Filter Interface",
        caption: "Advanced filtering system with 5km, 10km, 25km radius options and category organization"
      }
    },
    {
      step: 4,
      title: "Real-time Communication",
      description: "WebSocket-powered chat system with unread indicators and user status tracking",
      screenshot: {
        src: mart_img3,
        alt: "Real-time Chat System",
        caption: "Instant messaging between buyers and sellers with chat history persistence"
      }
    },
  ],
  keyHighlights: [
    "🏆 Full-stack marketplace with geolocation-based discovery",
    "⚡ Real-time WebSocket communication for instant messaging",
    "🗺️ Advanced mapping with Leaflet.js and geocoding services",
    "🛡️ Enterprise-grade security with PostgreSQL and Drizzle ORM",
    "📱 Modern UI with Shadcn/ui components and responsive design",
    "🔍 Intelligent search with multiple filtering options",
  ],
  screenshots: [
    {
      src: mart_img,
      alt: "Mart Main Dashboard",
      caption: "Main marketplace interface showing item listings and location-based discovery",
      category: "Overview"
    },
    {
      src: mart_img2,
      alt: "Mart Authentication",
      caption: "Secure login and registration system with form validation",
      category: "Authentication"
    },
    {
      src: mart_img3,
      alt: "Mart Admin Dashboard",
      caption: "Admin panel for content moderation and user management",
      category: "Administration"
    }
  ],
  isBlog: false
};

export default martProject; 