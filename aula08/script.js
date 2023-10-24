// function Aluno (nome, matricula){
//     this.nome = nome
//     this.matricula = matricula;
// }

// const juquinha = new Aluno("Juquinha","123456");
// const zezinho = Object.create(juquinha);

// zezinho.nome = "zezinho";

// console.log(juquinha.constructor);
// console.log(zezinho.constructor);

function Aluno(nome, matricula){
    this.nome=nome;
    this.matricula = matricula;
}

Aluno.prototype.digaOi = function (){
    console.log(`Ola eu sou o(a) ${this.nome}`);
}

const zezinho = new Aluno("Zezinho", "123456");

zezinho.digaOi();