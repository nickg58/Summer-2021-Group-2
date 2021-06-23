const express = require('express');
var mongoose = require('mongoose');
const app = express();
const { ObjectId, ObjectID } = require('mongodb');
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://admin:<BB88bb>@cluster0.y8a1m.mongodb.net/meta?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

 
client.connect(err => {
  const collection = client.db("meta").collection("data");
  // perform actions on the collection object
  client.close();
  });
var Schema = mongoose.Schema;
var dbSchema = new Schema({
    id :  ObjectID ,
    title : String,
    body : String ,
    category : String ,
    date : String
});
var server = app.listen(process.env.PORT || 8080, function() {
    

var port = server.address().port
console.log(`Example app listening on port ${port}!`)
});


var db = require('../js/config/db').default;
console.log("connecting--",uri);
 //Mongoose connection created
app.get('/', (req, res)=> res.send('Welcome to Tutorials point!'));

var jazz = mongoose.model("data", dbSchema) ;
app.get('/pro', function(req, res) {
   
   jazz.find(function(err, data) { 
       if (err){
        return console.error(err);
   }
   res.status(200).json({quiz: data});
  
});
 
});
