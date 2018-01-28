const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const starWarsRouter = require('./routes/starwars.router');


/** ---------- MIDDLEWARE ---------- **/
app.use(express.static('server/public/'));
app.use(bodyParser.json()); // needed for angular requests

/** ---------- EXPRESS ROUTES ---------- **/

app.use('/favorites', starWarsRouter);






/** ---------- MONGOOSE ----------------- */
const mongoose = require('mongoose');
//gamestop is the name of our database 
//27017 is the default mongo port number
const databaseUrl = 'mongodb://localhost:27017/swapi';
//connect to mongoDB
mongoose.connect(databaseUrl);

//feedback to ensure a connection is successful. optional
mongoose.connection.on('connected', ()=> {
    console.log('mongoose is connected');
    
});
//feedback to receive an error on connection failure.  optional
mongoose.connection.on('error', ()=>{
    console.log('mongoose connection failed');
 
});


/** ---------- START SERVER ---------- **/
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});