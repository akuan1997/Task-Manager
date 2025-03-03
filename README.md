# Task Manager API

A RESTful API built with Node.js, Express, and MongoDB for managing tasks with complete CRUD functionality.

## 📋 Overview

This project implements a task management system that allows users to create, read, update, and delete tasks. The API is built with a clean architecture focusing on:

- Robust error handling
- Middleware implementation
- MongoDB integration
- RESTful API design principles

## 🚀 Features

- Create new tasks with name and completion status
- Retrieve all tasks or a specific task by ID
- Update task information (using both PUT and PATCH methods)
- Delete tasks
- Custom error handling
- Asynchronous operation handling

## 🛠️ Technology Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **dotenv** - Environment variable management

## 📁 Project Structure

```
.
├── app.js                  # Application entry point
├── routes/
│   └── tasks.js            # Router for task endpoints
├── controllers/
│   └── tasks.js            # Request handlers for tasks
├── models/
│   └── Task.js             # Mongoose schema for tasks
├── middleware/
│   ├── async.js            # Wrapper for async functions
│   ├── error-handler.js    # Custom error handling middleware
│   └── not-found.js        # 404 handler
├── db/
│   └── connect.js          # Database connection function
├── errors/
│   └── custom-error.js     # Custom error class
└── .env                    # Environment variables (not in repo)
```

## 🔌 API Endpoints

| Method | Endpoint        | Description                   |
|--------|-----------------|-------------------------------|
| GET    | /api/v1/tasks   | Get all tasks                 |
| POST   | /api/v1/tasks   | Create a new task             |
| GET    | /api/v1/tasks/:id | Get a single task by ID     |
| PATCH  | /api/v1/tasks/:id | Update a task (partial)     |
| PUT    | /api/v1/tasks/:id | Replace a task (complete)   |
| DELETE | /api/v1/tasks/:id | Delete a task               |

## 📥 Installation & Setup

1. Clone the repository
   ```
   git clone https://github.com/yourusername/task-manager-api.git
   cd task-manager-api
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the server
   ```
   npm start
   ```

## 🧰 Development Highlights

### Error Handling
Implemented a custom error handling system with specific error types and middleware for consistent API responses.

### Async/Await Pattern
Used modern JavaScript async/await pattern with a custom wrapper to reduce try/catch boilerplate.

### Validation
Mongoose schema validation ensures data integrity before storing in the database.

### RESTful Design
Followed RESTful principles with appropriate HTTP methods and status codes.

## 🔍 Future Improvements

- Add user authentication
- Implement task categories or tags
- Add task priority levels
- Create a frontend interface
- Add unit and integration tests
- Implement pagination for the GET all tasks endpoint

## 📄 License

MIT