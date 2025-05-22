// String Methods(Funções para manipular strings)
// string.length retorna o tamanho da string
const str = 'Hello World';
console.log(str);
console.log(str.length);

// string.toUpperCase() retorna a string em maiúsculas
const str2 = 'hello world';
console.log("toUpperCase", str2);
console.log(str2.toUpperCase());

// string.toLowerCase() retorna a string em minúsculas
const str3 = 'Hello World';
console.log("toLowerCase", str3);
console.log(str3.toLowerCase());

// string.charAt(index) retorna o caractere na posição index
const str4 = 'Hello World';
console.log("charAt", str4);
console.log(str4.charAt(0));

// string.includes(substring) retorna true se a substring estiver contida na string
const str5 = 'Hello World';
console.log("includes", str5);
console.log(str5.toLowerCase().includes('hello'));

// string.startsWith(substring) retorna true se a string começar com a substring
const str6 = 'Hello World';
console.log("startsWith", str6);
console.log(str6.startsWith('He'));

// string.endsWith(substring) retorna true se a string terminar com a substring
const str7 = 'contato@gideaoferreira.gov.br'; 
console.log("endsWith", str7);
console.log(str7.endsWith('.gov.br'));

// string.trim() remove os espaços em branco do início e do fim da string
const str8 = '   Hello World   ';
console.log("trim", str8);
console.log(str8.trim());

// string.slice(start, end) retorna uma parte da string entre os índices start e end
const str9 = '8598899889';
console.log("slice", str9);
console.log("*****", str9.slice(6, str9.length));

// string.split(separator) divide a string em um array de substrings usando o separador
const str10 = 'Hello World Gideão-Ferreira';
console.log("split", str10);
console.log(str10.split(''));