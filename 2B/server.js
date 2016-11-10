var express = require('express');
var cors = require('cors');


var app = express();
app.use(cors());
app.get('/', function(req, res) {
    var input = req.query.fullname
    console.log(`"${input}"`)
    input = input.trim().toLowerCase(); 
    var fio = input.split(/[\s]+/g);
    var output = 'Invalid fullname';
    console.log(input.match( /[\s]/ig ));
    if (fio != '' && fio != undefined && input.match( /[\d\_\/]+/ig ) == null) {
        switch (fio.length) {
            case 3:
                output = `${fio[2].replace(fio[2].charAt(0), fio[2].charAt(0).toUpperCase())} ${fio[0].charAt(0).toUpperCase()}. ${fio[1].charAt(0).toUpperCase()}.`;
                break;
            case 2:
                output = `${fio[1].replace(fio[1].charAt(0), fio[1].charAt(0).toUpperCase())} ${fio[0].charAt(0).toUpperCase()}.`;
                break;
            case 1:
                output = `${fio[0].replace(fio[0].charAt(0), fio[0].charAt(0).toUpperCase())}`;
                break;
            default:
                output = 'Invalid fullname';
                break;
        }
    }
    res.send(output);
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});