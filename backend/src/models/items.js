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
	restaurant: {
		type: DataTypes.STRING,
		model: 'restaurants',
		hey: 'id',
	},
})

module.exports = items
