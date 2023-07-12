const express = require('express') 
const routes = express.Router()

const employeesController = require('./controllers/employeesController')

routes.post('/login', employeesController.login)

module.exports = routes

