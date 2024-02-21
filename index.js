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
const port = process.env.PORT || 4000;

const MONGGOD_CONNECT_URI=process.env.MONGGOD_CONNECT_URI || 'mongodb+srv://angeleliandeleon:angel2001@book-store-mern.xwkldkr.mongodb.net/Formcrud'

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    modeluser.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
  
});
mongoose.connect(MONGGOD_CONNECT_URI,console.log('conecto a mongoDB'));

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

app.listen(port,()=>{
    console.log(`escuchando...${port}`);
})