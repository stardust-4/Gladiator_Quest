const Router = require('express').Router()
const FighterRouter = require('./FighterRouter')
const SchoolRouter = require('./SchoolRouter')
const UserRouter = require('./UserRouter')
// const AuthRouter = require('./AuthRouter')

Router.use('/fighter', FighterRouter)
Router.use('/school', SchoolRouter)
Router.use('/user', UserRouter)
module.exports = Router
