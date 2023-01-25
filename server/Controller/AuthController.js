import asyncHandler from 'express-async-handler'
import UserModal from '../Models/UserModal.js'
import { validationResult } from 'express-validator'
import GenerateToken from '../Token/Token.js'


const registerController = asyncHandler(async (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        res.status(400).json({ error: error.array() });
    }
    try {
        const { email, Password, userName, phoneNumber } = req.body;
        const DoesEmailExist = await UserModal.findOne({ email: email })
        const DoesUserNameExist = await UserModal.findOne({ userName: userName })
        if (DoesEmailExist || DoesUserNameExist) {
            res.status(403).json({
                errorMessage: "UserName or Email Already exists."
            })
        }
        else {
            const user = await UserModal.create({ email, Password, userName, phoneNumber })
            if (user) {
                res.status(200).json({ Message: "SuccessFully Signed Up" })
            }
            else {
                res.status(500).json({ errorMessage: "Internal Server Error. Try again later." })
            }
        }

    } catch (error) {
        res.status(400).json({ errorMessage: error.message });
    }
})

const loginController = asyncHandler(async (req, res) => {
    try {
        const { Password, email } = req.body

        const user = await UserModal.findOne({ email })
        if (user) {
            if (await user.ComparePassword(Password)) {
                res.json({ userID: user._id, Token: GenerateToken(user._id) });
            }
            else {
                res.status(403).json({ errorMessage: "wrong password. Try Again" })
            }
        }
        else {
            res.status(404).json({ errorMessage: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
})

export { registerController, loginController }
