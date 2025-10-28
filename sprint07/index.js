// Numeros e operações
// +, -, /, *

// console.log((1 + 4) / 2);

// console.log(2 ** 3); // 2 * 2 * 2
// console.log(5 % 2);

// Tipos primitios de dados

// 1. Numbers
// 2. Strings

// console.log("Hello 12");
// console.log("Java" + "Script");
// console.log(10 + "20");

// 3. Booleanos
// true ou false

// VARIAVEIS
// var x let x const
// hoisting

// var idade = 20;
// idade = 22;

const idadeConst = 30;

// console.log(idadeLet);

// console.log(`Tenho ${idadeLet + 10} anos`); // template literals

// Condicionais e operadores de comparação
//   >, >=, <, <=

// console.log(10 >= 10);

let idadeLet = 10;

// if (idadeLet > 18) {
//   console.log("Maior de idade");
// } else if (idadeLet > 15) {
//   console.log("Entre 15 e 18");
// } else {
//   console.log("Menor de idade");
// }

// == (valor)       === (valor e tipo)

// console.log(10 != "10");
// console.log(10 !== 10);

// AND &&       OR ||

if (idadeLet > 11 || idadeLet < 15) {
  // console.log("entrei");
}

// ARRAY (VETOR)
const frutas = ["maça", "manga", "abacate"];
// INDEX     -     0  ,    1   ,    2

// console.log(frutas.length);

frutas[0] = "melao";
frutas[frutas.length] = "laranja";

// console.log(frutas);

// LAÇOS DE REPETIÇÃO - LOOPS - iterator
// 1. for loop
// 2. while
// 3. do while

// console.log(0);
// console.log(1);
// console.log(2);

for (let i = 0; i <= 100; i++) {
  // console.log(i);
}

const pessoas = [
  {
    name: "Gustavo",
    city: "SP",
  },
  {
    name: "Gustavo 3",
    city: "SP",
  },
  {
    name: "Gustavo 2",
    city: "SP",
  },
];

for (let i = 0; i < pessoas.length; i++) {
  // console.log(pessoas[i]);
}

// WHILE - enquanto

let iWhile = 0;
while (iWhile <= 100) {
  // console.log(iWhile);
  iWhile++;
}

// Funçoes

function calculaMedia(prova1, prova2) {
  const media = (prova1 + prova2) / 2;
  console.log(media);

  if (true) {
    return;
  } else {
  }
}

const media1 = calculaMedia(7, 6);
console.log(media1);

// Objetos
const user = {
  nome: "Gustavo",
  idade: 27,
  eProgramador: true,
};

console.log(user.idade);

user.idade = 30;

console.log(user.idade);
user.nome = "dsaoidjsaio";

user.sobrenome = "Polonio";
console.log(user);

const users = [
  {
    nome: "Gustavo 1",
    idade: 27,
    eProgramador: true,
  },
  {
    nome: "Gustavo 2",
    idade: 27,
    eProgramador: true,
  },
];

// DOM - Document Object Model
// const title = document.getElementById("title");
// console.log(title);

// const title = Array.from(document.getElementsByClassName("title-class"));
// console.log(title);

// Array.from(document.getElementsByTagName("h1"))

// const botao2 = document.querySelector(".botao.botao2");
// botao2.type = "submit";

// botao2.classList.add("botao3");
// botao2.classList.remove("botao");
// botao2.classList.toggle("botao2");

// const section = document.querySelector(".section");

// section.innerHTML = `
//   <h2>Titulo secundario</h2>
//   <div></div>
// `;

// section.insertAdjacentHTML("afterbegin", "<h2>Titulo secundario</h2>");

const h3 = document.querySelector("h3");
h3.textContent = "Novo texto";

// Event listeners
const botao2 = document.querySelector(".botao.botao2");
botao2.addEventListener("click", function () {
  console.log("Botao clicaldo");
});

const form = document.querySelector("form");

function handleFormSubmit(event) {
  event.preventDefault();
  console.log("forms enviado");
}

form.addEventListener("submit", handleFormSubmit);

// Depurando erros
// Sintaxe
const array = [];

// Referencia
// console.log(testtttt);

// Tipo
let number = 10;
