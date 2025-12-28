
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




//middleware
app.use(express.json());

app.use(cors({
	origin: "http://localhost:5173",
	credentials: true
}));

//connection to db
mongoose.connect(process.env.MONGO_URI);

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


//connect to port
const PORT = process.env.PORT || 5000;

//Opening a port and stsrting the backend
app.listen(PORT, () => {
	console.log(`Server running on ${PORT}`);
})