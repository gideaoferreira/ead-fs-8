// Operadores logicos
// AND (&&) - OR (||) - NOT (!)

let usuario = 'comum';
let temToken = true;

if((usuario === 'admin' || usuario === 'editor') && temToken === true) {
    console.log('Usuario autorizado');
}

