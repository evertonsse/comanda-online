
const employee = require('../models/employees')
const cryptonite = require('../utils/cryptonite')
require('dotenv').config()

module.exports = {
	
	async create(request, response) {
		const { name, email, pass } = request.body

		const hash = cryptonite.crypt(pass, process.env.CRYPTO_KEY )

		if (await employee.create({name, email, pass : hash})) { 
			return response.json({ message: 'Employee created' })
		} else  { 
			return response.json({ error: 'Employee not created' })
		}

	},

	
}
