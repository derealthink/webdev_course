
// Load env variables looks for a .env file
require("dotenv").config();

// Import express
const express = require("express");

//Import cors
const cors = require("cors");

//create the app var
const app = express();




//middleware
app.use(express.json());

app.use(cors({
	origin: "http://localhost:5173",
	credentials: true
}));


//API routing
app.get("/api/health", (req, res) => {
  res.json({ message: "API is working" });
});



//connect to port
const PORT = process.env.PORT || 5000;

//Opening a port and stsrting the backend
app.listen(PORT, () => {
	res.send(`Server running on ${PORT}`);
})