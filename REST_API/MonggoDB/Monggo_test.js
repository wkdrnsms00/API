 //mongoose, dotenv 설치
const express = require('express');
const mongoose = require('mongoose');
const User = require('./M_models/User');
const server = express();
const USer = require('./M_models/User')
require('dotenv').config({path : 'variables.env'}); // env 설정

server.get('/', (req, res )=>{
    const newUser = new User();
    newUser.email = "test@gamil.com";
    newUser.name = "test_man";
    newUser.age = 27;
    newUser.save()
        .then((user)=>{
            console.log(user);
            res.json({
                message: 'User Created Successfully'
            })
        })
        .catch((user)=>{
            res.json({
                message:'User was not successfully created'
            })
        })
})
server.listen(3000, err=>{
    if (err){
        console.log(err);
    } else{
        mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true}, (err)=>{
            if(err){
                console.log(err);
            } else{
                console.log("Conneted to database successfully");
            }
        });
    }
});