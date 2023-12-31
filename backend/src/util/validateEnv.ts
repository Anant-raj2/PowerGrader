import { cleanEnv } from "envalid";
import {port, str} from "envalid/dist/validators";

export default cleanEnv(process.env, {
    MONGO_CONN: str(),
    PORT: port(),
    SESSION_SECRET: str(),
    SMTP_PASSWORD: str(),
    APP_STAGE: str(),
  });