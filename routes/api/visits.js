const express = require("express");
const router = express.Router();
const {
  authorizeMiddleware,
  validationMiddleware,
} = require("../../middlewares");
const { controllerWrapper } = require("../../helpers");
const { visits } = require("../../controllers");
const { visitAddSchema } = require("../../models/visits.model");

router.post(
  "/",
  authorizeMiddleware,
  validationMiddleware(visitAddSchema),
  controllerWrapper(visits.addVisit)
);

module.exports = router;
