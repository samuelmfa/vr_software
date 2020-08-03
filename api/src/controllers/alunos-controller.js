'use strict';

exports.get = (req, resp, next) => {
  resp.status(200).send({
    title: "Alunos",
    version: "0.0.1"
  });
};

exports.post = (req, resp, next) => {
  resp.status(201).send(req.body);
};

exports.put = (req, resp, next) => {
  const id = req.params.id;
  resp.status(200).send({
    id: id,
    item: req.body
  });
};

exports.delete = (req, resp, next) => {
  resp.status(202).send(req.body);
};
