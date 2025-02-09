# Healthify - Hospital Management System

Healthify is a comprehensive Hospital Management System built using the **MERN stack** (MongoDB, Express, React, Node.js). It provides an efficient platform for managing hospital operations, including patient records, doctor schedules, appointments, and authentication.

## Features

✅ User authentication (JWT-based)
✅ Role-based access control (Patients, Doctors, Admins)
✅ Patient management (CRUD operations)
✅ Doctor management (CRUD operations)
✅ Appointment booking & management
✅ Email notifications using Nodemailer
✅ Secure API routes with authentication middleware

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: React.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT (JSON Web Token)
- **Email Service**: Nodemailer

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js (>= v18.0)
- MongoDB (local or Atlas)

### Steps to Run the Project

#### 1️⃣ Clone the Repository

```sh
git clone https://github.com/yourusername/healthify.git
cd healthify/backend
```

#### 2️⃣ Install Dependencies

```sh
npm install
```

#### 3️⃣ Set Up Environment Variables

Create a `.env` file in the `backend/` directory with the following content:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

#### 4️⃣ Start the Server

```sh
npm start
```

#### 5️⃣ Run the Frontend (If Available)

```sh
cd ../frontend
npm install
npm start
```

## API Endpoints

### 🏥 **Authentication**

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login user

### 👨‍⚕️ **Doctor Management**

- `GET /api/doctors` - Get all doctors
- `GET /api/doctors/:id` - Get doctor by ID
- `PUT /api/doctors/:id` - Update doctor details
- `DELETE /api/doctors/:id` - Remove doctor

### 🏥 **Patient Management**

- `GET /api/patients` - Get all patients
- `GET /api/patients/:id` - Get patient by ID
- `PUT /api/patients/:id` - Update patient details
- `DELETE /api/patients/:id` - Remove patient

### 📅 **Appointments**

- `POST /api/appointments` - Book an appointment
- `GET /api/appointments` - Get all appointments
- `GET /api/appointments/:id` - Get appointment by ID
- `PUT /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Cancel appointment

## Contributing

Feel free to submit pull requests or report issues. Contributions are always welcome!

## License

This project is licensed under the MIT License.

## Contact

For any queries, reach out at: **agaditya1000\@example.com**

---

💡 *Happy Coding!* 🎉

