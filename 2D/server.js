var url = require('url');
var express = require('express');
var cors = require('cors');
const rgbHex = require('rgb-hex');
// var onecolor = require('onecolor');
// var colorString = require('color-string');

var app = express();
app.use(cors());
app.get('/', function (req, res) {
    console.log(req.query);
    var out = 'Invalid color';
    if (req.query.color != undefined) {
        var inputColor = req.query.color;
        try {
            if (/[\#]+/g.test(inputColor) != true) { // /(rgb\([0-9\,\s]+\)){1}/.test(inputColor)
                out = '#' + rgbHex(inputColor);
            } else {
                inputColor = inputColor.replace('#', '').toLowerCase().trim();
                if (/[^0-9a-fA-F]+/.test(inputColor)) {
                    out = 'Invalid color';
                    console.log('Invalid color 1');
                } else {
                    switch (inputColor.length) {
                        case 3:
                            out = '#' + inputColor[0] + inputColor[0] + inputColor[1] + inputColor[1] + inputColor[2] + inputColor[2]
                            break;
                        case 6:
                            out = '#' + inputColor;
                            break;
                        default:
                            out = 'Invalid color';
                            console.log('Invalid color 2');
                            break;
                    }
                }
            }
        } catch (error) {
            inputColor = inputColor.replace('#', '').toLowerCase().trim();
            if (/[^0-9a-fA-F]+/.test(inputColor)) {
                out = 'Invalid color';
                console.log('Invalid color 1');
            } else {
                switch (inputColor.length) {
                    case 3:
                        out = '#' + inputColor[0] + inputColor[0] + inputColor[1] + inputColor[1] + inputColor[2] + inputColor[2]
                        break;
                    case 6:
                        out = '#' + inputColor;
                        break;
                    default:
                        out = 'Invalid color';
                        console.log('Invalid color 2');
                        break;
                }
            }
        }
    }
    res.send(out);
});

app.listen(3000, function () {
    console.log('App listening on http://localhost:3000/');
});