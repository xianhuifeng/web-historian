var path = require('path');
var archive = require('../helpers/archive-helpers');
var header = require('./http-helpers').headers;
var fs = require('fs');

exports.handleRequest = function (req, res) {
  console.log('url--> '+req.url +', method '+req.method);
  if (req.method === 'GET' && req.url === '/'){
    res.writeHead(200, header);
    // res.end(archive.paths.list);
    res.end('<input>');
  }
  if (req.method === 'GET' && req.url === '/www.google.com'){
    var text = fs.readFileSync(archive.paths.testlist);
    console.log('google test ' + text);
    res.writeHead(200, header);
    res.end(text);
  }

  if(req.method === 'POST'){

  }

};
