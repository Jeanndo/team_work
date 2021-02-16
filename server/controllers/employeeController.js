import Employee from '../models/employeeModel';
import catchAsync from '../utils/catchAsync';

export const createEmployee = catchAsync(async (req,res,next)=>{

    const employee = await Employee.create(req.body);

    res,status(201).json({
        status:'success',
        data:{
            employee 
        }
    })
})


export const getAllEmployees = catchAsync(async (req,res,next)=>{

    const employee = await Employee.find();

    res.status(200).json({
      status:'success',
      data:{
          employee
      }
    })
})


export const getEmployee = catchAsync(async (req,res,next)=>{

    const employee = await Employee.findById(req.params.id)

    res.status(200).json({
        status:'success',
        data:{
            employee
        }
      })
})


export const deleteEmployee =  catchAsync(async (req,res,next)=>{

    const employee = await Employee.findByIdAndDelete(req.params.id)

    res.status(200).json({
        status:'success',
        data:{
            employee
        }
      })
})

export const updateEmployee = catchAsync(async (req,res,next)=>{

    const employee = await Employee.findByIdAndUpdate(req.params.id)

    res.status(200).json({
        status:'success',
        data:{
            employee
        }
      })
})