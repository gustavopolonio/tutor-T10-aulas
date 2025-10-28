// // objeto

// // const keys = ["brand", "year", "owner"]

// // keys.forEach(key => {
// //   const car = {}
// //   car[key] = ...
// // })

// const car = {
//   brand: "Toyota",
//   year: 2022,
//   owner: {
//     name: "Joao",
//     age: 28,
//   },
// };

// // Referência - ponteiro
// const car2 = {
//   brand: "Toyota",
//   year: 2022,
//   owner: {
//     name: "Joao",
//     age: 28,
//   },
// };

// // car.color = "azul";

// // console.log(car);
// // console.log(car2);

// console.log(car === car2);

// const ob1 = {};
// const ob2 = {};

// console.log(ob1 === ob2);

// Manipulação de eventos

// Teclado
// keydown , keypress (ctrl, shift, alt)
// document.addEventListener("keyup", (e) => {
//   console.log(e.key);
// });

// input
// const input = document.querySelector("input");
// const button = document.querySelector("button");

// function handleEscPress(e) {
//   console.log(e.key);

//   if (e.key === "Escape") {
//     input.style.display = "none";
//     document.removeEventListener("keydown", handleEscPress);
//   }
// }

// button.addEventListener("click", () => {
//   input.style.display = "flex";

//   document.addEventListener("keydown", handleEscPress);
// });

// // input.addEventListener("input", (e) => {
// //   console.log(e.target.value);
// // });
// // debounce

// const buttons = document.querySelectorAll(".close");  // 3

// buttons.forEach((button) => button.addEventListener("click", closePopup()));

// Delegação de eventos

// const ul = document.querySelector("ul");

// for (let i = 0; i < 200; i++) {
//   const li = document.createElement("li");
//   li.textContent = `item: ${i}`;

//   const removeBtn = document.createElement("button");
//   removeBtn.textContent = "Remover item";
//   removeBtn.classList.add("remove");

//   // removeBtn.addEventListener("click", () => {
//   //   li.remove();
//   // });

//   li.append(removeBtn);
//   ul.append(li);
// }

// ul.addEventListener("click", (e) => {
//   console.log(e.target);
//   if (e.target.classList.contains("remove")) {
//     const li = e.target.closest("li");
//     li.remove();
//   }
// });

// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   // console.log(form.elements);
//   // document.forms

//   // const usernameInput = form.elements.username;
//   const usernameInput = document.querySelector("input[name='username']");
//   const ageInput = document.querySelector("input[name='age']");

//   console.log(usernameInput.value);
//   console.log(ageInput.value);
// });

// Crio variaveis (elementos html)
// const inputList = document.querySelectorAll(".form__input");

function hideInputError(input, errorMessage, inputErrorClass, errorClass) {
  input.classList.remove(inputErrorClass);

  errorMessage.classList.remove(errorClass);
}

function showInputError(input, errorMessage, inputErrorClass, errorClass) {
  input.classList.add(inputErrorClass);

  errorMessage.classList.add(errorClass);
  errorMessage.textContent = input.validationMessage;
}

function checkIfInputIsValid(input, inputErrorClass, errorClass) {
  const isValid = input.validity.valid; // booleano
  // const errorMessage = input.nextElementSibling;
  const errorMessage = document.querySelector(`#${input.name}-error`);

  if (isValid) {
    hideInputError(input, errorMessage, inputErrorClass, errorClass);
  } else {
    showInputError(input, errorMessage, inputErrorClass, errorClass);
  }
}

function hasInvalidInput(inputList) {
  const hasInvalidInput = inputList.some((input) => !input.validity.valid);
  return hasInvalidInput;
}

function toggleSubmitButtonState(
  inputList,
  submitButtonElement,
  inactiveButtonClass
) {
  if (hasInvalidInput(inputList)) {
    submitButtonElement.disabled = true;
    submitButtonElement.classList.add(inactiveButtonClass);
  } else {
    submitButtonElement.disabled = false;
    submitButtonElement.classList.remove(inactiveButtonClass);
  }
}

function enableValidation({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass,
}) {
  const formElement = document.querySelector(formSelector);
  const inputList = Array.from(formElement.querySelectorAll(inputSelector)); // nodeList
  const submitButtonElement = formElement.querySelector(submitButtonSelector);

  inputList.forEach((input) => {
    input.addEventListener("input", () => {
      checkIfInputIsValid(input, inputErrorClass, errorClass);
      toggleSubmitButtonState(
        inputList,
        submitButtonElement,
        inactiveButtonClass
      );
    });
  });
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit-error",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_visible",
});
