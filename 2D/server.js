var url = require('url');
var express = require('express');
var cors = require('cors');
const rgbHex = require('rgb-hex');
var onecolor = require('onecolor');
// var colorString = require('color-string');

var app = express();
app.use(cors());
app.get('/', function (req, res) {
    if (req.query.color != undefined) {
        console.log(`"${req.query.color}"`);
        var inputColor = req.query.color;
        var out;
        if (/[\#]+/g.test(inputColor) != true) { // /(rgb\([0-9\,\s]+\)){1}/.test(inputColor)
            try {
                // out = '#' + rgbHex(inputColor);
                out = onecolor(inputColor).hex();
                // var out = colorString.to.hex(colorString.get(inputColor));
            } catch (error) {
                console.log(error);
                inputColor = inputColor.replace('#', '').toLowerCase().trim();
                if (/[^0-9a-fA-F]+/.test(inputColor)) {
                    out = 'Invalid color2';
                } else {
                    switch (inputColor.length) {
                        case 3:
                            out = '#' + inputColor[0] + inputColor[0] + inputColor[1] + inputColor[1] + inputColor[2] + inputColor[2]
                            break;
                        case 6:
                            out = '#' + inputColor;
                            break;
                        default:
                            out = 'Invalid color3';
                            break;
                    }
                }
            }
        } else {
            out = 'Invalid color4';
        }
        res.send(out);
    }
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});