import mongoose from 'mongoose'

const connection = {};


// const path = require('path');
// require('dotenv').config({path:''})
//t93f4snh7uP2imyO
async function initDB(){

    if(connection.isConnected){
        console.log("alredy connected")
        return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("connected to mongo");
}


export default initDB