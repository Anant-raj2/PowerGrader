import { SessionOptions, CookieOptions } from "express-session";
import env from "../util/validateEnv";
import MongoStore from "connect-mongo";

const cookieConfig: CookieOptions = {
    maxAge: 60*60*1000,
    secure: env.APP_STAGE === "production",
}

const sessionConfig: SessionOptions = {
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: cookieConfig,
    rolling: true,
    store: MongoStore.create({
        mongoUrl: env.MONGO_CONN,
    })
}

export default sessionConfig;