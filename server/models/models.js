const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING,},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})
const Property = sequelize.define('property', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    title: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    bath: {type: DataTypes.INTEGER},
    sqft: {type: DataTypes.INTEGER},
    type: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
    year: {type: DataTypes.INTEGER},
})

module.exports = {User, Property}

User.hasMany(Property)
Property.belongsTo(User)