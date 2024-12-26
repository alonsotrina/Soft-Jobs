const { hasPassword, verifyPasswords } = require('../helpers/bcrypt')
const { singToken } = require('../helpers/jwt')
const Auth = require('../models/Auth')


const handleAuth = async (req, res, next) => {
    try {
        const { email, password } = req.body

        const user = await Auth.exist(email)

        const match = verifyPasswords(password, user.password)

        if(match){
            const data = { email }
            const token = singToken(data)

            res.status(200).json({
                msg: 'Ingresando a la plataforma',
                data: token
            })

        } else {
            res.send('credenciales incorrectas')
        }

    } catch (error) {
        next(error)
    }
}

const handleRegister = async (req, res, next) => {
    try {
        const { email,password,rol,lenguage } = req.body
        const passwordHashed =  hasPassword(password)
        const response = await Auth.register(email,passwordHashed,rol,lenguage)

        res.status(200).json({
            msg: 'Personal agregado con éxito',
            data: response
        })

    } catch (error) {
        next(error)
    }
}

const me = async (req, res) => {
    try {
      const { email } = req.user;
      const user = await Auth.getUserByEmail(email);
      return res.json({ email, id: user.id });
    } catch (error) {
      // console.log(error);
      return res.status(500).json({ error: "Server error" });
    }
  };

module.exports = {
    handleAuth,
    handleRegister,
    me
}