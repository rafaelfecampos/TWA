//OLHAR DEVELOPER MOZILLA JS

//Objeto
/*var aluno = {
    nome: "Joãzinho",
    nota: 8.0,
    matricula: 123456,
    frequencia: 0.9,
    aprovado() {
        return (this.nota >= 6.0 && this.frequencia >= 0.7) ? "aprovado!" : "reprovado!";
    }
};
console.log(`O ${aluno.nome} tem a nota ${aluno.nota} e foi ${aluno.aprovado()}`);


console.log(aluno);
aluno.telefone= "(32) 93232-3232";
console.log(aluno);*/

//arrays
/*var maria= {
    nome: "Maria",
    nota: 9.0,
    matricula: 7894,
    frequencia: 0.95
}
var joao={
    nome: "Joao",
    nota: 8.0,
    matricula: 123456,
    frequencia: 0.9,
}
var alunos = [joao, maria];

console.log(alunos);

var juca = {
    nome: "Juca",
    nota: 7.0,
    matricula: 654321,
    frequencia: 0.8,
}

alunos.push(juca); //adiciona objeto ao ultimo elemento do array
console.log(alunos);
//console.log(alunos.pop());// retira do final do array

console.log("Nome dos alunos: ");
for (let i = 0; i< alunos.length; i++){
    console.log('-'+alunos[i].nome);
}*/


//atividade
// Crie o objeto Mariana, que tem o atributo numero e o metodo conta
// O metodo conta deve contar até o valor de numero e exibir a letra
// da música

var mariana = { //melhorar o codigo!!!!
	numero: 10,
	conta(){
        for(let i = 1; i<=this.numero; i++){
            var conta = '';
            for(let j = 1; j<=i ; j++){
                conta = conta + `é ${j}, `;
            }
            console.log(`Mariana conta ${i}.`);
            console.log(`Mariana conta ${i}: ${conta}é!`);
            console.log(`Ana, viva a Mariana, viva a Mariana.`);
            console.log('');
        }
	}
}

mariana.conta();


// https://www.galinhapintadinha.com.br/musicas/letras/dvd-galinha-pintadinha-vol-1/mariana/