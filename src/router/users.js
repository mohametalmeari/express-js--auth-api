const { getAllUsers } = require("../controllers/users");
const { isAuthenticated } = require("../middlewares");

module.exports = (router) => {
  router.get("/users", isAuthenticated, getAllUsers); // Get all users route with authentication
};
