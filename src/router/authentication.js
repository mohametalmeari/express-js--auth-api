const { login, register } = require("../controllers/authentication");

module.exports = (router) => {
  router.post("/auth/register", register); // User registration route
  router.post("/auth/login", login); // User login route
};
