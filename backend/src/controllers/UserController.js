const User = require("../models/user");

module.exports = {
    async store(req, res) {
        const { username, password, firstName, lastName } = req.body;
        console.log(req.body.cargo);

        const userExists = await User.findOne({
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
        });

        if (userExists) {
            return res.json(userExists);
        }

        //API? const response = await axios.get(`link da api/${username}`);
        const user = await User.create({
            username,
            password,
            firstName,
            lastName,
        });

        return res.json({ user });
    },
};
