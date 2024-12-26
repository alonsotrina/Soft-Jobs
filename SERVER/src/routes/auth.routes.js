const { Router } = require('express')
const router = Router()
const { handleAuth, handleRegister, handleAuthenticateToken } = require('../controllers/auth.controller')
const Reports = require('../middlewares/reportActivityMiddleware')

router.post("/login", Reports,handleAuth)
router.post("/register", Reports, handleRegister)

module.exports = router;
