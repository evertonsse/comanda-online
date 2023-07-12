const express = require('express')
const db = require('./dbConfig')
const routes = require('./src/routes')
const cors = require('cors')

db.sync().then(console.log('Synchronized database.'))

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3000, ()=> {

	console.log('Server rodando na porta 3000.')
})

