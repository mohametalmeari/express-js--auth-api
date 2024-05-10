import lodash from "lodash";
const { get, merge } = lodash;

import { getUserBySessionToken } from "../db/users";

export const isAuthenticated = async (req, res, next) => {
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

export const isOwner = async (req, res, next) => {
  try {
    const { id } = req.params;
    const currentUserId = get(req, "identity._id");
    const isAdmin = get(req, "identity.role") === "admin";

    // Check if the user is authenticated
    if (!currentUserId) {
      return res.sendStatus(403);
    }

    // Check if the user is authorized (owner of the resource)
    if (currentUserId.toString() !== id && !isAdmin) {
      return res.sendStatus(403);
    }

    // Continue to users controller
    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
