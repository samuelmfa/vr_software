'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const index = require('./routes/index-route');
const alunos = require('./routes/alunos-route');
const cursos = require('./routes/cursos-route');
const cursosAluno = require('./routes/curso-aluno-route');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/alunos', alunos);
app.use('/cursos', cursos);
app.use('/cursos-alunos', cursosAluno);

module.exports = app;
