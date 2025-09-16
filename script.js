/* Exercício 1: Variáveis e Operadores:
Crie um programa que some duas variáveis:
Imprima o valor da soma no console.*/

let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));
let soma = numero1 + numero2;
console.log(soma);


/* Exercício 2: Arrays:
Crie um array chamado frutas com os seguintes itens: "Maçã", "Banana", "Morango", "Uva".
Acesse e imprima no console o segundo item do array ("Banana").*/


let frutas = ["Maçã", "Banana", "Morango", "Uva"];
console.log(frutas[1]);


/*Exercício 3: Objetos:
Crie um objeto chamado livro com as seguintes propriedades:
titulo: "O Senhor dos Anéis"
autor: "J.R.R. Tolkien"
ano: 1954
Acesse e imprima no console o valor da propriedade titulo.
Imprima o objeto livro completo no console para ver todas as propriedades.*/


let livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954
};

console.log(livro.titulo);

console.log(livro);



/*Exercício 4: Condicionais (if/else):
Crie um programa que verifique a idade de uma pessoa.
Crie uma variável idade e atribua a ela um valor numérico.
Use uma estrutura if/else para verificar a condição:
Se a idade for maior ou igual a 18, imprima "Você é maior de idade." no console.
Caso contrário, imprima "Você é menor de idade.".
Dica: O operador de comparação >= é útil para este exercício. */

let idade = Number(prompt("DIgite a sua idade:"));

if (idade <= 17) {
    console.log("Você é menor de idade!!");
} else {
    console.log("Você é maior de idade!");
}



/*Exercício 5: Condicionais (switch case):
Crie um programa que, baseado em uma variável de diaDaSemana, imprima uma mensagem diferente para cada dia.
Crie uma variável diaDaSemana e atribua um número a ela (de 1 a 7, onde 1 é segunda-feira, 2 é terça-feira e assim por diante).
Use uma estrutura switch para verificar o valor da variável.
Crie casos para os dias 1, 2 e 3, imprimindo "É segunda-feira.", "É terça-feira." e "É quarta-feira."respectivamente.
Adicione um default para qualquer outro valor, imprimindo "É outro dia da semana.".
Dica: Não se esqueça da palavra-chave break em cada case para evitar que a execução continue para o próximo caso.*/


let diaDaSemana = Number(prompt("Digite o dia da semana: (1 a 7)"));

switch (diaDaSemana) {
    case 1:
        console.log("O dia da semana é Domingo.");
        break;
    case 2:
        console.log("O dia da semana é Segunda.");
        break
    case 3:
        console.log("O dia da semana é Terça.");
        break;
    case 4:
        console.log("O dia da semana é Quarta.");
        break;
    case 5:
        console.log("O dia da semana é Quinta.");
        break;
    case 6:
        console.log("O dia da semana é Sexta.");
        break;
    case 7:
        console.log("O dia da semana é Sábado.");
        break;
    default:
        console.log("Numero inválido.");
}