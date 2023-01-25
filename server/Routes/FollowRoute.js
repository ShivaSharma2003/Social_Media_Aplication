import express, { Router } from "express";
import { FollowController , UnFollowController } from "../Controller/ProfileController.js";
import Protect from '../Middleware/Auth/ProtectRoute.js'
const router = express.Router();

router.route('/follow/:id').post(Protect ,FollowController)
router.route('/unfollow/:id').post(Protect ,UnFollowController)
export default router;