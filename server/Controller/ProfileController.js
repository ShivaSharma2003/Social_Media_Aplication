import asyncHandler from "express-async-handler";
import UserModal from "../Models/UserModal.js";

const FollowController = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const user = await UserModal.findById(id);
        if (req.user._id.toString() !== id) {
            try {
                if (!user.Followers.includes(req.user._id)) {
                    await user.updateOne({ $push: { Followers: req.user._id } })
                    await req.user.updateOne({ $push: { Followings: user._id } })
                    res.status(200).json({ Message: "Successfully Followed" })
                } else {
                    res.status(403).json({ Message: "You Already follow User" })
                }
            } catch (error) {
                res.status(500).json({ errorMessage: error.message })
            }
        } else if (req.user._id.toString() === id) {
            try {
                res.status(403).json({ Message: "You Cannot Follow Yourself!!" })

            } catch (error) {
                res.status(500).json({ errorMessage: error.message })
            }
        } else {
            res.status(404).json({ errorMessage: "User not Found or Invalid User" })
        }
    } catch (error) {
        res.status(500).json({ errorMessage: error.message })
    }
})

const UnFollowController = asyncHandler(async (req, res) => {
    const { id } = req.params

    try {
        const user = await UserModal.findOne({ id })
        if (req.user._id.toString() !== id) {
            try {
                if (user.Followers.includes(req.user._id)) {
                    await user.updateOne({ $pull: { Followers: req.user._id} })
                    await req.user.updateOne({ $pull: { Followings: user._id } })
                    res.status(200).json({ Message: "Successfully Unfollowed" })
                } else {
                    res.status(403).json({ Message: "You don't follow User" })
                }
            } catch (error) {
                res.status(500).json({ errorMessage: error.message })
            }
        } else if (req.user._id.toString() === id) {
            try {
                res.status(403).json({ Message: "You Cannot UnFollow Yourself!!" })

            } catch (error) {
                res.status(500).json({ errorMessage: error.message })
            }
        } else {
            res.status(404).json({ errorMessage: "User not Found or Invalid User" })
        }
    } catch (error) {
        res.status(500).json({ errorMessage: error.message })
    }
})

export { FollowController, UnFollowController }