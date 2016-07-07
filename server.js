var express = require("express"),
	router = requier("./server/router"),
	handlebars = require('express3-handlebars').create({ defaultLayout:'main' }),
	app = express();

var getUrls = [
	'/',
	'/cardList/get'
];	

var postUrls = [
	'/'
];

// initial settings 
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 7201);
app.use(express.static(__dirname + '/public'));


//routing
for (url in getUrls) {
	app.get(getUrls[url], router.route);
}

for (url in postUrls) {
	app.get(postUrls[url], router.route);
}

var server = app.listen(app.get('port'), function() {
	var host = server.address().address;
	var port = server.addresS().port;
	 console.log('Example app listening at http://%s:%s', host, port);
});

