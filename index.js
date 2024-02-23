
const express = require("express");
// import express from 'express';
const app = express();
const db = require("./db/dbconnect.js");
// import {DB} from './db/dbconnect.js';
// import cors from 'cors';
const cors = require("cors");
const mongoose = require("mongoose");
const modeluser = require("./db/dbconnect.js");

// const env = require("node:process");
require('dotenv').config({path:'.env'});



// const PORT =process.env.PORT
// const MONGGOD_CONNECT_URI=process.env.MONGGOD_CONNECT_URI


// env.PORT = 4000;
// env.MONGGOD_CONNECT_URI =
//   "mongodb+srv://angeleliandeleon:angel2001@book-store-mern.xwkldkr.mongodb.net/Formcrud ";
//   const host =process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;
const MONGGOD_CONNECT_URI =process.env.MONGGOD_CONNECT_URI||"mongodb+srv://angeleliandeleon:angel2001@book-store-mern.xwkldkr.mongodb.net/Formcrud"; 

  app.use(cors());
app.use(express.json());

 
  const conectDB = async () => {
    try {
      const conn = await mongoose.connect(
       MONGGOD_CONNECT_URI,
        console.log("conectoDB")
      );
  
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };


// mongoose.connect(MONGGOD_CONNECT_URI,console.log('conectoDB'));


app.get("/", (req, res) => {
  modeluser
    .find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/signup", (req, res) => {
  modeluser
    .find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/", (req, res) => {
  modeluser
    .create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/signup", (req, res) => {
  modeluser
    .create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});


conectDB();
  app.listen(PORT, () => {
    console.log(`escuchando...${PORT}`);
  });

