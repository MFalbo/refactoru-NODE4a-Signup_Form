var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('<form method="post" action="/formsubmit"><input name="email" type="email"><input type="submit"></form>');
});

app.post('/formsubmit', function(req,res){
	res.redirect('/success');
});

app.get('/success', function(req, res){
	res.send('<h1>Success!</h1>');
});

var server = app.listen(8932, function() {
	console.log('Express server listening on port ' + server.address().port);
});
