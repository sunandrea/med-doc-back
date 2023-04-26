const express = require("express");
const { authorizeMiddleware } = require("../../middlewares");
const controllerWrapper = require("../../helpers/controllerWrapper");
const { experience } = require("../../controllers");

const router = express.Router();

router.post(
  "/",
  authorizeMiddleware,
  controllerWrapper(experience.addExperience)
);

router.patch(
  "/:id",
  authorizeMiddleware,
  controllerWrapper(experience.updateExperience)
);

router.delete(
  "/:id",
  authorizeMiddleware,
  controllerWrapper(experience.deleteExperience)
);
module.exports = router;
