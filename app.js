const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
// middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, "0.0.0.0", () => {
            console.log(`Server is listening on port ${port} 22:49`);
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log(error);
    }
};

start()