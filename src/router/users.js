const { getAllUsers } = require("../controllers/users");

module.exports = (router) => {
  router.get("/users", getAllUsers); // Get all users route
};
