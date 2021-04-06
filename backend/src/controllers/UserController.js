import User from "../models/User.js";
import crypto from "../security/crypto.js";

export default {
    async index(req, res) {
        const { username, password } = req.body;

        const userExists = await User.findOne({
            username,
            password,
        });

        if (userExists) {
            return res.json(userExists);
        }

        return status(404);
    },

    async store(req, res) {
        const { firstName, lastName, email, username, password } = req.body;

        const userExists = await User.findOne({
            username,
        });

        if (userExists) {
            return res.json(userExists);
        }

        const user = await User.create({
            firstName,
            lastName,
            email,
            username,
            // password: crypto(password),
            password,
        });

        return res.json({ user });
    },
};
