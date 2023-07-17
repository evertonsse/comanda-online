const jwt = require('jsonwebtoken')


const validateToken = (token) => {

   jwt.verify(token, process.env.CRYPTO_KEY), (err, decoded)=> { 
        if(err) {
            return false
        } else { 
            return decoded.email
        }
    } 

} 

module.exports = validateToken