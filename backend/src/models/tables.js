const db = require('../../dbConfig')
const { DataTypes } = require('sequelize')

const tables = db.define(
	'tables',
	{
		cod: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		status: {
			type: DataTypes.INTEGER(1),
			defaultValue: 0,
			comment: '0 - Disponível; 1 - Ocupada',
		},
		seats: {
			type: DataTypes.INTEGER(3),
			defaultValue: 0,
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

module.exports = tables
