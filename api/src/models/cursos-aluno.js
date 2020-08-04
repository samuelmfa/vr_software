const conexao = require('../config/conexao');

class CursosAlunos {

  listarCursosAlunos(resp) {
    const sql = `SELECT  ca.codigo, c.descricao, c.ementa, a.nome, ca.codigo_aluno, ca.codigo_curso FROM curso_aluno ca
    INNER JOIN aluno a
    INNER JOIN curso c
    WHERE ca.codigo_aluno = a.codigo AND ca.codigo_curso = c.codigo ORDER BY ca.codigo_curso DESC`;
    conexao.query(sql, (erro, resultado) => {
      if (erro) {
        resp.status(400).json(erro);
      } else {
        resp.status(200).json(resultado);
      }
    });
  }

  listarCursosAluno(id, resp) {
    const sql = `SELECT DISTINCT a.nome, c.descricao, c.ementa, ca.codigo FROM curso_aluno ca
    INNER JOIN aluno a
    INNER JOIN curso c
    WHERE ca.codigo = ? AND ca.codigo_aluno = a.codigo AND ca.codigo_curso = c.codigo ORDER BY a.nome ASC `;

    conexao.query(sql, id, (erro, resultado) => {
      let aluno = resultado[0];
      if (erro) {
        resp.status(400).json(erro);
      } else {
        resp.status(200).json(aluno);
      }
    });
  }

  listarAlunosPorCurso(id, resp) {
    const sql = `SELECT DISTINCT a.nome FROM curso_aluno ca
    INNER JOIN aluno a
    INNER JOIN curso c
    WHERE ca.codigo_aluno = a.codigo AND ca.codigo_curso = ?  ORDER BY a.nome ASC `;

    conexao.query(sql, id, (erro, resultado) => {
      let aluno = resultado;
      if (erro) {
        resp.status(400).json(erro);
      } else {
        resp.status(200).json(aluno);
      }
    });
  }

  cadastrarCursosAluno(alunoCurso, resp) {
    const sql = 'INSERT INTO curso_aluno SET ?';
    conexao.query(sql, alunoCurso, (erro, resultado) => {
      if (erro) {
        // resp.status(400).json(erro);
        resp.status(400).json({mensagem : 'Erro ao Cadastrar Aluno Curso'});
      } else {
        resp.status(201).json(alunoCurso);
      }
    });
  }

  atualizarCursosAluno(id, valores, resp) {
    const sql = `UPDATE curso_aluno SET ? WHERE codigo = ?`;
    conexao.query(sql, [valores, id], (erro, resultado) => {
      if (erro) {
        // resp.status(400).json(erro);
        resp.status(400).json({mensagem : 'Erro ao Atualizar Aluno Curso'});
      } else {
        resp.status(200).json({...valores, id});
      }
    });
  }

  excluirCursosAluno(id, resp) {
    const sql = 'DELETE FROM curso_aluno WHERE codigo=?';
    conexao.query(sql, id, (erro, resultado) => {
      if (erro) {
        // resp.status(400).json(erro);
        resp.status(400).json({mensagem : 'Erro ao Excluir Aluno Curso'});
      } else {
        resp.status(200).json({ id });
      }
    })
  }
}

module.exports = new CursosAlunos;
