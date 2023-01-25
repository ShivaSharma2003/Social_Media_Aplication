import asyncHandler from "express-async-handler";
import UserModal from "../Models/UserModal.js";

const FollowController = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const user = await UserModal.findById(id);
        if (req.user._id.toString() !== id) {
            if (!user.Followers.includes(req.user._id)) {
                await user.updateOne({ $push: { Followers: req.user._id } })
                await req.user.updateOne({ $push: { Followings: user._id } })
                res.status(200).json({ Message: "Successfully Followed" })
            } else {
                res.status(403).json({ Message: "You Already follow User" })
            }
        } else if (req.user._id.toString() === id) {
            res.status(403).json({ Message: "You Cannot Follow Yourself!!" })
        } else {
            res.status(404).json({ errorMessage: "User not Found or Invalid User" })
        }
    } catch (error) {
        res.status(500).json({ errorMessage: error.message })
    }
})

const UnFollowController = asyncHandler(async (req, res) => {
    res.json(req.user)
})

export { FollowController, UnFollowController }