const { merge } = require("lodash");

const { getUserBySessionToken } = require("../db/users");

const isAuthenticated = async (req, res, next) => {
  try {
    const sessionToken = req.cookies["AUTH"];

    // Check if the session token exists
    if (!sessionToken) {
      return res.sendStatus(403);
    }

    const existingUser = await getUserBySessionToken(sessionToken);

    // Check if the user exists
    if (!existingUser) {
      res.sendStatus(403);
    }

    // Attach the user to the request object
    merge(req, { identity: existingUser });

    // Continue to users controller
    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

const isOwner = async (req, res, next) => {
  try {
    const { id } = req.params;
    const currentUserId = get(req, "identity._id");

    // Check if the user is authenticated
    if (!currentUserId) {
      return res.sendStatus(403);
    }

    // Check if the user is authorized (owner of the resource)
    if (currentUserId.toString() !== id) {
      return res.sendStatus(403);
    }

    // Continue to users controller
    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

module.exports = { isAuthenticated, isOwner };
