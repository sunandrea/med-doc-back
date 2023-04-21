const express = require("express");
const {
  validationMiddleware,
  authorizeMiddleware,
} = require("../../middlewares");
const { controllerWrapper } = require("../../helpers");
// const { login, register, logout } = require("../../controllers/auth");
const { auth } = require("../../controllers/index");
const {
  registerSchema,
  loginSchema,
} = require("../../models/users/users.model");

const router = express.Router();

router.post(
  "/register",
  validationMiddleware(registerSchema),
  controllerWrapper(auth.register)
);
router.post(
  "/login",
  validationMiddleware(loginSchema),
  controllerWrapper(auth.login)
);

router.get("/logout", authorizeMiddleware, controllerWrapper(auth.logout));

module.exports = router;
