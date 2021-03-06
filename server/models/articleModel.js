
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
    }
})

const Article = mongoose.model('Article',articleSchema);

export default Article;