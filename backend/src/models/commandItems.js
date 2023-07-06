const db = require('../../dbConfig')
const { DataTypes } = require('sequelize') 

module.exports = db.define('command_items',
{

    id : { type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    }, 
    commands: { type: DataTypes.INTEGER, 
        references: { 
            model: 'commands',
            key: 'id'
        }
    }, 
    
})
