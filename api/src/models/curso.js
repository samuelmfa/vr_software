const conexao = require('../config/conexao');

class Curso {

  listarCursos(resp) {
    const sql = 'SELECT codigo, descricao, ementa FROM curso order by codigo DESC';
    conexao.query(sql, (erro, resultado) => {
      if (erro) {
        resp.status(400).json();
      } else {
        resp.status(200).json(resultado);
      }
    });
  }

  listarCurso(id, resp) {
    const sql = `SELECT codigo, descricao, ementa FROM curso WHERE codigo = ?`;
    conexao.query(sql, id, (erro, resultado) => {
      let aluno = resultado[0];
      if (erro) {
        resp.status(400).json();
      } else {
        resp.status(200).json(aluno);
      }
    });
  }

  cadastrarCurso(aluno, resp) {
    const sql = 'INSERT INTO curso SET ?';
    conexao.query(sql, aluno, (erro, resultado) => {
      if (erro) {
        resp.status(400).json();
      } else {
        resp.status(201).json(aluno);
      }
    });
  }

  atualizarCurso(id, valores, resp) {
    const sql = `UPDATE curso SET ? WHERE codigo = ?`;
    conexao.query(sql, [valores, id], (erro, resultado) => {
      if (erro) {
        resp.status(400).json();
      } else {
        resp.status(200).json({...valores, id});
      }
    });
  }

  excluirCurso(id, resp) {
    const sql = 'DELETE FROM curso WHERE codigo=?';
    conexao.query(sql, id, (erro, resultado) => {
      if (erro) {
        resp.status(400).json();
      } else {
        resp.status(200).json({ id });
      }
    })
  }
}

module.exports = new Curso;
