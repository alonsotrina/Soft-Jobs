const { Router } = require('express')
const router = Router()
const { getAllUser, getAllUserMe} = require('../controllers/user.controller')
const Reports = require('../middlewares/reportActivityMiddleware')

router.get("/", Reports, getAllUser)
router.get("/me", Reports, getAllUserMe)

module.exports = router;