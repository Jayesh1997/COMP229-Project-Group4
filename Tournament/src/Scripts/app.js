// IIFE - Immediatelt invoked function expression
(() => {
    function Start(){
        console.log("APP STARTED !");
    }
    window.addEventListener('load', Start);
})();


    //database setup

let mongoose = require('mongoose');
let DB = require('./db');

// Pointing Mongoose to DB URI
mongoose.connect(process.env.URI || DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', ()=> {
  console.log("Connected to MongoDB...");
});
