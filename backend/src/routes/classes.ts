import express from "express";
import * as ClassesController from "../controllers/classes";

const router = express.Router();

router.post("/post", ClassesController.postClasses);

export default router;