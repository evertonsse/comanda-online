const CryptoJS = require('crypto-js')

module.exports = {
	crypt(text, key) {
		return CryptoJS.AES.encrypt(text, key).toString()
	},

	decrypt(text, key) {
		return CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8)
	},
}
