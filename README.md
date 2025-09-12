
# Documentação Técnica - Chamados Internos BrightBee

---

## 1. Visão Geral

O sistema **Chamados Internos BrightBee** é uma aplicação web desenvolvida em React para gestão de chamados internos da equipe de Sistemas. O sistema permite autenticação via Google, controle de acesso restrito, visualização, filtro, atualização e resposta de chamados, com persistência no Firebase Firestore.

---

## 2. Arquitetura do Projeto

### 2.1 Estrutura de Pastas

```
chamados-internos/
│
├── public/                # Arquivos estáticos e manifestos
├── src/                   # Código-fonte principal
│   ├── App.jsx            # Componente raiz
│   ├── firebase.js        # Configuração Firebase
│   ├── global.jsx         # Estilos globais
│   ├── theme.jsx          # Temas claro/escuro
│   ├── components/        # Componentes reutilizáveis
│   ├── services/          # Serviços de integração (ex: Firestore)
│   └── imgs/              # Imagens
├── .env                   # Variáveis de ambiente (NÃO versionar)
├── package.json           # Dependências e scripts
└── tailwind.config.js     # Configuração Tailwind
```

### 2.2 Tecnologias Utilizadas

- React 19+
- Firebase (Auth & Firestore)
- TailwindCSS, Material Tailwind, Flowbite React
- Styled Components
- React Icons
- Jest + React Testing Library

---

## 3. Fluxo de Funcionamento

1. **Login:**
	- Autenticação via Google.
	- Apenas membros autorizados (e-mails específicos) podem acessar o dashboard.
2. **Dashboard:**
	- Visualização de estatísticas (total, abertos, concluídos).
	- Filtros dinâmicos por status.
3. **Chamados:**
	- Listagem detalhada, busca, atualização de status e respostas.
4. **Logout:**
	- Encerrar sessão com segurança.

---

## 4. Componentes Principais

### 4.1 App.jsx
Componente raiz, gerencia autenticação, controle de acesso e renderização condicional do dashboard.

### 4.2 HeaderComponent
Exibe informações do usuário logado e botões de login/logout.

### 4.3 HeroComponent
Banner superior com título e descrição do dashboard.

### 4.4 DashboardComponent
Mostra estatísticas dos chamados (total, abertos, concluídos) e permite filtrar por status.

### 4.5 CardComponent
Exibe detalhes de cada chamado, com busca, expansão de descrição e interação de status.

### 4.6 firestoreService.js
Funções para buscar, atualizar e manipular dados dos chamados no Firestore, além de utilitários de formatação de data e envio de respostas.

---

## 5. Configuração e Execução

### 5.1 Pré-requisitos
- Node.js >= 18.x
- Conta Firebase configurada
- Variáveis de ambiente `.env` preenchidas:

```
REACT_APP_FIREBASE_API_KEY=...
REACT_APP_FIREBASE_AUTH_DOMAIN=...
REACT_APP_FIREBASE_PROJECT_ID=...
REACT_APP_FIREBASE_STORAGE_BUCKET=...
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...
REACT_APP_FIREBASE_APP_ID=...
REACT_APP_MEASUREMENT_ID=...
```

### 5.2 Instalação
```bash
npm install
```

### 5.3 Execução em Desenvolvimento
```bash
npm start
# Acesse http://localhost:3000
```

### 5.4 Build para Produção
```bash
npm run build
```

### 5.5 Deploy Firebase Hosting
```bash
firebase deploy
```

---

## 6. Scripts Disponíveis

- `npm start` — Inicia o servidor de desenvolvimento.
- `npm run build` — Gera build de produção.
- `npm test` — Executa testes automatizados.
- `npm run eject` — Eject do Create React App (irreversível).

---

## 7. Testes

- Utiliza React Testing Library e Jest.
- Testes localizados em `src/App.test.js` e outros arquivos `*.test.js`.

Para rodar os testes:
```bash
npm test
```

---

## 8. Boas Práticas e Observações

- **Segurança:** Nunca versionar `.env` ou arquivos de credenciais.
- **Componentização:** Componentes bem separados e reutilizáveis.
- **Estilização:** Preferência por TailwindCSS, com suporte a styled-components para temas.
- **Acessibilidade:** Utilizar sempre que possível atributos e práticas acessíveis.
- **Comentários:** O código contém comentários explicativos nos pontos principais.

---

## 9. Contribuição

1. Fork o repositório
2. Crie uma branch (`git checkout -b feature/nome-da-feature`)
3. Commit suas alterações (`git commit -am 'feat: nova feature'`)
4. Push para a branch (`git push origin feature/nome-da-feature`)
5. Abra um Pull Request

---

## 10. Licença

Projeto privado e de uso interno BrightBee.
