import express from "express";
import logger from "morgan";
import * as path from "path";
import cors from "cors";
import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

// Routes
import { router } from "./routes/index";
// Create Express server
export const app = express();

// Express configuration
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(cors()).use(logger("dev"));

app.use(express.static(path.join(__dirname, "../public")));
app.use("/api/v1", router);

app.use(errorNotFoundHandler);
app.use(errorHandler);
