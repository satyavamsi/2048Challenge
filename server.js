var express = require('express');
const http = require('http');
var app = express();
var server = http.createServer(app);
const port = process.env.PORT || 3000;
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.render('index.html');
});

server.listen(port, ()=>{});
