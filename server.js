var express = require('express');

var app = express();

app.use(express.static(''));
var server = app.listen(process.env.PORT || 5050, function () {
	console.log('Server listening on PORT:', server.address().port);
})
