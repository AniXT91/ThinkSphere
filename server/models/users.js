const mongoose = require('mongoose');
const userSchema  = mongoose.Schema({
    userName:
    {
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const Users = mongoose.model('users',userSchema);
module.exports = Users