const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
module.exports = app;

// use userRoutes for all user-related endpoints
app.use(userRoutes);
