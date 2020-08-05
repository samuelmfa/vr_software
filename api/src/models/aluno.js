const conexao = require('../config/conexao');

class Aluno {

  listarAlunos(resp) {
    const sql = 'SELECT codigo, nome FROM aluno order by nome ASC';
    conexao.query(sql, (erro, resultado) => {
      if (erro) {
        resp.status(400).json();
      } else {
        resp.status(200).json(resultado);
      }
    });
  }

  listarAluno(id, resp) {
    const sql = `SELECT codigo, nome FROM aluno WHERE codigo = ?`;
    conexao.query(sql, id, (erro, resultado) => {
      let aluno = resultado[0];
      if (erro) {
        resp.status(400).json();
      } else {
        resp.status(200).json(aluno);
      }
    });
  }

  cadastrarAluno(aluno, resp) {
    const sql = 'INSERT INTO aluno SET ?';
    conexao.query(sql, aluno, (erro, resultado) => {
      if (erro) {
        resp.status(400).json();
      } else {
        resp.status(201).json(aluno);
      }
    });
  }

  atualizarAluno(id, valores, resp) {
    const sql = `UPDATE aluno SET ? WHERE codigo = ?`;
    conexao.query(sql, [valores, id], (erro, resultado) => {
      if (erro) {
        resp.status(400).json();
      } else {
        resp.status(200).json({...valores, id});
      }
    });
  }

  excluirAluno(codigo, resp) {
    const sql = 'DELETE FROM aluno WHERE codigo=?';
    conexao.query(sql, codigo, (erro, resultado) => {
      if (erro) {
        resp.status(400).json();
      } else {
        resp.status(200).json({ codigo });
      }
    })
  }
}

module.exports = new Aluno;
