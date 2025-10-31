# Documentação do Projeto: Chamados Internos

## 1. Descrição Geral

O projeto **Chamados Internos** é um sistema de gerenciamento de tickets desenvolvido para uso interno. Ele permite a abertura e acompanhamento de chamados, visualização de dados em dashboards, e possui uma seção de documentação integrada. A aplicação foi construída com React e utiliza o Firebase como backend.

## 2. Tecnologias Utilizadas

A seguir estão as principais tecnologias e bibliotecas usadas no desenvolvimento:

-   **Frontend:**
    -   [React](https://react.dev/) (v19.1.1)
    -   [React Router](https://reactrouter.com/) (v7.9.1) para gerenciamento de rotas.
-   **Backend & Banco de Dados:**
    -   [Firebase](https://firebase.google.com/): Utilizado para autenticação, banco de dados (Firestore) e hosting.
-   **Estilização:**
    -   [Tailwind CSS](https://tailwindcss.com/) (v3.4.17)
    -   [Material Tailwind](https://www.material-tailwind.com/)
    -   [Flowbite React](https://www.flowbite-react.com/)
-   **Visualização de Dados:**
    -   [@mui/x-charts](https://mui.com/x/react-charts/): Para a criação de gráficos e relatórios.
-   **Gerenciamento de Estado:**
    -   React Context API: Utilizado para gerenciar o estado de login (`LoginContext`) e tema (`DarkModeContext`).
-   **Utilitários:**
    -   `html2canvas`, `jspdf`, `react-to-print`: Para exportar relatórios e outros dados para imagem ou PDF.
    -   `react-toastify`: Para exibir notificações.
    -   `sweetalert2`: Para alertas e modais customizados.

## 3. Estrutura de Pastas

A estrutura do projeto está organizada da seguinte forma:

```
chamados-internos/
├── build/                # Arquivos de produção gerados pelo build
├── public/               # Arquivos estáticos (index.html, ícones)
├── src/
│   ├── components/       # Componentes reutilizáveis da aplicação
│   ├── context/          # Contextos da aplicação (Login, DarkMode)
│   ├── elements/         # Elementos de UI específicos
│   ├── imgs/             # Imagens e assets
│   ├── services/         # Lógica de interação com o Firebase (Firestore)
│   ├── utils/            # Funções utilitárias
│   ├── App.jsx           # Componente principal que renderiza as rotas
│   ├── firebase.js       # Configuração e inicialização do Firebase
│   └── routes.jsx        # Definição das rotas da aplicação
├── .github/              # Workflows de CI/CD para deploy no Firebase
├── firebase.json         # Configurações do Firebase Hosting
├── package.json          # Dependências e scripts do projeto
└── tailwind.config.js    # Arquivo de configuração do Tailwind CSS
```

## 4. Como Iniciar o Projeto

### Pré-requisitos

-   [Node.js](https://nodejs.org/) (versão 16 ou superior)
-   [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/jp066/chamados-internos.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd chamados-internos
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```

### Execução

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

```bash
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

## 5. Scripts Disponíveis

Os seguintes scripts estão disponíveis no `package.json`:

-   `npm start`: Inicia a aplicação em modo de desenvolvimento.
-   `npm build`: Gera a versão de produção da aplicação na pasta `build/`.
-   `npm test`: Executa os testes automatizados.
-   `npm eject`: Ejeta a configuração do Create React App (ação irreversível).

## 6. Funcionalidades Principais
439657
-   **Autenticação:** Login de usuários integrado com o Firebase Authentication.
-   **Dashboard de Chamados:** Painel principal para visualização e gerenciamento de tickets.
-   **Relatórios:** Geração de gráficos simples e filtrados para análise de dados dos chamados.
-   **Documentação:** Seção interna com documentação sobre a integração do sistema.
-   **Tema Escuro/Claro:** Suporte para alternância de tema.
-   **Exportação:** Funcionalidade para exportar dados e relatórios.

## 7. Deployment

O deploy da aplicação é automatizado através do GitHub Actions e o projeto é hospedado no **Firebase Hosting**.

-   **Pull Request:** Um workflow é ativado para criar um canal de preview no Firebase Hosting para cada PR aberto.
-   **Merge:** Ao fazer o merge para a branch principal (`main` ou `master`), o workflow de deploy atualiza a versão em produção.
