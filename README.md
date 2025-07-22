# react-form-test

Repositório exemplo que trabalha com formulários em React, aplicando validação de Schema em Zod, exibição de dados incorretos e utilização de dados forncecidos por vários componentes.

## Sobre

Este projeto contém uma aplicação React simples focada em um formulário de cálculo (CalculatorForm) com validação e exibição dos dados de entrada e resultado.
O objetivo principal do repositório é exemplificar uso de técnicas básicas de React no tocante à input e manipulação de dados por usuário.

## Como funciona o formulário

Imagine que o formulário é como um assistente amigável que recebe as informações do usuário, como o valor do empréstimo desejado, a quantidade de parcelas e a data de nascimento. Ele processa esses dados com base em regras de negócia fornecidas, disponibilizando um 'Plano de Pagamento', com parcelas, valores e juros aplicados.

## Tecnologias utilizadas

- React 18+
- TypeScript
- Vitest
- React Testing Library
- Faker (para geração de dados de teste)
- ESLint + Prettier (padrões de lint e formatação)
- Vite (ferramenta para bundling e desenvolvimento)

## Como está estruturado

A estrutura do projeto segue uma abordagem modularizada por domínio funcional, inspirada nos princípios de Domain-Driven Design (DDD) aplicados ao frontend. Isso permite maior escalabilidade, facilidade de manutenção e isolamento para testes.

### modules/calculator/

Este módulo representa o domínio de empréstimos. Ele encapsula:

- Componentes específicos (CalculatorForm, CalculatorModule, CalculatorResultDisplay)

- Tipagens e lógicas relacionadas à entrada e ao cálculo do empréstimo

- Testes unitários organizados por componente

Essa separação facilita a eventual inclusão de outros módulos, como modules/simulation ou modules/user, sem misturar responsabilidades.

### components/

Contém componentes reutilizáveis ou mais genéricos, como FormInput, que podem ser usados em múltiplos domínios. Isso reforça a separação entre componentes de domínio e componentes utilitários.

### test-utils/

Utilizado para agrupar fábricas e helpers de teste, como createCalculatorFormData. Isso segue o padrão de testes baseados em fábrica e facilita testes previsíveis e reutilizáveis.

## Funcionalidades principais

- Formulário para entrada dos dados do empréstimo: valor, quantidade de parcelas, data de nascimento.
- Validação básica dos dados do formulário.
- Exibição dos dados inseridos em formato amigável.
- Cálculo simulado de parcelas e resultado, com exibição ao usuário.
- Testes cobrindo mudança de inputs, validação, submissão e exibição dos dados.

## Convenção para commits

Este projeto utiliza o padrão **Conventional Commits** para manter o histórico organizado e compreensível.

Aqui estão alguns exemplos do padrão:

- `feat: Adicionar validação no formulário de empréstimo`
- `fix: Corrigir cálculo incorreto das parcelas`
- `docs: Atualizar README com instruções de teste`
- `chore: Atualizar dependências do projeto`

Recomenda-se que todos os commits sigam essa convenção para facilitar a manutenção, leitura e automação do projeto.

## Como rodar localmente

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

3. Inicie o ambiente de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

## Rodando os testes

Para executar os testes com Vitest e React Testing Library:

```bash
npm run test
# ou
yarn test
```
