const Router = require('express')
const router = new Router()
const propertyController = require('../conttrollers/propertyController')

router.post('/', propertyController.create)
router.get('/:id', propertyController.getOne)

module.exports = router