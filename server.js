const express = require('express');
const path = require('path');
 
const app = express();

app.use(express.static(__dirname + '/exercise-recommender-app'));
 
app.get('/*', function(req,res) {
 
res.sendFile(path.join(__dirname+'/exercise-recommender-app/index.html'));
});
 
app.listen(process.env.PORT || 8080);