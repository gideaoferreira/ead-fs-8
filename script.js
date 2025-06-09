// O que é DOM?
// Document Object Model (DOM) é uma interface de
// programação para documentos HTML e XML.
// Ele representa a estrutura do documento como
// uma árvore de objetos, onde cada nó da árvore
// corresponde a uma parte do documento, como elementos,
// atributos e texto. O DOM permite que linguagens de
// programação, como JavaScript, acessem e manipulem
// conteúdo, a estrutura e o estilo dos documentos.

// document
// é um objeto global que representa o documento HTML

// document.querySelector
// é um método que retorna o primeiro elemento
// que corresponde ao seletor CSS/HTML fornecido.

// getElementById()
// Retorna o elemento com o ID especificado.
// const titleElement = document.getElementById('title');

// getElementsByClassName()
// Retorna uma coleção de elementos com a classe especificada.
// const paragraphs = document.getElementsByClassName('paragraph');

// getElementsByTagName()
// Retorna uma coleção de elementos com a tag especificada.
// const listItems = document.getElementsByTagName('input');
// Usando o elemento attribute para manipular atributos
// const inputName = listItems[0]
// inputName.getAttribute('class')
// listItems[0].setAttribute('placeholder', 'Novo Placeholder');
// listItems[0].removeAttribute('disabled');


// querySelector()
// Retorna o primeiro elemento que corresponde ao seletor CSS/HTML fornecido.
// const title = document.querySelector('#title');
// title.innerText = 'DOM - Document Object Model - Modificado';

// querySelectorAll()
// Retorna uma lista de todos os elementos que correspondem ao seletor CSS/HTML fornecido.
// const allParagraphs = document.querySelectorAll('.paragraph');

{/* <a href="">Link</a>	 */ }
// <img src="../caminho/da/imagem.png" alt="Texto alternativo"></img>
{/* <input
    name="name"
    type="button"
    class="input"
    id="input-name"
    disabled
></input> */}

// input é um elemento HTML
// Todo elemento HTML tem atributos

// document.getElementById
// Pega o elemento HTML com o ID especificado
const btnCollapseLayout = document.getElementById('collpse-layout');

// addEventListener
// Adiciona um evento ao elemento HTML
btnCollapseLayout.addEventListener('click', () => {
    // Pego o elemento HTML com a tag 'nav'
    const navMenu = document.getElementsByTagName('nav');
    // Extraio o primeiro elemento da coleção/"array"
    const nav = navMenu[0];
    
    // Pego o elemento HTML com a tag 'header'
    const headerEle = document.getElementsByTagName('header');
    // Extraio o primeiro elemento da coleção/"array"
    const header = headerEle[0];

    // Pego o elemento HTML com a tag 'main'
    const mainEle = document.getElementsByTagName('main');
    // Extraio o primeiro elemento da coleção/"array"
    const main = mainEle[0];

    // Forma 1 de adicionar/remover uma classe
    // if (nav.classList.contains('collapse')) {
    //     btnCollapseLayout.innerText = '<<';
    //     nav.removeAttribute('class');
    //     header.removeAttribute('class');
    //     main.removeAttribute('class');
    //     return;
    // }
    // if (!nav.classList.contains('collapse')) {
    //     btnCollapseLayout.innerText = '>>';
    //     nav.setAttribute('class', 'collapse');
    //     header.setAttribute('class', 'collapse');
    //     main.setAttribute('class', 'collapse');
    // }

    // Forma 2 de adicionar/remover uma classe
    // if (nav.classList.contains('collapse')) {
    //     btnCollapseLayout.innerText = '<<';
    //     nav.classList.remove('collapse');
    //     header.classList.remove('collapse');
    //     main.classList.remove('collapse');
    //     return;
    // }
    // if (!nav.classList.contains('collapse')) {
    //     btnCollapseLayout.innerText = '>>';
    //     nav.classList.add('collapse');
    //     header.classList.add('collapse');
    //     main.classList.add('collapse');
    // }

    nav.classList.toggle('collapse');
    header.classList.toggle('collapse');
    main.classList.toggle('collapse');

    if (nav.classList.contains('collapse')) {
        btnCollapseLayout.innerText = '>>';
    }

    if (!nav.classList.contains('collapse')) {
        btnCollapseLayout.innerText = '<<';
    }
})

const paragraphsEle = document.getElementsByTagName('p');
const paragraphs = paragraphsEle[0]
console.log(paragraphs.classList.remove('description'));
console.log(paragraphs.classList);