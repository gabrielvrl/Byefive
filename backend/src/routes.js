import express from "express";
import UserController from "./controllers/UserController.js";

const routes = express.Router();

routes.post("/signupuser", UserController.store);
routes.post("/login", UserController.store);

export default routes;
