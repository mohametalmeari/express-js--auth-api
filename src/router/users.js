import { getAllUsers, deleteUser, updateUser } from "../controllers/users";
import { isAuthenticated, isOwner } from "../middlewares";

export default (router) => {
  router.get("/users", isAuthenticated, getAllUsers); // Get all users route with authentication
  router.delete("/users/:id", isAuthenticated, isOwner, deleteUser); // Delete user route with authentication and authorization
  router.patch("/users/:id", isAuthenticated, isOwner, updateUser); // Update user route with authentication and authorization
};
