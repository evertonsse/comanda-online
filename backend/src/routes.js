const express = require('express') 
const routes = express.Router()

const employeesController = require('./controllers/employeesController')
const sessionsController = require('./controllers/sessionController')

routes.post('/login', sessionsController.login)
routes.post('/user', employeesController.create)


module.exports = routes

