const Router = require('express').Router()
const controller = require('../controllers/SchoolController')

Router.get('/', controller.GetSchools)
Router.get('/pick', controller.AvailableSchoolChoices)
Router.post('/create', controller.CreateSchool)
Router.delete('/:schoolid', controller.DeleteSchool)
Router.put('/:schoolid', controller.UpdateSchool)

module.exports = Router
