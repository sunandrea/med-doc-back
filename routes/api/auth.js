const express = require("express");
const { validationMiddleware } = require("../../middlewares");
const { controllerWrapper } = require("../../helpers");
const { login, register } = require("../../controllers/auth");
const { registerSchema, loginSchema } = require("../../models/users/users.model");

const router = express.Router();

router.post(
  "/register",
  validationMiddleware(registerSchema),
  controllerWrapper(register)
);
router.post("/login", validationMiddleware(loginSchema), controllerWrapper(login));

module.exports = router;
