import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import router from "./router/index.js";

const app = express();

dotenv.config();

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const PORT = process.env.PORT;
const DOMAIN = process.env.DOMAIN;

const server = http.createServer(app);
server.listen(PORT, () => {
  if (process.env.NODE_ENV === "development") {
    console.log(`Server is running on http://${DOMAIN}:${PORT}/`);
  } else {
    console.log(`Server is running on https://${DOMAIN}`);
  }
});

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on("error", (error) => console.log(error));

app.use("/", router());
