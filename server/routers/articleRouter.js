const Router = require('express')
const router = Router()

const articleController = require('../conttrollers/articleController')

router.post('/', articleController.create)
router.get('/:id', articleController.getOne)

module.exports = router