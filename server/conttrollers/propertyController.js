
const {Property} = require('../models/models')
const ApiError = require('../error/ApiError');

class PropertyController {
    async create(req, res, next) {
        try {
            const {title, price, rating, bath, sqft, type, address, year} = req.body
            const property = await Property.create({title, price, rating, bath, sqft, type, address, year})
            return res.json(property)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {

    }

    async getOne(req, res) {
        const {id} = req.params
        const property = await Property.findOne(
            {
                where: {id},
            }
        )
        return res.json(property)
    }
}

module.exports = new PropertyController()