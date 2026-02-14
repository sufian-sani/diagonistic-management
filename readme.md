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
--------------------------
how to run the project
1. Clone the repository:
git clone
2. Navigate to the project directory:
cd diagnostic-management-system
3. Install dependencies for the backend:
cd backend
npm install
4. Set up environment variables:
Create a .env file in the backend directory with the following variables:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
AAMARPAY_STORE_ID=your_aamarpay_store_id
AAMARPAY_STORE_PASSWORD=your_aamarpay_store_password
5. Start the backend server:
npm start
6. Install dependencies for the frontend:
cd ../frontend
npm install
7. Start the frontend development server:
npm start
8. Access the application:
Open your browser and navigate to http://localhost:3000 to access the user interface.
Admin panel can be accessed at http://localhost:3000/admin

9. Use the following credentials to log in as an admin:
cd admin
npm install
go to http://localhost:5174/
Email: admin@example.com
Password: greatstack123
--------------------------
This project provides a comprehensive platform for managing medical appointments, user profiles, and payments. It is designed to be scalable and secure, with role-based access control and integration with popular payment gateways. The use of modern technologies like React, Node.js, and MongoDB ensures a responsive and efficient user experience.
--------------------------
