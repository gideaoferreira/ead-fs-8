# localStorage

O `localStorage` é uma forma de armazenar dados no navegador do usuário. Ele permite que você armazene pares chave-valor, onde tanto a chave quanto o valor são strings.

# JSON.stringify()

É um método que converte um objeto JavaScript em uma string JSON.
É útil para armazenar dados em localStorage, pois localStorage só aceita strings.

# JSON.parse()

É um método que converte uma string JSON de volta em um objeto JavaScript.

# localStorage.setItem()

O método `setItem` é usado para armazenar um item no `localStorage`. Ele recebe dois argumentos: a chave e o valor.
Use `JSON.stringify()` para converter objetos em strings antes de armazená-los.

Exemplo:
localStorage.setItem('user', JSON.stringify({ nome: 'João', idade: 30 }));

# localStorage.getItem()

O método `getItem` é usado para recuperar um item do `localStorage`. Ele recebe a chave como argumento e retorna o valor associado a essa chave.

Exemplo:
const user = JSON.parse(localStorage.getItem('user'));
