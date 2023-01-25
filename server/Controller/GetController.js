import asyncHandler from 'express-async-handler'
import UserModal from '../Models/UserModal.js';
import PostModal from '../Models/PostsModal.js';
import mongoose from 'mongoose';

const GetTimelineController = asyncHandler(async (req, res) => {
    try {
        const user = await UserModal.findOne(req.user._id)
        if (user) {
            const CurrentUserPosts = await PostModal.find({ userId: user._id })
            const FollowingPosts = await UserModal.aggregate([
                {
                    $match:
                    {
                        _id: new mongoose.Types.ObjectId(user._id)
                    }
                },
                {
                    $lookup:
                    {
                        from: "posts",
                        localField: "Followings",
                        foreignField: "userId",
                        as: "followingPosts"
                    }
                },
                {
                    $project:
                    {
                        followingPosts: 1,
                        _id: 0
                    }
                }
            ])
            res.status(200).json(CurrentUserPosts.concat({...FollowingPosts[0].followingPosts}).sort((a, b) => {
                return b.createdAt - a.createdAt
            }))
        } else {
            res.status(404).json({ Message: "User Not Found" })
        }
    } catch (error) {

    }
})

export { GetTimelineController }