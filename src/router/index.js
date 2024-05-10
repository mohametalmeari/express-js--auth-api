import { Router } from "express";

import authentication from "./authentication";
import users from "./users";
import pages from "./pages";

const router = Router();

export default () => {
  authentication(router);
  users(router);

  pages(router);

  return router;
};
