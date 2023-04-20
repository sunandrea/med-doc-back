require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
// const router = require("./routes/api/contacts.routes");
const { errorFilter } = require("./middlewares/index");

const authRouter = require("./routes/api/auth");

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/users", authRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(err.status).json({ message: err.message });
});

app.use(errorFilter);

module.exports = app;