import express from "express";
import * as GradesController from "../controllers/grades";

const router = express.Router();

router.get("/", GradesController.getAcademics);
router.post("/post", GradesController.postAcademics);

export default router;