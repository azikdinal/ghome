const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING,},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

module.exports = {User}