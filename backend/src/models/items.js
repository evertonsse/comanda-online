const db = require('../../dbConfig')
const { DataTypes } = require('sequelize')

const items = db.define('items', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	descrption: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	price: {
		type: DataTypes.DECIMAL,
		defaultValue: null,
	},
	preparationTime: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	restaurant: {
		type: DataTypes.STRING,
		references: {
			model: 'restaurants',
			key: 'id',
		},
	},
})

module.exports = items
