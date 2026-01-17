# 🔐 Auth Service — Node.js, MongoDB, JWT

A backend authentication service implementing **secure user registration, login, JWT-based authentication, and role-based access control (RBAC)**.

This project is designed with **clean architecture, stateless auth, and security best practices**, suitable for real-world backend systems and interviews.

---

## 🚀 Features

- User registration with hashed passwords (bcrypt)
- User login with JWT access tokens
- Stateless authentication using JWT
- Authentication middleware
- Role-Based Access Control (RBAC)
- Protected and admin-only routes
- MongoDB persistence using Mongoose

---

## 🧱 Tech Stack

- Node.js  
- Express  
- MongoDB  
- Mongoose  
- JSON Web Tokens (jsonwebtoken)  
- bcrypt  

---

## 🧠 Architecture Overview

- **Routes** → Define API endpoints  
- **Controllers** → Handle business logic  
- **Middleware** → Authentication & authorization  
- **Models** → Database schemas  
- **Config** → Environment variables & database setup  

Authentication and authorization are **intentionally separated** to keep the system modular and scalable.

---

## 🔑 Authentication Flow

### 1️⃣ Register
- Validates input
- Checks for duplicate users
- Hashes password using bcrypt
- Stores user securely in MongoDB

### 2️⃣ Login
- Verifies email & password
- Issues JWT access token
- Token payload contains:
  - `userId`
  - `role`

### 3️⃣ Auth Middleware
- Reads token from `Authorization: Bearer <token>`
- Verifies JWT signature
- Attaches user context to request

---

## 🛂 Authorization (RBAC)

Role-based access control is enforced using middleware.

- `user` → normal access  
- `admin` → privileged routes  

Authorization is applied **declaratively at the route level**, not inside business logic.

---

## 📌 API Endpoints

### Register
POST /auth/register


### Login
POST /auth/login

### Protected Route
GET /protected/me

### Admin-Only Route
GET /admin/dashboard


---

## 🧪 Example CURL Commands

### Register
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```


### Login 
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Access Protected Route

```bash
curl http://localhost:3000/protected/me \
  -H "Authorization: Bearer <TOKEN>"
```

### Access Admin Route

```bash
curl http://localhost:3000/admin/dashboard \
  -H "Authorization: Bearer <ADMIN_TOKEN>"
```

### Security Considerations

- Passwords are never stored in plaintext
- JWT payload contains no sensitive information
- Same error message for invalid login attempts
- Stateless authentication 
- Secrets managed via environment variables

### Run Locally

```bash
npm install
npm run dev
```

### Ensure MongoDB is running locally

```bash
mongodb://localhost:27017/auth_service
```



