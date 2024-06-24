const express = require("express");
const mongoose = require("mongoose");

// Import Product Model ( Schema )

const Product = require("./models/productModel.js");

// Import Product Route

const productRoute = require("./routes/productRoutes.js");

// Create Express App

const app = express();

// Middlewares - Help to parse the incoming request

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB Database

mongoose
  .connect(
    // Add your Own Mongoose Connect URL
  )
  .then(() => {
    console.log("Connected to the database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });

// Basic API Request

app.get("/", (req, res) => {
  res.send("Hello Crud App!");
});

// Routes for CRUD Operations

app.use("/api/products", productRoute);

