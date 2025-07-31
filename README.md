# 🚀 Server_BE

This is a basic Node.js + Express backend project that manages data using a simple JavaScript array (no database required).

---

## 📦 Tech Stack

- Node.js
- Express.js
- Body-parser (for parsing incoming requests)
- CORS (for enabling cross-origin requests)

---

## 📁 Project Structure

Server_BE/
├── node_modules/
├── server.js
├── package.json
└── README.md


---

## ⚙️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/MiniGova/Server_BE.git
cd Server_BE
npm install
nodemon server.js
http://localhost:8080
```

✅ The data will be stored temporarily in an in-memory array (not persistent). Every time the server restarts, the array resets.

📌 Features
*************
Basic CRUD operations (Create, Read, Update, Delete)
No database setup needed — great for testing and learning backend logic
Simple API using Express


🔧 API Endpoints (Sample)
**************************
GET /users — Get all users
POST /users — Add a new user
PUT /users/:id — Update user by ID
DELETE /users/:id — Delete user by ID
Note: The exact routes may vary depending on your server.js file.

👨‍💻 Author
Made with ❤️ by Govarthani K

---


