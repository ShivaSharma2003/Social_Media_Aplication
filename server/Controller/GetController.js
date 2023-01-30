import asyncHandler from 'express-async-handler'
import UserModal from '../Models/UserModal.js';
import PostModal from '../Models/PostsModal.js';
import mongoose from 'mongoose';

const GetCurrentUserPosts = asyncHandler(async (req, res) => {
    try {
        const Posts = await PostModal.find({ userId: req.user.id })
        if (Posts) {
            res.status(200).json(Posts)
        } else {
            res.status(403).json({ errorMessage: "Not Authorized" })
        }
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
})

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

            const TimeLinePosts = CurrentUserPosts.concat({ ...FollowingPosts.FollowingPosts }).sort((a, b) => {
                return b.createdAt - a.createdAt
            })

            const result = TimeLinePosts.map(async (item) => {
                const user = await UserModal.findById(item.userId).select("-Password -email -phoneNumber")
                const timeLinePostResult = { item, user }
                return timeLinePostResult
            })
            Promise.all(result).then(async (result) => {
                res.status(200).json(result)
            })

        } else {
            res.status(404).json({ Message: "User Not Found" })
        }
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
})

const GetProfileController = asyncHandler(async (req, res) => {
    try {
        const user = await UserModal.findById(req.user._id).select("-Password")
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({ errorMessage: "User Not Found" })
        }
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
})

const GetProfileByIdController = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const user = await UserModal.findById(id).select("-email -phoneNumber -Password")
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({ errorMessage: "User Not Found" })
        }
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
})

const GetAllUsersController = asyncHandler(async (req, res) => {
    try {
        const users = await UserModal.find().select("-email -phoneNumber -Password ")
        if (users) {
            res.status(200).json(users)
        } else {
            res.status(500).json({ errorMessage: "Internal server error" })
        }
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
})

export { GetTimelineController, GetProfileByIdController, GetProfileController, GetCurrentUserPosts, GetAllUsersController }