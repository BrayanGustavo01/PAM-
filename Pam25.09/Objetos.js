// Objetos

var aluno1 = {
    matricula: 717347,
    nome: 'vittor',
    curso: 'Bootcamp front end',
    ativo: true
};

console.log(aluno1.nome);

aluno1.dataNascimento = '03/07/1985';
console.log(aluno1.dataNascimento);

delete aluno1.dataNascimento;

// Undefined e null

var x;
var y = null;

//arrays

var frutas = ['Banana' , 'laranja', 'Maçã'];

//alunos

var aluno2 = {
    matricula: 453986,
    nome: 'Gustavo Brayan',
    cpf:  '5648945679845',
    curso: 'Desenvolvimento de Sistemas',
    ativo: true
};

var aluno3 = {
    matricula: 875615456,
    nome: 'Gustavo Fernandes',
    cpf:  '9655418405',
    curso: 'Desenvolvimento de Sistemas',
    ativo: true
};

// imprimir aluno 2

console.log(aluno2.nome);

aluno2.dataNascimento = '19/08/2007';
console.log(aluno2.dataNascimento);
console.log(aluno2.matricula);
console.log(aluno2.cpf);

// imprimir aluno 3

console.log(aluno3.nome);

aluno2.dataNascimento = '29/10/2007';
console.log(aluno3.dataNascimento);
console.log(aluno3.matricula);
console.log(aluno3.cpf);