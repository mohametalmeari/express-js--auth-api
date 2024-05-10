import { Router } from "express";

import authentication from "./authentication.js";
import users from "./users.js";

const router = Router();

export default () => {
  authentication(router);
  users(router);
  return router;
};
