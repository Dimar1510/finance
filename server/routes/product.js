const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

router.get("/products", async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
