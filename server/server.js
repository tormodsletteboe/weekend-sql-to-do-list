//console.log('in server.js');


const express = require('express');
const bodyparser = require('body-parser');
const router = require('./routes/todo.router');

const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('server/public'));
//route
app.use('/todo',router);


const PORT =5000;
app.listen(PORT,()=>{
    console.log("listing on port: ",PORT);
})
