/**
 * Author Somesh Vyas
 */
var express = require('express'),
	app	= express(),
    path = require('path'),
    http = require('http').Server(app),
    bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000);

// Set bodyParser as middleware
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

// Render Home Page
app.get('/', function(req, res) {
    res.render('index.html');
});

http.listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});