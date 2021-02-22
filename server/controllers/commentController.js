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

    try{
        res.status(200).json({
            status:'success',
            data:{
                allComments
            }
        })
    }catch(error){
        res.status(404).json({
            status:'fail',
            message:err
        })
    }
})

export const getComment = catchAsync (async (req,res, next) => {

    try{
        const comment = await commentInfos.findById(req.params.id);

        res.status(200).json({
            status:'success',
            data:{
            data:comment    
            }
        })
    }catch(error){
        res.status(404).json({
            status:'fail',
            message:err
        })
    }
})

export const deleteComment = catchAsync( async (req,res, next) => {

    try{
        await commentInfos.findByIdAndRemove(req.params.id);

        res.status(200).json({
            status:'success',
            data:{
             message:null    
            }
        })
    }catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        })
    }
})

export const updateComment =  catchAsync (async (req,res,next) => {

    try{
        const data = await commentInfos.findByIdAndUpdate(req.params.id,req.body,{
            new:true});

        res.status(200).json({
            status:'success',
            data:{
             data   
            }
        })
    }catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        })
    }
})
