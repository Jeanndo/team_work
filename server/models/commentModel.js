import validator from "validator";
import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    authorName:{
        type: String,
        required: [true, "Your name is required"]
    },
    comment:{
        type:String
    },
});

const CommentInfos = mongoose.model("commentInfos", commentSchema);
export default CommentInfos;
