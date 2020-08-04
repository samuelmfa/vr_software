const mysql = require('mysql');
require('dotenv').config();

class Banco {

  init(conexao) {
    this.conexao = conexao;
    this.criarBancoDeDados();
  }

  criarBancoDeDados() {
    const sql = `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`;
    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log('Banco de dados Criado com Sucesso!');
      }
    });
  };
}

module.exports = new Banco;
