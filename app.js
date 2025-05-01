const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = require("./routes/authRoutes");

dotenv.config();

const app = express();
app.use(express.json());


// Register routes
app.use("/api/auth", router);
app.use("/api/auth", router);


// Connect to DB and start server

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(3003, () => {
            console.log("Database connected and server is running on port 3003");
        });
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1); 
    });




