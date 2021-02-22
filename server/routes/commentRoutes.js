import express from 'express'
import * as commentController from '../controllers/commentController'

const router = express.Router()

router
.route('/')
.get(commentController
.getAllComments)
.post(commentController.createComment);

router
.route('/:id')
.get(commentController.getComment)
.delete(commentController.deleteComment)
.patch(commentController.updateComment);


export default router;