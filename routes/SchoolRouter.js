const Router = require('express').Router()
const controller = require('../controllers/SchoolController')

Router.get('/', controller.GetSchools)
Router.post('/create', controller.CreateSchool)

module.exports = Router
