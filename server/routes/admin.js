const express= require('express');
const adminRoute = express.Router();
const Users  = require("../models/users")

adminRoute.get('/admin',async(req,res)=>{

    const locals = {
        title:"Admin",
    }
    const adminLayout = 'layout/admin_layout.ejs';
    
    try{
        res.render('admin/index',{locals,layout:adminLayout})

    }
    catch(err){
        console.log(err);
    }

})

// REGISTER ROUTE

adminRoute.post('signUp',async(req,res)=>{
    try{

    }
    catch(err){
        console.log(err);
    }
})

// SIGNIN/LOGIN ROUTE

adminRoute.post('Login',async(req,res)=>{
    try{

    }
    catch(err){
        console.log(err);
    }
})



module.exports = adminRoute