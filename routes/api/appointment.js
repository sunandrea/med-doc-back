const express = require("express");
const router = express.Router();
const {
  authorizeMiddleware,
  validationMiddleware,
} = require("../../middlewares");
const { controllerWrapper } = require("../../helpers");
const { appointmentAddSchema } = require("../../models/appointments.model");
const { appointments } = require("../../controllers");

router.post(
  "/",
  authorizeMiddleware,
  validationMiddleware(appointmentAddSchema),
  controllerWrapper(appointments.addAppointment)
);

router.get(
  "/",
  authorizeMiddleware,
  controllerWrapper(appointments.getCurrentAppointment)
);

router.get("/:id", controllerWrapper(appointments.getAppointment));

module.exports = router;
