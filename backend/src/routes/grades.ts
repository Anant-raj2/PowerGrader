import express from "express";
import * as GradesController from "../controllers/grades";
import validateRequestSchema from "../middlewares/validateRequest";
import {createGradeSchema} from "../validation/grades";

const router = express.Router();

router.get("/", GradesController.getAcademics);
router.post("/post", validateRequestSchema(createGradeSchema), GradesController.postAcademics);

export default router;