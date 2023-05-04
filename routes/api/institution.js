const express = require("express");
const { controllerWrapper } = require("../../helpers");
const { institution } = require("../../controllers");

const router = express.Router();
router.get("/", controllerWrapper(institution.getInstitution));

module.exports = router;
