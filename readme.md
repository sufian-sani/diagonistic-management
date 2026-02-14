System Overview: Diagnostic Management System
Your system is a Full-Stack Medical Appointment Booking & Management Platform. Here are the main features:

🔐 Core User Roles
Patients/Users - Book appointments, manage profiles
Doctors - Manage appointments, availability, profiles
Admins - Oversee doctors, appointments, system management
👥 User Management
User registration & login with JWT authentication
Doctor registration & profile management
Admin authentication & authorization
User profile updates with image upload (Cloudinary)
Doctor details (specialty, experience, fees, qualifications)
📅 Appointment System
Book Appointments - Users select doctors, dates, and time slots
Doctor Availability - Doctors manage available slots
Appointment Status: Pending, Completed, Cancelled
Appointment Notes - Admins/Doctors can add notes to appointments
Appointment History - View all appointments per user/doctor
Cancel Appointments - Users, doctors, and admins can cancel
💳 Payment Processing
Integrated payment gateways:

Razorpay - Indian payment solution
Stripe - International payments
Aamarpay - Bangladesh payment gateway
Payment verification & order status tracking
Success/Failed/Cancel page handling
📊 Dashboard Features
Admin Dashboard - View all appointments, doctors, statistics
Doctor Dashboard - View scheduled appointments, earnings
User Dashboard - Appointment history, profile management

------
🛠️ Technical Stack
Frontend: React (Vite), Tailwind CSS
Backend: Node.js/Express, MongoDB
Authentication: JWT tokens (role-based)
Storage: Cloudinary (images)
Database: MongoDB with Mongoose ODM
File Upload: Multer middleware
📁 Main Structure
admin - Admin panel interface
frontend - User-facing application
backend - API server with controllers, routes, middleware
