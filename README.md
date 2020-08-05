# Projeto: VR Software (Teste)
### Current Version 0.0.1

## Sobre o projeto
Stacks utilizadas no Projeto Angular CLI, Node Js, MySql.

### Instalação / Configuração

- 1.  Realizar a instalação das Dependências do projeto.
- 1.2 Backend: Pasta /api configurar o arquivo ".env" que contêm as configurações do ambiente Porta[PORT], Banco de Dados: [DB_HOST, DB_USER, DB_PASS]
- 1.3 Abrir o terminal na pasta api executar o comando "npm start" *Será criado banco de dados e as tabelas necessárias para o projeto.

- 2.  Frontend: Configurar o arquivo de serviço responsavel por se comunicar com o backend: [\src\app\services\api.service.ts] Variável "apiUrl".
- 2.1 Abrir o terminal na pasta raiz do projeto executar o comando "ng serve" acessar no navegador o endereço "http://localhost:4200".

## Sobre o fluxo de utilização 

### Para Utilização deverá ter cadastrado cursos(Página Cursos) e alunos(Página Alunos), Na pagina home : 
- Cadastro e manutenção de Alunos  "/alunos";
- Cadastro e manutenção de Cursos  "/cursos";
- Visualização detalhada dos cursos cadastrados e seus respectivos alunos inscritos "/cursos/detalhes";
- Realização de Matricula de alunos nos cursos cadastrados "/home";
