var url = require('url');
var express = require('express');
var cors = require('cors');
var tinycolor = require("tinycolor2");


var app = express();
app.use(cors());
app.get('/', function (req, res) {
    console.log(req.query);
    var out = 'Invalid color';
    if (req.query.color != undefined) {
        var inputColor = req.query.color;
        inputColor = inputColor.toLowerCase().trim();
        try {
            if (/(rgb\([0-9\,\s]+\)){1}/.test(inputColor)) {
                console.log('rgb');
                var tcolor = tinycolor(inputColor.replace(/[\s\(\,)]+/g, ' ').trim());
                console.log(`\t>> '${tcolor._originalInput}'`);
                if (tcolor._originalInput == `rgb ${tcolor._r} ${tcolor._g} ${tcolor._b}`) {
                    out = '#' + tcolor.toHex();
                }
            } else if (/(hsl\(.*\)){1}/.test(inputColor)) {
                console.log('hsl');
                out = '#' + tinycolor(inputColor.replace(/\%20/g, '').replace('#', '')).toHex();
            } else {
                if (/[^0-9a-fA-F\#]+/g.test(inputColor)) {
                    out = 'Invalid color';
                    console.log('Invalid color 1');
                } else {
                    inputColor = inputColor.replace('#', '')
                    if (inputColor.length == 6 || inputColor.length == 3) {
                        out = '#' + tinycolor(inputColor).toHex();
                    }
                }
            }
        } catch (error) {
        }
    }
    res.send(out);
});

app.listen(3000, function () {
    console.log('App listening on http://localhost:3000/');
});