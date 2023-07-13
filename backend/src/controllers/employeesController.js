
const employee = require('../models/employees')
const cryptonite = require('../utils/cryptonite')
require('dotenv').config()

module.exports = {
	async login(request, response) {
		const { email, pass } = request.body

		const user = await employee.findAll({
			where: {
				email,
				pass,
			},
		})
		if (user) {
			return response.json(user)
		} else {
			return response.json({ error: 'User not found' })
		}
	},

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
