# Student Management API

A scalable **Student Management REST API** built using **Node.js**, **Express.js**, and **MongoDB**.  
This project is designed to manage student records efficiently with clean architecture, pagination, proper error handling, and secure API practices.

---

## 📌 Table of Contents

- Overview
- Features
- Tech Stack
- API Endpoints
- Getting Started
- Environment Variables
- Running the Project
- API Usage Examples
- Pagination & Performance
- Error Handling
- Contributing
- License

---

## 🔍 Overview

The **Student Management API** provides backend functionality to manage student data such as:

- Creating student records
- Fetching students with pagination
- Updating student details
- Deleting student records

This API is suitable for:
- College projects
- Admin dashboards
- Learning backend development
- Integration with frontend applications

---

## 🚀 Features

- RESTful API design
- CRUD operations for students
- Pagination for large datasets
- MongoDB integration using Mongoose
- Centralized error handling
- Clean MVC folder structure
- JSON-based API responses
- Scalable and production-ready structure

---

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Backend framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB ODM
- **dotenv** – Environment variable management
- **CORS** – Cross-origin request handling

---

## 🧩 API Endpoints

### 🧑‍🎓 Student Routes

| Method | Endpoint | Description |
|------|---------|-------------|
| GET | `/api/students` | Get all students (paginated) |
| GET | `/api/students/:id` | Get student by ID |
| POST | `/api/students` | Create new student |
| PUT | `/api/students/:id` | Update student |
| DELETE | `/api/students/:id` | Delete student |

---

## 🚀 Getting Started

### 📌 Prerequisites

Make sure you have installed:

- Node.js (v16 or above)
- npm
- MongoDB (Local or MongoDB Atlas)

---

### 📥 Installation

Clone the repository:

- git clone https://github.com/Meet-Patel-12/Student-Management-API.git
- cd Student-Management-API
- npm install

---

### 📡 Environment Variables

Create a .env file in the root directory and add:

- PORT=5000
- MONGODB_URI=your_mongodb_connection_string

---

### 🏁 Running the Project

Start the development server:

- npm run dev 

---

### 📘 API Usage Examples

### ➕ Create Student

**Endpoint:** `POST /api/students`

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 20,
  "course": "Computer Science"
}
```

### ✏️ Update Student

**Endpoint:** `PUT/api/students/:id`

**Request Body:**

```json
{
  "name": "John Doe update",
  "email": "doe@example.com",
  "course": "Artificial Intelligence"
}
```
---

### 📊 Pagination & Performance

Pagination is implemented using:

- page
- limit

This ensures:

- Faster responses
- Efficient handling of large datasets (1000+ records)
- Reduced server load

---

### ⚠️ Error Handling

- Custom error class (AppError)
- Centralized error middleware
- Proper HTTP status codes
- Clean error messages for invalid IDs and requests

---

### 🤝 Contributing

Contributions are welcome!

Steps:
- Fork the repository
- Create a new branch
- Commit your changes
- Open a Pull Request

---

### 📜 License

This project is licensed under the MIT License.

---

### ⭐ Author

Meet Patel
B.Tech CSE (AI) Student
Backend & MERN Stack Developer
