require('dotenv').config(); // Add this at the very top
const express = require("express");
const connectDB = require("./configs/db");
const morgan = require("morgan");
const productRoutes=require("./routes/productRoutes");
const app = express();
app.use(morgan("dev"));
app.use(express.json());
const PORT=process.env.PORT || 3000;
connectDB();

//home route
app.get("/", (req, res) => {
    res.send("E-commerce service backend is running...");
});
//products route
app.use("/api/products",productRoutes);
app.listen(PORT, () => {
    console.log(`Server listening to the port ${PORT}.`);
});
