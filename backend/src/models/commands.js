const db = require('../../dbConfig')
const { DataTypes } = require('sequelize')

const commands = db.define(
	'commands',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		table: {
			type: DataTypes.INTEGER,
			references: {
				model: 'tables',
				key: 'id',
			},
		},
		restaurant: {
			type: DataTypes.STRING,
			model: 'restaurants',
			hey: 'id',
		},
		total: {
			type: DataTypes.DECIMAL(16, 5),
			defaultValue: 0,
		},
	},
	{
		timestamps: false,
	}
)

module.exports = commands
