// Array Methods
// O que são os métodos de array?
// Os métodos de array são funções que permitem manipular arrays
// de forma mais fácil e eficiente.
// Eles são métodos embutidos em JavaScript que podem ser usados
// para adicionar, remover, transformar e iterar sobre os elementos de um array.

// array.push()
// O método push() adiciona um ou mais elementos ao final de um array
const numbers = [1, 2, 3];
numbers.push(8)
numbers.push(5)
console.log("push", numbers);

// array.pop()
// O método pop() remove o último elemento de um array
const numbers2 = [1, 2, 3];
numbers2.pop()
console.log("pop", numbers2);

// array.unshift()
// O método unshift() adiciona um ou mais elementos ao início de um array
const numbers3 = [1, 2, 3];
numbers3.unshift(10)
console.log("unshift", numbers3);

// array.shift()
// O método shift() remove o primeiro elemento de um array
const numbers4 = [1, 2, 3];
numbers4.shift()
console.log("shift", numbers4);

// array.map()
// O método map() cria um novo array com os resultados da chamada
const numbers5 = [1, 2, 3];
const numbers6 = numbers5.map((number) => number * 2);
console.log("map", numbers6);

// array.filter()
// O método filter() cria um novo array com todos os elementos
// que passam no teste implementado
const numbers7 = [1, 2, 3, 4, 5];
const numbers8 = numbers7.filter((number) => number % 2 === 0);
console.log("filter", numbers8);

// array.find()
// O método find() retorna o valor do primeiro elemento
// que satisfaz a função de teste fornecida
const numbers9 = [1, 2, 3, 4, 5];
const number10 = numbers9.find((number) => number >= 3);
console.log("find", number10);

// array.indexOf()
// O método indexOf() retorna o primeiro índice em que um
// determinado elemento pode ser encontrado no array
const numbers11 = [1, 2, 3, 4, 5];
const index = numbers11.indexOf(3);
console.log("indexOf", index);

// array.includes()
// O método includes() determina se um array contém um determinado elemento
const numbers12 = [1, 2, 3, 4, 5];
const includes = numbers12.includes(3);
console.log("includes", includes);

// array.some()
// O método some() testa se pelo menos um elemento no array
// passa no teste implementado pela função fornecida
const numbers13 = [1, 2, 3, 4, 5];
const some = numbers13.some((number) => number > 3);
console.log("some", some);

// array.every()
// O método every() testa se todos os elementos no array
// passam no teste implementado pela função fornecida
const numbers14 = [1, 2, 3, 4, 5];
const every = numbers14.every((number) => number > 0);
console.log("every", every);

// array.findIndex()
// O método findIndex() retorna o índice do primeiro elemento
// que satisfaz a função de teste fornecida
const numbers15 = [1, 2, 3, 4, 5];
const findIndex = numbers15.findIndex((number) => number % 2 === 0);
console.log("findIndex", findIndex);
