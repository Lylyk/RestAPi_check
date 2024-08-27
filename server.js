const express = require('express');

server = express();

const userModel = require('./database/model/user.js')

require('dotenv').config({path:"./config/.env"});

require('./database/connexion');

server.use(express.json());
server.use(express.urlencoded({ extended: false }));


const port = 4000;





server.post('/user', async(req, res) =>{
    console.log(req.body)
    const user = await userModel.create(req.body)
    res.json({user})
    
})

server.get('/user',async (req, res) =>{
    const user = await userModel.find({})
    res.json({user})
    
})

server.get('/user/:id',async (req, res) =>{
    const { id } = req.params
    const user = await userModel.findById(id)
    res.json({user})
    
})
server.put('/user/:id', async(req, res) =>{
    const { id } = req.params
    console.log(req.body)
    console.log(id)
    await userModel.findByIdAndUpdate(id,req.body)
    const user = await userModel.findById(id)
    res.json({user})
    
})

server.delete('/user/:id',async (req, res) =>{
    const { id } = req.params
    const deleted = await userModel.findByIdAndDelete(id)
    res.json({deleted})
    
})

server.listen(port, '127.0.0.1', () =>{
    console.log(`Server is listening on http://localhost:${port}`);
})

