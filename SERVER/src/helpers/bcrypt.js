const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const hasPassword = (pass) => {
    return  bcrypt.hashSync(pass, salt);
}

const verifyPasswords = (pass,passHashed ) => {
    return  bcrypt.compareSync(pass, passHashed);
}

module.exports = {
    hasPassword,
    verifyPasswords
}