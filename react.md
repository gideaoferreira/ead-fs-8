# Criando um projeto

- npm create vite@lates nome-do-projeto -- --template react
- Siga o passoa a passo que irá aparecer em tela/terminal

# Instalando o Bootstrap e PopperJs

- npm i bootstrap
- npm i @popperjs/core
- no arquivo main.jsx adicione nas primeiras linha

```js
import "bootstrap";
```

- crie um arquivo main.css e adicione o css do bootstrap conforme abaixo

```css
@import "bootstrap/dist/css/bootstrap.min.css";
```

# Instalando React Router

- No terminal execute o comando abaixo

```bash
npm i react-router
```

- Crie as rotas do seu projeto adicionado o caminha/path e qual o componente deve ser exibido quando acessar essa rota.

```js
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
```

# Array methods como ferramentas para loops

- Array.map
