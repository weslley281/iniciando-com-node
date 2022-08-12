const http = require('http');

http
  .createServer((request, responce) => {
    responce.writeHead(200, { 'Content-Type': 'application/json' });

    responce.end(
      JSON.stringify({
        message: 'Minha primeira aplicação NodeJS',
      })
    );
  })
  .listen(4001, () => console.log('Servidor está rodando na porta 4001'));
