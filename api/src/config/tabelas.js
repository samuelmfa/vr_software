class Tabelas {

  init(conexao) {
    this.conexao = conexao;
    this.criarTabelaUsuario();
    this.criarTabelaCursos();
    this.criarTabelasCursoAluno();
  }

  criarTabelaUsuario() {
    const sql = `CREATE TABLE IF NOT EXISTS aluno (codigo int(11) NOT NULL AUTO_INCREMENT,
                                                   nome varchar(50) DEFAULT NULL, PRIMARY KEY (codigo))
                                                   ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT="tabela que irá conter o cadastro dos alunos";`;
    this.conexao.query(sql);
  }

  criarTabelaCursos() {
    const sql = `CREATE TABLE IF NOT EXISTS curso (id int(11) NOT NULL AUTO_INCREMENT,
                                                   descricao varchar(50) DEFAULT NULL,
                                                   ementa text, PRIMARY KEY (id))
                                                   ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT="Tabela que contém as informações dos Cursos";`;
    this.conexao.query(sql);
  }
  criarTabelasCursoAluno() {
    const sql = `CREATE TABLE IF NOT EXISTS curso_aluno (codigo int(11) NOT NULL,
                                                         codigo_aluno int(11) DEFAULT NULL, codigo_curso int(11) DEFAULT NULL,
                                                         PRIMARY KEY (codigo), KEY FK_curso_aluno_aluno (codigo_aluno),
                                                         KEY FK_curso_aluno_curso (codigo_curso),
                                                         CONSTRAINT FK_curso_aluno_aluno FOREIGN KEY (codigo_aluno) REFERENCES aluno (codigo),
                                                         CONSTRAINT FK_curso_aluno_curso FOREIGN KEY (codigo_curso) REFERENCES curso (id))
                                                         ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT="Tabela que iá conter os cursos que o aluno está matriculado";`;
    this.conexao.query(sql);
  }
}
module.exports = new Tabelas;

