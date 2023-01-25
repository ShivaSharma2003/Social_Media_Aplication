import mongoose from "mongoose";

const CommentModal = mongoose.Schema(
    {
        userId : 
        {
            type : mongoose.Types.ObjectId,
            required : true,
        },
        postId :
        {
            type : mongoose.Types.ObjectId,
            required : true,
        },
        body :
        {
            type : String,
            required : true,
        },
        likes : [],
        reply : []
    },
    { timestamps: true }
)

const Comments = mongoose.model('Comments', CommentModal)
export default Comments;