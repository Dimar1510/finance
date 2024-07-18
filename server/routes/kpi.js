const express = require("express");
const KPI = require("../models/KPI");
const router = express.Router();

router.get("/kpis", async (req, res, next) => {
  try {
    const kpis = await KPI.find();
    res.json(kpis);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
