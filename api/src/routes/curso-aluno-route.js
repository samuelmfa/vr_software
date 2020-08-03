'use strict';
const express = require('express');
const router  = express.Router();

router.get('/cursos-alunos', (req, resp, next) => {
  resp.status(200).send({
    title: "Curso Alunos",
    version: "0.0.1"
  });
});

router.post('/', (req, resp, next) => {
  resp.status(201).send(req.body);
});

router.put('/:id', (req, resp, next) => {
  const id = req.params.id;
  resp.status(200).send({
    id: id,
    item: req.body
  });
});

router.delete('/', (req, resp, next) => {
  resp.status(202).send(req.body);
});

module.exports = router;
