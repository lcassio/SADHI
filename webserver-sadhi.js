const http = require('http');
const fs = require('fs');
const os = require('os');

var interfaces = os.networkInterfaces();
var addresses = "localhost";
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses = address.address;
        }
    }
}
// console.log(`Endereço do servidor: ${addresses}`);

const hostname = addresses;
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  fs.readFile('tela.html', 'utf8', (err, data)=> {
    if (err) throw err;
    res.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
