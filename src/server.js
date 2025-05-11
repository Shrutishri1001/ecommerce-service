require('dotenv').config(); // Add this at the very top
const express = require("express");
const connectDB = require("./configs/db");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

connectDB();

app.get("/", (req, res) => {
    res.send("E-commerce service backend is running...");
});

app.listen(3000, () => {
    console.log("Server listening to the port 3000.");
});
