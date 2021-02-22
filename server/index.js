import express from "express";
import bodyParser from "body-parser";
import compression from "compression"
import userRouter from "./routes/userRoutes"
import AppError from './utils/appError';
import commentRouter from "./routes/commentRoutes"
import * as globalErrorHandler from './controllers/errorController'
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(compression())

app.get('/', (req,res)=>{res.status(200).send({
    status:200,
    message:'welcome to patiente registration',
})})



app.use("/api/v1/users",userRouter)
app.use("/api/v1/comments",commentRouter)


app.all('*',(req,res,next)=>{

//   res.status(404).json({
//      status:'fail',
//      message:`can't find ${req.originalUrl} on this server` 
//   })  
// const err = new Error (`can't find ${req.originalUrl} on this server` )
// err.status = 'fail';
// err.statusCode = 404;

next(new AppError(`can't find ${req.originalUrl} on this server`,404)) 
})
 
app.use(globalErrorHandler.errorHandler);
export default app;