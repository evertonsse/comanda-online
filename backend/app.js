const express = require('express')
const db = require('./dbConfig')

const restaurants = require('./src/models/restaurants')
const tables = require('./src/models/tables')
const items = require('./src/models/items')
const commands = require('./src/models/commands')
const commandItems = require('./src/models/commandItems')

db.sync().then(console.log('Synchronized database.'))

const app = express()

app.listen(3000, ()=> {

	console.log('Server rodando na porta 3000.')
})

