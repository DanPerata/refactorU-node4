var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});
app.get('/success', function(req, res) {
	res.render('success');
});

app.post('/formsubmit', function (req, res){
	res.redirect('/success');
});

var server = app.listen(6005, function() {
	console.log('Express server listening on port ' + server.address().port);
});
