const express = require("express");
import { authorizeMiddleware } from "../../middlewares";

const router = express.Router();

router.get("/info", authorizeMiddleware);

router.get("/info/:id", authorizeMiddleware);

router.get("/info/all/:role", authorizeMiddleware);

router.post("/info/update/image", authorizeMiddleware);

router.post("/info/update", authorizeMiddleware);

router.post("/nfo/update/rating", authorizeMiddleware);
