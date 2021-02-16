import Employee from '../models/employeeModel';
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError'
import jwt from 'jsonwebtoken'

export const signUp = catchAsync(async (req,res,next)=>{

    //const employee = await Employee.create(req.body);
    const employee = await Employee.create({
        name: req.body.name,
        email:req.body.email,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword
    });

    const token = jwt.sign({id:employee._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_IN
    })
    
    res.status(201).json({
        status:'success',
        token,
        data:{
            employee 
        }
    })
})

export const login = catchAsync(async(req,res,next)=>{

    const {email,password} = req.body

    if(!email || !password){

    return next(new AppError("Please provide an email and password",400));
    }
     
    const employee = await Employee.findOne({email}).select('+password')
    const token  = '';

    res.status(202).json({
        status:'success',
        token
       
    })
})

