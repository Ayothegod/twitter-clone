const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
    const saltRounds = 10;

    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash
}

const matchPassword = async (password, dbPassword) => {
    const match = await bcrypt.compare(password, dbPassword)
    return match
}

module.exports = {hashPassword, matchPassword}