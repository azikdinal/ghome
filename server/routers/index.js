const Router = require('express')

const router = new Router()

const userRouter = require('./userRouter')
const messageRouter = require('./messageRouter')
const propertyRouter = require('./propertyRouter')
const articleRouter = require('./articleRouter')


router.use('/user', userRouter)
router.use('/mess', messageRouter)
router.use('/property', propertyRouter)
router.use('/article', articleRouter)


module.exports = router