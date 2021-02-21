
import Article from '../models/articleModel';
import catchAsync from '../utils/catchAsync';


export const createArticle = catchAsync(async (req,res,next)=>{

  const newArticle = await Article.create(req.body);


  res.status(201).json({
      status:'success',
      message:'article successfully created',
      data:{
        
          newArticle
      }
  })
})
 
export const getAllArticles = catchAsync(async (req,res,next)=>{

  const articles = await Article.find({}).sort({
     createdOn:-1
  }

  )
  

  res.status(200).json({
    status:'success',
    data:{
      articles
    }
  });
})


export const getArticle = catchAsync(async (req,res,next)=>{

  const article= await Article.findById(req.params.id)

  res.status(200).json({
      status:'success',
      data:{
          article
      }
    })
})


export const deleteArticle =  catchAsync(async (req,res,next)=>{

  const article = await Article.findByIdAndDelete(req.params.id)

  res.status(200).json({
      status:'success',
      message:'article successfully deleted',
      data:{}
    })
})

export const updateArticle = catchAsync(async (req,res,next)=>{

    const article=await Article.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidator:true
    })
    res.status(200).json({
        success:true,
        message:'article successfully edited',
        data: article
    })

})
