// Desestruturação e Spread

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

const [first, second, third, ...otherElements] = numbers

// console.log(first);
// console.log(second);
// console.log(third);
// console.log(otherElements);

// const fullStack = [
//   ['HTML', 'CSS', 'JS', 'React'],
//   ['Node', 'Express', 'MongoDB']
// ]

// const [front, back] = fullStack

// console.log(front);
// console.log(back);


const retangle = {
  width: 20,
  height: 10,
}

const { width: w, ...rest } = retangle

// console.log(w);
// console.log(rest);



function showPersonInfo({ firstName, lastName, languages }) {
  console.log(`Nome: ${firstName}, Sobrenome: ${lastName}, lingugagens: ${languages}`);
}

 const person = {
  firstName: 'Luiz',
  lastName: 'Alberto',
  languages: ['Portuguese', 'English', 'Spanish']
}

showPersonInfo(person)


const original = [
  { name: 'Ana' }
]

const copy = [...original]  // shallow copy

// cloneStructure()

copy[0].name = 'Julia'

console.log(copy);
console.log(original);
