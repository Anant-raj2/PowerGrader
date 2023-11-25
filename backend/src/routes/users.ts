import express from "express";
import * as UsersController from "../controllers/users";
import validateRequestSchema from "../middlewares/validateRequest";
import { signUpSchema, requestVerificationCodeSchema, loginSchema } from "../validation/users";

const router = express.Router();

router.get("/", UsersController.getUsers);

router.post("/signup", validateRequestSchema(signUpSchema), UsersController.signUp);

router.post("/login", validateRequestSchema(loginSchema), UsersController.login);

router.post("/verification-code", validateRequestSchema(requestVerificationCodeSchema), UsersController.requestVerificationCode);

router.get("/authenticated-user", UsersController.getAuthenticatedUser);

router.post("/logout", UsersController.logout);

export default router;
