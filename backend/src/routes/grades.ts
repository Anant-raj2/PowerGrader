import express from "express";
import * as GradesController from "../controllers/grades";

const router = express.Router();

router.get("/", GradesController.getGrades);
router.post("/post", GradesController.postGrades);


export default router;