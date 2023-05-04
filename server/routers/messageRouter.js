const Router = require('express')
const router = new Router()

router.get('/message', (req, res) => {
    res.json({message:"FINE"})
})

module.exports = router