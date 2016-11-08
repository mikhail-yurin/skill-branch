var express = require('express');
var app = express();


app.get('/', function(req, res) {
    var fio = req.query.fullname.split(" ")
    var output = ''
    switch (fio.length) {
        case 3:
            output = `${fio[2]} ${fio[0].charAt(0)}. ${fio[1].charAt(0)}.`
            break;
        case 2:
            output = `${fio[1]} ${fio[0].charAt(0)}.`
            break;
        case 1:
            output = `${fio[0]}`
            break;
        default:
            output = 'Invalid fullname'
            break;
    }
    res.send(output);
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});