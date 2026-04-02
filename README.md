# 💰 Finance Data Processing & Access Control Backend

## 📌 Project Overview

This project is a backend system for a **Finance Dashboard Application** that manages financial records and enforces role-based access control.

The system allows users to:

* Manage financial transactions (income & expenses)
* Access summarized dashboard insights
* Perform actions based on assigned roles

The backend is designed with a focus on:

* Clean architecture
* Scalable API design
* Secure access control
* Maintainable code structure

---

## ⚙️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT (JSON Web Token)
* **Security:** bcrypt.js (password hashing)
* **Environment Config:** dotenv
* **Testing Tool:** Postman

---

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd finance-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4. Start the server

```bash
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### 🔐 Authentication

#### Register User

```
POST /api/users/register
```

#### Login User

```
POST /api/users/login
```

---

### 💰 Financial Records

#### Create Record (Admin only)

```
POST /api/records
```

#### Get Records

```
GET /api/records
```

#### Update Record (Admin only)

```
PUT /api/records/:id
```

#### Delete Record (Admin only)

```
DELETE /api/records/:id
```

#### Filter Records

```
GET /api/records?type=income&category=salary
```

---

### 📊 Dashboard

#### Get Summary

```
GET /api/dashboard
```

Returns:

* Total Income
* Total Expenses
* Net Balance
* Category-wise breakdown

---

## 🔐 Role-Based Access Control

The system implements **role-based authorization** with the following roles:

### 👤 Viewer

* Can view records
* Can access dashboard summary
* Cannot modify data

### 📊 Analyst

* Can view records
* Can access dashboard insights
* Cannot create/update/delete records

### 🛠️ Admin

* Full access
* Can manage users and records
* Can perform all CRUD operations

---

## 🗄️ Data Modeling

### User Model

* name
* email
* password (hashed)
* role (viewer / analyst / admin)
* status (active / inactive)

### Record Model

* amount
* type (income / expense)
* category
* date
* notes
* createdBy (User reference)

---

## 🛡️ Validation & Error Handling

* Input validation for required fields
* Proper HTTP status codes (400, 401, 403, 404, 500)
* Error handling using try-catch blocks
* Protection against invalid operations

---

## 💡 Assumptions

* Authentication is handled using JWT tokens
* Only Admin users can modify financial records
* Analysts and Viewers have read-only access
* MongoDB is used as the primary database
* Basic validation is implemented for inputs

---

## 🌟 Additional Features

* Role-based middleware for access control
* Filter support for records
* Clean modular folder structure
* Scalable architecture for future enhancements

---

## 📈 Future Improvements

* Pagination for large datasets
* Advanced analytics (monthly trends, charts)
* API documentation using Swagger
* Unit and integration testing
* Rate limiting and security enhancements

---

## 👨‍💻 Author

**Avinash Kumar**

* GitHub: https://github.com/Avinash12122002
* LinkedIn: https://www.linkedin.com/in/avinash-kumar-60b9a827b/

---

## ✅ Conclusion

This project demonstrates backend development skills including API design, database modeling, authentication, and access control. The system is structured to be scalable, maintainable, and aligned with real-world backend development practices.

---
