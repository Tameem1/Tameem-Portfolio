import appointment_img from "../../../Assets/Projects/appointment-admin-dashboard.png";
import appointment_img2 from "../../../Assets/Projects/appointment-login.png";
import appointment_img3 from "../../../Assets/Projects/appointment-student.png";
import appointment_img4 from "../../../Assets/Projects/appointment-teacher.png";
import appointment_img5 from "../../../Assets/Projects/car-telegram.png";
import appointment_img6 from "../../../Assets/Projects/appointment-admin-dashboard.png";

const appointmentProject = {
  id: 5,
  title: "Teacher-Student Appointment Management System",
  description: "A web application for managing student appointments with teachers, built with React, Express, and WebSocket for real-time updates.",
  fullDescription: "The Teacher-Student Appointment Management System is a comprehensive web application designed to streamline the process of scheduling and managing appointments between students and teachers. Built with modern web technologies, it provides a complete ecosystem for appointment booking, teacher availability management, real-time communication, and administrative oversight. The platform emphasizes user experience with intuitive interfaces, robust security, and seamless real-time updates.",
  imgPath: appointment_img6,
  technologies: [
    "React", "TailwindCSS", "ShadcnUI", "Express", "WebSocket", "PostgreSQL", "Drizzle ORM", "Passport.js", "ws"
  ],
  features: [
    "📅 Student Appointment Booking System",
    "👨‍🏫 Teacher Availability Management",
    "⚡ Real-time Updates via WebSocket",
    "🎯 Intelligent Teacher Assignment System",
    "📝 Questionnaire Response Management",
    "📱 Telegram Notifications Integration",
    "📊 Comprehensive Statistics & Reporting",
    "🔐 Multi-role Authentication (Admin, Teacher, Student)",
    "🌐 Fully Responsive Design",
    "🔔 Real-time Notifications & Alerts"
  ],
  workflow: [
    {
      step: 1,
      title: "User Authentication & Role Management",
      description: "Users sign up and authenticate with specific roles (Admin, Teacher, Student)",
      screenshot: {
        src: appointment_img2,
        alt: "User Authentication Interface",
        caption: "Secure login system with role-based access control"
      }
    },
    {
        step: 2,
        title: "Admin Dashboard",
        description: "Admin can manage users, appointments, and settings",
        screenshot: {
          src: appointment_img,
          alt: "Admin Dashboard",
          caption: "Admin can manage users, appointments, and settings"
        }
      },
    {
      step: 3,
      title: "Teacher Availability Setup",
      description: "Teachers set their available time slots and preferences",
      screenshot: {
        src: appointment_img4,
        alt: "Teacher Dashboard",
        caption: "Teacher interface for managing availability and viewing appointments"
      }
    },
    {
      step: 4,
      title: "Student Appointment Booking",
      description: "Students browse available teachers and book appointments",
      screenshot: {
        src: appointment_img3,
        alt: "Appointment Booking Interface",
        caption: "Intuitive booking system with teacher selection and time slot picking"
      }
    },
    {
      step: 5,
      title: "Real-time Communication & Notifications",
      description: "Instant updates via WebSocket and Telegram integration",
      screenshot: {
        src: appointment_img5,
        alt: "Real-time Notifications",
        caption: "Live updates and Telegram bot notifications for appointment status"
      }
    },
  ],
  keyHighlights: [
    "🏆 Successfully deployed for educational institution",
    "⚡ Real-time WebSocket communication for instant updates",
    "🤖 Automated Telegram bot integration for notifications",
    "🛡️ Enterprise-grade security with role-based access",
    "📊 Advanced analytics and reporting capabilities",
    "📱 Mobile-responsive design for all devices"
  ],
  screenshots: [
    {
      src: appointment_img6,
      alt: "Appointment System Dashboard",
      caption: "Main dashboard showing appointment overview and statistics",
      category: "Overview"
    }
  ],
  isBlog: false
};

export default appointmentProject; 