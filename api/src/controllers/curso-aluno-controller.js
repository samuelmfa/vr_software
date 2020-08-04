const CursosAluno = require('../models/cursos-aluno');

exports.get = (req, resp) => {
  CursosAluno.listarCursosAlunos(resp);
};

exports.getOne = (req, resp) => {
  const id = parseInt(req.params.id);
  CursosAluno.listarCursosAluno(id, resp);
};

exports.post = (req, resp) => {
  const cursoAluno = req.body;
  CursosAluno.cadastrarCursosAluno(cursoAluno, resp);
};

exports.put = (req, resp) => {
  const id = parseInt(req.params.id);
  const cursoAluno = req.body;
  CursosAluno.atualizarCursosAluno(id, cursoAluno, resp);
};

exports.delete = (req, resp) => {
  const id =  parseInt(req.params.id);
  CursosAluno.excluirCursosAluno(id, resp);

};
