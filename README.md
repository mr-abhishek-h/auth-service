🔐 Auth Service — Node.js, MongoDB, JWT

A backend authentication service implementing secure user registration, login, JWT-based authentication, and role-based access control (RBAC).

This project is designed with clean architecture, stateless auth, and security best practices.

🚀 Features

User registration with hashed passwords (bcrypt)

User login with JWT access tokens

Stateless authentication using JWT

Authorization middleware

Role-Based Access Control (RBAC)

Protected and admin-only routes

MongoDB persistence using Mongoose

🧱 Tech Stack

Node.js

Express

MongoDB

Mongoose

JWT (jsonwebtoken)

bcrypt

🧠 Architecture Overview

Routes → define endpoints

Controllers → handle business logic

Middleware → authentication & authorization

Models → data persistence

Config → environment & database setup

Authentication and authorization are intentionally separated for clarity and scalability.

🔑 Authentication Flow
1️⃣ Register

Validates input

Checks for duplicate users

Hashes password using bcrypt

Stores user securely in MongoDB

2️⃣ Login

Verifies email & password

Issues JWT access token

Token contains minimal payload:

userId

role

3️⃣ Auth Middleware

Reads JWT from Authorization: Bearer <token>

Verifies token signature

Attaches user context to request

🛂 Authorization (RBAC)

Role-based access control is enforced using middleware.

Example:

user → normal access

admin → privileged routes

Authorization is declarative at the route level, not embedded in business logic.

📌 API Endpoints
Register
POST /auth/register

Login
POST /auth/login

Protected Route
GET /protected/me

Admin-Only Route
GET /admin/dashboard

🧪 Example CURL Commands
Register
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'

Login
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'

Access Protected Route
curl http://localhost:3000/protected/me \
  -H "Authorization: Bearer <TOKEN>"

Access Admin Route
curl http://localhost:3000/admin/dashboard \
  -H "Authorization: Bearer <ADMIN_TOKEN>"

🔒 Security Considerations

Passwords are never stored in plaintext

JWT payload contains no sensitive data

Same error message for invalid login attempts

Stateless authentication (no sessions)

Environment variables used for secrets

▶️ Run Locally
npm install
npm run dev


Ensure MongoDB is running locally:

mongodb://localhost:27017/auth_service
