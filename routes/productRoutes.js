const express = require("express");
const { getProducts, getSpecificProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/productController");
const router = express.Router();

// Routes for CRUD Operations

// Get All Data From DB

router.get("/", getProducts);

// Get Specific Data Using ID From DB

router.get("/:id", getSpecificProduct);

// Add Data to DB

router.post("/", createProduct);

// Update The Data in DB

router.put("/:id", updateProduct);

// Delete the Data From DB

router.delete("/:id", deleteProduct);

module.exports = router;
