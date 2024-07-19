const express = require("express");
const router = express.Router();
const { ProductController, TransactionController } = require("../controllers");

router.get("/products", ProductController.getAllProducts);
router.post("/products", ProductController.createProduct);
router.post("/products/populate", ProductController.populate);

router.get("/transactions", TransactionController.getAllTransactions);
router.post("/transactions", TransactionController.createTransaction);
module.exports = router;
