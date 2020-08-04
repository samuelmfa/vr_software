'use strict';

const Aluno = require('../models/aluno');

exports.get = (req, resp) => {
  Aluno.listarAlunos(resp);
};

exports.getOne = (req, resp) => {
  const id = parseInt(req.params.id);
  Aluno.listarAluno(id, resp);
};

exports.post = (req, resp) => {
  const aluno = req.body;
  Aluno.cadastrarAluno(aluno, resp);
};

exports.put = (req, resp) => {
  const id = parseInt(req.params.id);
  const aluno = req.body;
  Aluno.atualizarAluno(id, aluno, resp);
};

exports.delete = (req, resp) => {
  const id = req.params.id;
  Aluno.excluirAluno(id, resp);
  resp.status(202).send(req.body);
};
