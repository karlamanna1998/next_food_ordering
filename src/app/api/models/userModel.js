
import {Schema, models, model }  from 'mongoose'


const userSchema = new Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String ,
        required : true,
        validate : (pass)=>{
            if(!pass?.length || pass.length < 5){
                new Error('password must be grate than 5 characters')
                return false
            }
        }
    },
    
}, {timestamps : true})
export const userModel = models?.user || model('user' , userSchema)