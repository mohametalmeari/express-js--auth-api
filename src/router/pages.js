import renderHome from "../controllers/pages/home";
import renderAbout from "../controllers/pages/about";
import renderRegister from "../controllers/pages/register";

export default (router) => {
  router.get("/", renderHome); // Home page will render at the root URL
  router.get("/about", renderAbout); // About page will render at /about URL
  router.get("/signup", renderRegister); // Register page will render at /signup URL
};
