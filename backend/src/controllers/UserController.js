const User = require("../models/User");
import crypto from "../security/crypto";

module.exports = {
    async store(req, res) {
        const { firstName, lastName, email, username, password } = req.body;
        console.log(req.body);

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
            password: crypto(password),
        });

        return res.json({ user });
    },
};
