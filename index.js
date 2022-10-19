const express = require('express');
const dotenv = require('dotenv');
const server = express();
dotenv.config();
const port = process.env.PORT;
const colors = require('colors');

server.get('/',(req,res)=>{
    res.send('hola mundo')
});

server.listen(port,()=>{
    console.log(`estoy en el puerto ${port}`.rainbow);
})