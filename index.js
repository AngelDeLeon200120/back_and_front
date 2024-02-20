const express = require('express');
// import express from 'express';
const app = express();
const db =require('./db/dbconnect.js');
// import {DB} from './db/dbconnect.js';
// import cors from 'cors';
const cors =require('cors');
const mongoose =require('mongoose');
const modeluser =require('./db/dbconnect.js');
const urlFront =require('./config.js');



app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    modeluser.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
  
});
mongoose.connect('mongodb+srv://angeleliandeleon:angel2001@book-store-mern.xwkldkr.mongodb.net/Formcrud',console.log('conecto a mongoDB'));

app.get('/signup',(req,res)=>{
    modeluser.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
  
});

app.post('/signup',(req,res)=>{
    modeluser.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
})

app.listen(3000,()=>{
    console.log('escuchando....');
})