const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// DB connect
connectDB();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/leave", require("./routes/leaveRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

// server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
