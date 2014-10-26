(function () {
    'use strict';

    var express = require('express'),
        http = require('http'),
        serveStatic = require('serve-static'),
        bodyParser = require('body-parser'),
        PORT = 3111;

    var send404 = function (res) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>Page not found</h1>');
    };

    var app = express();

    app.use(serveStatic(__dirname + '/'));

    http.createServer(app).listen(PORT);

    app.use(bodyParser.json());

    app.get('/', function (req, res) {
        res.redirect('/mailer.html');
    });

    console.log('The server is started on port ' + PORT);
})();