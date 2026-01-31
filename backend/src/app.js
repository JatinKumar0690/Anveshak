const express = require("express");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/auth.routes.js");
const resumeRoutes = require("./routes/resume.route.js");
const errorHandler = require("./middlewares/error.middleware.js");

//Middlewares
app.use(cors({
  origin: ["http://localhost:5173", "https://anveshak-delta.vercel.app"],
  credentials: true,
}));
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.status(201).json({
    success: true,
    message: "Anveshak API is running",
  });
});
module.exports = app;
