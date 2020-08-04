const Curso = require('../models/curso');

exports.get = (req, resp) => {
  Curso.listarCursos(resp);
};

exports.getOne = (req, resp) => {
  const id = parseInt(req.params.id);
  Curso.listarCurso(id, resp);
};

exports.post = (req, resp) => {
  const curso = req.body;
  Curso.cadastrarCurso(curso, resp);
};

exports.put = (req, resp) => {
  const id = parseInt(req.params.id);
  const curso = req.body;
  Curso.atualizarCurso(id, curso, resp);
};

exports.delete = (req, resp) => {
  const id = req.params.id;
  Curso.excluirCurso(id, resp);

};
