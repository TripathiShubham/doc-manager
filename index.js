var express  = require('express');
var app = express();

app.use('/app', express.static('app'));

app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/app/index.html');
});

app.listen((process.env.PORT || 3005), function() {
    console.log('server started');
});