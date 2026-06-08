const aluno = require('./objetoAluno');

function apresentarAluno(aluno) {
  console.log(`A aluna ${aluno.nome} cursa ${aluno.curso}`);
}

apresentarAluno(aluno);
