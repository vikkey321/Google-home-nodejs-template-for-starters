'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());

var cors = require('cors');
app.use(cors());

app.get('/', function(req, res) {
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify({"Message" : "Running succesfully"}));
});

app.post('/query', function(req, res) {
		var respBody = req.body;
		var intentname = respBody.result.metadata.intentName;
		var speech = "";
		//console.log(JSON.stringify(respBody));
		switch(intentname) {
			case "employeeid":
				var employee_id = respBody.result.parameters.number;
				speech = "Employee is identified";
				break;
			case "Nameintent":
				//var employee_id = respBody.result.parameters.number;
				speech = "Name is Identified";
				break;
			default:
				speech = "Not Identified";
		}

		var resps =  {
			"speech": speech,
			"displayText": speech,
			"source": "cogni-employeeidentifer"
		};

		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(resps));
		
});

app.listen(8050);
console.log('Listening on port 8050..');