'use strict';
const app = require('../src/app');
const debug = require('debug')('nodestr:server');
const http = require('http');
const conexao = require('../src/config/conexao');
const Tabelas = require('../src/config/tabelas');

conexao.connect((error) => {
  if (error) {

    console.log('Erro ao se conectar com o Banco!');

  } else {

    Tabelas.init(conexao);

    const port = normalizePort(process.env.PORT || '300');
    app.set('port', port);
    const server = http.createServer(app);
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);

    console.log('Banco concectado com Sucesso!');
    console.log(`API Rodando na porta: ${port}`);


    function normalizePort(val) {
      const port = parseInt(val, 10);
      if (isNaN(port)) {
        return val;
      }
      if (port >= 0) {
        return port;
      }
      return false;
    }

    function onError(error) {
      if (error.syscall !== 'listen') {
        throw error;
      }

      const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

      switch (error.code) {

        case 'EACCES':
          console.error(bind + 'Requer Privilégio Elevado');
          process.exit(1);
          break;
        case 'EADDRINUSE':
          console.error(bind + ' esta porta está em uso');
          process.exit(1);
          break;
        default:
          throw error;
      }


    }

    function onListening() {
      const addr = server.address();
      const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
      debug('Listening on ' + bind);
    }

  }
});










