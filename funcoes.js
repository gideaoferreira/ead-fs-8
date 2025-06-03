// Funções - São funções que podem ser reutilizadas em diferentes partes do código
// Parametros - São variáveis que são passadas para a função quando ela é chamada
// Retorno - É o valor que a função retorna após ser executada

function calcular(valor1, valor2) {
    return valor1 + valor2;
}

const users = [
    { name: 'João', isAdmin: true, age: 17 },
    { name: 'Maria', isAdmin: false, age: 25 },
    { name: 'Pedro', isAdmin: true, age: 28 },
];

function verificaSeEhAdmin(usuario) {
    if(usuario.isAdmin) {
        return true
    }
    return false;
}

function verificaSeEhMaior(usuario) {
    if(usuario.age >= 18) {
        return true
    }
    return false;
}


function imprimeMeuNome(nome = "Usuário", sobrenome = "Desconhecido", idade = 0) {	
    console.log("Meu nome é " + nome + " " + sobrenome + " e tenho " + idade + " anos.");
}

function boasVindas() {
    console.log(`Bem-vindo(a)!`);
}

// boasVindas();
// imprimeMeuNome()
// imprimeMeuNome("Ketlyn", "Silva", 30)
// imprimeMeuNome("João", "Souza")
// imprimeMeuNome("Maria", "Oliveira", 25)



function soma(n1, n2) {
    console.log(n1 + n2);
}

function subtracao(n1, n2) {
    console.log(n1 - n2);
}

function multiplicacao(n1, n2) {
    console.log(n1 * n2);
}

// Funções com retorno
function calc(n1, n2 = 3, operacao = "soma") {
    if (operacao === "soma") {
        soma(n1, n2);
        return;
    }
    
    if (operacao === "subtracao") {
        subtracao(n1, n2);
        return;
    } 
    
    if (operacao === "multiplicacao") {
        multiplicacao(n1, n2);
        return;
    }

    console.log("Operação inválida");
}


function getName() {
    return "João";
}

function age() {
    let age = 30.5;
}


function greeting(name, lastName) {
    const fullName = name + " " + lastName;
    `Olá, ${fullName}!`;
}

const saudacao = greeting();




let nome = "João";

function trocaNome(name) {
    if(nome === name) {
        nome = "Maria";
    }
}

trocaNome('joão');

console.log(nome);