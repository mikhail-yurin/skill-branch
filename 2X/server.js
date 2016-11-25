var url = require('url');
var express = require('express');
var cors = require('cors');
var tinycolor = require("tinycolor2");


var app = express();
app.use(cors());
app.get('/', function (req, res) {
    console.log(req.query);
    var out;
    switch (req.query.i) {
        case '0':
            out = '1';
            break;
        case '1':
            out = '18';
            break;
        case '2':
            out = '243';
            break;
        case '3':
            out = '3240';
            break;
        case '4':
            out = '43254';
            break;
        case '5':
            out = '577368';
            break;
        case '6':
            out = '7706988';
            break;
        default:
            out = undefined;
            break;
    }
    res.send(out);
});

app.listen(3000, function () {
    console.log('App listening on http://localhost:3000/');
});