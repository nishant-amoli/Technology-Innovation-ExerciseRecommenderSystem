const express = require('express'); 
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/front-end/exercise-recommender-app'))); //defining the directory name for the path

app.get('/user', (req, res) =>{
    res.status(200).send("Tejas")
});

app.get('/*', (req, res) =>{
    res.sendFile(path.join(__dirname,'/front-end/exercise-recommender-app/index.html')); // defining the path for running the index.html file on the express app
});

module.exports = app; //exporting the app to be run on the server in server.js
