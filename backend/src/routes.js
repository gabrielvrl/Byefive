const express = require("express");
const UserController = require("./controllers/UserController");

const routes = express.Router();

routes.post("/signupuser", UserController.store);
routes.post("/login", UserController.store);

module.exports = routes;
