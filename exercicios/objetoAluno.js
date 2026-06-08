const aluno = {
  nome: 'Gabriela',
  curso: 'Web Development',
  idade: 33,
  cidade: 'Porto Alegre',
};

console.log(
  `${aluno.nome} tem ${aluno.idade}, mora em ${aluno.cidade} e cursa ${aluno.curso}.`
);

module.exports = aluno;