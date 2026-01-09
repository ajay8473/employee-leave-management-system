const express = require("express");
const Leave = require("../models/Leave");
const auth = require("../middleware/auth");

const router = express.Router();

// APPLY LEAVE
router.post("/apply", auth, async (req, res) => {
  const { startDate, endDate, reason } = req.body;

  const leave = new Leave({
    userId: req.user.id,
    startDate,
    endDate,
    reason
  });

  await leave.save();
  res.json({ message: "Leave applied successfully" });
});

// MY LEAVES
router.get("/my", auth, async (req, res) => {
  const leaves = await Leave.find({ userId: req.user.id });
  res.json(leaves);
});

module.exports = router;
