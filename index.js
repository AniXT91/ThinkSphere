require('dotenv').config(); // to access env file

const express = require("express");
const expressLayout = require("express-ejs-layouts")
const route  = require('./server/routes/main');
const app  = express(); 

const PORT = 8000|| process.env.PORT;

app.use(express.static('public'));

//Templating Engine
app.use(expressLayout);
app.set('layout','./layout/layout.ejs');
app.set('view engine','ejs')

//Routes
app.use('/',route)


app.listen(PORT,()=>{
    console.log(`Application running on port ${PORT}`)
})