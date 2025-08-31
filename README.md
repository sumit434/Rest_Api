RESTful API using Node.js & Express

This repository contains the **REST API assignment project** for Module 2.  
The project implements a simple CRUD API for managing users, using an **in-memory array** as the data source (no database).

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/sumit434/Rest_Api.git
cd Rest_Api

2. Install dependencies
npm install

3. Run the server
npm start


Server will run at:
👉 http://localhost:3000

📂 Project Structure
Rest_Api/
├── .gitignore
├── package.json
├── README.md
└── src/
    ├── index.js
    ├── middlewares/
    │   ├── logger.js
    │   ├── errorHandlers.js
    │   └── validateUser.js
    └── routes/
        └── users.js

📌 API Endpoints
1. GET /users

Fetch all users.
Response: 200 OK

[
  { "id": "1", "firstName": "Anshika", "lastName": "Agarwal", "hobby": "Teaching" },
  { "id": "2", "firstName": "Rahul", "lastName": "Sharma", "hobby": "Cricket" }
]

2. GET /users/:id

Fetch a user by ID.

✅ 200 OK (if user exists)

❌ 404 Not Found (if user does not exist)

3. POST /user

Create a new user.

✅ 201 Created (if successful)

❌ 400 Bad Request (if required fields are missing or ID already exists)

Required JSON body:

{
  "id": "3",
  "firstName": "Priya",
  "lastName": "Singh",
  "hobby": "Cycling"
}

4. PUT /user/:id

Update an existing user.

✅ 200 OK (if successful)

❌ 404 Not Found (if user not found)

❌ 400 Bad Request (if trying to reuse another user’s ID)

5. DELETE /user/:id

Delete a user by ID.

✅ 200 OK (if user deleted)

❌ 404 Not Found (if user not found)

🛠️ Middleware

Logger
Logs each request → method, URL, status code, and response time.

Validation
Ensures required fields (id, firstName, lastName, hobby) are present in POST/PUT requests.

Error Handlers

notFoundHandler: Handles 404 errors (undefined routes).

errorHandler: Handles runtime errors and sends JSON response.
