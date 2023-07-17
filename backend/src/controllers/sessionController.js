const employee = require('../models/employees')
const jwt = require('jsonwebtoken')
const cryptonite = require('../utils/cryptonite')
module.exports = {
	async login(request, response) {
		const { email, pass } = request.body

		const user = await employee.findAll({
			where: {
				email,
				pass: cryptonite.crypt(pass, process.env.CRYPTO_KEY),
			},
		})

		if (user) {
			const token = jwt.sign({ email }, process.env.CRYPTO_KEY, {
				expiresIn: 300,
			})
			return response.json(token)
		} else {
			return response
				.status(400)
				.json({ message: 'User not found' })
		}
	},
}
