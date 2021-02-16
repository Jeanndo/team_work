import validator from 'validator'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'


const employeeSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,'Your Name Please'],
        unique:true
    },
    email:{
        type:String,
        required:[true,'Your email please'],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,' Provide Valid email Please']
    },
   password:{
   type:String,
   required:[true,'password is required'],
   minlength:8,
   select:false
      
   },
   confirmPassword:{
    type:String,
    required:[true,'please confirm your password'],

    validate:{
     validator:function(el){
         return el === this.password
     },
     message:'password not matching'
    }  
   }
})

employeeSchema.pre('save', async function(next){

    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password,12);
    this.confirmPassword = undefined;

    next();
})

const Employee = mongoose.model('Employee',employeeSchema);

export default Employee;