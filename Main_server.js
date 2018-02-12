
'use strict' 

var express = require('express'); 
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());

var cors = require('cors');
app.use(cors());

app.get('/', function(req, res) {
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify({"Message" : "Hi from vivek"}));
});


app.listen(8050);
console.log('Listening on port 8050..');