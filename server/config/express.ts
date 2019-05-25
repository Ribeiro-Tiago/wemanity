import { join } from "path";
import * as express from "express";
import * as logger from "morgan";
import { json, urlencoded } from "body-parser";
import * as cors from "cors";
import * as helmet from "helmet";

import routes from "../routes/index.route";
import config from "./config";

const app = express();

if (config.env === "development") {
  app.use(logger("dev"));
}

app.use(express.static(join(__dirname, "../../dist/")));

app.use(/^((?!(api)).)*/, (_req, res) => {
  res.sendFile(join(__dirname, "../../dist/index.html"));
});

app.use(json());
app.use(urlencoded({ extended: true }));

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// API router
app.use("/api/", routes);


export default app;
