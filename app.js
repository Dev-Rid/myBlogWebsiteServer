require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRoutes");
const cors = require("cors")


const app = express();
app.use(express.json());

// app.use(cors({
//   origin: "http://localhost:5173", //allow frontend
//   credentials: true                //if im sending cookies/auth headers
// }))
app.use(cors())

// Register routes
app.use("/api/auth", authRouter);

// Determine port, with a fallback
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Database connected and server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });




