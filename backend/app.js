const express = require('express')
const db = require('./dbConfig')


db.sync().then(console.log('Synchronized database.'))

const app = express()

app.listen(3000, ()=> {

	console.log('Server rodando na porta 3000.')
})

