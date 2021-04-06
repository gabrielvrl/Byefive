import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

import routes from "./routes.js";

const server = express();

const port = 3333;

mongoose.connect("mongodb://localhost/Byefive", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let db = mongoose.connection;

db.on("error", () => {
    console.log("Something went wrong!");
});
db.once("open", () => {
    console.log("Database loaded");
});

server.use(cors());
server.use(express.json());
server.use(routes);
server.use(morgan("tiny"));

server.listen(port, () => console.log(`App listening on port ${port}`));
