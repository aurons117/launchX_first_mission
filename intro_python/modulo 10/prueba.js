// Create a express application with port 3000


var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the public folder
app.use(express.static(__dirname + '/public'));

// Set the routes
app.get('/', function(req, res){
	res.render('index');
});

app.get('/api/:num', function(req, res){
	var num = req.params.num;
	var result = isPrime(num);
	res.json({
		num: num,
		result: result
	});
});

function isPrime(num){
	if (num < 2) return false;
	for (var i = 2; i < num; i++) {
		if (num % i === 0) return false;
	}
	return true;
}

// Start the server
app.listen(port, function(){
	console.log('Server started on port ' + port);
});

