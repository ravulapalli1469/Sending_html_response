const express = require ('express');
var fs = require('fs');
const app = express ();

app.get('/',(req,res) =>{
res.sendFile(__dirname + "/index.html");
})

app.get('/about',(req,res) =>{
    res.send('Hello  !!!!!')
    })
    

app.listen(3000,() => console.log('server running...'))