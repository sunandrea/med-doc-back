require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const { errorFilter } = require("./middlewares/index");

const authRouter = require("./routes/api/auth");
const infoRouter = require("./routes/api/info");

const experienceRouter = require("./routes/api/experience");
const {
  visitRouter,
  appointmentRouter,
  institutionRouter,
} = require("./routes/api");

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(logger(formatsLogger));
app.use(cors(corsOptions));
// app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/info", infoRouter);
app.use("/api/visits", visitRouter);
app.use("/api/experience", experienceRouter);
app.use("/api/appointment", appointmentRouter);
app.use("/api/institution", institutionRouter);
app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(swaggerDocument));
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(err.status).json({ message: err.message });
});

app.use(errorFilter);

module.exports = app;
