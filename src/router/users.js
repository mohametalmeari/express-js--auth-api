const { getAllUsers, deleteUser } = require("../controllers/users");
const { isAuthenticated, isOwner } = require("../middlewares");

module.exports = (router) => {
  router.get("/users", isAuthenticated, getAllUsers); // Get all users route with authentication
  router.delete("/users/:id", isAuthenticated, isOwner, deleteUser); // Delete user route with authentication and authorization
};
