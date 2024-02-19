
const mongoose =require('mongoose');
// import mongoose from 'mongoose';

    const fecha = new Date;
   

const userSchema =new mongoose.Schema({
    nombre:String,
    Edad:String,
    Correo:String,
    Telefono:String,
    Fecha:String 
});

const modeluser=mongoose.model('users',userSchema);

// modeluser.find({})
//   .then((users) => {
//     res.json(users);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const fluffy = new modeluser({
//     nombre: 'pepe',
//     Edad:14,
//     Correo:'pepe.eliandeleon@gmail.com',
//     Telefono:"3059580",
//    Fecha:fecha
   
//     });

//     fluffy.save()

module.exports= modeluser;
