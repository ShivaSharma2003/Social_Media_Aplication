import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserModal = mongoose.Schema({
    userName:
    {
        type: String,
        required: true,
    },
    Password:
    {
        type: String,
        required: true,
        select: true,
    },
    
    FullName :
    {
        type : String,
        required: true,
        select : true,
    },

    email:
    {
        type: String,
        required: true,
    },
    phoneNumber:
    {
        type: String,
        required: true,
    },
    Avatar:
    {
        type: String,
        default: "https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg",
    },
    Gender:
    {
        type: String,
        required: true,
        default: "Male"
    },
    Followers: [],
    Followings: [],
    TotalPosts: [],
    Posts: [],
    Bio:
    {
        type: String,
        required: true,
        default: "Hello! I'm Using Social Media Application"
    },
    PrivateAccount:
    {
        type: Boolean,
        default: false
    },
    isAdmin:
    {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true,
    }
)

UserModal.methods.ComparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.Password)
}

UserModal.pre("save", async function (next) {
    const salt = await bcrypt.genSalt(10)
    this.Password = await bcrypt.hash(this.Password, salt)
    next()
})

const User = mongoose.model("User", UserModal);
export default User