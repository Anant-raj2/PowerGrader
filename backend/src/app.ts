import "dotenv/config";
import express, {NextFunction, Request, Response} from "express";
import usersRoutes from "./routes/users";
import classesRoutes from "./routes/classes";
import gradesRoutes from "./routes/grades";
import session from "express-session";
import env from "./util/validateEnv";
import MongoStore from "connect-mongo";

const app = express();

app.use(express.json());

app.use(session({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60*60*1000,
    },
    rolling: true,
    store: MongoStore.create({
        mongoUrl: env.MONGO_CONN,

    }),
}));

app.use("/api/users", usersRoutes);
app.use("/api/classes", classesRoutes);
app.use("/api/grades", gradesRoutes);


app.use((req, res, next) => {
    next(Error("Page Not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    let errorMessage = "An unkown error occurred";
    if(error instanceof Error){
        errorMessage = error.message;
    }
    res.status(500).json({error: errorMessage});
})

export default app;