const alunos = [
    { nome: 'Alice', nota: 7 },
    { nome: 'Bob', nota: 5 },
    { nome: 'Carlos', nota: 8 },
    { nome: 'Diana', nota: 6 },
    { nome: 'Eva', nota: 9 }
];

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);

console.log('Alunos aprovados:');
console.log(alunosAprovados);
