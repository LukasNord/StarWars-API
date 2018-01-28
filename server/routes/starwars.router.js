const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Define our Schema- how an object should look when stored in our collection
let starWarsSchema = new mongoose.Schema(  
      //schema method takes in an object.
    {
        name: String,
        title: String
            
    }
);//end Schema

//Define our Model
let StarWarsFavorite = mongoose.model('starWarsFavorite', starWarsSchema);  //define our model, give it a name and pass in the schema.


router.post('/', (req, res) => {
    console.log('data to save: ', req.body);
    let favoriteToAdd = new StarWarsFavorite(req.body);

    favoriteToAdd.save((error, savedFavorite) => {
        if (error) {
            console.log('error on save: ', error);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    }); // end save

}); // end pos


router.get('/', (req,res)=>{
//find all in database
    StarWarsFavorite.find({}, (error, data)=>{
        if (error) {
            console.log('error on save: ', error);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    });
});


module.exports = router;