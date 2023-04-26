const express = require("express");
const { authorizeMiddleware } = require("../../middlewares");
const { info } = require("../../controllers/index");
const controllerWrapper = require("../../helpers/controllerWrapper");
const uploadCloud = require("../../middlewares/upload.middleware");
const { updateImage } = require("../../controllers/info");

const router = express.Router();

router.get("/", authorizeMiddleware, controllerWrapper(info.currentUser));

router.get("/:id", controllerWrapper(info.findUserById));

router.get("/all/:role", controllerWrapper(info.findUsersByRole));

router.patch(
  "/update/image",
  authorizeMiddleware,
  uploadCloud.single("image"),
  updateImage
);

router.patch(
  "/update",
  authorizeMiddleware,
  controllerWrapper(info.updateUserInfo)
);

router.patch(
  "/update/rating/:id",
  authorizeMiddleware,
  controllerWrapper(info.updateUserRating)
);

module.exports = router;
