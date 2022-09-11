const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    Firstname :{
        type:String,
        required:true,
    },
    Lastname :{
        type:String,
        required:true,
    },
    Age:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true,
    },
  
}, {timestamps: true})




module.exports = mongoose.model('employees', EmployeeSchema)