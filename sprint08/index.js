// // // Tipos variaveis
// // // var x let x const

// // // Tipos de dados
// // // objetos

// // const a = [];

// // // primitivos: undefined  x  null

// // // Fluxo de login
// // let usuario;

// // if (usuario === undefined) {
// //   console.log("Carergando dados...");
// // } else if (usuario === null) {
// //   console.log("Usuario nao logado");
// // } else {
// //   console.log("Logado!!!");
// // }

// // // Metodos pra manipoular Strings
// // const username = "Gustavo";

// // console.log(username.toLowerCase());

// // const input = "     camiseta longa   ";
// // console.log(input.includes("camie"));

// // const text = "Eu gosto de java";
// // text.replace("java", "javascript");
// // console.log(text.replace("java", "javascript"));

// // // Metodos pra manipoular Numeros
// // const number = 9.99;
// // console.log(Math.floor(number));
// // console.log(Math.ceil(number));
// // console.log(Math.round(number));

// // // const numbers = [1, 5, 2, 40];
// // console.log(Math.max(1, 5, 2, 40));
// // console.log(Math.min(1, 5, 2, 40));

// // // Math.random() // 0 e 0.99999999999999999999999999999999

// // Math.random() * 7; // 0 e 6.999999

// // console.log(Math.floor(Math.random() * 7));

// // const age = "abc";
// // // const ageNumber = Number(age);

// // console.log(age + age);

// // // NaN -> not a number

// // // Operadores logicos
// // // NOT -   !

// // const isLoggedIn = false;
// // const isAdmin = false;

// // if (!isLoggedIn) {
// //   // Redirecionar para homepage
// // }

// // // AND - &&
// // if (!isLoggedIn && !isAdmin) {
// //   // nao permitir acessar o admin
// // }

// // // OR -  ||
// // const semEstoque = false;
// // const entregaSuspensa = true;
// // if (semEstoque || entregaSuspensa) {
// //   // Nao posso vender
// // } else {
// // }

// // // Arrays, vetores
// // // for loop, while
// // // for (let i = 0 ...)

// // // produtos.push({
// // //   nome: "Bone",
// // //   preco: 40,
// // });

// // produtos.pop();

// // console.log(produtos);

// // forEach()
// // fç callback -
// // for (let i = 0; i < produtos.length; i++) {
// //   const produto = produtos[i]
// // }

// const produtos = [
//   { nome: "Camiseta", preco: 50 },
//   { nome: "Tênis 1", preco: 200 },
//   { nome: "Tênis 2", preco: 300 },
//   { nome: "Camiseta", preco: 250 },
// ];

// const returnForEach = produtos.forEach(function (produto, i) {
//   console.log(`${produto.nome} tem preço de ${produto.preco}`);
// });
// // console.log(returnForEach);

// // map()
// const produtosComDesconto = produtos.map(function (produto) {
//   return {
//     nome: produto.nome,
//     preco: produto.preco * 0.9,
//   };
// });
// // console.log(produtosComDesconto);

// // find
// const camiseta = produtos.find(function (produto) {
//   const ehCamiseta = produto.nome.toLowerCase() === "bone";
//   return ehCamiseta;
// });
// // console.log(camiseta);

// // filter
// const produtosAbaixoDeCem = produtos.filter(function (produto) {
//   const ehMenorCem = produto.preco <= 100;
//   return ehMenorCem;
// });
// console.log(produtosAbaixoDeCem);
// reduce

// Funçoes

// Escopo =   global  x  local

// const age = 20;

// function devolveIdade() {
//   console.log(age);
// }

// arrow function
// const logAge = (age) => {
//   return age;
// };

// logAge();

// const profileEditButton = docum

// function openModal() {}

// profileEditButton.addEventListener("click", () => {
//   popup.style.display = "flex";
// });

// const produtos = [
//   { nome: "Camiseta", preco: 50 },
//   { nome: "Tênis 1", preco: 200 },
//   { nome: "Tênis 2", preco: 300 },
//   { nome: "Camiseta", preco: 250 },
// ];

// produtos.forEach(function (produto, i) {
//   console.log(`${produto.nome} tem preço de ${produto.preco}`);
// });

// produtos.forEach((produto) => {
//   console.log(`${produto.nome} tem preço de ${produto.preco}`);
// });

// console.log(returnForEach);

// DOM
// innerHTML    insertAdjacentHTML

// const title = document.createElement("h1");
// title.textContent = "Tituloooo";
// console.log(title);

// const subtitle = document.createElement("h2");
// subtitle.textContent = "Subtitulo";

// document.body.prepend(title, subtitle);

// document.querySelector("span").remove();

// const removeButtons = document.querySelectorAll(".remove-button");

// removeButtons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     e.target.closest("li").remove();
//   });
// });

const items = [
  {
    title: "Item 1",
  },
  {
    title: "Item 2",
  },
  {
    title: "Item 3",
  },
];

const itemTemplate = document.querySelector("#item-template").content;

items.forEach((item) => {
  const li = itemTemplate.querySelector("li").cloneNode(true);

  const span = li.querySelector("span");
  span.textContent = item.title;

  const button = li.querySelector(".remove-button");
  button.addEventListener("click", () => {
    li.remove();
  });

  document.querySelector("ul").append(li);
});

// <li>
//   <span>Item 2</span>
//   <button class="remove-button">Remove</button>
// </li>

items.forEach((item) => {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = item.title;

  const button = document.createElement("button");
  button.textContent = "Remove";
  button.classList.add("remove-button");

  li.append(span, button);

  document.querySelector("ul").append(li);
});
