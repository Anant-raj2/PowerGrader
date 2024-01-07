import express from "express";
import * as UsersController from "../controllers/users";
import validateRequestSchema from "../middlewares/validateRequest";
import { signUpSchema, requestVerificationCodeSchema, loginSchema } from "../validation/users";
import { createGradeSchema } from "../validation/grades";

import { requiresAuth } from "../middlewares/auth";

const router = express.Router();

router.get("/", requiresAuth, UsersController.getUsers);

router.post("/signup", validateRequestSchema(signUpSchema), UsersController.signUp);

router.post("/login", validateRequestSchema(loginSchema), UsersController.login);

router.post("/verification-code", validateRequestSchema(requestVerificationCodeSchema), UsersController.requestVerificationCode);

router.get("/authenticated-user", UsersController.getAuthenticatedUser);

router.post("/post", validateRequestSchema(createGradeSchema), UsersController.postAcademics);

router.post("/logout", UsersController.logout);
router.post("/login-google", UsersController.loginGoogle);


export default router;
