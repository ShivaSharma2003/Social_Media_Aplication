import jwt from 'jsonwebtoken'

const GenerateToken = (id) => {
    return jwt.sign({ id }, process.env.TOKEN_KEY, { expiresIn: process.env.TOKEN_EXPIRES })
}

export default GenerateToken;