const express = require("express");
const router = express.Router();
const {
  authorizeMiddleware,
  validationMiddleware,
  uploadCloudPDF,
} = require("../../middlewares");
const { controllerWrapper } = require("../../helpers");
const { visits } = require("../../controllers");
const { visitAddSchema, visitUpdateSchema } = require("../../models/visits.model");
const { uploadPDF } = require("../../controllers/visits");

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

router.patch("/:id/upload-pdf", uploadCloudPDF.single("pdf"), uploadPDF);

module.exports = router;
