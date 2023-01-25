import express from 'express'
import Protect from '../Middleware/Auth/ProtectRoute.js'
import { GetTimelineController,GetProfileByIdController,GetProfileController } from '../Controller/GetController.js'
const router = express.Router()

router.route("/timeline").get(Protect, GetTimelineController)
router.route("/profile").get(Protect,GetProfileController)
router.route("/profile/:id").get(GetProfileByIdController)


export default router;