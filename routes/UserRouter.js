const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetUsers)
Router.post('/create', controller.CreateUser)
Router.delete('/:userid', controller.DeleteUser)
Router.get('/get/:userid', controller.GetUserById)
module.exports = Router
