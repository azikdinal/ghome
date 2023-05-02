const Router = require('express')
const router = new Router()
const userController = require('../conttrollers/userController')
const authMiddleware = require('../middleware/authMiddleware')


router.post('/sign', userController.sign)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)


module.exports = router