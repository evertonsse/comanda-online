const crypto = require('crypto')
const algorithm = 'aes-256-cbc'

module.exports = {
	crypt(text, key) {
		const iv = crypto.randomBytes(16)
		let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv)
		let encrypted = cipher.update(text)
		encrypted = Buffer.concat([encrypted, cipher.final()])
		return {
			iv: iv.toString('hex'),
			encryptedData: encrypted.toString('hex'),
		}
	},

	decrypt(text, key) {
		let iv = Buffer.from(text.iv, 'hex')
		let encryptedText = Buffer.from(text.encryptedData, 'hex')

		let decipher = crypto.createDecipheriv(
			algorithm,
			Buffer.from(key),
			iv
		)

		let decrypted = decipher.update(encryptedText)
		decrypted = Buffer.concat([decrypted, decipher.final()])

		return decrypted.toString()
	},
}
