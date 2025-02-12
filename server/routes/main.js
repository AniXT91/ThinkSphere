const express= require('express');
const route = express.Router();

route.get('/',(req,res)=>{
    const locals = {
        title:"ThinkSphere",
    }
    res.render("home",{locals})
})

route.get('/about',(req,res)=>{
    const locals = {
        title:"ThinkSphere",
    }
    res.render("about",{locals})
})



module.exports = route;