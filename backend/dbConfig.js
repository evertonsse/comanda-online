require('dotenv').config()
const { Sequelize }  = require('sequelize') 


const db = new Sequelize (process.env.SERVER_DB, process.env.SERVER_USER, process.env.SERVER_PASS, { 
	dialect: 'mariadb',
	host: process.env.SERVER_HOST
})

module.exports = db