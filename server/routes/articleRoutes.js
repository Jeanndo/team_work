import express from  'express'
import * as articleControl from '../controllers/articleController'

const articleRouter = express.Router();

articleRouter
.route("/")
.post(articleControl.createArticle)
.get(articleControl.getAllArticles);

articleRouter
.route("/:id")
.get(articleControl.getArticle)
.delete(articleControl.deleteArticle)
.patch(articleControl.updateArticle);

export default articleRouter;