const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (req, res) {
  const q = url.parse(req.url, true);
  let filename = `.${q.path}.html`;

  if (q.pathname === '/') {
      filename = './index.html';
  } 

  const exists = fs.exists(filename, (info) => {
    if (!info) filename = '404.html';

  
  fs.readFile(filename, function(err, data) {
    if (err) {
      console.log('error')
      res.end()
    } 

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
});
  });
}).listen(8080);