const db = require('../../dbConfig')
const { DataTypes } = require('sequelize')

const commands = db.define(
	'commands',
	{
		cod: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		table: {
			type: DataTypes.STRING,
			model: 'tables',
			hey: 'id',
		},
		restaurant: {
			type: DataTypes.STRING,
			model: 'restaurants',
			hey: 'id',
		},
	},
	{
		timestamps: false,
	}
)

module.exports = commands
