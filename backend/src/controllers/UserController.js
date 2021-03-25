const User = require("../models/User");

module.exports = {
    async store(req, res) {
        const { firstName, lastName, email, username, password } = req.body;
        console.log(req.body);

        const userExists = await User.findOne({
            username: username,
        });

        if (userExists) {
            return res.json(userExists);
        }

        //API? const response = await axios.get(`link da api/${username}`);
        const user = await User.create({
            firstName,
            lastName,
            email,
            username,
            password,
        });

        return res.json({ user });
    },
};
