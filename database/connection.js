// Connecting with mongo db
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
import dbConfig from './db';

const connect = async() => {
     try {
        const conn = await mongoose.connect(dbConfig.db, { useNewUrlParser: true, useUnifiedTopology: true });
         if(conn)
         console.log('---------------Mongo db conection successfully-------------');
         if(!conn)
           console.log('-----------Mongo db not conection successfully----------------');
        
     }catch(err){
             console.log(err.message);
     }
}

exports.connect = connect;
