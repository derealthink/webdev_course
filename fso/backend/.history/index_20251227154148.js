
// Load env variables looks for a .env file
require("dotenv").config();

// Import express
const express = require("express");

//Import cors
const cors = require("cors");

//create the app var
const app = express();

//create db connection
const mongoose = require("mongoose");

//include Schema
const User = require("./user");




//middleware
app.use(express.json());

app.use(cors({
	origin: "http://localhost:5173",
	credentials: true
}));

//connection to db
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Atlas connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

connectDB();

//API GET routing
app.get("/api/health", (req, res) => {
  res.json({ message: "API is working" });
});


//API POST rotuning
app.post("/api/test", (req, res) => {
    console.log("POST route hit");
    console.log("Request body:", req.body);

    res.json({
        message: "POST request received",
        yourData: req.body
    });
});

//POST test
app.post("/api/users", async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


//connect to port
const PORT = process.env.PORT || 5000;

//Opening a port and stsrting the backend
app.listen(PORT, () => {
	console.log(`Server running on ${PORT}`);
})