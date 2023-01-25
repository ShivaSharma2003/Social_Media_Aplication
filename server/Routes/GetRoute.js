import express from 'express'
import Protect from '../Middleware/Auth/ProtectRoute.js'
import { GetTimelineController } from '../Controller/GetController.js'
const router = express.Router()

router.route("/timeline").get(Protect, GetTimelineController)

export default router;