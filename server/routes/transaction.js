const express = require("express");
const Transaction = require("../models/Transaction");
const router = express.Router();

router.get("/transactions", async (req, res, next) => {
  try {
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });
    res.json(transactions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
