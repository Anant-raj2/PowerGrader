import express from "express";
import * as UsersController from "../controllers/users";

const router = express.Router();

router.get("/", UsersController.getUsers);

router.post("/signup", UsersController.signUp);

router.post("/login", UsersController.login);

router.get("/authenticated-user", UsersController.getAuthenticatedUser);

router.post("/logout", UsersController.logout);

export default router;