const db = require('../../dbConfig')
const {  DataTypes } = require('sequelize') 

const commands = db.define('commands', {
	cod :{
		type : DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	}, 


},  {
	timestamps: false
})

module.exports = commands