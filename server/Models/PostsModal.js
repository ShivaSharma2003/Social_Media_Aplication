import mongoose from "mongoose";
const PostModal = mongoose.Schema(
    {
        userId:
        {
            type: mongoose.Types.ObjectId,
            required: true,
        },
        postItem: {
            type: String,
            required: true,
        },
        caption:
        {
            type: String
        },
        likes: [],
        Comments: [],
    }, { timestamps: true }
)

const Post = mongoose.model("posts", PostModal)

export default Post;