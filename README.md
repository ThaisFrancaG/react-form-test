# react-form-test

Repositório exemplo que trabalha com formulários em React, aplicando validação de Schema em Zod, exibição de dados incorretos e utilização de dados fornecidos por vários componentes.

## Sobre

Este projeto contém uma aplicação React simples focada em um formulário de cálculo (CalculatorForm) com validação e exibição dos dados de entrada e resultado.  
O objetivo principal do repositório é exemplificar uso de técnicas básicas de React no tocante à input e manipulação de dados pelo usuário, com foco em escalabilidade e qualidade de código.

## Tech Stack

- **Framework**: React 18+
- **Bundler / Dev Server**: Vite
- **Linguagem**: TypeScript
- **Validação de Schema**: Zod
- **Estilização**: Styled‑Components
- **Formatação Numérica**: react‑number‑format
- **Gestão de Rotas**: react‑router‑dom
- **Testes Unitários**: Vitest + React Testing Library
- **Geração de Dados de Teste**: Faker.js
- **Documentação de Tipos**: Typedoc
- **Ferramentas de Qualidade de Código**:
  - ESLint + @typescript-eslint + eslint‑config‑prettier + eslint‑plugin‑prettier
  - Prettier
  - Husky + lint‑staged (pré‑commit)
  - Commitlint (Conventional Commits)
- **Deploy**: GitHub Pages

## Princípios de Arquitetura

O projeto segue **abordagem modular por domínio**, inspirada em **Domain‑Driven Design (DDD)**, e adota também padrões SOLID:

1. **Módulos de Domínio**
   - Cada feature (ex: `modules/calculator`) tem seus componentes, lógicas de negócio, schemas e testes isolados.
2. **Separação de Responsabilidades (SRP)**
   - Handlers de input, validação e formatação estão desacoplados em `handlers/` e `utils/`.
3. **Componentes Reutilizáveis**
   - `components/` abriga elementos genéricos (inputs, botões, layouts) que podem ser compartilhados entre módulos.
4. **Teste em Camadas**
   - Testes unitários (`Vitest`) no nível de funções e componentes.
5. **Documentação Automatizada**
   - Comentários JSDoc + Typedoc para gerar site estático de documentação de API/TIPOS em `docs/`.

> Para mais comentários sobre decisões de design e requisitos de projeto, veja nossa página no Notion:  
> 🔗[Notion Projeto Formulário De Empréstimo](https://sedate-flyingfish-3db.notion.site/Creditas-Engenharia-FrontEnd-234cee428d5c80bbbcf1def4bf9cd900)

## Funcionalidades Principais

- **Formulário de Empréstimo**
  - Valor do empréstimo (mascarado em BRL)
  - Quantidade de parcelas (1–120)
  - Data de nascimento (DD/MM/YYYY)
- **Validação em Tempo Real**
  - Zod para validar formato e limites por campo
- **Exibição de Erros Dinâmica**
  - Mensagens de erro exibidas à medida que o usuário digita
- **Cálculo de Juros e Plano de Pagamento**
  - Handler que processa dados e retorna `PaymentDetails`
- **Testes Automatizados**
  - Unitários: fluxo de input, validação e exibição

## Como Rodar Localmente

### Requisitos Mínimos

- Node.js ≥ 18
- npm ≥ 9 ou Yarn ≥ 1.22
- Git ≥ 2.30

### Passos

1. Clone o repositório

```bash
 git clone https://github.com/ThaisFrancaG/react-form-test.git
 cd react-form-test
```

2. Instale as dependências

```bash
 npm install
 # ou
 yarn install
```

3. Inicie o servidor de desenvolvimento

```bash
    npm run dev
    # ou
    yarn dev
```

### Extras

1.Rodando os Testes

1.1. Unitários (Vitest + RTL)

```bash
npm run test        # executa e encerra
npm run test:watch  # modo watch
npm run test:coverage  # reporta cobertura
```

2. Documentação de Tipos

```bash
    npm run docs        # gera HTML em ./docs
```

3. Lint & Formatação & Commits

- Pré‑commit automático: ESLint + Prettier
- Convention Commits validado por Commitlint

Deploy

Este projeto está configurado para deploy no GitHub Pages:

```bash
npm run deploy
```

O build é gerado em dist/ e publicado na branch gh-pages.
