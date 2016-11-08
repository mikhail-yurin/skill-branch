var express = require('express');
var app = express();


app.get('/2a', function(req, res) {
    var a = parseInt(req.query.a) || 0
    var b = parseInt(req.query.b) || 0
    res.send(`Вывод: ${a + b}`);
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});