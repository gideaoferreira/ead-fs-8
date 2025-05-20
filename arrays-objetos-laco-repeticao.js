const usuarios = [
    { nome: 'Lucas', idade: 25 },
    { nome: 'Ana', idade: 17 },
    { nome: 'João', idade: 60 },
    { nome: 'Maria', idade: 28 }
]

let inicializador = 0
let finalizador = usuarios.length

for(inicializador; inicializador < finalizador; inicializador++) {
    if (usuarios[inicializador].idade >= 18) {
        console.log(usuarios[inicializador].nome + ' é maior de idade')
    }
}