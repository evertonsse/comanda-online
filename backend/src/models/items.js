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
		type: DataTypes.DECIMAL(10,2),
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
}, {
	timestamps: false,
})

module.exports = items
