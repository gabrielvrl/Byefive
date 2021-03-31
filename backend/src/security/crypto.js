const bcrypt = require("bcryptjs");

export async function crypto(password) {
    const saltRounds = 10;

    const salt = bcrypt.genSalt(saltRounds);

    const hasedPassword = bcrypt.hash(password, salt);

    return hasedPassword;
}
