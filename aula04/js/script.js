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

/*var mariana = { //melhorar o codigo!!!!
    numero: 10,
    conta() {
        for (let i = 1; i <= this.numero; i++) {
            var conta = '';
            for (let j = 1; j <= i; j++) {
                conta = conta + `é ${j}, `;
            }
            console.log(`Mariana conta ${i}.`);
            if (i == 1)
                console.log(`Mariana conta 1: é 1, é 1, é!`);
            else
                console.log(`Mariana conta ${i}: ${conta}é!`);
            console.log(`Ana, viva a Mariana, viva a Mariana.\n\n`);
        }
    }
}

mariana.conta();*/

//Resolução Gildo
/*var mariana = {
    quantidade: 10,
    conta(){
        var letra = '';
        for (let i = 1; i < this.quantidade; i++) {
            letra+= `Mariana consta ${i}\n` + `Mariana conta ${i}:`;
            for (let j = 1; j <= i ; j++) {
                letra+= `é ${j}, `;
            }
            letra += `é!\n`;
            letra+= `Ana, viva a Mariana, viva a Mariana\n\n`            
        }
        console.log(letra);
    }
}
mariana.conta();*/
//Utilizando .toString()
/*var mariana = {
    quantidade: 10,
    conta() {
        var letra = '';
        var contagem = [];
        for (let i = 1; i <= this.quantidade; i++) {
            contagem.push(` é ${i}`);
            letra += `Mariana consta ${i}\n` + `Mariana conta ${i}:`;
            letra+= contagem;
            letra += `, é!\n`;
            letra += `Ana, viva a Mariana, viva a Mariana\n\n`
        }
        console.log(letra);
    }
}
console.log(mariana.conta());*/
// https://www.galinhapintadinha.com.br/musicas/letras/dvd-galinha-pintadinha-vol-1/mariana/

//While
/*var dados = [1,2,3,4,5,6]
console.log(dados);
while (dados.length>0){
    dados.pop();
    console.log(dados);
}*/

//Do while
/*var dados = [1,2,3,4,5,6]
console.log(dados);
var i = 6
do{
    dados.pop();
    console.log(dados);
} while (i>10)*/

//forEach

var dados = [1,2,3,4,5,6]
function ImprimirItem(item){
    console.log(item);
}
dados.forEach(ImprimirItem)
