import express, { Router } from "express";
const router = express.Router();
import { body } from 'express-validator'
import { registerController, loginController } from '../Controller/AuthController.js'

// register routes
router.use('/register', [
    body('userName').isString(),
    body('Password').isLength({ min: 8, max: 14 }),
    body('email').isEmail(),
    body('phoneNumber').isMobilePhone(),
], registerController)

router.use('/login', loginController)

export default router;
