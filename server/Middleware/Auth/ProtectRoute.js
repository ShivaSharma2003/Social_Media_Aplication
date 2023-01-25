import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import UserModal from '../../Models/UserModal.js';

const Protect = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1]
            const decodedToken = jwt.verify(token, process.env.TOKEN_KEY)
            req.user = await UserModal.findById(decodedToken.id).select('-Password')
            next()
        } catch (error) {
            console.log(error)
            res.status(403).json({ message: 'Invalid token' })
        }
    }
    else {
        res.status(404).json({ errorMessage: "Token not found. You must login first to your Account." })
    }
    if (!token) {
        res.status(401);
        throw new Error("Not Authorized , Not Valid Token");
    }
})

export default Protect;