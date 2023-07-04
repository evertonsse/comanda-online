const db = require('../../dbConfig')
const { DataTypes } = require('sequelize')

const restaurants = db.define(
	'restaurants',
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		status: {
			type: DataTypes.INTEGER(1),
			defaultValue: 1,
			comment: '0 - Disable; 1 - Enable',
		},
	},
	{ timestamps: false }
)

module.exports = restaurants
