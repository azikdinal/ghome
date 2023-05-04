const Router = require('express')

const router = new Router()

const userRouter = require('./userRouter')
const messageRouter = require('./messageRouter')
const propertyRouter = require('./propertyRouter')


router.use('/user', userRouter)
router.use('/mess', messageRouter)
router.use('/property', propertyRouter)


module.exports = router