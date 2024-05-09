const { getUsers, deleteUserById, getUserById } = require("../db/users");

const getAllUsers = async (_req, res) => {
  try {
    const users = await getUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteUserById(id);

    return res.json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username } = req.body;

    // Check if username is provided
    if (!username) {
      return res.sendStatus(400);
    }

    const user = await getUserById(id);

    // Note: No need to check if user exists because isAuthenticated middleware already does that

    // Update user's username
    user.username = username;
    await user.save();

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

module.exports = { getAllUsers, deleteUser, updateUser };
