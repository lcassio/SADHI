const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<head><title>SADHI</title></head><body><h1 style="color:red;">Sistema de Apura&ccedil;&atilde;o de Dados H&iacute;dricos</h1></body><p title="o famoso tooltip">Teste do Node.js</p>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
