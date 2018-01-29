const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Define our Schema- how an object should look when stored in our collection
let starWarsSchema = new mongoose.Schema(  
      //schema method takes in an object with any properties.
    {      }, { strict: false }

);//end Schema

//Define our Model
let StarWarsFavorite = mongoose.model('starWarsFavorite', starWarsSchema);  //define our model, give it a name and pass in the schema.


router.post('/', (req, res) => {
    console.log('data to save: ', req.body);
    let favoriteToAdd = new StarWarsFavorite(req.body);
    favoriteToAdd.isNew = true;
    favoriteToAdd.save((error, savedFavorite) => {
        if (error) {
            console.log('error on save: ', error);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    }); // end save

}); // end pos


router.get('/:label', (req,res)=>{
    let label = req.params.label;
     console.log('label: ', label);
     
//find all in database based on label
    StarWarsFavorite.find({"label": label }, (error, data)=>{
        if (error) {
            console.log('label: ', label, 'error on find: ', error);
            res.sendStatus(500);
        } else {
            console.log('get all favorites: ', data);
            
            res.send(data);
        }
    });
});

router.delete('/:id', (req, res) => {
    let uniqueId = req.params.id;
    StarWarsFavorite.findByIdAndRemove(
        {"_id": uniqueId},
        // function(error, removed) 
        (error, removedDocument) => {
            if (error) {
                console.log('error on remove: ', error);
                res.sendStatus(500);
            } else {
                // console.log('Document we removed: ', removedDocument);
                res.sendStatus(200);
            }
        }
    )
});











module.exports = router;