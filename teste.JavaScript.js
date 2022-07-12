
/* // Tipo Number
const Meunumero = 3;

const Primerionumero = 5;
const SegundoNumero = 10;

const PrimeiraOperacao = Primerionumero / SegundoNumero;

// console.log(PrimeiraOperacao)


// Tipo Flutuante

const NumeroTipoFlutuante = 5.5;

const NumeroTipoFlutuanteSemZero = .5;

const NovaOperacao = NumeroTipoFlutuante / NumeroTipoFlutuanteSemZero;

// console.log(NovaOperacao)


// Tipe String

const texto1 = "Olá, Mundo!";
const texto2 =  'Olá, Mundo2!';
const senha = "senhaSuperSegura123!";
const StringDeNumeros = "123456";

const citacao = 'O Alesson disse "oi"';
const citacao2 = "A Karol Respondeu 'olá'";
console.log(citacao)
console.log(citacao2)

const citacao3 = "Meu nome é ";
const MeuNome = "Alesson!";
console.log(citacao3 + MeuNome)

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const cidade = "belo horizonte";
const input = "Belo Horizonte"; 

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres */

// Boolean
// True -> verdadeiro
// false -> falso

/*const primeiroNumero = 5;
const segundoNumero = 5;
let cadastroAtivo = true;

//console.log(primeiroNumero === segundoNumero)

const texto1 = "Alura";
const texto2 = "Alure";
const texto3 = "Alura";

console.log(texto1 === texto2)
console.log(texto1 === texto3)*/

//var 

//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento;
//console.log(area)
//var area;

/* let forma = 'retangulo'
let altura = 5;
let comprimento = 7;
let area;

if (forma === 'retangulo') {
    area = altura * comprimento;
}else {
    area = (altura * comprimento) / 2;
}

console.log(area)*/

/* const forma = 'quadrado';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
    area = altura * comprimento;
}else {
    area = altura * comprimento;
}


console.log(area)*/


// boolean
const usuarioLogado = true;
const contaPaga = false;

// "truthy ou falsy"

// valores que o JavaScript pode considerar como false
 
// 0 => false
// 1 => true

/*console.log(0 == false)
console.log("" == false)
console.log(1 == true)*/

// undfined

// null ==> vazio ou nada

let minhaVar;
let varNull = null;

console.log(minhaVar)
console.log(varNull)

let numero = 3;
let texto = "Alura";
//typeof é uma palavra chave para perguntarmos para o javascript qual tipo de dado que esta sendo guardado nessa variavel

console.log(typeof minhaVar)
console.log(typeof varNull)

// null é um objeto