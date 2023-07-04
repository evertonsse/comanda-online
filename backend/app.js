const express = require('express')
const db = require('./dbConfig')


db.sync().then(console.log('Foi...'))

const app = express()

app.listen(3000, ()=> {

	console.log('Server rodando...')
})

