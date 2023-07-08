const db = require('../../dbConfig')
const { DataTypes } = require('sequelize') 

module.exports = db.define('command_items',
{
    id : { 
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    }, 
    commands: { 
        type: DataTypes.INTEGER, 
        references: { 
            model: 'commands',
            key: 'id'
        }
    }, 
    item: { 
        type: DataTypes.INTEGER,
        references: {
            model: 'items',
            key: 'id'
         } 
    }, 
    quantity: { 
        type: DataTypes.DECIMAL, 
        allowNull: false, 
        defaultValue: 0
        
    },
    total : { 
        type: DataTypes.DECIMAL(10,2), 
        allowNull: false, 
        defaultValue: 0

    }
    
}, {
    timestamps: false,
})
