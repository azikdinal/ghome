const Router = require('express')
const router = new Router()

router.get('/message', (req, res) => {
    res.json({message:"$1.897.293"})
})

module.exports = router