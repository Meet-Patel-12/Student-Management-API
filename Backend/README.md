# Backend – Role-Based Student Management System

This is the **backend service** for the Role-Based Student Management System.  
It provides secure REST APIs with **JWT authentication**, **role-based access control**, and **admin approval workflow**.

---

## 🚀 Features

- ✅ Role-based authentication (Admin / Student)
- ✅ Admin approval before password setup
- ✅ Secure JWT-based login
- ✅ Student CRUD with ownership-based access
- ✅ Pagination, search, and sorting
- ✅ MongoDB indexing for performance (1000+ records)
- ✅ Centralized error handling

---

## 🛠 Tech Stack

- **Node.js** – Runtime environment
- **Express.js** – Web framework
- **MongoDB + Mongoose** – Database & ODM
- **JWT** – JSON Web Token authentication
- **bcryptjs** – Password hashing
- **dotenv** – Environment configuration

---

## 📂 Backend Folder Structure

```
Backend/
│
├── controllers/      # Business logic
├── models/           # Mongoose schemas
├── routes/           # API routes
├── middlewares/      # Auth & error middleware
├── config/           # DB configuration
├── utils/            # AppError & helpers
│
├── app.js            # Express app setup
├── server.js         # Server entry point
├── package.json      # Dependencies
└── .env              # Environment variables (not committed)
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the `Backend/` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

> ⚠️ **Never commit `.env` to GitHub.**

---

## ▶️ How to Run Backend Locally

### 1️⃣ Go to Backend folder

```bash
cd Backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

## 🔐 Authentication Flow (Important)

### Student

1. Student registers (no password)
2. Admin approves student
3. Student sets password
4. Student logs in (JWT issued)

### Admin

1. Admin registers
2. First admin approved manually (one-time)
3. Admin sets password
4. Admin logs in
5. Admin can approve/reject users

---

## 📡 API Overview

### 🔑 Auth APIs

| Method | Endpoint                     | Description                 |
| ------ | ---------------------------- | --------------------------- |
| `POST` | `/api/auth/admin/register`   | Admin registration          |
| `POST` | `/api/auth/admin/login`      | Admin login                 |
| `POST` | `/api/auth/student/register` | Student registration        |
| `POST` | `/api/auth/student/login`    | Student login               |
| `POST` | `/api/auth/set-password`     | Set password after approval |

---

### 👑 Admin APIs

| Method  | Endpoint                   | Description        |
| ------- | -------------------------- | ------------------ |
| `GET`   | `/api/admin/pending-users` | View pending users |
| `PATCH` | `/api/admin/approve/:id`   | Approve user       |
| `PATCH` | `/api/admin/reject/:id`    | Reject user        |

> 🔒 **Requires Admin JWT token**

---

### 🎓 Student APIs

| Method   | Endpoint                   | Access                   |
| -------- | -------------------------- | ------------------------ |
| `GET`    | `/api/students`            | Admin: all, Student: own |
| `GET`    | `/api/students/:id`        | Admin / Own student      |
| `POST`   | `/api/students`            | Admin only               |
| `PUT`    | `/api/students/:id`        | Admin only               |
| `DELETE` | `/api/students/:id`        | Admin only               |
| `PUT`    | `/api/students/me/profile` | Student own profile      |

---

## 🔍 Pagination, Search & Sorting

Example:

```
GET /api/students?page=1&limit=10&search=cse&sortBy=year&order=asc
```

- **Pagination** for large datasets
- **Search** by name or enrollment number
- **Sorting** by name, year, enrollmentNo

---

## 🧪 Testing with Postman

1. Login to get JWT token
2. Add header:

```
Authorization: Bearer <TOKEN>
```

3. Test protected APIs

---

## 🧠 Error Handling

- Centralized error middleware
- Custom `AppError` class
- Proper HTTP status codes

---

## 🔮 Future Improvements

- 📄 API documentation using Swagger
- 🧪 Automated testing (Jest)
- 🔑 Password reset flow
- 🛡️ Rate limiting & security headers

---

## 📌 Notes

- `.env` file is ignored via `.gitignore`
- `node_modules` not committed
- Backend is ready for frontend integration

---

## 👨‍💻 Author

**Meet Patel**  
Role-Based Student Management System – Backend

---

## 📄 License

<!-- This project is open source and available under the [MIT License](LICENSE). -->

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](../../issues).

---

## ⭐ Show your support

Give a ⭐️ if this project helped you!
