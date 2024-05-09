const { Router } = require("express");

const authentication = require("./authentication");
const users = require("./users");

const router = Router();

module.exports = () => {
  authentication(router);
  users(router);
  return router;
};
