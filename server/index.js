const express = require('express')
const PORT = process.env.PORT || 5000
const sequelize = require('./db')


require('dotenv').config()

const app = express()


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})