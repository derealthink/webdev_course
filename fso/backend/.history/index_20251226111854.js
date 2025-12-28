
// Load env variables looks for a .env file
require("dotenv").config();

// Import express
const express = require("express");

//create the app var
const app = express();

const cors = require("cors");

//middleware
app.use(express.json());

app.use(cors({
	origin: "http://localhost:5173",
	credentials: true
}));

//connect to port
const PORT = process.env.PORT || 5000;

//Opening a port and stsrting the backend
app.listen(PORT, () => {
	console.log(`Server running on ${PORT}`);
})