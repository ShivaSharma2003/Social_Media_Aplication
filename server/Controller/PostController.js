import asyncHandler from "express-async-handler"
import PostModal from "../Models/PostsModal.js"
import UserModal from "../Models/UserModal.js";

const PostController = asyncHandler(async (req, res) => {
    const { caption, postItem } = req.body;
    try {
        const post = await PostModal.create({ userId: req.user._id, postItem, caption });
        const user = await UserModal.findById(req.user._id);
        if (user && post) {
            res.status(200).json(post)
            await user.updateOne({ $push: { Posts: post._id } })
        } else {
            res.status(403).json({ errorMessage: "Invalid User" })
        }

    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
})

const DeletePostController = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const post = await PostModal.findById(id)
        const user = await UserModal.findById(req.user._id)
        if (post && user) {
            if (post.userId === req.user._id.toString()) {
                await PostModal.deleteOne({ "_id": post._id })
                await user.updateOne({ $pull: { Posts: post._id } })
                res.status(200).json({ Message: "SuccessFully Delete Post" })
            } else {
                res.status(403).json({ Message: "Not Authorized" })
            }
        } else { res.status(404).json({ Message: "Post or User Not Found" }) }
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
})

const LikePostController = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const post = await PostModal.findById(id);
        if (post) {
            if (!post.likes.includes(req.user._id)) {
                await post.updateOne({ $push: { likes: req.user._id } })
                res.status(200).json({ Message: "Post Successfully Liked" })
            } else {
                res.status(403).json({ Message: "Already Liked" })
            }
        } else {
            res.status(404).json({ errorMessage: "Post Not Found" })
        }
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
})


const UnlikePostController = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const post = await PostModal.findById(id);
        if (post) {
            if (post.likes.includes(req.user._id)) {
                await post.updateOne({ $pull: { likes: req.user._id } })
                res.status(200).json({ Message: "Post Successfully UnLiked" })
            } else {
                res.status(403).json({ Message: "Not Liked" })
            }
        } else {
            res.status(404).json({ errorMessage: "Post Not Found" })
        }
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
})

const CommentPostController = asyncHandler(async (req, res)=>
{

})

const DeleteCommentController = asyncHandler(async (req, res)=>
{

})

export { PostController, DeletePostController, LikePostController, UnlikePostController,CommentPostController,DeleteCommentController }