var url = require('url');
var express = require('express');
var cors = require('cors');


var app = express();
app.use(cors());
app.get('/', function(req, res) {
    var input = req.query.username
    console.log(`>>> "${input}"\n`)
    input = input.trim();
    var output = 'Invalid username';
    output = url.parse(input);
    if (output.protocol == null) output.protocol = 'http'
    output = url.format(output)
    output = url.parse(output);
    output = output.path
    var services = ['telegram.me', 'vk.com']
    services.forEach((service) => {
        console.log(`replace ${service} by ''`)
        output = output.replace(service, '')
    })
    output = output.split('/');
    var output = output.filter(function(val) {
        return val != '';
    });
    output = output[0];
    output = output.replace(/[\@]+/g, '');
    output = "@" + output;
    output = output.replace(/\?.+/g, '');
    res.send(output);
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});