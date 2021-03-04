
import mongoose from 'mongoose'



const articleSchema = new mongoose.Schema({
    articleTitle:{
        type:String,
        required:[true,'Article Title is required']
    },
    articleDescription:{
        type:String,
        required:[true,'Article Description is required'],
        maxlength:100
    },
    authorName:{
        type:String,
        required:[true,'Author Name please!']
    },
    authorId:{
       type:String,
       required:[true,'Author Id please!']

    },
     
    createdOn:{
         type:Date,
         default:Date.now
    }



})
articleSchema.pre("find",function (next){
    this.populate({
        path:"articleId",
        select:" articleTitle articleDescription authorName authorId",
    }).populate({
        path:"commentId",
    });
    next();
})

const Article = mongoose.model('Article',articleSchema);

export default Article;