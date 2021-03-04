import commentInfos from "../models/commentModel";
import catchAsync from '../utils/catchAsync';

export const createComment= catchAsync ( async (req,res, next)=>{

    const newComment = await commentInfos.create(req.body);

    res.status(201).json({
        status:"success",
        newComment
    })
})


export const getAllComments = catchAsync(async (req,res, next) => {

    const allComments = await commentInfos.find();

    
        res.status(200).json({
            status:'success',
            data:{
                allComments
            }
        })
 
})

export const getComment = catchAsync (async (req,res, next) => {

        const comment = await commentInfos.findById(req.params.id);

        res.status(200).json({
            status:'success',
            data:{
            data:comment    
            }
        })
})

export const deleteComment = catchAsync( async (req,res, next) => {

   
        await commentInfos.findByIdAndRemove(req.params.id);

        res.status(200).json({
            status:'success',
            data:{
             message:null    
            }
        })
  
})

export const updateComment =  catchAsync (async (req,res,next) => {

        const data = await commentInfos.findByIdAndUpdate(req.params.id,req.body,{
            new:true});

        res.status(200).json({
            status:'success',
            data:{
             data   
            }
        })
    
})