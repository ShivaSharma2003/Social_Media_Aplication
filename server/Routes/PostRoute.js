import express from 'express'
const router = express.Router()
import { PostController, DeletePostController, LikePostController, UnlikePostController, CommentPostController, DeleteCommentController } from '../Controller/PostController.js'
import Protect from '../Middleware/Auth/ProtectRoute.js'

router.route('/post').post(Protect, PostController)
router.route('/post/delete/:id').delete(Protect, DeletePostController)
router.route('/post/like/:id').post(Protect, LikePostController)
router.route('/post/unlike/:id').post(Protect, UnlikePostController)
router.route('/post/comment/:id').post(Protect, CommentPostController)
router.route('/comment/delete/:id').delete(Protect, DeleteCommentController)

export default router