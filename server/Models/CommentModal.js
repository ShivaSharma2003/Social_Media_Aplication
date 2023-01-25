import mongoose from "mongoose";

const CommentModal = mongoose.Schema(
    {
        userId : 
        {
            type : String,
            required : true,
        },
        postId :
        {
            type : String,
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