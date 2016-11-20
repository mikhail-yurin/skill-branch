'use strict';

var url = require('url');
var path = require('path');
const https = require('https');
var fs = require('fs');
var util = require('util');
var express = require('express');
var cors = require('cors');


var app = express();
app.use(cors());
var pc;

app.get('/volumes', function (req, res) {
    var response = {};
    pc.hdd.forEach(function (item) {
        if (response[item.volume] != undefined) {
            response[item.volume] += item.size;
        } else {
            response[item.volume] = item.size;
        }
    });
    Object.keys(response).forEach(function (key) {
        response[key] = `${response[key]}B`;
    });
    res.send(response);
});

app.get('/*', function (req, res) {
    var input = req;
    // fs.writeFile(path.resolve(__dirname, "debug.json"), util.inspect(req), function () { });
    var pathname = req._parsedUrl.pathname;
    var parts = pathname.split('/');
    var response = pc;
    parts.forEach(function (item) {
        if (item != '' && response != undefined) {
            if ((Array.isArray(response) || typeof response == 'string') && item == 'length') {
                response = undefined;
            } else {
                response = response[item];
            }
        }
    });
    switch (response) {
        case undefined:
            response = 'Not Found';
            res.sendStatus(404);
            break;
        case null:
            response = 'null';
            res.send(response);
            break;
        default:
            response = JSON.stringify(response);
            res.send(response);
            break;
    }
    // fs.writeFile(path.resolve(__dirname, "debug.json"), util.inspect(res), null);
});

app.listen(3000, function () {
    const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';
    https.get(pcUrl, (res) => {
        res.on('data', (data) => {
            fs.writeFile(path.resolve(__dirname, "arch.json"), JSON.stringify(JSON.parse(data), null, 4), function () {
                pc = JSON.parse(data);
                console.log('App listening on port 3000!');
            });
        });
    }).on('error', (e) => {
        console.error(e);
    });
});