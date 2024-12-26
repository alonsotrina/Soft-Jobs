
require('dotenv').config()
const jwt = require("jsonwebtoken")

const { JWT_SECRET } = process.env

const singToken = (data) => {
    return jwt.sign(
        data, 
        String(JWT_SECRET),
        {
            algorithm: 'HS384',
            expiresIn: '1hr'
        }
    )
}

const verifyToken = (token) => {
    return jwt.verify(token, String(JWT_SECRET))
}

const decodeToken = (token) => {
    return jwt.decode(token)
}

const getHeadersToken = (req) => {
    const Authorization = req.header("Authorization")
    return Authorization.split("Bearer ")[1]
}

module.exports = {
    getHeadersToken,
    singToken,
    verifyToken,
    decodeToken
} 


