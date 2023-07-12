const employee = require('../models/employees')

module.exports = {
	async login(request, response) {
		const { email, pass } = request.body

		const user = await employee.findAll({
			where: {
				email,
				pass,
			},
		})
        if (user){ 
            return response.json(user)
        } else {
            return response.json({error: 'User not found'})
        }

	}
}
