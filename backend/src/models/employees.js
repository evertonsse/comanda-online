const db = require('../../dbConfig')
const { DataTypes } = require('sequelize')

module.exports = db.define('employees', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: { 
		type: DataTypes.STRING, 
		llowNull: false 
	},
	pass: { 
		type: DataTypes.STRING,
		allowNull: false
	}
})
