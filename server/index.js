import express from 'express';
import bodyPraser from "body-parser";
import mongoose from 'mongoose';
import cors from 'cors';
import PostRoute from './routes/Url.js '

import dotenv from 'dotenv';
dotenv.config();



const app=express();
app.use(bodyPraser.json({limit:"30mb",extended:true}));
app.use(bodyPraser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use('/',PostRoute);


const CONNECTION_URL=process.env.DB_CONNECT;
const port =process.env.PORT ||5000;
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
        .then(()=> app.listen(port,()=>console.log(`server are runing at :: ${port}`)))
        .catch((err)=>console.log(err.message));

mongoose.set('useFindAndModify',false);        