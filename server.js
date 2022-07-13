var express = require('express');
const path = require('path');
var app = express();
var PORT = 3000;

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get('/', function(req, res, next){
	
	var options = {
		root: path.join(__dirname)
	};
	
	var fileName = 'index.html';
	res.sendFile(fileName, options, function (err) {
		if (err) {
			next(err);
		} else {
			console.log('Sent:', fileName);
			next();
		}
	});

});

let input_str = "";
const mutated_data = new Map([
	[16, 'A'],
	[97, 'T'],
]);

function compare(input_str, mutated_data){
	var c = 0;
	for (let [key, value] of mutated_data) {
		if(input_str[key] == value)
			c++;
	}
	if(c == mutated_data.size)
		console.log('Congenital Disorder');
	else
		console.log('No Disease');
}

app.get('/:temp', function(req, res){
	input_str = req.params.temp;
	res.send('random');
	console.log(input_str);
	compare(input_str, mutated_data);
});

app.post('/temp', function(req, res){
	console.log(req.body.data);
	res.send('random');
});


app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});


