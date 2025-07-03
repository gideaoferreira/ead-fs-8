# NPM - Node Package Manager

NPM é o gerenciador de pacotes padrão para o Node.js, utilizado para instalar, atualizar e gerenciar bibliotecas e dependências de projetos JavaScript.

## Instalação

Para instalar o NPM, você precisa ter o Node.js instalado em seu sistema. O NPM é instalado automaticamente junto com o Node.js.

## Instalação do Node.js no Windows

1. Baixe o instalador do Node.js no site oficial: [Node.js Downloads](https://nodejs.org/en/download/).
2. Execute o instalador e siga as instruções na tela.
3. Durante a instalação, certifique-se de marcar a opção para instalar o NPM.
4. Adiciona o Node.js ao PATH do sistema para que você possa executá-lo a partir do terminal.
5. Adicionar o npm ao PATH do sistema para que você possa executá-lo a partir do terminal.

## Instalação do Node.js no Linux

1. Abra o terminal.
2. Execute o seguinte comando para instalar o Node.js e o NPM:
   ```bash
   sudo apt update
   sudo apt install nodejs
   ```
3. Verifique a instalação do Node.js e do NPM:
   ```bash
   node -v
   npm -v
   ```

# Comandos Básicos do NPM

## Inicializar um Projeto

Para iniciar um novo projeto Node.js e criar um arquivo `package.json`, execute o seguinte comando

```bash
npm init
```

Você será guiado por uma série de perguntas para configurar o projeto. Se quiser pular as perguntas, você pode usar `npm init -y` para criar um `package.json` com as configurações padrão.

## Instalar Pacotes

Para instalar um pacote, use o seguinte comando:

```bash
npm install <nome-do-pacote>
```

Para instalar um pacote como dependência de desenvolvimento, use:

```bash
npm install <nome-do-pacote> --save-dev
```

Para instalar um pacote globalmente, use:

```bash
npm install -g <nome-do-pacote>
```

## Atualizar Pacotes

Para atualizar um pacote específico, use:

```bash
npm update <nome-do-pacote>
```

Para atualizar todos os pacotes do projeto, use:

```bash
npm update
```

## Remover Pacotes

Para remover um pacote, use o seguinte comando:

```bash
npm uninstall <nome-do-pacote>
```

Para remover um pacote globalmente, use:

```bash
npm uninstall -g <nome-do-pacote>
```

## Listar Pacotes Instalados

Para listar todos os pacotes instalados no projeto, use:

```bash
npm list
```

Para listar pacotes instalados globalmente, use:

```bash
npm list -g --depth=0
```

## Verificar Dependências

Para verificar as dependências do projeto e suas versões, use:

```bash
npm outdated
```

## Executar Scripts

Para executar scripts definidos no `package.json`, use:

```bash
npm run <nome-do-script>
```

## Verificar Versão do NPM

Para verificar a versão do NPM instalada, use:

```bash
npm -v
```

## Limpar Cache

Para limpar o cache do NPM, use:

```bash
npm cache clean --force
```

# Criando um projeto React com NPM

Para criar um projeto React usando NPM, você pode seguir os seguintes passos:

```bash
npm create vite@latest nome-do-projeto -- --template react
```
