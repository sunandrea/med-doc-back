const express = require("express");
const { authorizeMiddleware } = require("../../middlewares");
const controllerWrapper = require("../../helpers/controllerWrapper");
const updateExperienceInfo = require("../../controllers/experience/index");

const router = express.Router();

router.patch("/", authorizeMiddleware, controllerWrapper(updateExperienceInfo));

module.exports = router;
