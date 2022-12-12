const Router = require('express').Router()
const controller = require('../controllers/FighterController')

Router.get('/', controller.GetFighters)
Router.get('/transfers', controller.GetTransferFighters)
Router.get('/opponents', controller.GetOpponentFighters)
Router.post('/create', controller.CreateFighter)

module.exports = Router
