const { getHeadersToken, decodeToken, verifyToken } = require('../helpers/jwt')
const User = require('../models/User')

const getAllUser =  async (req, res, next) => {
    try {
        const response = await User.viewUser()
        
        res.status(200).json({
            msg: 'Listado de usuerios',
            data: response
        })
    } catch (error) {
        next(error)
    }
}

const getAllUserMe =  async (req, res, next) => {
    try {
        const token = getHeadersToken(req)
        verifyToken(token)
        const { email } = decodeToken(token)

        const response = await User.viewUserId(email)

        res.send(response)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getAllUser,
    getAllUserMe
}