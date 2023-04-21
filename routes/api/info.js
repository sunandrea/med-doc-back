const express = require("express");
const { authorizeMiddleware } = require("../../middlewares");
const { info } = require("../../controllers/index");
const controllerWrapper = require("../../helpers/controllerWrapper");

const router = express.Router();

router.get("/info", authorizeMiddleware, controllerWrapper(info.currentUser));

router.get(
  "/info/:id",
  authorizeMiddleware,
  controllerWrapper(info.findUserById)
);

router.get(
  "/info/all/:role",
  authorizeMiddleware,
  controllerWrapper(info.findUsersByRole)
);

router.patch("/info/update/image", authorizeMiddleware);

router.patch(
  "/info/update",
  authorizeMiddleware,
  controllerWrapper(info.updateUserInfo)
);

router.patch(
  "/info/update/rating",
  authorizeMiddleware,
  controllerWrapper(info.UpdateUserRating)
);

module.exports = router;
