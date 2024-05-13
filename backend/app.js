const express = require("express");

const app = express();
const placesRouter = require("./routes/placesRoutes");
const userRouter = require("./routes//userRoutes");
const AppError = require("./utils/appError");

app.use(express.json());

app.use("/api/v1/places", placesRouter);
app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError("This route is not declared", 404));
});

// Middleware to handle error
// later convert it to development and production mode

app.use((err, req, res, next) => {
  (err.statusCode = err.statusCode || 500), (err.status = err.status || "Fail");

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err,
  });
});

module.exports = app;
