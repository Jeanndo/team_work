import User from '../models/userModel';
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError'
import jwt from 'jsonwebtoken'

export const signUp = catchAsync(async (req,res,next)=>{

    //const employee = await Employee.create(req.body);
    const user = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email:req.body.email,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword,
        gender:req.body.gender,
        jobRole:req.body.gender,
        department:req.body.gender,
        address:req.body.address
    });

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_IN
    })
    
    res.status(201).json({
        status:'success',
        message:'User created successfully',
        token,
        data:{
            user 
        }
    })
})

export const login = catchAsync(async(req,res,next)=>{

    const {email,password} = req.body

    if(!email || !password){

    return next(new AppError("Please provide an email and password",400));
    }
     
    const user = await User.findOne({email}).select('+password')
    console.log(user);
    const token  = '';

    res.status(202).json({
        status:'success',
        token
       
    })
})

