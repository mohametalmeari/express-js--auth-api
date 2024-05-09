const { register } = require("../controllers/authentication");

module.exports = (router) => {
  router.post("/auth/register", register); // User registration route
};
