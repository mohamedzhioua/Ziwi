const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator')

const UserSchema = new Schema({
   
    Email:{
        type:String,
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,'Email is invalid'],
        required:[true,'Email is required'],

    },
    Password:{
        type:String,
        required:[true,'Password is required'],
        minlength:8,
        select:false,
    },
  
}, {timestamps: true})




module.exports = mongoose.model('users', UserSchema)