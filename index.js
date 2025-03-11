require('dotenv').config(); // to access env file

const express = require("express");
const expressLayout = require("express-ejs-layouts")

const connectDB = require("./server/config/connect")
const route  = require('./server/routes/main');

const app  = express(); 

const PORT = 8000|| process.env.PORT;

//Connect to DV
connectDB();

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//Templating Engine
app.use(expressLayout);
app.set('layout','./layout/layout.ejs');
app.set('view engine','ejs')

//Routes
app.use('/',route)


app.listen(PORT,()=>{
    console.log(`Application running on port ${PORT}`)
})