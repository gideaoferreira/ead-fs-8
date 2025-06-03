// numeber.toFixed()
const number = 123.456789;
console.log(number)
console.log("To Fixed", number.toFixed(3));

// currency.toLocaleString()
const currency = 123.456789;
console.log(currency)
console.log("Converter para moeda local", currency.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));

// number.max()
const numbers = [1, 21, 3, 4, 5];
console.log("Maior número", Math.max(...numbers));

// minNumbers.min()
const minNumbers = [1, 21, 3, 4, 5];
console.log("Maior número", Math.min(...minNumbers));