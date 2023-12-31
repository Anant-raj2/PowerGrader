import "dotenv/config";
import express from "express";
import usersRoutes from "./routes/users";
import gradesRoutes from "./routes/grades";
import session from "express-session";
import env from "./util/validateEnv";
import errorHandler from "./middlewares/errorHandler";
import morgan from "morgan";
import sessionConfig from "./config/session";
import createHttpError from "http-errors";
import { requiresAuth } from "./middlewares/auth";
import cors from "cors";

const app = express();

if(env.APP_STAGE === "production"){
    app.set("trust proxy", true);
    app.use(morgan("combined"));
}else{
    app.use(morgan("dev"));
}
app.use(cors());
app.use(express.json());

app.use(session(sessionConfig));

app.use("/api/users", usersRoutes);
app.use("/api/grades", requiresAuth, gradesRoutes);

app.use((req, res, next) => {
    next(createHttpError(400, "Page Not found"));
});

app.use(errorHandler)

export default app;