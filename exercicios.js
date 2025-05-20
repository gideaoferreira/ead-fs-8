//  Exercício 8 – Calcular a média das idades
let usuarios = [
    { nome: 'Lucas', idade: 25 },
    { nome: 'Ana', idade: 17 },
    { nome: 'João', idade: 60 },
    { nome: 'Maria', idade: 28 },
    { nome: 'Pedro', idade: 30 },
    { nome: 'Carla', idade: 22 },
    { nome: 'Fernanda', idade: 19 },
    { nome: 'Ricardo', idade: 35 },
    { nome: 'Juliana', idade: 27 },
    { nome: 'Roberto', idade: 40 },
    { nome: 'novo', idade: 43}
]

let somaIdades = 0;

for (let i = 0; i < usuarios.length; i++) {
    somaIdades = somaIdades + usuarios[i].idade;
}

let mediaIdades = somaIdades / usuarios.length

// console.log(mediaIdades)

// Achar o número par
let numeros = [1, 3, 4, 5, 33, 7, 87, 93, 101]

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        console.log("O número " + numeros[i] + " é par")
    }
}

// Somar todos os número ímpares
let numerosImpares = [1, 3, 4, 5, 33, 7, 87, 93, 101, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33]
let somaImpares = 0
let totalDeNimpares = 0

for (let i = 0; i < numerosImpares.length; i++){
    if (numerosImpares[i] % 2 != 0 && numerosImpares[i] > 10 && numerosImpares[i] < 100) {
        somaImpares = somaImpares + numerosImpares[i]
        totalDeNimpares++
    }
}

console.log("A soma dos números ímpares é: " + somaImpares)
console.log("Total de n ímpares: " + totalDeNimpares)
console.log("Média dos n ímpares: " + somaIdades/totalDeNimpares)
