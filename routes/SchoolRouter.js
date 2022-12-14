const Router = require('express').Router()
const controller = require('../controllers/SchoolController')

Router.get('/', controller.GetSchools)
Router.get('/pick', controller.AvailableSchoolChoices)
Router.post('/create', controller.CreateSchool)
Router.put('edit', controller.UpdateSchool)

module.exports = Router
