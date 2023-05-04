const {Article} = require('../models/models')
const ApiError = require('../error/ApiError');

class ArticleController {
    async create(req, res, next) {
        try {
            const {title, body, readTime, views} = req.body
            const article = await Article.create({title, body, readTime, views})
            return res.json(article)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {

    }

    async getOne(req, res) {
        const {id} = req.params
        const article = await Article.findOne(
            {
                where: {id},
            }
        )
        return res.json(article)
    }
}

module.exports = new ArticleController()