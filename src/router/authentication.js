import { login, register } from "../controllers/authentication";

export default (router) => {
  router.post("/auth/register", register); // User registration route
  router.post("/auth/login", login); // User login route
};
