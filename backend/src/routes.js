const express = require("express");
const UserController = require("./controllers/UserController");

const routes = express.Router();

// passo o endereco que ela vai, exemplo: localhost:3333/vaiaqui
//routes.get('/' , (req, res) => {
//    return res.send('opa world')
//});

routes.post("/signupuser", UserController.store);

module.exports = routes;
