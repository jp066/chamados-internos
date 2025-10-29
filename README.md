# GEMINI.md - Projeto: Chamados Internos BrightBee

## Visão Geral do Projeto

Este projeto é um sistema de gerenciamento de chamados internos chamado "Chamados Internos BrightBee". É uma aplicação web de página única (SPA) construída com **React**. O objetivo principal da aplicação é permitir que funcionários autorizados visualizem, gerenciem e resolvam chamados de suporte interno.

**Principais Tecnologias:**

*   **Frontend:** React 19, `react-router-dom` para roteamento.
*   **Backend & Banco de Dados:** Google Firebase, especificamente **Firestore** para o banco de dados e **Firebase Authentication** para login de usuários via Google.
*   **Estilização:** **Tailwind CSS** é o principal framework de estilização, com um tema customizado definido em `tailwind.config.js`. Também utiliza bibliotecas como `flowbite-react` e `@material-tailwind/react`.
*   **Deploy:** A aplicação está configurada for para deploy contínuo no **Firebase Hosting** através do GitHub Actions.

**Arquitetura:**

A aplicação segue uma arquitetura baseada em componentes. O estado global, como a autenticação do usuário e o modo escuro, é gerenciado através da Context API do React (`LoginContext.jsx`, `DarkModeContext.jsx`). Todas as interações com o banco de dados Firestore são encapsuladas no módulo `src/services/firestoreService.js`, que atua como uma camada de serviço. O ponto de entrada principal da aplicação é o `src/App.jsx`, que configura o roteamento definido em `src/routes.jsx`.

## Compilando e Executando

O projeto utiliza o `npm` como gerenciador de pacotes. Os comandos principais estão definidos no `package.json`.

*   **Instalar Dependências:**
    ```bash
    npm install
    ```
    *(Nota: O fluxo de CI/CD utiliza `npm ci` para instalações mais limpas em um ambiente de integração contínua.)*

*   **Executar Servidor de Desenvolvimento:**
    ```bash
    npm start
    ```
    Isso iniciará a aplicação em `http://localhost:3000`.

*   **Compilar para Produção:**
    ```bash
    npm run build
    ```
    Este comando cria uma build de produção no diretório `build/`.

*   **Executar Testes:**
    ```bash
    npm test
    ```
    Isso executa a suíte de testes usando Jest e React Testing Library.

*   **Deploy:**
    O deploy é automatizado. Um push para a branch `main` aciona uma GitHub Action que compila e implanta a aplicação no Firebase Hosting. O deploy manual pode ser feito com `firebase deploy`.

## Convenções de Desenvolvimento

*   **Baseado em Componentes:** A interface é construída a partir de um conjunto de componentes reutilizáveis localizados em `src/components/` e `src/elements/`.
*   **Componentes Funcionais e Hooks:** O código utiliza exclusivamente componentes funcionais modernos do React com hooks (`useState`, `useEffect`, `useContext`).
*   **Estilização:** O padrão é CSS "utility-first" com Tailwind. Cores e fontes personalizadas são definidas no `tailwind.config.js`.
*   **Gerenciamento de Estado:**
    *   O estado local dos componentes é gerenciado com `useState`.
    *   O estado global (como o usuário logado) é gerenciado com o React Context. O `LoginContext` fornece as informações do usuário para toda a aplicação.
*   **Busca de Dados:** Operações assíncronas e a comunicação com o Firestore são tratadas no arquivo `src/services/firestoreService.js`. Isso mantém a lógica de dados separada dos componentes da interface.
*   **Variáveis de Ambiente:** As chaves de configuração do Firebase devem estar em um arquivo `.env`, prefixadas com `REACT_APP_`. Elas são injetadas durante o processo de build.