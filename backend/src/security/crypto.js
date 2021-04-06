import bcrypt from "bcrypt";

export default async function crypto(password) {
    const saltRounds = 10;

    const salt = bcrypt.genSaltSync(saltRounds);

    const hasedPassword = bcrypt.hashSync(password, salt);

    return hasedPassword;
}
