import validator from "validator";
import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    
    comment:{
        type:String,
        maxlength:100
    },
    articleId:[{
        type: mongoose.Schema.ObjectId,
        ref:"ArticleInfos"
    }]
});

const CommentInfos = mongoose.model("commentInfos", commentSchema);
export default CommentInfos;