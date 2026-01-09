const express = require("express");
const Leave = require("../models/Leave");
const auth = require("../middleware/auth");

const router = express.Router();

// ALL LEAVES
router.get("/leaves", auth, async (req, res) => {
  if (req.user.role !== "admin")
    return res.status(403).json({ message: "Admin only" });

  const leaves = await Leave.find();
  res.json(leaves);
});

// APPROVE
router.put("/approve/:id", auth, async (req, res) => {
  await Leave.findByIdAndUpdate(req.params.id, {
    status: "Approved"
  });
  res.json({ message: "Leave approved" });
});

// REJECT
router.put("/reject/:id", auth, async (req, res) => {
  await Leave.findByIdAndUpdate(req.params.id, {
    status: "Rejected"
  });
  res.json({ message: "Leave rejected" });
});

module.exports = router;
