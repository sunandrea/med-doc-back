const express = require("express");
const router = express.Router();
const {
  authorizeMiddleware,
  validationMiddleware,
} = require("../../middlewares");
const { controllerWrapper } = require("../../helpers");
const { visits } = require("../../controllers");
const {
  visitAddSchema,
  visitUpdateSchema,
} = require("../../models/visits.model");

router.post(
  "/",
  authorizeMiddleware,
  validationMiddleware(visitAddSchema),
  controllerWrapper(visits.addVisit)
);
router.get("/", authorizeMiddleware, controllerWrapper(visits.getAllVisits));

router.patch(
  "/:id",
  authorizeMiddleware,
  validationMiddleware(visitUpdateSchema),
  controllerWrapper(visits.updateVisit)
);
module.exports = router;
