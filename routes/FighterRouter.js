const Router = require('express').Router()
const controller = require('../controllers/FighterController')

Router.get('/', controller.GetFighters)
Router.get('/transfers', controller.GetTransferFighters)
Router.get('/opponents', controller.GetOpponentFighters)
Router.get('/user/:userSchoolid', controller.GetUserFighters)
Router.post('/create', controller.CreateFighter)
Router.put('/:fighterid', controller.UpdateFighter)

module.exports = Router
