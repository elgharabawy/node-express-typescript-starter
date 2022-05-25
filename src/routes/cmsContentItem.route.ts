import express from "express";

import * as cmsContentItemController from "../controllers/cmsContentItem.controller";

const router = express.Router();

/* GET cms content item */
router.get("/:id", cmsContentItemController.get);

// TODO: implement other routes

export { router as default };
